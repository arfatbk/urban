import { HomeIcon, BanknotesIcon } from '@heroicons/react/24/outline'

const loanDetails = {
  personal: {
    title: 'Personal Loan',
    description: 'Quick and hassle-free personal loans with minimal documentation',
    icon: BanknotesIcon,
    features: [
      'Loan amount up to ₹10 Lakhs',
      'Attractive interest rates starting from 10.75% p.a.',
      'Flexible repayment options from 12 to 60 months',
      'Minimal documentation required',
      'Quick processing and disbursement',
      'No collateral/security required',
      'No hidden charges',
    ],
    eligibility: [
      'Age: 21-58 years',
      'Minimum income: ₹20,000 per month',
      'Employment: Salaried individuals with minimum 2 years of work experience',
      'Good credit score (700+)',
      'Indian resident',
    ],
    documents: [
      'Completed loan application form',
      'Recent passport size photographs',
      'KYC documents (Aadhaar, PAN, etc.)',
      'Last 6 months bank statements',
      'Latest 3 months salary slips',
      'Form 16 or IT returns for last 2 years',
    ],
  },
  home: {
    title: 'Home Loan',
    description: 'Make your dream home a reality with our affordable home loans',
    icon: HomeIcon,
    features: [
      'Loan amount up to ₹1 Crore',
      'Competitive interest rates starting from 8.50% p.a.',
      'Long repayment tenure up to 30 years',
      'Quick approval process',
      'Free property legal verification',
      'Transparent processing',
      'Balance transfer facility available',
    ],
    eligibility: [
      'Age: 21-65 years',
      'Minimum income: ₹30,000 per month',
      'Employment: Salaried/Self-employed with stable income',
      'Good credit score (700+)',
      'Property should be legally clear',
      'Indian resident',
    ],
    documents: [
      'Completed loan application form',
      'Recent passport size photographs',
      'KYC documents (Aadhaar, PAN, etc.)',
      'Last 6 months bank statements',
      'Latest 3 months salary slips/Business financials',
      'Form 16 or IT returns for last 2 years',
      'Property documents',
      'Property valuation report',
    ],
  },
}

export async function generateStaticParams() {
  return [
    { type: 'personal' },
    { type: 'home' },
  ]
}

type LoanType = keyof typeof loanDetails;

export default async function LoanTypePage({
  params,
}: {
  params: Promise<{ type: LoanType }>;
}) {
  const { type } = await params
  const loan = loanDetails[type]

  if (!loan) {
    return <div>Loan type not found</div>
  }

  return (
    <div className="bg-white">
      {/* Hero section with gradient background */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-blue-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <loan.icon className="h-12 w-12 text-white" aria-hidden="true" />
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {loan.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {loan.description}
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-blue-400 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-20">
            {/* Overview Section */}
            <div>
              <div className="flex items-center gap-x-4">
                <div className="w-20 h-1 bg-blue-600 rounded"></div>
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Overview</h2>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <div className="relative">
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">Interest Rate</h3>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-blue-600">
                      {type === 'personal' ? '10.75% p.a.' : '8.50% p.a.'}
                    </p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <div className="relative">
                    <h3 className="text-lg font-semibold leading-8 text-gray-900">Max Amount</h3>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-blue-600">
                      {type === 'personal' ? '₹10 Lakhs' : '₹20 Lakhs'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div>
              <div className="flex items-center gap-x-4">
                <div className="w-20 h-1 bg-blue-600 rounded"></div>
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Key Features</h2>
              </div>
              <ul role="list" className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {loan.features.map((feature, index) => (
                  <li key={index} className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200/70 transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-blue-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                    <div className="relative flex items-center gap-x-4">
                      <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      <p className="text-sm leading-6 text-gray-600">{feature}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility Section */}
            <div>
              <div className="flex items-center gap-x-4">
                <div className="w-20 h-1 bg-blue-600 rounded"></div>
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Eligibility</h2>
              </div>
              <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200/70">
                <div className="px-6 py-8">
                  <ul role="list" className="space-y-4">
                    {loan.eligibility.map((criteria, index) => (
                      <li key={index} className="flex gap-x-3 text-base leading-7 text-gray-600">
                        <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
                          ✓
                        </span>
                        {criteria}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Documents Required Section */}
            <div>
              <div className="flex items-center gap-x-4">
                <div className="w-20 h-1 bg-blue-600 rounded"></div>
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Required Documents</h2>
              </div>
              <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 shadow-xl">
                <div className="px-6 py-8 sm:p-10">
                  <ul role="list" className="space-y-4">
                    {loan.documents.map((doc, index) => (
                      <li key={index} className="flex gap-x-3 text-base leading-7 text-white">
                        <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/10 text-white">
                          {index + 1}
                        </span>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
