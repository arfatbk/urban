'use client';

import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export interface Job {
  id: string
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract'
  experience: string
  description: string
  requirements: string[]
  responsibilities: string[]
}

interface JobCardProps {
  job: Job
}

export default function JobCard({ job }: JobCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-gray-900/5">
      <div className="p-6">
        <div
          className="flex cursor-pointer items-center justify-between"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div>
            <h3 className="text-lg font-semibold leading-7 text-gray-900">{job.title}</h3>
            <div className="mt-1 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                {job.department}
              </span>
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
                {job.location}
              </span>
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                {job.type}
              </span>
            </div>
          </div>
          <ChevronRightIcon
            className={`h-5 w-5 text-gray-400 transition-transform ${
              isExpanded ? 'rotate-90' : ''
            }`}
          />
        </div>

        {isExpanded && (
          <div className="mt-4 space-y-6 border-t pt-4">
            <div>
              <p className="text-sm leading-6 text-gray-600">{job.description}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold leading-6 text-gray-900">Requirements</h4>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-600">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold leading-6 text-gray-900">Responsibilities</h4>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-600">
                {job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>

            <div>
              <a
                href={`/careers/apply/${job.id}`}
                className="inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Apply for this position
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
