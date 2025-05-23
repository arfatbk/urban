import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export type DepositType = {
  id: string
  title: string
  description: string
  interestRate: string
  minAmount: string
  duration: string
  features: string[]
}

interface DepositCardProps {
  deposit: DepositType
}

export default function DepositCard({ deposit }: DepositCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 hover:border-gray-300">
      <div className="flex h-full flex-col p-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{deposit.title}</h3>
          <p className="mt-3 text-base text-gray-500">{deposit.description}</p>
        </div>
        <div className="mt-6 flex items-center gap-x-3">
          <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">Interest Rate</h4>
          <div className="h-px flex-auto bg-gray-100" />
          <p className="flex-none text-sm font-semibold text-gray-900">{deposit.interestRate}</p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-900">Min Amount:</span>{' '}
            <span className="text-gray-600">{deposit.minAmount}</span>
          </div>
          <div>
            <span className="font-medium text-gray-900">Duration:</span>{' '}
            <span className="text-gray-600">{deposit.duration}</span>
          </div>
        </div>
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-gray-900">Features</h4>
          <ul role="list" className="mt-4 space-y-3">
            {deposit.features.map((feature, index) => (
              <li key={index} className="flex gap-x-3 text-sm leading-6 text-gray-600">
                <svg
                  className="h-6 w-6 flex-none text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  )
}
