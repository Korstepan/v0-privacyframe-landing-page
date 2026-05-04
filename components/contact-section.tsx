import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight, Calendar } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-primary scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight">
          Ready to Get Compliant?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
          Let&apos;s discuss your privacy needs and create a tailored compliance roadmap for your business.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6"
          >
            <Link href="mailto:sk@privacyframe.io">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Consultation
            </Link>
          </Button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-primary-foreground/80">
          <Mail className="h-5 w-5" />
          <a
            href="mailto:sk@privacyframe.io"
            className="hover:text-primary-foreground transition-colors underline-offset-4 hover:underline"
          >
            sk@privacyframe.io
          </a>
        </div>

        <p className="mt-6 text-sm text-primary-foreground/60">
          Typically respond within 24 hours on business days.
        </p>
      </div>
    </section>
  )
}
