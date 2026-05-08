import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight, Calendar, Sparkles } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 md:py-28 scroll-mt-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/80" />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-highlight/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-primary-foreground text-sm font-semibold rounded-full mb-6 border border-white/20">
          <Sparkles className="h-4 w-4 text-accent" />
          Start Your Compliance Journey
        </span>
        
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground tracking-tight">
          Ready to Get Compliant?
        </h2>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 leading-relaxed max-w-2xl mx-auto">
          Let&apos;s discuss your privacy needs and create a tailored compliance roadmap for your business.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-base px-8 py-6 shadow-xl shadow-black/10"
          >
            <Link href="mailto:sk@privacyframe.io">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <Mail className="h-5 w-5 text-accent" />
          <a
            href="mailto:sk@privacyframe.io"
            className="text-primary-foreground hover:text-accent transition-colors font-medium"
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
