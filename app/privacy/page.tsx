export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#07111f] via-[#0d2744] to-[#6bbcff] text-white">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl shadow-black/20">
          <h1 className="text-5xl font-bold tracking-tight mb-6">Privacy Policy</h1>
          <p className="text-white/60 mb-14">Effective Date: May 11, 2026</p>

          <div className="space-y-12 text-white/80 leading-8 text-[15px]">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">1. Introduction</h2>
              <p>
                This Privacy Policy explains how PrivacyFrame (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) collects, uses, and protects personal data when you use our website (https://www.privacyframe.io) and related services. As a team of privacy compliance consultants, we respect your privacy and are committed to protecting your personal data under the General Data Protection Regulation (GDPR).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">2. Data Controller Information</h2>
              <p>
                The data controller responsible for processing your personal data is:
              </p>
              <p className="mt-4">
                PrivacyFrame<br />
                Email: sk@privacyframe.io<br />
                Address: Polykarpou Smyrnis 8, 4044, Germasogeia, Limassol, Cyprus
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">3. Personal Data We Collect</h2>

              <p className="mb-5">
                Based on the actual setup of our website, we collect only the personal data necessary to provide our services and maintain site functionality. Specifically:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-5">
                <li>Identification details you provide directly;</li>
                <li>Contact info – name and email address provided via the Consulation Request Form;</li>
                <li>Communication data – any other identification details provided as part of the communications to us which may potentially allow to identify yourself;</li>
                <li>Technical data automatically collected through the website;</li>
                <li>IP address;</li>
                <li>Browser type and version;</li>
                <li>Operating system;</li>
                <li>Referral source;</li>
                <li>Date and time of your visit;</li>
                <li>Basic page interaction metrics;</li>
                <li>Cookies, only if you consent to their use.</li>
              </ul>

              <p>
                We do not intentionally collect device-specific details like device model, screen resolution, or precise geolocation, nor do we collect sensitive personal data or data from children under 16 years of age.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">4. Purposes and Legal Bases of Processing</h2>

              <p>
                We process your personal data only where permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">5. Data Sharing and Categories of Recipients</h2>

              <p className="mb-5">
                We may share your data with the following categories of third-parties:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-5">
                <li>Service providers under confidentiality and data processing agreements;</li>
                <li>Legal authorities if required to comply with legal obligations;</li>
                <li>Third parties in the event of a business transfer or merger.</li>
              </ul>

              <p>
                We do not sell your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">6. Data Retention</h2>
              <p>
                We retain personal data only as long as necessary for the purposes described above or as required by law. Once data is no longer needed, it is securely deleted.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">7. International Data Transfers</h2>
              <p>
                We may transfer your personal data to countries outside of your jurisdiction, including to countries that may not provide the same level of data protection as your home country. Where required, we ensure that data transfers outside of the EU are subject to appropriate safeguards such as SCCs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">8. Your Rights</h2>

              <ul className="list-disc pl-6 space-y-2 mb-5">
                <li>Right of access</li>
                <li>Right to rectification</li>
                <li>Right to be forgotten</li>
                <li>Right to restrict processing</li>
                <li>Right of portability</li>
                <li>Right to object</li>
              </ul>

              <p>
                To exercise these rights, contact us at sk@privacyframe.io.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">9. Security Measures</h2>
              <p>
                We implement technical and organizational measures to ensure the confidentiality, integrity, and availability of your personal data, including secure hosting, encryption, and access controls.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">10. Updates to This Policy</h2>
              <p>
                We reserve the right to update this Privacy Policy to reflect changes in law or our practices. Updates will be posted on our website with the revised effective date.
              </p>

              <p className="mt-5">
                Should you have any queries or need any clarification on our privacy practices – please, email us at sk@privacyframe.io.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
