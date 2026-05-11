export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#07111f] via-[#0d2744] to-[#6bbcff] text-white">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl shadow-black/20">
          <h1 className="text-5xl font-bold tracking-tight mb-6">General Terms and Conditions</h1>
          <p className="text-white/60 mb-14">Effective Date: [Insert Date]</p>

          <div className="space-y-10 text-white/80 leading-8 text-[15px]">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>
                Welcome to www.privacyframe.io (&quot;Website&quot;), operated by PrivacyFrame (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These General Terms & Conditions govern your use of our Website as well as any services we provide under separate agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Services Provided</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Data Protection Officer role outsourcing;</li>
                <li>GDPR compliance assessments;</li>
                <li>Privacy Policy drafting and frameworks;</li>
                <li>DPIAs and RoPA handling;</li>
                <li>General personal data protection consultancy;</li>
                <li>Staff training and ongoing compliance support.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Your Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information;</li>
                <li>Use services only for legitimate purposes;</li>
                <li>Not interfere with Website functionality.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property. Confidentiality.</h2>
              <p>
                All content and materials remain the intellectual property of PrivacyFrame unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Limitation of Liability. No Warranty.</h2>
              <p>
                PrivacyFrame provides advisory services only and gives no guarantees regarding business or legal outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Miscellaneous</h2>
              <p>
                These Terms are governed by English law. Courts of Cyprus shall have jurisdiction subject to applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Information</h2>
              <p>
                For any questions regarding these Terms, contact us at sk@privacyframe.io.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
