import { HomeIcon, BanknotesIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

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

interface PageProps {
  params: {
    type: keyof typeof loanDetails;
  };
}

export default function LoanTypePage({ params }: PageProps) {
  const loan = loanDetails[params.type]

  if (!loan) {
    return <div>Loan type not found</div>
  }

  return (
    <div className="bg-white">
      <div className="relative h-[200px] bg-blue-600">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{loan.title}</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-16">
            {/* Overview Section */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Overview</h2>
              <p className="mt-6 text-base leading-7 text-gray-600">{loan.description}</p>
            </div>

            {/* Features Section */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Key Features</h2>
              <ul role="list" className="mt-6 space-y-3">
                {loan.features.map((feature, index) => (
                  <li key={index} className="flex gap-x-3 text-base leading-7 text-gray-600">
                    <span className="select-none text-blue-600">→</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility Section */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Eligibility</h2>
              <ul role="list" className="mt-6 space-y-3">
                {loan.eligibility.map((criteria, index) => (
                  <li key={index} className="flex gap-x-3 text-base leading-7 text-gray-600">
                    <span className="select-none text-blue-600">→</span>
                    {criteria}
                  </li>
                ))}
              </ul>
            </div>

            {/* Documents Section */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Required Documents</h2>
              <ul role="list" className="mt-6 space-y-3">
                {loan.documents.map((document, index) => (
                  <li key={index} className="flex gap-x-3 text-base leading-7 text-gray-600">
                    <span className="select-none text-blue-600">→</span>
                    {document}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Section */}
            <div className="rounded-2xl bg-blue-50 p-8">
              <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                Ready to Apply?
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Get in touch with us to start your loan application process. Our team will guide you
                through every step.
              </p>
              <div className="mt-6 flex gap-x-6">
                <a
                  href="/contact"
                  className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Contact Us
                </a>
                {/* <a
                  href="#"
                  className="rounded-md border border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Download Application Form
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
