
import { RocketLaunchIcon, ScaleIcon, HeartIcon } from '@heroicons/react/24/outline'

const values = [
  {
    name: 'Mission',
    description:
      'To empower individuals and businesses by providing accessible, innovative financial solutions while maintaining the highest standards of service and integrity.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Vision',
    description:
      'To be the most trusted and preferred financial institution, fostering economic growth and prosperity in our community.',
    icon: ScaleIcon,
  },
  {
    name: 'Values',
    description:
      'We are committed to integrity, transparency, and excellence in all our dealings, putting our customers\' interests first.',
    icon: HeartIcon,
  },
]

export default function MissionVision() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 to-white py-24 sm:py-32">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1d4ed8] to-[#93c5fd] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10 mb-6">
                Our Purpose
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Our Mission & Vision
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Building a stronger financial future for our community through trust, innovation, and excellence.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} className="relative group bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-900/5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <dt className="flex items-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 group-hover:bg-blue-500 transition-colors">
                    <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="text-xl font-semibold leading-7 text-gray-900">{value.name}</div>
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
