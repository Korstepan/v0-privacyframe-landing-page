import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0 scale-105">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#08111f]/90 to-[#0d2d48]/80" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[28rem] h-[28rem] bg-highlight/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-white/5 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-primary-foreground/80 text-sm mb-8">
              GDPR • Outsourced DPO • Privacy Compliance
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] tracking-tight text-balance">
              GDPR compliance and{" "}
              <span className="text-accent drop-shadow-[0_0_25px_rgba(96,181,181,0.4)]">
                outsourced DPO
              </span>{" "}
              services for modern tech businesses
            </h1>

            <p className="mt-8 text-lg md:text-xl text-primary-foreground/75 max-w-2xl leading-relaxed text-pretty">
              Practical, fast, and tailored privacy compliance for startups and data-driven companies across Europe.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 shadow-2xl shadow-accent/30 rounded-2xl"
              >
                <Link href="#contact">
                  Schedule a consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-primary-foreground text-base px-8 py-6 border border-white/10 rounded-2xl"
              >
                <Link href="#services">Learn more</Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-5">
            <div className="bg-white/[0.06] backdrop-blur-xl rounded-3xl p-7 border border-white/10 shadow-2xl shadow-black/20">
              <div className="text-5xl font-bold text-accent mb-3">CIPP/E</div>
              <div className="text-primary-foreground/70 text-sm">Certified Privacy Professional</div>
            </div>

            <div className="bg-white/[0.06] backdrop-blur-xl rounded-3xl p-7 border border-white/10 mt-10 shadow-2xl shadow-black/20">
              <div className="text-5xl font-bold text-white mb-3">7+</div>
              <div className="text-primary-foreground/70 text-sm">Years Experience</div>
            </div>

            <div className="bg-white/[0.06] backdrop-blur-xl rounded-3xl p-7 border border-white/10 shadow-2xl shadow-black/20">
              <div className="text-4xl font-bold text-sky-300 mb-3">Global</div>
              <div className="text-primary-foreground/70 text-sm">EU, US, CIS & Asia</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
