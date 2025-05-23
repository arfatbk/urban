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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Banking Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for your banking needs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Access a wide range of banking services designed to make your financial transactions smooth and convenient.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
