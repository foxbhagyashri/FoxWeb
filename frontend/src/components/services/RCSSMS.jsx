import React from "react";
import { Helmet } from "react-helmet";
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

function RCSSMS() {
  return (
    <div className="overflow-hidden">

      <Helmet>
        <title>RCS Messaging Services in Pune | Fox Aircomm
        </title>
        <meta name="description" content="Send rich, interactive RCS messages to customers with Fox Aircomm's RCS SMS services in Akurdi PCMC Pune. Higher engagement than standard SMS." />
      </Helmet>


      {/* HERO */}
      <section className="bg-[#0529a0] text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">

          <span className="inline-block bg-white/10 border border-white/20 text-sm px-4 py-1.5 rounded-full mb-6">
            RCS & SMS Marketing Services in Pune
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            RCS & SMS Marketing Company in Pune That Improves Customer Engagement & Lead Generation
          </h1>

          <p className="text-gray-200 mb-3">
            Traditional SMS marketing delivers messages. Advanced RCS and SMS marketing creates interactive customer engagement experiences that generate inquiries, conversions, and repeat business.
          </p>

          <p className="text-gray-200 mb-3">
            A results-focused RCS and SMS marketing company helps businesses improve delivery rates, increase customer response, automate campaigns, and drive measurable engagement across mobile devices.
          </p>

          <p className="text-gray-200 mb-3">
            At Foxaircomm, RCS and SMS campaigns are structured around customer intent, automation workflows, personalized communication, and conversion-focused messaging strategies.
          </p>

          <p className="text-gray-200 mb-3">
            We work with healthcare providers, educational institutes, service businesses, real estate companies, e-commerce brands, and local businesses across Pune and PCMC.
          </p>

          <p className="text-gray-200 mb-5">
            Based on campaign insights across multiple industries, RCS and SMS marketing consistently deliver faster reach, higher open rates, and stronger customer engagement compared to many traditional communication channels.
          </p>

          <Link
            to="/contact"
            className="bg-[#f85415] px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Get Free RCS & SMS Marketing Audit
          </Link>

        </div>
      </section>

      {/* STRATEGY */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Strategy"
            title="What Makes a Results-Focused RCS & SMS Marketing Company Different"
          />

          <p className="mb-5 text-gray-700">
            A high-performing RCS and SMS marketing agency focuses on customer engagement, inquiry generation, and communication efficiency — not just bulk message delivery.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Builds personalized SMS and RCS engagement campaigns",
              "Improves customer response rates with automation workflows",
              "Uses interactive RCS messaging for higher engagement",
              "Tracks delivery rates, clicks, responses, and conversion performance",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border rounded-xl hover:shadow-md transition"
              >
                {item}
              </div>
            ))}

          </div>

          <p className="mt-4 text-gray-700">
            Businesses comparing RCS and SMS marketing services in Pune increasingly prioritize engagement-focused communication systems instead of generic bulk messaging solutions.
          </p>

        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-6xl mx-auto">

          <SectionHeader
            badge="Case Study"
            title="Proof That RCS & SMS Marketing Generates Real Customer Engagement"
          />

          <div className="bg-white p-8 rounded-2xl border">

            <p className="mb-4 text-gray-700">
              A healthcare service provider in Pune faced low customer engagement and missed appointment follow-ups due to inconsistent communication systems.
            </p>

            <p className="mb-4 text-gray-700">
              Business category: Appointment-based healthcare services.
            </p>

            <p className="mb-4 text-gray-700">
              Patients frequently missed updates, resulting in lower repeat visits and operational inefficiencies.
            </p>

            <p className="mb-4 text-gray-700">
              The RCS and SMS marketing strategy included:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>📲 Automated appointment reminder campaigns</li>
              <li>🚀 Interactive RCS messaging with action buttons</li>
              <li>📈 Personalized follow-up SMS sequences</li>
              <li>💬 Customer engagement automation workflows</li>
            </ul>

            <p className="mt-5 mb-3 font-medium">
              Within 90 days:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>Appointment confirmation rates improved significantly</li>
              <li>Customer response rates increased by 2.1x</li>
              <li>Missed follow-ups reduced substantially</li>
              <li>Repeat customer engagement improved by 45%</li>
            </ul>

            <p className="mt-5 text-gray-700">
              Results vary by industry, but RCS and SMS marketing consistently improve communication speed, engagement, and customer response quality.
            </p>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Services"
            title="RCS & SMS Marketing Services in Pune — What You Actually Get"
          />

          <p className="text-gray-700">
            Most providers treat SMS marketing as simple message broadcasting.
            Effective RCS and SMS marketing is built around engagement, automation, and customer conversion.
          </p>

          <p className="text-gray-700 mt-2">
            At Foxaircomm, execution focuses on:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-5">

            {[
              "Bulk SMS campaign setup and management",
              "RCS messaging campaigns with interactive features",
              "Customer engagement automation workflows",
              "Transactional SMS and notification systems",
              "Lead nurturing and promotional campaigns",
              "Conversion-focused mobile communication strategies",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border rounded-xl"
              >
                {item}
              </div>
            ))}

          </div>

          <p className="mt-4 text-gray-700">
            This approach helps businesses improve customer communication, engagement rates, and inquiry conversion performance.
          </p>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Process"
            title="How Our RCS & SMS Marketing Strategy Works"
          />

          <p className="text-gray-600 mb-10 max-w-3xl">
            RCS and SMS marketing campaigns follow a structured customer engagement and lead generation framework.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: "Communication Audit",
                desc: "Identifies customer engagement gaps and messaging inefficiencies limiting response rates.",
              },
              {
                title: "Audience Segmentation",
                desc: "Users are segmented based on customer behavior, engagement patterns, and conversion intent.",
              },
              {
                title: "Automation Workflow Setup",
                desc: "Automated campaigns and customer journeys are created for consistent communication.",
              },
              {
                title: "Campaign Deployment",
                desc: "RCS and SMS campaigns are launched for promotions, reminders, and customer engagement.",
              },
              {
                title: "Retargeting & Follow-Ups",
                desc: "Warm audiences are re-engaged using structured follow-up messaging campaigns.",
              },
              {
                title: "Tracking & Optimization",
                desc: "Campaigns are optimized using delivery rates, engagement metrics, inquiries, and conversions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border"
              >
                <h3 className="font-semibold text-[#0529a0] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Industries"
            title="RCS & SMS Marketing Strategy Must Change by Industry"
          />

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
                Healthcare Providers
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Appointment reminders, patient engagement campaigns, and automated follow-up communication systems.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
                E-Commerce Brands
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Order updates, promotional messaging, abandoned cart recovery, and repeat customer engagement campaigns.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
                Educational Institutes
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Admission alerts, student communication systems, and engagement-focused notification campaigns.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-6xl mx-auto">

          <SectionHeader
            badge="Pricing"
            title="RCS & SMS Marketing Pricing in Pune"
          />

          <div className="grid md:grid-cols-3 gap-6 text-center">

            <div className="p-6 border rounded-xl bg-white">
              <h3 className="font-bold text-[#0529a0]">
                Basic SMS Campaigns
              </h3>

              <p className="text-gray-600 mt-2">
                ₹8K – ₹20K/month
              </p>
            </div>

            <div className="p-6 border rounded-xl bg-white">
              <h3 className="font-bold text-[#0529a0]">
                Growth Engagement Campaigns
              </h3>

              <p className="text-gray-600 mt-2">
                ₹20K – ₹50K/month
              </p>
            </div>

            <div className="p-6 border rounded-xl bg-white">
              <h3 className="font-bold text-[#0529a0]">
                Enterprise Communication Solutions
              </h3>

              <p className="text-gray-600 mt-2">
                ₹50K+
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHY FAIL */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">

          <SectionHeader
            badge="Problem"
            title="Why Your RCS & SMS Marketing Is Not Generating Engagement"
          />

          <ul className="space-y-4 text-gray-700">
            <li>❌ Generic bulk messaging without personalization</li>
            <li>❌ No automation or customer journey workflows</li>
            <li>❌ Low customer engagement due to poor messaging structure</li>
            <li>❌ No audience segmentation strategy</li>
            <li>❌ No tracking for engagement or conversions</li>
          </ul>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0529a0] text-white text-center px-4">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Improve Customer Engagement With RCS & SMS Marketing
          </h2>

          <p className="mb-8 text-gray-200">
            We’ll identify what is limiting your customer communication performance and show exactly how to improve engagement and lead generation within 48 hours.
          </p>

          <Link
            to="/contact"
            className="bg-[#f85415] px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Book Free RCS & SMS Marketing Consultation
          </Link>

        </div>
      </section>

    </div>
  );
}

export default RCSSMS;