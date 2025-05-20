import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export type LoanType = {
  id: string
  title: string
  description: string
  interestRate: string
  maxAmount: string
  tenure: string
  icon: React.ComponentType<{ className?: string }>
}

interface LoanCardProps {
  loan: LoanType
}

export default function LoanCard({ loan }: LoanCardProps) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 p-6 hover:border-gray-300">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
        <loan.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-8 tracking-tight text-gray-900">
        {loan.title}
      </h3>
      <p className="mt-2 text-base leading-7 text-gray-600">{loan.description}</p>
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <div>
          <span className="font-medium text-gray-900">Interest Rate:</span>{' '}
          <span className="text-gray-600">{loan.interestRate}</span>
        </div>
        <div>
          <span className="font-medium text-gray-900">Max Amount:</span>{' '}
          <span className="text-gray-600">{loan.maxAmount}</span>
        </div>
        <div>
          <span className="font-medium text-gray-900">Tenure:</span>{' '}
          <span className="text-gray-600">{loan.tenure}</span>
        </div>
      </div>
      <div className="mt-6">
        <Link
          href={`/loans/${loan.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
        >
          Learn more <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
