import {
  HomeIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import LoanCard from "@/components/loans/LoanCard";
import EMICalculator from "@/components/loans/EMICalculator";

const loans = [
  {
    id: "personal",
    title: "Personal Loan",
    description:
      "Quick personal loans for your immediate needs with minimal documentation.",
    interestRate: "10.75% p.a.",
    maxAmount: "₹10 Lakhs",
    tenure: "Up to 5 years",
    icon: BanknotesIcon,
  },
  {
    id: "home",
    title: "Home Loan",
    description:
      "Make your dream home a reality with our affordable home loans.",
    interestRate: "8.50% p.a.",
    maxAmount: "₹1 Crore",
    tenure: "Up to 30 years",
    icon: HomeIcon,
  },

];

export default function Loans() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loan Products
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose from our range of loan products designed to meet your financial
            needs. Whether it&apos;s a personal expense or home purchase, we have
            you covered.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {loans.map((loan) => (
            <LoanCard key={loan.id} loan={loan} />
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-2xl">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Calculate EMI
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Use our EMI calculator to plan your loan repayment
          </p>
          <div className="mt-8">
            <EMICalculator />
          </div>
        </div>
      </div>
    </div>
  )
}
