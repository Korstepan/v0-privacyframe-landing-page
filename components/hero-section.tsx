import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-accent/70" />
      </div>

      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-highlight/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm font-medium mb-6 border border-white/20">
              <Shield className="h-4 w-4 text-accent" />
              Trusted by 50+ European startups
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight tracking-tight text-balance">
              GDPR compliance and{" "}
              <span className="text-accent">outsourced DPO</span> services for modern tech businesses
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-xl leading-relaxed text-pretty">
              Practical, fast, and tailored privacy compliance for startups and data-driven companies across Europe.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 shadow-lg shadow-accent/25"
              >
                <Link href="#contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6 backdrop-blur-sm"
              >
                <Link href="#services">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Stats cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/80 text-sm">Compliance Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mt-8">
              <div className="text-4xl font-bold text-highlight mb-2">100%</div>
              <div className="text-primary-foreground/80 text-sm">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-primary-foreground/80 text-sm">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mt-8">
              <div className="text-4xl font-bold text-accent mb-2">EU</div>
              <div className="text-primary-foreground/80 text-sm">Wide Coverage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
