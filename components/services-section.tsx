import Image from "next/image"
import { FileSearch, UserCheck, Database, FileText, AlertTriangle, Scale } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: FileSearch,
    title: "GDPR Audit & Consulting",
    description: "Comprehensive assessment of your data processing activities, identifying gaps and providing actionable recommendations for full compliance.",
    color: "bg-accent",
    offset: "lg:-translate-y-6",
  },
  {
    icon: UserCheck,
    title: "Outsourced DPO",
    description: "Expert Data Protection Officer services on demand. Get the expertise you need without the overhead of a full-time hire.",
    color: "bg-primary",
    offset: "lg:translate-y-10",
  },
  {
    icon: Database,
    title: "Data Mapping",
    description: "Thorough documentation of your data flows – where data comes from, how it is processed, and where it goes. Essential for compliance.",
    color: "bg-highlight",
    offset: "lg:translate-y-2",
  },
  {
    icon: FileText,
    title: "RoPA & DPIA Handling",
    description: "Professional preparation and maintenance of Records of Processing Activities and Data Protection Impact Assessments.",
    color: "bg-chart-4",
    offset: "lg:-translate-y-12",
  },
  {
    icon: AlertTriangle,
    title: "Breach & Regulatory Support",
    description: "Swift response to data breaches and regulatory inquiries. We help you navigate incidents and communicate with authorities.",
    color: "bg-chart-5",
    offset: "lg:translate-y-8",
  },
  {
    icon: Scale,
    title: "General Legal Support",
    description: "Corporate, contract, and IP guidance for growing businesses that need support beyond privacy compliance.",
    color: "bg-chart-3",
    offset: "lg:-translate-y-4",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 md:py-32 scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/services-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="absolute top-10 left-1/4 w-[420px] h-[420px] bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[320px] h-[320px] bg-primary/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Our services
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Practical privacy and legal support tailored for startups, online platforms, and growing tech businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 lg:gap-y-20 items-start">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative ${service.offset} bg-white/[0.04] backdrop-blur-2xl border border-white/10 overflow-hidden rounded-[32px] transition-all duration-700 hover:-translate-y-5 hover:rotate-[0.5deg] hover:border-accent/40 hover:shadow-[0_30px_80px_rgba(0,123,255,0.18)]`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />

              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-white/5 blur-3xl group-hover:bg-accent/10 transition-all duration-700" />

              <CardContent className="relative p-8 md:p-10 h-full flex flex-col justify-between min-h-[320px]">
                <div>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color} text-white mb-8 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <service.icon className="h-8 w-8" />
                  </div>

                  <h3 className="text-2xl font-semibold text-card-foreground mb-4 tracking-tight leading-tight text-white transition-colors duration-500">
                    {service.title}
                  </h3>

                  <p className="text-white/70 text-[15px] leading-7 transition-colors duration-500 group-hover:text-white/90">
                    {service.description}
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-2 text-sm text-accent opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
