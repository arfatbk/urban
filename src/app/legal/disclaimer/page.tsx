import { siteConfig } from "@/config/site";

export default function DisclaimerPage() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Disclaimer</h1>
        <div className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">1. General Information</h2>
          <p>
            The information provided on this website is for general informational purposes only. While
            we strive to keep information accurate and up to date, we make no warranties about the
            completeness, reliability, or accuracy of this information.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">2. No Financial Advice</h2>
          <p>
            Content on this website should not be considered as financial advice. Always consult with
            qualified financial advisors before making any financial decisions.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">3. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the
            content or privacy practices of these external sites.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">4. Limitation of Liability</h2>
          <p>
            {siteConfig.name.legal} shall not be liable for any losses, injuries, or damages resulting from the
            display or use of information from this website.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">5. Changes</h2>
          <p>
            We reserve the right to modify this disclaimer at any time. Changes will be effective
            immediately upon posting on the website.
          </p>
        </div>
      </div>
    </div>
  )
}
