import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Churn Analyzer — Identify Subscription Churn Before It Happens",
  description: "Connect your Stripe account to analyze usage patterns, failed payments, and customer behavior to predict and prevent churn. Built for SaaS founders."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8d3da345-ba88-4240-b93d-376da955119f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
