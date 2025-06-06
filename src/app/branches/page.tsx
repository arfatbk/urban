'use client';

import BranchCard, { Branch } from '@/components/branches/BranchCard'
import { siteConfig } from "@/config/site";

// Sample branch data - in a real app, this would come from an API
const branches: Branch[] = [
	{
		id: '1',
		name: 'Main Branch - City Center',
		address: '123 Main Street, Financial District, Mumbai - 400001',
		phone: '+91 (22) 1234-5678',
		hours: 'Mon-Fri: 9:30 AM - 5:30 PM, Sat: 10:00 AM - 2:00 PM',
	},
	{
		id: '2',
		name: 'Andheri Branch',
		address: '45 Link Road, Andheri West, Mumbai - 400053',
		phone: '+91 (22) 2345-6789',
		hours: 'Mon-Fri: 9:30 AM - 5:30 PM, Sat: 10:00 AM - 2:00 PM',
	},
	{
		id: '3',
		name: 'Thane Branch',
		address: '78 Station Road, Thane West - 400601',
		phone: '+91 (22) 3456-7890',
		hours: 'Mon-Fri: 9:30 AM - 5:30 PM, Sat: 10:00 AM - 2:00 PM',
	},
	{
		id: '4',
		name: 'Vashi Branch',
		address: '90 Sector 17, Vashi, Navi Mumbai - 400703',
		phone: '+91 (22) 4567-8901',
		hours: 'Mon-Fri: 9:30 AM - 5:30 PM, Sat: 10:00 AM - 2:00 PM',
	},
]

export default function BranchesPage() {
	return (
		<div className="bg-white">
			<div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 pt-14">
				<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Our Branches
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Find your nearest {siteConfig.name.full} branch. Our network of branches is here to serve
							you with all your banking needs.
						</p>
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
				{/* Branch List */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{branches.map((branch) => (
						<BranchCard key={branch.id} branch={branch} />
					))}
				</div>

				{/* ATM Network Section */}
				<div className="mt-24">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							ATM Network
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Access your money 24/7 with our wide network of ATMs across the city. Our ATMs are
							equipped with the latest security features and are regularly maintained for your
							convenience.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="#"
								className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								Find nearest ATM
							</a>
							<a
								href="/contact"
								className="text-sm font-semibold leading-6 text-gray-900"
							>
								Contact support <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
