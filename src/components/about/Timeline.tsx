const timeline = [
  {
    year: '1995',
    title: 'Foundation',
    description:
      'Urban Bank was established with a vision to serve the local community.',
  },
  {
    year: '2000',
    title: 'Digital Banking',
    description:
      'Launched our first digital banking services, bringing modern banking solutions to our customers.',
  },
  {
    year: '2005',
    title: 'Expansion',
    description:
      'Expanded our presence with 10 new branches across the region.',
  },
  {
    year: '2010',
    title: 'Mobile Banking',
    description:
      'Introduced mobile banking services for seamless banking on the go.',
  },
  {
    year: '2015',
    title: 'Award Recognition',
    description:
      'Received multiple awards for excellence in banking services and customer satisfaction.',
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description:
      'Complete digital transformation with advanced online and mobile banking platforms.',
  },
  {
    year: '2025',
    title: 'Innovation Hub',
    description:
      'Launched innovation hub to develop next-generation banking solutions.',
  },
]

export default function Timeline() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Journey
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            A timeline of milestones that have shaped our growth and commitment to excellence.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="relative">
            {/* Line running down the middle */}
            <div
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-200"
              aria-hidden="true"
            />

            <div className="relative space-y-8">
              {timeline.map((item, itemIdx) => (
                <div
                  key={item.year}
                  className={`flex items-center ${
                    itemIdx % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`flex w-full max-w-xl ${
                      itemIdx % 2 === 0 ? 'flex-row pr-4' : 'flex-row-reverse pl-4'
                    } items-center gap-8`}
                  >
                    <div
                      className={`w-full rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5 ${
                        itemIdx % 2 === 0 ? 'text-right' : 'text-left'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-x-4 text-base">
                        <time
                          dateTime={item.year}
                          className="text-lg font-semibold leading-6 text-blue-600"
                        >
                          {item.year}
                        </time>
                        <div className="font-semibold leading-6 text-gray-900">
                          {item.title}
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
                    </div>
                    <div className="relative flex h-6 w-6 flex-none items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 ring-1 ring-blue-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
