import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  HomeIcon,
  BanknotesIcon,
  CurrencyRupeeIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

interface IconProps {
  className: string;
  "aria-hidden"?: boolean;
}

const navigation = {
  main: [
    { name: "About Us", href: "/about" },
    { name: "Loans", href: "/loans" },
    { name: "Deposits", href: "/deposits" },
    // { name: 'Branches', href: '/branches' },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Terms & Conditions", href: "/legal/terms" },
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Cookie Policy", href: "/legal/cookies" },
    { name: "Disclaimer", href: "/legal/disclaimer" },
    { name: "Regulatory Information", href: "/legal/regulatory" },
  ],
  social: [
    {
      name: "Facebook",
      href: siteConfig.socials.facebook,
      icon: (props: IconProps) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
        >
          <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: IconProps) => (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 30 30"
        >
          <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {/* Quick Links Column */}
          <div>
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Quick Links
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links Column */}
          <div>
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Legal
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link
              target="_blank"
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden={true} />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} {siteConfig.name.legal} All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
