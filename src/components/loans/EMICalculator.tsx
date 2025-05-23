'use client';

import { useState } from 'react'

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(500000)
  const [interestRate, setInterestRate] = useState(10)
  const [loanTenure, setLoanTenure] = useState(12)

  const calculateEMI = () => {
    // Validate loan amount
    if (loanAmount <= 0) {
      return {
        emi: 0,
        totalAmount: 0,
        totalInterest: 0,
        error: 'Loan amount must be greater than 0'
      }
    }
    if (loanAmount > 10000000) {
      return {
        emi: 0,
        totalAmount: 0,
        totalInterest: 0,
        error: 'Loan amount cannot exceed ₹1 Crore'
      }
    }

    // Validate interest rate
    if (interestRate <= 0) {
      return {
        emi: 0,
        totalAmount: 0,
        totalInterest: 0,
        error: 'Interest rate must be greater than 0'
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
    
    const emi =
      (principal *
        ratePerMonth *
        Math.pow(1 + ratePerMonth, tenureInMonths)) /
      (Math.pow(1 + ratePerMonth, tenureInMonths) - 1)
    
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
    <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
      <h3 className="text-base font-semibold leading-7 text-gray-900">EMI Calculator</h3>
      {error && (
        <div className="mt-2 rounded-md bg-red-50 p-3">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}
      <div className="mt-6 space-y-6">
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Loan Amount: ₹
            <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="mt-2 ml-2 inline w-auto rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
                        
          </label>
          
          <input
            type="range"
            min="10000"
            max="1000000"
            step="5000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="mt-2 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Interest Rate: 
            % <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="mt-2 ml-2 inline w-auto rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
          </label>
          <input
            type="range"
            min="5"
            max="18"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="mt-2 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Loan Tenure: {loanTenure} months
          </label>
          <input
            type="range"
            min="1"
            max="60"
            step="1"
            value={loanTenure}
            onChange={(e) => setLoanTenure(Number(e.target.value))}
            className="mt-2 w-full"
          />
        </div>

        <div className="rounded-lg bg-gray-50 p-4">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-sm font-medium leading-6 text-gray-500">Monthly EMI</dt>
              <dd className="mt-1 text-lg font-semibold tracking-tight text-gray-900">
                ₹{emi.toLocaleString()}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium leading-6 text-gray-500">Total Interest</dt>
              <dd className="mt-1 text-lg font-semibold tracking-tight text-gray-900">
                ₹{totalInterest.toLocaleString()}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium leading-6 text-gray-500">Total Amount</dt>
              <dd className="mt-1 text-lg font-semibold tracking-tight text-gray-900">
                ₹{totalAmount.toLocaleString()}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
