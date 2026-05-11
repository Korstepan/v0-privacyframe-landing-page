import { Shield, TrendingUp, Users } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Data Processing from Day One",
    description: "Startups collect and process personal data from their very first user. Whether it is email addresses, analytics, or user preferences, you are handling data that falls under GDPR from the start.",
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
    description: "Enterprise clients, investors, and partners increasingly require demonstrable compliance. Proper privacy practices are not just legal requirements – they are competitive advantages that unlock new opportunities.",
    color: "from-primary to-primary/70",
    iconBg: "bg-primary",
  },
]

export function WhyPrivacySection() {
  return (
    <section className="py-14 md:py-20 relative overflow-hidden bg-background">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b1b2b] tracking-tight">
            Why privacy matters?
          </h2>
          <p className="mt-4 text-lg text-[#17324d] leading-relaxed">
            In today&apos;s data-driven economy, privacy compliance is not optional – it is essential for sustainable growth. Our CIPP/E certified team brings extensive experience working with technology companies and online businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#163a5f]/85 via-[#1b4d7e]/82 to-[#2b73b5]/75 rounded-[28px] p-8 border border-[#6db6ff]/15 hover:border-[#86c6ff]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(58,146,255,0.18)] backdrop-blur-xl"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color} rounded-t-[28px]`} />

              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${reason.iconBg} text-white mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                <reason.icon className="h-8 w-8" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {reason.title}
              </h3>

              <p className="text-white/75 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
