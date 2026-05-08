import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Sparkles } from "lucide-react"

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
    featured: true,
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
    price: "From €500/mo",
    features: [
      "Named Data Protection Officer",
      "Regular compliance reviews",
      "Regulatory communication handling",
    ],
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
    <section id="pricing" className="relative py-14 md:py-20 scroll-mt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/pricing-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/98 to-secondary" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-highlight/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            Pricing Plans
          </span>
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
              className={`relative group transition-all duration-300 border border-border bg-card/80 backdrop-blur-sm hover:-translate-y-2 ${
                plan.featured
                  ? "ring-2 ring-accent shadow-xl shadow-accent/10"
                  : "hover:shadow-xl hover:shadow-accent/5 hover:border-accent/50"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground text-xs font-semibold rounded-full flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="h-3 w-3" />
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
                  <span className="text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-accent" />
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
                  className={`w-full group/btn ${plan.featured ? "bg-accent hover:bg-accent/90" : ""}`}
                >
                  <Link href="#contact">
                    Get Started
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
