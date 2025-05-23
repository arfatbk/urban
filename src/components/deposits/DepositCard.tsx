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
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-200 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
      <div className="relative flex h-full flex-col p-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{deposit.title}</h3>
          <p className="mt-3 text-base text-gray-500">{deposit.description}</p>
        </div>
        <div className="mt-8 flex items-center gap-x-3">
          <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">Interest Rate</h4>
          <div className="h-px flex-auto bg-gray-100" />
          <p className="flex-none text-lg font-semibold text-blue-600">{deposit.interestRate}</p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-6 text-sm">
          <div className="rounded-lg bg-gray-50 p-4">
            <span className="block font-medium text-gray-900 mb-1">Min Amount</span>
            <span className="text-gray-600">{deposit.minAmount}</span>
          </div>
          <div className="rounded-lg bg-gray-50 p-4">
            <span className="block font-medium text-gray-900 mb-1">Duration</span>
            <span className="text-gray-600">{deposit.duration}</span>
          </div>
        </div>
        <div className="mt-8 flex-grow">
          <h4 className="text-sm font-semibold text-gray-900 flex items-center gap-x-2">
            <div className="h-1 w-6 bg-blue-600 rounded"></div>
            Features
          </h4>
          <ul role="list" className="mt-4 space-y-3">
            {deposit.features.map((feature, index) => (
              <li key={index} className="flex gap-x-3 text-sm leading-6 text-gray-600">
                <span className="flex-none font-semibold text-blue-600">→</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100">
          <Link 
            href="/contact" 
            className="group/link flex items-center justify-between text-sm font-semibold text-blue-600"
          >
            Learn More 
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
