import Link from "next/link"
import { Shield, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary border-t border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 text-primary-foreground mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Shield className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-semibold tracking-tight">PrivacyFrame</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
              Practical GDPR compliance and Data Protection Officer services for startups and tech companies across Europe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary-foreground font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="#services"
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Services
              </Link>
              <Link
                href="#pricing"
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="#contact"
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary-foreground font-semibold mb-4">Get in Touch</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:sk@privacyframe.io"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                sk@privacyframe.io
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} PrivacyFrame. All rights reserved.
          </p>
          <nav className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
