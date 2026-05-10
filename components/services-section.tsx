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
    title: "General Legal Support",
    description: "Corporate, contract, and IP guidance for growing businesses that need support beyond privacy compliance.",
    color: "bg-chart-3",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-16 md:py-28 scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/services-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Our services
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Practical privacy and legal support tailored for startups, online platforms, and growing tech businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card/60 backdrop-blur-xl border border-white/5 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden"
            >
              <CardContent className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color} text-white mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3 tracking-tight">
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
