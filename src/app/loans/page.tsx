import {
  HomeIcon,
  BanknotesIcon,
  CurrencyRupeeIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import LoanCard from "@/components/loans/LoanCard";
import EMICalculator from "@/components/loans/EMICalculator";

const loans = [
  {
    id: "gold",
    title: "Gold Loan",
    description:
      "Unlock the value of your gold assets with instant loans at attractive interest rates. Enjoy quick processing, minimal paperwork, and flexible repayment options.",
    interestRate: "14% p.a.",
    maxAmount: "₹10 Lakhs",
    tenure: "Up to 1 years",
    icon: CurrencyRupeeIcon,
  },
  {
    id: "business",
    title: "Business Loan",
    description:
      "Fuel your business growth with our flexible business loans. Benefit from competitive interest rates, fast approvals, and tailored repayment plans to support your entrepreneurial ambitions.",
    interestRate: "14% p.a.",
    maxAmount: "₹10 Lakhs",
    tenure: "Up to 5 years",
    icon: BriefcaseIcon,
  },
  {
    id: "personal",
    title: "Personal Loan",
    description:
      "Quick personal loans for your immediate needs with minimal documentation.",
    interestRate: "10.75% p.a.",
    maxAmount: "₹5 Lakhs",
    tenure: "Up to 5 years",
    icon: BanknotesIcon,
  },
  {
    id: "home",
    title: "Home Loan",
    description:
      "Make your dream home a reality with our affordable home loans.",
    interestRate: "8.50% p.a.",
    maxAmount: "₹20 Lakhs",
    tenure: "Up to 20 years",
    icon: HomeIcon,
  },
  {
    id: "loan_against_fd",
    title: "Loan Against Fixed Deposit",
    description:
      "Get instant liquidity against your fixed deposits with low interest rates and flexible repayment options. Ideal for emergencies or planned expenses.",
    interestRate: "9% p.a.",
    maxAmount: "₹20 Lakhs",
    tenure: "Depending upon FD tenure",
    icon: ShieldCheckIcon,
  },
  {
    id: "loan_against_property",
    title: "Loan Against Property",
    description:
      "Leverage your property to secure funds for business expansion, education, or personal needs. Enjoy low interest rates and flexible repayment terms.",
    interestRate: "10.50% p.a.",
    maxAmount: "₹20 Lakhs",
    tenure: "Up to 5 years",
    icon: LockClosedIcon,
  },
];

export default function Loans() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-blue-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="flex items-center gap-x-4">
              <div className="w-20 h-1 bg-blue-400 rounded"></div>
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-200">Loans</h2>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Empower Your Dreams
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Choose from our range of flexible loan options designed to meet your financial needs. Whether you&apos;re planning to buy a home or need funds for personal use, we&apos;ve got you covered.
            </p>
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-8">
              <div className="relative rounded-2xl bg-white/5 px-4 py-6 ring-1 ring-white/10">
                <dt className="text-sm font-semibold text-gray-300">Processing Time</dt>
                <dd className="mt-2 text-3xl font-bold tracking-tight text-white">24 hrs</dd>
              </div>
              <div className="relative rounded-2xl bg-white/5 px-4 py-6 ring-1 ring-white/10">
                <dt className="text-sm font-semibold text-gray-300">Interest Rate From</dt>
                <dd className="mt-2 text-3xl font-bold tracking-tight text-white">8.50% p.a.</dd>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-blue-400 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Loan Types Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="max-w-2xl lg:mx-0">
          <div className="flex items-center gap-x-4">
            <div className="w-20 h-1 bg-blue-600 rounded"></div>
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Available Loans</h2>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Choose Your Loan Type
          </h2>
          <p className="mt-6 text-lg leading-8  max-w-xl">
            Select from our range of loan options tailored to meet your specific financial requirements.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {loans.map((loan) => (
            <LoanCard key={loan.id} loan={loan} />
          ))}
        </div>

        {/* EMI Calculator Section */}
        <div className="mx-auto mt-24 max-w-3xl">
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200/70">
            <div className="px-6 py-8 sm:p-10">
              <div className="flex items-center gap-x-4">
                <div className="w-20 h-1 bg-blue-600 rounded"></div>
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">EMI Calculator</h2>
              </div>
              <p className="mt-4 text-base text-gray-600">
                Calculate your monthly EMI based on your loan amount, interest rate, and tenure.
              </p>
              <div className="mt-8">
                <EMICalculator />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
