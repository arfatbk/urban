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
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200/50 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
      <div className="relative flex h-full flex-col p-8">
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 ring-1 ring-blue-600/10 shadow-md">
          <loan.icon className="h-7 w-7 text-white" aria-hidden="true" />
        </div>

        {/* Title and Description */}
        <h3 className="mt-6 text-xl font-semibold leading-8 tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
          {loan.title}
        </h3>
        <p className="mt-2 text-base leading-7 text-gray-600">{loan.description}</p>

        {/* Stats Grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
          <div className="relative overflow-hidden rounded-xl bg-gray-50/80 p-4">
            <div className="font-medium text-gray-900">Interest Rate</div>
            <div className="mt-1 text-blue-600 font-semibold text-lg">{loan.interestRate}</div>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-gray-50/80 p-4">
            <div className="font-medium text-gray-900">Max Amount</div>
            <div className="mt-1 text-blue-600 font-semibold text-lg">{loan.maxAmount}</div>
          </div>
        </div>

        {/* Tenure */}
        <div className="mt-4 rounded-xl bg-gray-50/80 p-4">
          <div className="font-medium text-gray-900">Tenure</div>
          <div className="mt-1 text-gray-600">{loan.tenure}</div>
        </div>

        {/* Link */}
        <Link
          href={`/loans/${loan.id}`}
          className="group/link mt-8 flex items-center gap-2 text-sm font-semibold leading-6 text-blue-600 transition-colors hover:text-blue-500"
        >
          Learn more
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
