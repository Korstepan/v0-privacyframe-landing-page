import { Shield, TrendingUp, Users } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Data Processing from Day One",
    description: "Startups collect and process personal data from their very first user. Whether it's email addresses, analytics, or user preferences, you're handling data that falls under GDPR from the start.",
  },
  {
    icon: TrendingUp,
    title: "Growing Digital Footprint",
    description: "As you scale, integrations with AI tools, analytics platforms, and third-party services multiply your compliance obligations. Each new tool introduces potential risk that needs to be managed.",
  },
  {
    icon: Users,
    title: "Trust Drives Growth",
    description: "Enterprise clients, investors, and partners increasingly require demonstrable compliance. Proper privacy practices aren't just legal requirements—they're competitive advantages that unlock new opportunities.",
  },
]

export function WhyPrivacySection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Why Privacy Matters
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            In today&apos;s data-driven economy, privacy compliance isn&apos;t optional—it&apos;s essential for sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group text-center md:text-left"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <reason.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
