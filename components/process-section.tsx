import { MessageSquare, Search, FileCheck, Headphones } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Quick Intake",
    description: "We start with a focused conversation to understand your business, data flows, and compliance goals. No lengthy questionnaires—just a practical discussion.",
  },
  {
    icon: Search,
    step: "02",
    title: "Compliance Snapshot",
    description: "We analyze your current state, identify gaps, and prioritize actions. You get a clear picture of where you stand and what needs attention.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Tailored Deliverables",
    description: "We create the documents, policies, and processes you need—customized to your specific situation, not generic templates.",
  },
  {
    icon: Headphones,
    step: "04",
    title: "Ongoing Support",
    description: "Privacy is not a one-time project. We provide continuous guidance, updates, and support as regulations and your business evolve.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            How We Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A straightforward process designed to get you compliant without disrupting your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-4" />
              )}
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground group-hover:bg-accent transition-colors duration-300">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground/30">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
