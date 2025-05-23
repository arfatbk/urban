import { DevicePhoneMobileIcon, HomeModernIcon, BanknotesIcon, ArrowPathIcon, ClockIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Mobile Banking',
    description: 'Bank on the go with our secure mobile banking app',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Doorstep Banking',
    description: 'Banking services delivered right to your doorstep',
    icon: HomeModernIcon,
  },
  {
    name: 'NEFT',
    description: 'National Electronic Funds Transfer for seamless money transfers',
    icon: BanknotesIcon,
  },
  {
    name: 'RTGS',
    description: 'Real-Time Gross Settlement for instant high-value transfers',
    icon: ArrowPathIcon,
  },
  {
    name: 'IMPS',
    description: 'Immediate Payment Service for instant fund transfers 24/7',
    icon: ClockIcon,
  },
  {
    name: 'Demand Draft',
    description: 'Quick and reliable demand draft issuance services',
    icon: DocumentTextIcon,
  },
]

export default function Services() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1d4ed8] to-[#93c5fd] opacity-30"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="flex justify-center">
            <div className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
              Banking Services
            </div>
          </div>
          <p className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Everything you need for your banking needs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Access a wide range of banking services designed to make your financial transactions smooth and convenient.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="relative group">
                <div className="absolute -inset-4 rounded-lg bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex flex-col">
                  <dt className="flex items-center gap-x-3">
                    <div className="rounded-lg bg-blue-600 p-2 ring-1 ring-blue-600/10">
                      <service.icon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
                    </div>
                    <span className="text-lg font-semibold leading-7 text-gray-900">{service.name}</span>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto group-hover:text-gray-900 transition-colors">{service.description}</p>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
