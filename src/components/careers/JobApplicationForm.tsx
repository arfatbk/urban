'use client';

import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  resumeUrl: string
  coverLetter: string
  yearsOfExperience: string
  currentCompany: string
  noticePeriod: string
}

export default function JobApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Here you would typically send the data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulated API call
      setSubmitted(true)
      reset()
    } catch (error) {
      console.error('Error submitting application:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-md bg-green-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-800">Application submitted successfully</h3>
            <div className="mt-2 text-sm text-green-700">
              <p>Thank you for your application. Our HR team will review it and get back to you soon.</p>
            </div>
            <div className="mt-4">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-sm font-medium text-green-600 hover:text-green-500"
              >
                Submit another application →
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
            First name
          </label>
          <div className="mt-2.5">
            <input
              {...register('firstName', { required: 'First name is required' })}
              type="text"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
            {errors.firstName && (
              <p className="mt-2 text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
            Last name
          </label>
          <div className="mt-2.5">
            <input
              {...register('lastName', { required: 'Last name is required' })}
              type="text"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
            {errors.lastName && (
              <p className="mt-2 text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2.5">
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
            Phone number
          </label>
          <div className="mt-2.5">
            <input
              {...register('phone', { required: 'Phone number is required' })}
              type="tel"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
            {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="resumeUrl" className="block text-sm font-semibold leading-6 text-gray-900">
            Resume URL (Google Drive, Dropbox, etc.)
          </label>
          <div className="mt-2.5">
            <input
              {...register('resumeUrl', { required: 'Resume URL is required' })}
              type="url"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
            {errors.resumeUrl && (
              <p className="mt-2 text-sm text-red-600">{errors.resumeUrl.message}</p>
            )}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="coverLetter" className="block text-sm font-semibold leading-6 text-gray-900">
            Cover Letter
          </label>
          <div className="mt-2.5">
            <textarea
              {...register('coverLetter', { required: 'Cover letter is required' })}
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
            {errors.coverLetter && (
              <p className="mt-2 text-sm text-red-600">{errors.coverLetter.message}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="yearsOfExperience"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Years of Experience
          </label>
          <div className="mt-2.5">
            <input
              {...register('yearsOfExperience', { required: 'Years of experience is required' })}
              type="text"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
            {errors.yearsOfExperience && (
              <p className="mt-2 text-sm text-red-600">{errors.yearsOfExperience.message}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="currentCompany"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Current Company (if any)
          </label>
          <div className="mt-2.5">
            <input
              {...register('currentCompany')}
              type="text"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="noticePeriod"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Notice Period
          </label>
          <div className="mt-2.5">
            <input
              {...register('noticePeriod', { required: 'Notice period is required' })}
              type="text"
              placeholder="e.g., 2 months"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
            {errors.noticePeriod && (
              <p className="mt-2 text-sm text-red-600">{errors.noticePeriod.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </form>
  )
}
