'use client';

import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'

export interface Branch {
  id: string
  name: string
  address: string
  phone: string
  hours: string
}

interface BranchCardProps {
  branch: Branch
  onClick?: () => void
  isActive?: boolean
}

export default function BranchCard({ branch, onClick, isActive }: BranchCardProps) {
  return (
    <div
      className={`${
        isActive ? 'ring-2 ring-blue-600' : 'ring-1 ring-gray-200'
      } rounded-lg bg-white p-6 shadow-sm hover:ring-2 hover:ring-blue-600 cursor-pointer transition-all`}
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold text-gray-900">{branch.name}</h3>
      <dl className="mt-4 space-y-4">
        <div className="flex gap-x-3">
          <dt className="flex-none">
            <span className="sr-only">Address</span>
            <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </dt>
          <dd className="text-sm leading-6 text-gray-600">{branch.address}</dd>
        </div>
        <div className="flex gap-x-3">
          <dt className="flex-none">
            <span className="sr-only">Phone number</span>
            <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </dt>
          <dd>
            <a href={`tel:${branch.phone}`} className="text-sm leading-6 text-blue-600 hover:text-blue-500">
              {branch.phone}
            </a>
          </dd>
        </div>
        <div className="flex gap-x-3">
          <dt className="flex-none">
            <span className="sr-only">Hours</span>
            <ClockIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </dt>
          <dd className="text-sm leading-6 text-gray-600">{branch.hours}</dd>
        </div>
      </dl>
    </div>
  )
}
