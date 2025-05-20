import Link from 'next/link'

export default function HeroBanner() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        {/* <Image
          src={'/hero-image.png'}
          alt="Banking services"
          fill
          className="object-cover"
          priority
        /> */}
        <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mx-auto">
          Empowering Dreams,
          <br />
          Building Futures
        </h1>
        <p className="mt-6 max-w-xl text-xl text-gray-300 mx-auto">
          Your trusted partner in financial growth. We provide comprehensive banking solutions
          tailored to your needs.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/loans"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Explore Loans
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-white">
            Contact Us <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
