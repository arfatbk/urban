import {
  BanknotesIcon,
  BuildingLibraryIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const features = [
  {
    name: 'Personal Loans',
    description: 'Quick and hassle-free personal loans with competitive interest rates.',
    icon: BanknotesIcon,
    href: '/loans#personal',
  },
  {
    name: 'Fixed Deposits',
    description: 'Secure your future with our high-yield fixed deposit schemes.',
    icon: BuildingLibraryIcon,
    href: '/deposits#fixed',
  },

  {
    name: 'Savings Account',
    description: 'Start your savings journey with our feature-rich savings accounts.',
    icon: UserGroupIcon,
    href: '/deposits',
  },
]

export default function QuickLinks() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl lg:text-center">
					<div className="flex justify-center">
						<div className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10 animate-fade-in">
							Banking Made Simple
						</div>
					</div>
					<p className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl animate-title">
						Everything you need to manage your finances
					</p>
					<p className="mt-6 text-lg leading-8 text-gray-600 animate-fade-in-delayed">
						Discover our range of banking products and services designed to meet your financial goals.
					</p>
				</div>


        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <Link key={feature.name} href={feature.href} className="group">
                <div className="flex flex-col transition-all duration-200 hover:scale-105">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon
                      className="h-5 w-5 flex-none text-blue-600 group-hover:text-blue-500"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              </Link>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
