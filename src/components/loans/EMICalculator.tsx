'use client';

import { useState } from 'react'

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000)
  const [interestRate, setInterestRate] = useState(8.5)
  const [loanTenure, setLoanTenure] = useState(20)

  const calculateEMI = () => {
    const principal = loanAmount
    const ratePerMonth = interestRate / (12 * 100)
    const tenureInMonths = loanTenure * 12
    
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
    }
  }

  const { emi, totalAmount, totalInterest } = calculateEMI()

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
      <h3 className="text-base font-semibold leading-7 text-gray-900">EMI Calculator</h3>
      <div className="mt-6 space-y-6">
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Loan Amount: ₹{loanAmount.toLocaleString()}
          </label>
          <input
            type="range"
            min="100000"
            max="10000000"
            step="100000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="mt-2 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Interest Rate: {interestRate}%
          </label>
          <input
            type="range"
            min="5"
            max="15"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="mt-2 w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Loan Tenure: {loanTenure} years
          </label>
          <input
            type="range"
            min="1"
            max="30"
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
