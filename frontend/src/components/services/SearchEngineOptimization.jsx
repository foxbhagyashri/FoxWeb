import React from "react";
import { Link } from "react-router-dom";

/* Section Header */
const SectionHeader = ({ badge, title }) => (
  <div className="max-w-4xl mb-12">
    <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-[#0529a0] border border-[#0529a0]/20 rounded-full bg-white">
      {badge}
    </span>

    <h2 className="text-3xl md:text-4xl font-bold text-[#0529a0] leading-tight mb-4">
      {title}
    </h2>

    <div className="w-16 h-1 bg-[#f85415] rounded"></div>
  </div>
);

function SearchEngineOptimization() {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="bg-[#0529a0] text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            SEO Company in Pune That Drives Leads, Not Just Rankings
          </h1>

          <p className="text-gray-200 mb-3">
            Most SEO companies increase visibility. Very few convert that into leads.
          </p>

          <p className="text-gray-200 mb-3">
            A results-focused SEO company prioritizes keywords that bring inquiries, visibility that drives calls, and strategies that convert into revenue.

          </p>
          <p className="text-gray-200 mb-3">
            At Foxaircomm, SEO is structured around buyer intent, Google Maps dominance, and conversion-focused execution so your visibility translates into actual leads, not just visits.

          </p>
          <p className="text-gray-200 mb-3">
            Foxaircomm works with service businesses, B2B companies, and local brands across Pune and PCMC.

          </p>
          <p className="text-gray-200 mb-5">
            Based on insights from multiple SEO campaigns across service businesses and B2B companies in Pune and PCMC, the difference is clear—visibility alone does not drive growth. Conversion-focused strategy does.

          </p>

          <Link
            to="/contact"
            className="bg-[#f85415] px-8 py-4 rounded-lg font-semibold"
          >
            Get Free SEO Audit
          </Link>
        </div>
      </section>

      {/* WHAT MAKES DIFFERENCE */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Strategy"
            title="What Makes a Results-Focused SEO Company Different"

          />
          <p className="mb-5">A high-performing SEO company in Pune does not measure success by rankings alone. It focuses on how search visibility translates into business outcomes.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Targets keywords that generate real inquiries—not just informational traffic",
              "Builds a strong presence on Google Maps to drive direct calls",
              "Tracks conversions, not just impressions and clicks",
              "Uses real user behavior and inquiry data to refine keyword strategy"
            ].map((item, i) => (
              <div key={i} className="p-6 border rounded-xl hover:shadow-md">
                {item}
              </div>
            ))}


          </div>
        </div>
        <p className="mt-4">This is why businesses comparing SEO companies in Pune or evaluating a reliable SEO agency in Pune increasingly prioritize lead generation over traffic metrics.

        </p>
      </section>

      {/* CASE STUDY */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-6xl mx-auto">

          <SectionHeader
            badge="Case Study"
            title="Proof That Intent-Based SEO Works (Real Scenario)"
          />

          <div className="bg-white p-8 rounded-2xl border">

            <p className="mb-4 text-gray-700">
              A service-based business in Wakad faced a common issue: steady traffic but no qualified leads.

            </p>
            <p className="mb-4 text-gray-700">
              Service category: B2B digital services (₹25K–₹80K deal size)

            </p>
            <p className="mb-4 text-gray-700">
              Their website attracted visitors through informational keywords but failed to generate inquiries.

            </p>

            <p className="mb-4 text-gray-700">
              The strategy shifted toward buyer-intent queries, including:

            </p>

            <ul className="space-y-3 text-gray-700">
              <li>📉“digital marketing agency Wakad pricing”
              </li>

              <li>🚀 “lead generation services Pune”
              </li>

            </ul>
            <p>Within 90 days:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>Traffic reduced by ~38% (intentional—to remove low-conversion queries)

              </li>

              <li>Conversion rate improved from 0.9% to 2.2%

              </li>
              <li>Qualified leads increased by 2.4x
              </li>
              <li>Average deal value increased by ~30%

              </li>
            </ul>
            <p>Results may vary based on industry and competition, but the pattern remains consistent.
            </p>
            <p>SEO works when it aligns with buying behavior—not browsing behavior.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Services"
            title="SEO Services in Pune — What You Actually Get"
          />
          <p>Most agencies describe SEO as a list of activities.
            Effective SEO is defined by outcomes.
          </p>
          <p>At Foxaircomm, execution focuses on:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-5">

            {[
              "Removing technical barriers that limit rankings",
              "Building pages that turn search traffic into actual business inquiries",
              "Optimizing Google Maps to increase direct calls and local visibility",
              "Structuring keyword strategy to move users from search → inquiry",
              "Tracking performance through lead flow, conversion rates, and revenue signals"
            ].map((item, i) => (
              <div key={i} className="p-6 border rounded-xl">
                {item}
              </div>
            ))}


          </div>
          <p className="mt-4">This approach is especially relevant for enterprises where SEO execution must align with measurable ROI.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Process"
            title="How Our SEO Strategy Works (Foxaircomm Lead-First SEO Framework™)"
          />

          <p className="text-gray-600 mb-10 max-w-3xl">
            SEO execution follows a structured system designed for lead generation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold text-[#0529a0] mb-2">
                Revenue Gap Audit
              </h3>
              <p className="text-sm text-gray-600">
                Identifies the gap between current visibility and actual business outcomes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold text-[#0529a0] mb-2">
                Intent Mapping Engine
              </h3>
              <p className="text-sm text-gray-600">
                Keywords are evaluated using a Lead Probability Index (LPI):
                <ul>
                  <li>Commercial intent
                  </li>
                  <li>Likelihood of inquiry
                  </li>
                  <li>Real conversion behavior
                  </li>
                </ul><br></br>
                This scoring is based on actual conversion patterns—not theoretical keyword value.
                <br></br>
                Low-performing keywords are eliminated early.

              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold text-[#0529a0] mb-2">
                Conversion Page Deployment

              </h3>
              <p className="text-sm text-gray-600">
                Pages are structured to guide action:
                <ul>
                  <li>Service pages → inquiries
                  </li>
                  <li>Supporting content → intent building
                  </li>
                  <li>Homepage → authority
                  </li>
                </ul>
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold text-[#0529a0] mb-2">
                Google Maps Optimization

              </h3>
              <p className="text-sm text-gray-600">
                Focus on:
                <ul>
                  <li>Category accuracy
                  </li>
                  <li>Proximity signals
                  </li>
                  <li>Review and engagement signals
                  </li>
                  <li>Engagement actions (calls, clicks, direction requests) that strengthen rankings over time
                  </li>
                </ul>
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold text-[#0529a0] mb-2">
                Tracking & Optimization
              </h3>
              <p className="text-sm text-gray-600">
                Measured through:
                <ul>
                  <li>Calls</li>
                  <li>Inquiries</li>
                  <li>Conversion rates</li>
                  <li>Lead quality
                  </li>
                </ul><br></br>
                In simple terms, we rank fewer keywords—but the ones that actually generate inquiries.

              </p>
            </div>


            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold text-[#0529a0] mb-2">
                Google Maps SEO in Pune — Why It Drives Faster Results

              </h3>
              <p className="text-sm text-gray-600">
                Local search behavior in Pune and PCMC is highly action-driven.
                <br></br>
                Users typically:

                <ul>
                  <li>Search with “near me” intent
                  </li>
                  <li>Call directly from listings
                  </li>
                  <li>Choose based on reviews and visibility
                  </li>

                </ul><br></br>
                Key observations:


                <ul>
                  <li>40–65% of leads come directly from Maps
                  </li>
                  <li>Top 3 listings capture the majority of interactions
                  </li>
                  <li>Review keywords to improve ranking relevance
</li>
<li>Businesses with consistent review velocity outperform static profiles
</li>
                </ul>
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">

          <SectionHeader
            badge="Pricing"
            title="SEO Pricing in Pune"
          />

          <div className="grid md:grid-cols-3 gap-6 text-center">

            <div className="p-6 border rounded-xl">
              <h3 className="font-bold text-[#0529a0]">Local SEO</h3>
              <p className="text-gray-600 mt-2">₹15K – ₹35K/month</p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-bold text-[#0529a0]">Mid-Level SEO</h3>
              <p className="text-gray-600 mt-2">₹35K – ₹75K/month</p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="font-bold text-[#0529a0]">Advanced SEO</h3>
              <p className="text-gray-600 mt-2">₹75K+</p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY SEO FAILS */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-6xl mx-auto">

          <SectionHeader
            badge="Problem"
            title="Why Your SEO Is Not Generating Leads"
          />

          <ul className="space-y-4 text-gray-700">
            <li>❌ Targeting wrong keywords</li>
            <li>❌ Focusing on traffic instead of conversions</li>
            <li>❌ No alignment with user intent</li>
          </ul>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0529a0] text-white text-center px-4">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Get Clarity on Your SEO Performance
          </h2>

          <p className="mb-8 text-gray-200">
            We’ll show what’s limiting your SEO and how to fix it within 48 hours.
          </p>

          <Link
            to="/contact"
            className="bg-[#f85415] px-8 py-4 rounded-lg font-semibold"
          >
            Book Free SEO Consultation
          </Link>

        </div>
      </section>

    </div>
  );
}

export default SearchEngineOptimization;