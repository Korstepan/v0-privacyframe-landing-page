import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#07111f] via-[#0d2744] to-[#6bbcff] text-white">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl shadow-black/20">
          <h1 className="text-5xl font-bold tracking-tight mb-6">Privacy Policy</h1>
          <p className="text-white/60 mb-14">Effective Date: May 11, 2026</p>

          <div className="space-y-12 text-white/80 leading-8 text-[15px]">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">1. Introduction</h2>
              <p>This Privacy Policy explains how PrivacyFrame ("we," "us," "our") collects, uses, and protects personal data when you use our website (https://www.privacyframe.io) and related services. As a team of privacy compliance consultants, we respect your privacy and are committed to protecting your personal data under the General Data Protection Regulation (GDPR).</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">2. Data Controller Information</h2>
              <p>The data controller responsible for processing your personal data is:</p>
              <p className="mt-4">PrivacyFrame<br />Email: sk@privacyframe.io<br />Address: Polykarpou Smyrnis 8, 4044, Germasogeia, Limassol, Cyprus</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">3. Personal Data We Collect</h2>

              <p className="mb-5">Based on the actual setup of our website, we collect only the personal data necessary to provide our services and maintain site functionality. Specifically:</p>

              <p className="mb-3 font-medium text-white">Identification details you provide directly:</p>

              <ul className="list-disc pl-6 space-y-2 mb-5">
                <li>Contact info – name and email address provided via the Consulation Request Form;</li>
                <li>Communication data* – any other identification details provided as part of the communications to us which, when used in conjunction with other types of data, may potentially allow to identify yourself (e.g. company name, job title, etc.).</li>
              </ul>

              <p className="mb-5">*Communication data covers any pieces of personal data which may be provided along with the messages, requests, or inquiries you send to us.</p>

              <p className="mb-3 font-medium text-white">Technical data automatically collected through the website, limited to:</p>

              <ul className="list-disc pl-6 space-y-2 mb-5">
                <li>IP address;</li>
                <li>Browser type and version;</li>
                <li>Operating system;</li>
                <li>Referral source (the site or search that led you to us);</li>
                <li>Date and time of your visit;</li>
                <li>Basic page interaction metrics (e.g., which pages you visited, time spent), if analytics tools (like Google Analytics) are active;</li>
                <li>Cookies, only if you consent to their use (based on cookie banner settings).</li>
              </ul>

              <p>We do not intentionally collect device-specific details like device model, screen resolution, or precise geolocation, nor do we collect sensitive personal data or data from children under 16 years of age.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">4. Purposes and Legal Bases of Processing</h2>

              <p className="mb-8">We process your personal data only where permitted by law. Below you can find the breakdown:</p>

              <div className="overflow-x-auto rounded-2xl border border-white/10 mb-8">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-white/10 text-white">
                    <tr>
                      <th className="p-4 border border-white/10">Category of Personal Data</th>
                      <th className="p-4 border border-white/10">Source</th>
                      <th className="p-4 border border-white/10">Grounds for processing</th>
                      <th className="p-4 border border-white/10">Purposes of processing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="align-top">
                      <td className="p-4 border border-white/10">Contact Info</td>
                      <td className="p-4 border border-white/10">User</td>
                      <td className="p-4 border border-white/10">Fulfillment of contract; legitimate interest (maintenance of the clients list)</td>
                      <td className="p-4 border border-white/10">(1) Conclusion of a contract;<br />(2) Reply to your inquiries or requests;<br />(3) Delivery of services</td>
                    </tr>
                    <tr className="align-top">
                      <td className="p-4 border border-white/10">Usage and Technical Data</td>
                      <td className="p-4 border border-white/10">User; Third-parties</td>
                      <td className="p-4 border border-white/10">Fulfillment of contract; legitimate interest (maintenance of the website)</td>
                      <td className="p-4 border border-white/10">(1) Provision of website functions;<br />(2) Necessary technical analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">5. Data Sharing and Categories of Recipients</h2>
              <p className="mb-5">We may share your data with the following categories of third-parties:</p>

              <ul className="list-disc pl-6 space-y-2 mb-5">
                <li>Service providers (e.g., hosting, analytics, communication tools) under strict confidentiality and data processing agreements.</li>
                <li>Legal authorities if required to comply with legal obligations;</li>
                <li>Third parties in the event of a business transfer or merger, in accordance with applicable laws.</li>
              </ul>

              <p>We do not sell your personal data.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">6. Data Retention</h2>
              <p>We retain personal data only as long as necessary for the purposes described above or as required by law. Once data is no longer needed, it is securely deleted.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">7. International Data Transfers</h2>
              <p>We may transfer your personal data to countries outside of your jurisdiction, including to countries that may not provide the same level of data protection as your home country. Thus, where required, we ensure that data transfers outside of the EU to the countries, in relation to which no ‘adequacy’ decision has been made by the European Commission, are subject to appropriate safeguards such as (SCCs) and other mechanisms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">8. Your Rights</h2>

              <ul className="list-disc pl-6 space-y-2 mb-5">
                <li>Right of access: You have a right to access the personal data that we collect and process about you.</li>
                <li>Right to rectification: If you want to correct or revise any of the data we process on you.</li>
                <li>Right to be forgotten: You have a right to request the permanent deletion your data. However, please note that exercising this right is also governed by legal and/or contractual retention guidelines.</li>
                <li>Right to restrict processing: If you believe your personal data is inaccurate or collected unlawfully, you may request limited use of your personal data.</li>
                <li>Right of portability: We provide you with the ability to move any of your data to a third party at any time.</li>
                <li>Right to object: If you decide that you no longer wish to allow your data to be included in our analytics, you may contact us to request removal of this data. You may also achieve this by opting out of any marketing outreach that you previously agreed to either by choosing unsubscribe in the related email or by making this selection within your account.</li>
              </ul>

              <p>To exercise these rights, contact us at sk@privacyframe.io.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">9. Security Measures</h2>
              <p>We implement technical and organizational measures to ensure the confidentiality, integrity, and availability of your personal data, including secure hosting, encryption, and access controls.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-5">10. Updates to This Policy</h2>
              <p className="mb-5">We reserve the right to update this Privacy Policy to reflect changes in law or our practices. Updates will be posted on our website with the revised effective date.</p>

              <p>Should you have any queries or need any clarification on our privacy practices – please, email us at sk@privacyframe.io.</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
