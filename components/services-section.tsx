import Image from "next/image"
import { FileSearch, UserCheck, Database, FileText, AlertTriangle, Scale } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: FileSearch,
    title: "GDPR Audit & Consulting",
    description: "Comprehensive assessment of your data processing activities, identifying gaps and providing actionable recommendations for full compliance.",
    color: "bg-accent",
    offset: "lg:-translate-y-5",
  },
  {
    icon: UserCheck,
    title: "Outsourced DPO",
    description: "Expert Data Protection Officer services on demand. Get the expertise you need without the overhead of a full-time hire.",
    color: "bg-primary",
    offset: "lg:translate-y-7",
  },
  {
    icon: Database,
    title: "Data Mapping",
    description: "Thorough documentation of your data flows – where data comes from, how it is processed, and where it goes. Essential for compliance.",
    color: "bg-highlight",
    offset: "lg:translate-y-1",
  },
  {
    icon: FileText,
    title: "RoPA & DPIA Handling",
    description: "Professional preparation and maintenance of Records of Processing Activities and Data Protection Impact Assessments.",
    color: "bg-chart-4",
    offset: "lg:-translate-y-8",
  },
  {
    icon: AlertTriangle,
    title: "Breach & Regulatory Support",
    description: "Swift response to data breaches and regulatory inquiries. We help you navigate incidents and communicate with authorities.",
    color: "bg-chart-5",
    offset: "lg:translate-y-5",
  },
  {
    icon: Scale,
    title: "General Legal Support",
    description: "Corporate, contract, and IP guidance for growing businesses that need support beyond privacy compliance.",
    color: "bg-chart-3",
    offset: "lg:-translate-y-2",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-16 md:py-24 scroll-mt-20 overflow-hidden">
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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Our services
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Practical privacy and legal support tailored for startups, online platforms, and growing tech businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12 lg:gap-y-16 items-start">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative ${service.offset} bg-gradient-to-br from-[#163a5f]/85 via-[#1b4d7e]/82 to-[#2b73b5]/75 backdrop-blur-2xl border border-[#6db6ff]/15 overflow-hidden rounded-[28px] transition-all duration-700 hover:-translate-y-4 hover:rotate-[0.4deg] hover:border-[#86c6ff]/40 hover:shadow-[0_25px_70px_rgba(58,146,255,0.18)]`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-[#78bcff]/10 via-transparent to-[#4ea1ff]/10" />

              <CardContent className="relative p-7 md:p-8 h-full flex flex-col justify-between min-h-[270px]">
                <div>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${service.color} text-white mb-6 shadow-xl group-hover:scale-105 group-hover:rotate-3 transition-all duration-500`}>
                    <service.icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-[22px] font-semibold mb-3 tracking-tight leading-tight text-white">
                    {service.title}
                  </h3>

                  <p className="text-[15px] leading-6 text-white/80 group-hover:text-white/85 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
