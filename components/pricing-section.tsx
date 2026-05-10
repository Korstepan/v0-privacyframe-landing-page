import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Sparkles } from "lucide-react"

const pricingPlans = [
  {
    title: "GDPR Quick Check",
    description: "Initial privacy review for early-stage teams that need clear priorities fast.",
    price: "From €500",
    features: [
      "Focused consultation session",
      "Gap analysis summary",
      "Priority action recommendations",
    ],
  },
  {
    title: "Compliance Starter",
    description: "Essential GDPR setup for growing startups and small tech companies.",
    price: "From €1,300",
    features: [
      "Full GDPR audit",
      "Core privacy documents",
      "Implementation guidance",
    ],
    featured: true,
  },
  {
    title: "Outsourced DPO",
    description: "Ongoing privacy guidance without building an in-house function.",
    price: "From €500/mo",
    features: [
      "DPO role coverage",
      "Day-to-day advisory support",
      "Regulator and incident readiness",
    ],
  },
  {
    title: "Data Mapping Project",
    description: "A clear view of what data you process, where it goes, and why.",
    price: "From €1,500",
    features: [
      "Systems and vendor review",
      "Data categories and purposes",
      "Data flow overview and risks",
    ],
  },
  {
    title: "RoPA & DPIA Bundle",
    description: "Key GDPR documents built around your real processing activities.",
    price: "From €2,000",
    features: [
      "Records of Processing Activities",
      "DPIA for high-risk activities",
      "Audit-ready documentation",
    ],
  },
  {
    title: "Website/App Docs",
    description: "Public-facing legal wording and policies for your website, app, or platform.",
    price: "From €700",
    features: [
      "Terms of Use or Terms of Service",
      "Privacy and Cookie Policies",
      "AUP and interface legal wording",
    ],
  },
  {
    title: "General Legal Support",
    description: "Corporate, contract, and IP support for privacy-adjacent business needs.",
    price: "From €150/h",
    features: [
      "Contract drafting and review",
      "Corporate and governance matters",
      "IP and commercial risk review",
    ],
    highlight: true,
  },
  {
    title: "Enterprise Package",
    description: "Full-scope compliance support for complex or fast-scaling organizations.",
    price: "Custom",
    features: [
      "Custom compliance roadmap",
      "Dedicated support model",
      "Scope tailored to your needs",
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-14 md:py-20 scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/pricing-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/98 to-secondary" />
      </div>

      <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-highlight/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Pricing plans
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Choose the scope that fits your stage and workload. No hidden fees, no unnecessary complexity — just clear pricing and practical outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col h-full group transition-all duration-300 border bg-card/80 backdrop-blur-sm hover:-translate-y-2 ${
                plan.featured
                  ? "border-accent ring-2 ring-accent shadow-xl shadow-accent/10"
                  : plan.highlight
                    ? "border-amber-400/70 ring-1 ring-amber-300/60 shadow-lg shadow-amber-200/20 hover:shadow-xl hover:shadow-amber-200/30"
                    : "border-border hover:shadow-xl hover:shadow-accent/5 hover:border-accent/50"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground text-xs font-semibold rounded-full flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="h-3 w-3" />
                  Most popular
                </div>
              )}
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-amber-400 text-amber-950 text-xs font-semibold rounded-full shadow-lg">
                  Beyond privacy
                </div>
              )}

              <CardHeader className="pb-4 min-h-[120px] flex flex-col justify-start">
                <CardTitle className="text-lg font-semibold text-card-foreground min-h-[56px]">
                  {plan.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground min-h-[60px]">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="flex flex-col flex-1">
                <div className="mb-6 min-h-[72px]">
                  <span className="text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.title === "General Legal Support" && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      Customizable depending on the question.
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.highlight ? "bg-amber-100" : "bg-accent/10"}`}>
                        <Check className={`h-3 w-3 ${plan.highlight ? "text-amber-700" : "text-accent"}`} />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={plan.featured ? "default" : "outline"}
                  className={`w-full mt-auto group/btn ${plan.featured ? "bg-accent hover:bg-accent/90" : plan.highlight ? "border-amber-400 text-amber-800 hover:bg-amber-50" : ""}`}
                >
                  <Link href="#contact">
                    Get started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
