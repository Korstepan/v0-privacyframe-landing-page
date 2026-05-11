export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#07111f] via-[#0d2744] to-[#6bbcff] text-white">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl shadow-black/20">
          <h1 className="text-5xl font-bold tracking-tight mb-6">Privacy Policy</h1>
          <p className="text-white/60 mb-14">Effective Date: [Insert Date]</p>

          <div className="space-y-10 text-white/80 leading-8 text-[15px]">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>
                This Privacy Policy explains how PrivacyFrame (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) collects, uses, and protects personal data when you use our website (https://www.privacyframe.io) and related services. As a team of privacy compliance consultants, we respect your privacy and are committed to protecting your personal data under the General Data Protection Regulation (GDPR).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Data Controller Information</h2>
              <p>
                PrivacyFrame<br />
                Email: sk@privacyframe.io<br />
                Address: Polykarpou Smyrnis 8, 4044, Germasogeia, Limassol, Cyprus
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Personal Data We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact info – name and email address provided via the Consultation Request Form;</li>
                <li>Communication data provided within your inquiries;</li>
                <li>IP address and browser details;</li>
                <li>Operating system and referral source;</li>
                <li>Basic page interaction metrics;</li>
                <li>Cookies where consent is provided.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Purposes and Legal Bases of Processing</h2>
              <p>
                We process your personal data only where permitted by law, including for replies to inquiries, delivery of services, website functionality, and necessary technical analytics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Sharing and Categories of Recipients</h2>
              <p>
                We may share data with service providers, legal authorities where legally required, and third parties in case of merger or business transfer. We do not sell personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Data Retention</h2>
              <p>
                We retain personal data only as long as necessary for the purposes described above or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. International Data Transfers</h2>
              <p>
                Where required, transfers outside the EU are protected through safeguards including Standard Contractual Clauses (SCCs).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Your Rights</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right of access</li>
                <li>Right to rectification</li>
                <li>Right to be forgotten</li>
                <li>Right to restrict processing</li>
                <li>Right of portability</li>
                <li>Right to object</li>
              </ul>
              <p className="mt-4">To exercise these rights, contact us at sk@privacyframe.io.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Security Measures</h2>
              <p>
                We implement technical and organizational measures to ensure confidentiality, integrity, and availability of personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Updates to This Policy</h2>
              <p>
                We reserve the right to update this Privacy Policy to reflect changes in law or our practices.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
