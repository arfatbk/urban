'use client';

import { useState } from 'react'

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(500000)
  const [interestRate, setInterestRate] = useState(10)
  const [loanTenure, setLoanTenure] = useState(12)

  const calculateEMI = () => {
    // Validate loan amount
    if (loanAmount < 10000) {
      return {
        emi: 0,
        totalAmount: 0,
        totalInterest: 0,
        error: 'Loan amount must be greater than 0'
      }
    }
    if (loanAmount > 1000000) {
      return {
        emi: 0,
        totalAmount: 0,
        totalInterest: 0,
        error: 'Loan amount cannot exceed ₹1000000'
      }
    }
    // Validate interest rate
    if (interestRate <= 4) {
      return {
        emi: 0,
        totalAmount: 0,
        totalInterest: 0,
        error: 'Interest rate must be between 5%-20%'
      }
    }
    if (interestRate > 20) {
      return {
        emi: 0,
        totalAmount: 0,
        totalInterest: 0,
        error: 'Interest rate cannot exceed 20%'
      }
    }
    // Validate loan tenure
    if (loanTenure < 1) {
      return {
        emi: 0,
        totalAmount: 0,
        totalInterest: 0,
        error: 'Loan tenure must be at least 1 month'
      }
    }
    if (loanTenure > 360) {
      return {
        emi: 0,
        totalAmount: 0,
        totalInterest: 0,
        error: 'Loan tenure cannot exceed 360 months (30 years)'
      }
    }

    const principal = loanAmount
    const ratePerMonth = interestRate / (12 * 100)
    const tenureInMonths = loanTenure

    const emi = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, tenureInMonths)) / (Math.pow(1 + ratePerMonth, tenureInMonths) - 1)
    const totalAmount = emi * tenureInMonths
    const totalInterest = totalAmount - principal

    return {
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      error: ''
    }
  }

  const { emi, totalAmount, totalInterest, error } = calculateEMI()

  return (
    <div className="space-y-8">
      {/* Inputs Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Loan Amount Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Loan Amount: ₹{loanAmount.toLocaleString()}
          </label>
          <input
            type="range"
            min="10000"
            max="1000000"
            step="10000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full py-2 h-2 bg-gray-200 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>₹10,000</span>
            <span>₹10 Lakh</span>
          </div>
        </div>

        {/* Interest Rate Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Interest Rate: {interestRate}% p.a.
          </label>
          <input
            type="range"
            min="5"
            max="20"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full py-2 h-2 bg-gray-200 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>5%</span>
            <span>20%</span>
          </div>
        </div>

        {/* Loan Tenure Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Loan Tenure: {loanTenure} months
          </label>
          <input
            type="range"
            min="1"
            max="240"
            step="1"
            value={loanTenure}
            onChange={(e) => setLoanTenure(Number(e.target.value))}
            className="w-full py-2 h-2 bg-gray-200 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>1 month</span>
            <span>20 years</span>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {error ? (
        <div className="rounded-lg bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">Error</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 shadow-md">
            <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white/10 blur-2xl"></div>
            <div className="relative">
              <p className="text-sm font-medium text-blue-200">Monthly EMI</p>
              <p className="mt-2 text-3xl font-bold text-white">₹{emi.toLocaleString()}</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-200/70">
            <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-blue-50 blur-2xl"></div>
            <div className="relative">
              <p className="text-sm font-medium text-gray-600">Total Interest</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">₹{totalInterest.toLocaleString()}</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-200/70">
            <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-blue-50 blur-2xl"></div>
            <div className="relative">
              <p className="text-sm font-medium text-gray-600">Total Amount</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">₹{totalAmount.toLocaleString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
