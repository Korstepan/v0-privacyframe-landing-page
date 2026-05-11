export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold tracking-tight mb-6">Privacy Policy</h1>
        <p className="text-white/60 mb-12">Effective Date: 2026</p>

        <div className="space-y-10 text-white/80 leading-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p>
              This Privacy Policy explains how PrivacyFrame collects, uses, and protects personal data when you use our website and related services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Controller</h2>
            <p>
              PrivacyFrame<br />
              Polykarpou Smyrnis 8, 4044, Germasogeia, Limassol, Cyprus<br />
              sk@privacyframe.io
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Personal Data We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information submitted through consultation forms</li>
              <li>Communication data voluntarily provided by users</li>
              <li>Basic technical and analytics information</li>
              <li>Cookies where consent is provided</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Purposes of Processing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing requested services</li>
              <li>Responding to inquiries</li>
              <li>Website functionality and security</li>
              <li>Maintaining client relationships</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
            <p>
              You may request access, rectification, deletion, restriction, portability, or objection to processing of your personal data.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
