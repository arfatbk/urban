import { siteConfig } from '@/config/site'

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name.legal,
    alternateName: siteConfig.name.short,
    url: siteConfig.url,
    logo: "/logo.png",
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact,
      email: siteConfig.email,
      contactType: 'customer service',
    },
    sameAs: [
      siteConfig.socials.facebook,
      siteConfig.socials.instagram,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop 97, Panchayat Samiti complex, 1st floor',
      addressLocality: 'Pathri',
      addressRegion: 'Maharashtra',
      postalCode: '431506',
      addressCountry: 'IN',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
