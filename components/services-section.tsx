import Image from "next/image"
import { FileSearch, UserCheck, Database, FileText, AlertTriangle, Scale } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: FileSearch,
    title: "GDPR Audit & Consulting",
    description: "Comprehensive assessment of your data processing activities, identifying gaps and providing actionable recommendations for full compliance.",
    color: "bg-accent",
  },
  {
    icon: UserCheck,
    title: "Outsourced DPO",
    description: "Expert Data Protection Officer services on demand. Get the expertise you need without the overhead of a full-time hire.",
    color: "bg-primary",
  },
  {
    icon: Database,
    title: "Data Mapping",
    description: "Thorough documentation of your data flows – where data comes from, how it is processed, and where it goes. Essential for compliance.",
    color: "bg-highlight",
  },
  {
    icon: FileText,
    title: "RoPA & DPIA Handling",
    description: "Professional preparation and maintenance of Records of Processing Activities and Data Protection Impact Assessments.",
    color: "bg-chart-4",
  },
  {
    icon: AlertTriangle,
    title: "Breach & Regulatory Support",
    description: "Swift response to data breaches and regulatory inquiries. We help you navigate incidents and communicate with authorities.",
    color: "bg-chart-5",
  },
  {
    icon: Scale,
    title: "General Legal Consulting",
    description: "Broader legal guidance on privacy-related contracts, vendor agreements, and international data transfers.",
    color: "bg-chart-3",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 md:py-28 scroll-mt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/services-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
            What We Offer
          </span>
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
              className="group bg-card/80 backdrop-blur-sm border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.color} text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-7 w-7" />
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
