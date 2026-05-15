export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          For SaaS Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Identify Subscription Churn{" "}
          <span className="text-[#58a6ff]">Before Cancellation</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Stripe account to analyze usage patterns, failed payments, and customer behavior. Get churn risk scores before customers leave.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Analyzing — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to explore. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Stripe API Integration", "Churn Risk Scoring", "Failed Payment Alerts", "Behavioral Patterns", "Retention Insights"].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#8b949e]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-medium uppercase tracking-wide mb-2">Single Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$15</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stop churn</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Connect unlimited Stripe accounts",
              "Real-time churn risk dashboard",
              "Failed payment pattern analysis",
              "Customer behavior scoring",
              "Email alerts for at-risk accounts",
              "PostgreSQL data storage included",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does it connect to Stripe?</h3>
            <p className="text-[#8b949e] text-sm">You provide your Stripe API key and configure a webhook endpoint. The app pulls subscription, invoice, and customer data automatically and begins scoring churn risk within minutes.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How is churn risk calculated?</h3>
            <p className="text-[#8b949e] text-sm">We use a scoring algorithm that weighs failed payment frequency, subscription age, plan downgrades, usage drops, and support ticket volume to produce a 0–100 risk score per customer.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Is my Stripe data secure?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Your API keys are encrypted at rest and never shared. All data is stored in your own PostgreSQL instance and processed server-side. We never store raw payment details.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-sm text-[#6e7681]">
        <p>© {new Date().getFullYear()} Stripe Churn Analyzer. Built for SaaS founders.</p>
      </footer>
    </main>
  );
}
