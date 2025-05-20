import DepositCard, { DepositType } from '@/components/deposits/DepositCard'

const deposits: DepositType[] = [
  {
    id: 'fixed-deposit',
    title: 'Fixed Deposit',
    description:
      'Earn guaranteed returns with our fixed deposit schemes. Choose from flexible tenures and competitive interest rates.',
    interestRate: 'Up to 7.50% p.a.',
    minAmount: '₹10,000',
    duration: '6 months to 10 years',
    features: [
      'Higher interest rates for senior citizens',
      'Auto-renewal facility available',
      'Loan facility against FD',
      'Monthly interest payout option',
      'Premature withdrawal facility',
    ],
  },
  {
    id: 'recurring-deposit',
    title: 'Recurring Deposit',
    description:
      'Build your savings with regular monthly deposits. Perfect for achieving your financial goals.',
    interestRate: 'Up to 7.00% p.a.',
    minAmount: '₹500/month',
    duration: '6 months to 10 years',
    features: [
      'Flexible monthly deposit amounts',
      'Standing instruction facility',
      'Higher returns than savings account',
      'Goal-based savings plan',
      'Partial withdrawal facility',
    ],
  },
  {
    id: 'tax-saver-fd',
    title: 'Tax Saver Fixed Deposit',
    description:
      'Save tax while earning higher returns. Get tax benefits under Section 80C of Income Tax Act.',
    interestRate: 'Up to 7.25% p.a.',
    minAmount: '₹1,00,000',
    duration: '5 years (lock-in)',
    features: [
      'Tax deduction under Section 80C',
      'Higher interest rates',
      'Safe and secure investment',
      'Available for individuals and HUFs',
      'No premature withdrawal',
    ],
  },
  {
    id: 'senior-citizen-fd',
    title: 'Senior Citizen Fixed Deposit',
    description:
      'Special fixed deposit scheme for senior citizens with higher interest rates and additional benefits.',
    interestRate: 'Up to 8.00% p.a.',
    minAmount: '₹10,000',
    duration: '6 months to 10 years',
    features: [
      'Additional 0.50% interest rate',
      'Monthly interest payout option',
      'Nomination facility',
      'Auto-renewal facility',
      'Doorstep banking services',
    ],
  },
]

export default function DepositsPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Deposit Products
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Grow your wealth with our range of deposit products. We offer competitive interest rates
            and flexible terms to help you achieve your financial goals.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {deposits.map((deposit) => (
            <DepositCard key={deposit.id} deposit={deposit} />
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-2xl bg-blue-50 p-8 ring-1 ring-inset ring-blue-100 lg:mx-0 lg:max-w-none">
          <div className="text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-900">
              Looking for something specific?
            </h2>
            <p className="mt-2 text-sm leading-6 text-blue-700">
              Our financial experts are here to help you choose the right deposit product.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Contact Us
              </a>
              <a href="/branches" className="text-sm font-semibold leading-6 text-blue-900">
                Find a Branch <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
