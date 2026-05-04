import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    title: "GDPR Quick Check",
    description: "Initial assessment for early-stage startups",
    price: "From €500",
    features: [
      "2-hour consultation session",
      "Gap analysis summary",
      "Priority action recommendations",
    ],
  },
  {
    title: "Compliance Starter",
    description: "Essential compliance package for growing companies",
    price: "From €1,500",
    features: [
      "Full GDPR audit",
      "Core policy documents",
      "3 months email support",
    ],
  },
  {
    title: "Outsourced DPO",
    description: "Ongoing DPO services for established businesses",
    price: "From €800/mo",
    features: [
      "Named Data Protection Officer",
      "Regular compliance reviews",
      "Regulatory communication handling",
    ],
    featured: true,
  },
  {
    title: "Data Mapping Project",
    description: "Comprehensive data flow documentation",
    price: "From €2,000",
    features: [
      "Complete data inventory",
      "Visual data flow diagrams",
      "Risk assessment included",
    ],
  },
  {
    title: "RoPA & DPIA Bundle",
    description: "Essential documentation package",
    price: "From €1,800",
    features: [
      "Records of Processing Activities",
      "Data Protection Impact Assessments",
      "Annual update service",
    ],
  },
  {
    title: "Enterprise Package",
    description: "Full-service compliance for larger organizations",
    price: "Custom",
    features: [
      "All services included",
      "Dedicated compliance team",
      "Priority SLA support",
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-secondary scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Choose the package that fits your needs. All pricing is tailored to your specific requirements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative group transition-all duration-300 ${
                plan.featured
                  ? "border-accent shadow-lg ring-1 ring-accent"
                  : "border-border hover:border-accent/50 hover:shadow-md"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-card-foreground">
                  {plan.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-foreground">
                    {plan.price}
                  </span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
