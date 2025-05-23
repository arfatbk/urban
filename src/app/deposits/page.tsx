import DepositCard, { DepositType } from "@/components/deposits/DepositCard";

const deposits: DepositType[] = [
  {
    id: "fixed-deposit",
    title: "Fixed Deposit",
    description:
      "Earn guaranteed returns with our fixed deposit schemes. Choose from flexible tenures and competitive interest rates.",
    interestRate: "Up to 8.50% p.a.",
    minAmount: "₹10,000",
    duration: "6 months to 10 years",
    features: [
      "Higher interest rates for senior citizens",
      "Auto-renewal facility available",
      "Loan facility against FD",
      "Monthly interest payout option",
      "Premature withdrawal facility",
    ],
  },
  {
    id: "recurring-deposit",
    title: "Recurring Deposit",
    description:
      "Build your savings with regular monthly deposits. Perfect for achieving your financial goals.",
    interestRate: "Up to 9.00% p.a.",
    minAmount: "₹500/month",
    duration: "12 months to 10 years",
    features: [
      "Flexible monthly deposit amounts",
      "Standing instruction facility",
      "Higher returns than savings account",
      "Goal-based savings plan",
      "Partial withdrawal facility",
    ],
  },
  {
    id: "monthly-income-scheme",
    title: "Monthly Income Scheme (MIS)",
    description:
      "Enjoy a steady monthly income with our MIS. Invest a lump sum and receive regular interest payouts, making it ideal for retirees and those seeking predictable returns.",
    interestRate: "Up to 8.5% p.a.",
    minAmount: "₹1,00,000",
    duration: "from 1 year (lock-in)",
    features: [
      "Guaranteed monthly interest payouts",
      "Ideal for retirees and fixed income seekers",
      "No market risk, principal is safe",
      "Flexible investment amount options",
      "Easy nomination and transfer facility",
    ],
  },
  {
    id: "senior-citizen-fd",
    title: "Senior Citizen Fixed Deposit",
    description:
      "Special fixed deposit scheme for senior citizens with higher interest rates and additional benefits.",
    interestRate: "Up to 9.00% p.a.",
    minAmount: "₹1,00,000",
    duration: "1 year to 10 years",
    features: [
      "Additional 0.50% interest rate",
      "Monthly interest payout option",
      "Nomination facility",
      "Auto-renewal facility",
      "Doorstep banking services",
    ],
  },
  {
    id: "daily-deposit",
    title: "Daily Deposit (Pigmy)",
    description:
      "Grow your savings with small daily deposits collected at your doorstep. Ideal for individuals and small businesses looking for disciplined savings and easy liquidity.",
    interestRate: "Up to 8.00% p.a.",
    minAmount: "₹100/day",
    duration: "Flexible tenure",
    features: [
      "Daily doorstep collection",
      "Flexible deposit amounts",
      "Easy withdrawal facility",
      "No penalty for missed days",
      "Suitable for traders and small businesses",
    ],
  },
];

export default function DepositsPage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950">
        {/* Decoration */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1d4ed8] to-[#93c5fd] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="mb-8">
              <div className="inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-200 ring-1 ring-inset ring-blue-500/20">
                Savings & Growth
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Deposit Products
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100 max-w-xl">
              Grow your wealth with our range of deposit products. We offer
              competitive interest rates and flexible terms to help you achieve
              your financial goals.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <div className="flex gap-x-4 items-center text-sm text-blue-200">
                <div className="flex gap-x-2 items-center">
                  <span className="font-semibold text-2xl text-white">
                    8.5%
                  </span>
                  <span>
                    Max Interest
                    <br />
                    Rate p.a.
                  </span>
                </div>
                <span className="h-4 w-px bg-blue-500/20"></span>
                <div className="flex gap-x-2 items-center">
                  <span className="font-semibold text-2xl text-white">5+</span>
                  <span>
                    Deposit
                    <br />
                    Schemes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1d4ed8] to-[#93c5fd] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>

      {/* Deposits List Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="flex items-center gap-x-4">
              <div className="w-20 h-1 bg-blue-600 rounded"></div>
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">
                Available Plans
              </h2>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Choose Your Deposit Plan
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
              Select from our range of deposit options designed to meet your
              financial objectives.
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
                Our financial experts are here to help you choose the right
                deposit product.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <a
                  href="/contact"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
