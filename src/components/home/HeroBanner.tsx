import Link from 'next/link'

export default function HeroBanner() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950">
      {/* Decoration */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1d4ed8] to-[#93c5fd] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pb-20 pt-8 sm:pb-24 lg:flex lg:px-8 lg:pt-8">
        <div className="mx-auto max-w-3xl text-center lg:text-left flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <a href="/about" className="inline-flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-200 ring-1 ring-inset ring-blue-500/20">
                Urban Bank
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium text-blue-200">
                <span>Explore Our Story</span>
                <svg className="h-5 w-5 text-blue-300 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </span>
            </a>
          </div>
          <h1 className="mt-8 sm:mt-10 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white lg:text-6xl">
            Empowering Dreams,
            <span className="block mt-2 sm:mt-4">Building Futures</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-blue-100 max-w-lg mx-auto lg:mx-0">
            Your trusted partner in financial growth. We provide comprehensive banking solutions
            tailored to your needs.
          </p>  
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-x-6">
            <Link
              href="/loans"
              className="rounded-md bg-blue-500 w-full sm:w-auto px-5 py-3 sm:px-3.5 sm:py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 transition-all duration-200"
            >
              Explore Loans
            </Link>
            <Link 
              href="/contact" 
              className="group text-sm font-semibold text-white w-full sm:w-auto text-center sm:text-left"
            >
              Contact Us <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
            </Link>
          </div>
        </div>


      </div>

      {/* Bottom decoration */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1d4ed8] to-[#93c5fd] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
      </div>
  )
}
