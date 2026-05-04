import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhyPrivacySection } from "@/components/why-privacy-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WhyPrivacySection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
