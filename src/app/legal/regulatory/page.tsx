export default function RegulatoryPage() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Regulatory Information</h1>
        <div className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">1. Banking License</h2>
          <p>
            Urban Bank is licensed and regulated by the Reserve Bank of India (RBI) as a banking
            institution. Our banking license number is [License Number].
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">2. Deposit Insurance</h2>
          <p>
            Deposits with Urban Bank are insured by the Deposit Insurance and Credit Guarantee
            Corporation (DICGC) up to ₹5 lakhs per depositor.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">3. Compliance</h2>
          <p>
            We comply with all applicable banking regulations, including Know Your Customer (KYC)
            norms, Anti-Money Laundering (AML) guidelines, and other RBI directives.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">4. Fair Practice Code</h2>
          <p>
            We follow the Fair Practice Code as prescribed by the RBI to ensure transparency and
            fair dealing with our customers.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">5. Grievance Redressal</h2>
          <p>
            We have a dedicated grievance redressal mechanism in place. Customers can reach out to
            our nodal officer or the Banking Ombudsman for unresolved complaints.
          </p>
        </div>
      </div>
    </div>
  )
}
