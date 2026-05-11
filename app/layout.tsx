import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://privacyframe.io'),
  title: 'PrivacyFrame | GDPR Compliance & Outsourced DPO Services',
  description:
    'PrivacyFrame provides GDPR compliance consulting, outsourced DPO services, data mapping, DPIA, RoPA, and legal support for startups and technology businesses across Europe.',
  keywords: [
    'GDPR compliance',
    'outsourced DPO',
    'privacy compliance consulting',
    'RoPA',
    'DPIA',
    'data mapping',
    'privacy lawyer',
    'privacy consultant',
    'GDPR audit',
    'privacy policy drafting',
  ],
  authors: [{ name: 'PrivacyFrame' }],
  creator: 'PrivacyFrame',
  publisher: 'PrivacyFrame',
  openGraph: {
    title: 'PrivacyFrame | GDPR Compliance & Outsourced DPO Services',
    description:
      'Practical and tailored privacy compliance for startups and data-driven businesses across Europe.',
    url: 'https://privacyframe.io',
    siteName: 'PrivacyFrame',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PrivacyFrame',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrivacyFrame | GDPR Compliance & Outsourced DPO Services',
    description:
      'GDPR compliance consulting and outsourced DPO services for startups and online businesses.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://privacyframe.io',
  },
icons: {
  icon: "/favicon.png",
  shortcut: "/favicon.png",
  apple: "/apple-icon.png",
},
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does GDPR apply to my startup if we are based outside the EU?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GDPR applies if you offer services to EU residents or monitor their behavior.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is a DPO required?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A DPO is required for large-scale monitoring or large-scale processing of sensitive personal data.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a DPIA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A DPIA is a Data Protection Impact Assessment used for high-risk processing activities.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
