import { MessageSquare, Search, FileCheck, Headphones } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Quick Intake",
    description: "We start with a focused conversation to understand your business, data flows, and compliance goals. No lengthy questionnaires – just a practical discussion.",
    color: "bg-accent",
  },
  {
    icon: Search,
    step: "02",
    title: "Compliance Snapshot",
    description: "We analyze your current state, identify gaps, and prioritize actions. You get a clear picture of where you stand and what needs attention.",
    color: "bg-highlight",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Tailored Deliverables",
    description: "We create the documents, policies, and processes you need – customized to your specific situation, not generic templates.",
    color: "bg-chart-5",
  },
  {
    icon: Headphones,
    step: "04",
    title: "Ongoing Support",
    description: "Privacy is not a one-time project. We provide continuous guidance, updates, and support as regulations and your business evolve.",
    color: "bg-primary",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-14 md:py-20 bg-background scroll-mt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,181,181,0.08)_0%,transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-foreground text-sm font-semibold rounded-full mb-4 border border-primary/20">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A straightforward process designed to get you compliant without disrupting your business.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-accent via-highlight to-primary" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="relative bg-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-accent/30 hover:-translate-y-2">
                  {/* Step number badge */}
                  <div className="absolute -top-4 -right-2 w-10 h-10 rounded-full bg-secondary border-2 border-border flex items-center justify-center">
                    <span className="text-sm font-bold text-foreground">{step.step}</span>
                  </div>
                  
                  <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${step.color} text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
