"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Does GDPR apply to my startup if we're based outside the EU?",
    answer: "Yes, if you offer goods or services to EU residents or monitor their behavior, GDPR applies regardless of where your company is located. This includes websites accessible from the EU, apps available in EU app stores, or services that target EU customers.",
  },
  {
    question: "When is a Data Protection Officer (DPO) required?",
    answer: "A DPO is mandatory if your core activities involve regular and systematic monitoring of individuals on a large scale, or processing of special categories of data (health, biometric, etc.) on a large scale. Many companies choose to appoint one voluntarily as a best practice.",
  },
  {
    question: "What is a Record of Processing Activities (RoPA)?",
    answer: "A RoPA is a detailed inventory of all data processing activities your organization carries out. It must include purposes, data categories, recipients, retention periods, and security measures. It's required for organizations with 250+ employees or those processing sensitive data.",
  },
  {
    question: "When do I need a Data Protection Impact Assessment (DPIA)?",
    answer: "A DPIA is required when processing is likely to result in high risk to individuals' rights and freedoms. This includes systematic profiling, large-scale processing of sensitive data, or systematic monitoring of public areas. When in doubt, conducting one is recommended.",
  },
  {
    question: "How do I handle data mapping for my company?",
    answer: "Data mapping involves documenting where personal data comes from, how it flows through your systems, where it's stored, who can access it, and where it goes. We help you create visual diagrams and detailed documentation that serves as the foundation for compliance.",
  },
  {
    question: "What should I do if we use third-party tools like analytics or CRM?",
    answer: "Each third-party tool that processes personal data requires a Data Processing Agreement (DPA). You must also ensure adequate safeguards for international transfers, update your privacy policy, and assess whether the tool is necessary for your stated purposes.",
  },
  {
    question: "How do I handle a data breach?",
    answer: "You must assess the breach within 72 hours and notify the relevant supervisory authority if it poses a risk to individuals. If the risk is high, you must also notify affected individuals. We help you establish incident response procedures and handle communications.",
  },
  {
    question: "What's the difference between a controller and a processor?",
    answer: "A controller determines why and how personal data is processed (your company, usually). A processor processes data on behalf of the controller (like a cloud provider or analytics service). Different obligations apply to each role under GDPR.",
  },
  {
    question: "How long does it take to become GDPR compliant?",
    answer: "Timeline varies based on your current state, data complexity, and organizational size. A basic compliance framework can often be established in 4-8 weeks. Full compliance with all documentation and processes typically takes 2-4 months for small to medium companies.",
  },
  {
    question: "Can you help with compliance beyond GDPR?",
    answer: "Yes, while GDPR is our primary focus, we also assist with related regulations like ePrivacy Directive (cookie consent), UK GDPR, and can advise on frameworks like ISO 27001. We take a holistic approach to privacy compliance.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background scroll-mt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent/5 via-highlight/5 to-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-highlight/10 text-highlight text-sm font-semibold rounded-full mb-4">
            <HelpCircle className="h-4 w-4" />
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Common questions about GDPR compliance and our services.
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-6 md:p-8 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-border last:border-b-0"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
