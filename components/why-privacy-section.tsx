import { Shield, TrendingUp, Users } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Data Processing from Day One",
    description: "Startups collect and process personal data from their very first user. Whether it's email addresses, analytics, or user preferences, you're handling data that falls under GDPR from the start.",
    color: "from-accent to-accent/70",
    iconBg: "bg-accent",
  },
  {
    icon: TrendingUp,
    title: "Growing Digital Footprint",
    description: "As you scale, integrations with AI tools, analytics platforms, and third-party services multiply your compliance obligations. Each new tool introduces potential risk that needs to be managed.",
    color: "from-highlight to-highlight/70",
    iconBg: "bg-highlight",
  },
  {
    icon: Users,
    title: "Trust Drives Growth",
    description: "Enterprise clients, investors, and partners increasingly require demonstrable compliance. Proper privacy practices aren't just legal requirements—they're competitive advantages that unlock new opportunities.",
    color: "from-primary to-primary/70",
    iconBg: "bg-primary",
  },
]

export function WhyPrivacySection() {
  return (
    <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-highlight/15 text-foreground text-sm font-semibold rounded-full mb-4 border border-highlight/30">
            Why It Matters
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Why Privacy Matters
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            In today&apos;s data-driven economy, privacy compliance isn&apos;t optional—it&apos;s essential for sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-accent/30 hover:-translate-y-1"
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color} rounded-t-2xl`} />
              
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${reason.iconBg} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="h-8 w-8" />
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
