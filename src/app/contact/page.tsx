import ContactForm from '@/components/shared/ContactForm'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { siteConfig } from "@/config/site";

const name = siteConfig.name.short;
const contactMethods = [
	{
		name: 'Head Office',
		description: name+' Main Office',
		icon: MapPinIcon,
		details: 'Shop 97, Panchayat Samiti complex, 1st floor, Pathri, Dist.- Parbhani, Maharashtra - 431506',
		type: 'address',
	},
	{
		name: 'Phone',
		description: 'Mon-Fri from 8am to 5pm',
		icon: PhoneIcon,
		details: '+91 91 5842 1818',
		type: 'phone',
		href: 'tel:+919158421818',
	},
	{
		name: 'Email',
		description: 'Our support team is here to help',
		icon: EnvelopeIcon,
		details: 'swarajyurban@gmail.com',
		type: 'email',
		href: 'mailto:swarajyurban@gmail.com',
	},
]

export default function Contact() {
	return (
		<div className="relative isolate bg-white">
			<div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
				<div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
					<div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Whether you have questions about our services or need assistance, our team is ready to help.
						</p>
						<dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
							{contactMethods.map((method) => (
								<div key={method.name} className="flex gap-x-4 rounded-lg bg-gray-50 p-4">
									<dt className="flex-none">
										<span className="sr-only">{method.name}</span>
										<method.icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
									</dt>
									<dd>
										<p className="font-semibold text-gray-900">{method.name}</p>
										<p className="mt-1">{method.description}</p>
										{method.href ? (
											<a
												href={method.href}
												className="mt-2 inline-block text-blue-600 hover:text-blue-800 hover:underline"
											>
												{method.details}
											</a>
										) : (
											<p className="mt-2">{method.details}</p>
										)}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
				<ContactForm />
			</div>
		</div>
	)
}
