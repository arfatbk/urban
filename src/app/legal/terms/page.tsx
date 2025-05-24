import { siteConfig } from "@/config/site";

export default function TermsPage() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Terms and Conditions</h1>
        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Introduction</h2>
            <p className="mt-4">
              Welcome to {siteConfig.name.legal}. These Terms and Conditions ("Terms") govern your use of our banking services.
              By opening an account or using any of our services, you agree to comply with and be bound by these Terms.
              If you do not agree with these Terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Definitions</h2>
            <div className="mt-4 space-y-4">
              <p>"Account" refers to any account opened by the Customer with {siteConfig.name.legal}.</p>
              <p>"Customer" refers to any individual or entity that holds an account or uses banking services provided by {siteConfig.name.legal}.</p>
              <p>"Services" refers to all banking services offered by {siteConfig.name.legal}, including but not limited to savings accounts, checking accounts, loans, online banking, and mobile banking.</p>
              <p>"Content" refers to all information, data, text, software, music, sound, photographs, graphics, video, messages, or other materials provided by {siteConfig.name.legal}.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Account Opening and Maintenance</h2>
            <div className="mt-4 space-y-4">
              <p>Customers must provide accurate and complete information when opening an account.</p>
              <p>{siteConfig.name.legal} reserves the right to refuse to open an account or close an existing account at its discretion.</p>
              <p>Customers must promptly notify {siteConfig.name.legal} of any changes to their personal information.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Use of Services</h2>
            <div className="mt-4 space-y-4">
              <p>Customers must use the Services in compliance with applicable laws and regulations.</p>
              <p>{siteConfig.name.legal} may set limits on the amount and frequency of transactions for security reasons.</p>
              <p>Customers are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Deposits and Withdrawals</h2>
            <div className="mt-4 space-y-4">
              <p>Deposits can be made by various methods as allowed by {siteConfig.name.legal}.</p>
              <p>Withdrawals can be made using methods provided by {siteConfig.name.legal}, subject to availability of funds and any applicable limits.</p>
              <p>{siteConfig.name.legal} may impose fees for certain types of transactions. A schedule of fees is available on request and on our website.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Interest and Fees</h2>
            <p className="mt-4">
              Interest rates for savings accounts and other interest-bearing accounts will be determined by {siteConfig.name.legal} and may change from time to time.
              Fees may be charged for various services as outlined in the {siteConfig.name.legal}'s fee schedule.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Electronic Banking Services</h2>
            <div className="mt-4 space-y-4">
              <p>{siteConfig.name.legal} offers online and mobile banking services to eligible customers.</p>
              <p>Customers must use secure and up-to-date devices and software to access electronic banking services.</p>
              <p>{siteConfig.name.legal} is not liable for any loss or damage arising from unauthorized access to a customer's account due to the customer's failure to safeguard their login credentials.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Privacy Policy</h2>
            <p className="mt-4">
              {siteConfig.name.legal} respects the privacy of its customers. Our Privacy Policy outlines how we collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Limitation of Liability</h2>
            <div className="mt-4 space-y-4">
              <p>{siteConfig.name.legal} is not liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the Services.</p>
              <p>{siteConfig.name.legal} does not warrant that the Services will be uninterrupted, timely, secure, or error-free.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Indemnification</h2>
            <p className="mt-4">
              Customers agree to indemnify and hold {siteConfig.name.legal} harmless from any claims, losses, damages, liabilities, costs, and expenses arising from their use of the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Termination</h2>
            <p className="mt-4">
              {siteConfig.name.legal} reserves the right to terminate or suspend access to Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Governing Law</h2>
            <p className="mt-4">
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Changes to Terms</h2>
            <p className="mt-4">
              {siteConfig.name.legal} reserves the right, at its sole discretion, to modify or replace these Terms at any time.
              {siteConfig.name.legal} will provide notice of any changes by posting the new Terms on our website.
              Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Contact Us</h2>
            <p className="mt-4">
              If you have any questions about these Terms, please contact us at: <br/>  
              Email: <a href={`mailto:${siteConfig.email}`} className=" inline text-blue-600 hover:underline">
                {siteConfig.email}
              </a>
              <br/>
              Phone: <a href={`tel:${siteConfig.contact}`} className=" inline text-blue-600 hover:underline">
                {siteConfig.contact}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
