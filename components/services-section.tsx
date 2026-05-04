import { FileSearch, UserCheck, Database, FileText, AlertTriangle, Scale } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: FileSearch,
    title: "GDPR Audit & Consulting",
    description: "Comprehensive assessment of your data processing activities, identifying gaps and providing actionable recommendations for full compliance.",
  },
  {
    icon: UserCheck,
    title: "Outsourced DPO",
    description: "Expert Data Protection Officer services on demand. Get the expertise you need without the overhead of a full-time hire.",
  },
  {
    icon: Database,
    title: "Data Mapping",
    description: "Thorough documentation of your data flows—where data comes from, how it's processed, and where it goes. Essential for compliance.",
  },
  {
    icon: FileText,
    title: "RoPA & DPIA Handling",
    description: "Professional preparation and maintenance of Records of Processing Activities and Data Protection Impact Assessments.",
  },
  {
    icon: AlertTriangle,
    title: "Breach & Regulatory Support",
    description: "Swift response to data breaches and regulatory inquiries. We help you navigate incidents and communicate with authorities.",
  },
  {
    icon: Scale,
    title: "General Legal Consulting",
    description: "Broader legal guidance on privacy-related contracts, vendor agreements, and international data transfers.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Comprehensive privacy solutions tailored for tech companies and startups.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
