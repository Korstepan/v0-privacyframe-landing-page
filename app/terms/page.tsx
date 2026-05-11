export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold tracking-tight mb-6">Terms of Service</h1>
        <p className="text-white/60 mb-12">Effective Date: 2026</p>

        <div className="space-y-10 text-white/80 leading-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p>
              These Terms govern your use of the PrivacyFrame website and any services provided under separate agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Outsourced DPO services</li>
              <li>GDPR audits and assessments</li>
              <li>Privacy documentation drafting</li>
              <li>DPIA and RoPA support</li>
              <li>General privacy consultancy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
            <p>
              All website content and materials provided during service delivery remain the intellectual property of PrivacyFrame unless otherwise agreed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
            <p>
              PrivacyFrame provides advisory services only and does not guarantee any particular legal or business outcome.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Applicable Law</h2>
            <p>
              These Terms are governed by English law. Courts of Cyprus shall have jurisdiction unless otherwise permitted by applicable law.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
