
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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Mission & Vision
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Building a stronger financial future for our community through trust, innovation, and excellence.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} className="relative">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="ml-16 text-lg">{value.name}</div>
                </dt>
                <dd className="mt-2 ml-16 text-base leading-7 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
