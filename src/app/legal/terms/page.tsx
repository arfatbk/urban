import { siteConfig } from "@/config/site";

export default function TermsPage() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Terms and Conditions</h1>
        <div className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">1. Introduction</h2>
          <p>
            Welcome to {siteConfig.name.legal}. By accessing and using our services, you agree to be bound by these
            Terms and Conditions. Please read them carefully.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">2. Services</h2>
          <p>
            {siteConfig.name.legal} provides banking and financial services including but not limited to savings accounts,
            loans, and fixed deposits. All services are subject to applicable banking regulations and laws.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">3. Account Usage</h2>
          <p>
            Account holders are responsible for maintaining the security of their accounts and must notify
            the bank immediately of any unauthorized access or suspicious activities.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">4. Liability</h2>
          <p>
            {siteConfig.name.legal} shall not be liable for any losses incurred due to circumstances beyond our reasonable
            control, including system failures or third-party actions.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">5. Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective immediately
            upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
          </p>
        </div>
      </div>
    </div>
  )
}
