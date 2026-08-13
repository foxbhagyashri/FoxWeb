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

function WhatsAppMarketingSoftware() {
  return (
    <div className="overflow-hidden">

      <Helmet>
        <title>WhatsApp Marketing Services in Pune | Fox Aircomm
        </title>
        <meta name="description" content="Fox Aircomm offers WhatsApp marketing services in Pune, including bulk messaging, WhatsApp API and automation solutions for small and growing businesses." />
      </Helmet>


      {/* HERO */}
      <section className="bg-[#0529a0] text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">

          <span className="inline-block bg-white/10 border border-white/20 text-sm px-4 py-1.5 rounded-full mb-6">
            WhatsApp Marketing Services in Pune
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            WhatsApp Marketing Company in Pune That Generates Leads & Customer Engagement
          </h1>

          <p className="text-gray-200 mb-3">
            Most businesses use WhatsApp only for communication. Very few use it as a structured lead generation and customer engagement channel.
          </p>

          <p className="text-gray-200 mb-3">
            A results-focused WhatsApp marketing company helps businesses automate follow-ups, improve response rates, generate qualified inquiries, and increase customer retention.
          </p>

          <p className="text-gray-200 mb-3">
            At Foxaircomm, WhatsApp marketing campaigns are designed around buyer intent, automation workflows, broadcast engagement, and conversion-focused communication strategies.
          </p>

          <p className="text-gray-200 mb-3">
            We help service businesses, e-commerce brands, educational institutes, healthcare providers, and local businesses across Pune and PCMC improve lead generation using WhatsApp marketing.
          </p>

          <p className="text-gray-200 mb-5">
            Based on campaign insights across multiple industries, WhatsApp consistently delivers higher engagement and faster response rates compared to traditional email and social media communication channels.
          </p>

          <Link
            to="/contact"
            className="bg-[#f85415] px-8 py-4 rounded-lg font-semibold"
          >
            Get Free WhatsApp Marketing Audit
          </Link>
        </div>
      </section>

      {/* WHAT MAKES DIFFERENCE */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Strategy"
            title="What Makes a Results-Focused WhatsApp Marketing Company Different"
          />

          <p className="mb-5 text-gray-700">
            A high-performing WhatsApp marketing agency focuses on conversations that generate conversions — not just message delivery.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Builds automated WhatsApp funnels for lead nurturing",
              "Improves inquiry response speed and customer engagement",
              "Uses broadcast campaigns to increase repeat inquiries and sales",
              "Tracks engagement, click-throughs, and lead conversion rates",
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
            Businesses comparing WhatsApp marketing services in Pune increasingly prioritize conversion-focused communication strategies instead of manual messaging workflows.
          </p>

        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-6xl mx-auto">

          <SectionHeader
            badge="Case Study"
            title="Proof That WhatsApp Marketing Generates Real Business Results"
          />

          <div className="bg-white p-8 rounded-2xl border">

            <p className="mb-4 text-gray-700">
              A service-based business in Baner struggled with delayed inquiry follow-ups and low customer response rates.
            </p>

            <p className="mb-4 text-gray-700">
              Business category: Local service business with high inquiry dependency.
            </p>

            <p className="mb-4 text-gray-700">
              Leads were coming through ads and social media, but slow response times caused inquiry drop-offs.
            </p>

            <p className="mb-4 text-gray-700">
              The WhatsApp marketing strategy included:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>🚀 Automated WhatsApp lead response workflows</li>
              <li>📈 Broadcast campaigns for repeat engagement</li>
              <li>📞 Click-to-WhatsApp ads integration</li>
              <li>💬 Personalized inquiry nurturing sequences</li>
            </ul>

            <p className="mt-5 mb-3 font-medium">
              Within 90 days:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>Lead response time improved by 70%</li>
              <li>Qualified inquiries increased by 2.3x</li>
              <li>Customer engagement rates improved significantly</li>
              <li>Repeat customer inquiries increased by 40%</li>
            </ul>

            <p className="mt-5 text-gray-700">
              Results vary by industry, but WhatsApp marketing consistently improves customer engagement and inquiry conversion speed.
            </p>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Services"
            title="WhatsApp Marketing Services in Pune — What You Actually Get"
          />

          <p className="text-gray-700">
            Most agencies treat WhatsApp marketing as simple messaging.
            Effective WhatsApp marketing is built around automation, engagement, and lead conversion.
          </p>

          <p className="text-gray-700 mt-2">
            At Foxaircomm, execution focuses on:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-5">

            {[
              "WhatsApp API integration and automation setup",
              "Broadcast campaigns for promotions and customer engagement",
              "Lead nurturing workflows and follow-up automation",
              "Click-to-WhatsApp ad campaign integration",
              "Customer support and inquiry automation systems",
              "Conversion-focused messaging strategies",
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
            This approach helps businesses improve customer communication, response speed, and inquiry conversion rates.
          </p>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Process"
            title="How Our WhatsApp Marketing Strategy Works"
          />

          <p className="text-gray-600 mb-10 max-w-3xl">
            WhatsApp marketing campaigns follow a structured lead generation and customer engagement framework.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold text-[#0529a0] mb-2">
                Communication Gap Audit
              </h3>

              <p className="text-sm text-gray-600">
                Identifies where inquiries are being lost due to delayed responses or weak engagement systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold text-[#0529a0] mb-2">
                Audience Segmentation
              </h3>

              <p className="text-sm text-gray-600">
                Users are segmented based on inquiry behavior, purchase intent, and engagement history.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold text-[#0529a0] mb-2">
                Automation Workflow Setup
              </h3>

              <p className="text-sm text-gray-600">
                Automated responses and nurturing workflows are built to improve response consistency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold text-[#0529a0] mb-2">
                Broadcast Campaign Deployment
              </h3>

              <p className="text-sm text-gray-600">
                Promotional and engagement campaigns are launched to increase customer interaction.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold text-[#0529a0] mb-2">
                Retargeting & Follow-Ups
              </h3>

              <p className="text-sm text-gray-600">
                Warm leads are re-engaged using structured WhatsApp follow-up campaigns.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="font-semibold text-[#0529a0] mb-2">
                Tracking & Optimization
              </h3>

              <p className="text-sm text-gray-600">
                Campaigns are optimized based on open rates, response rates, inquiries, and conversions.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Industries"
            title="WhatsApp Marketing Strategy Must Change by Industry"
          />

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
                Service Businesses
              </h3>

              <p className="text-gray-600 leading-relaxed">
                WhatsApp inquiry automation, appointment reminders, and consultation follow-up campaigns.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
                E-Commerce Brands
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Cart recovery campaigns, order updates, product promotions, and repeat customer engagement workflows.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
                Educational Institutes
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Admission inquiry handling, student engagement campaigns, and automated follow-up systems.
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
            title="WhatsApp Marketing Pricing in Pune"
          />

          <div className="grid md:grid-cols-3 gap-6 text-center">

            <div className="p-6 border rounded-xl bg-white">
              <h3 className="font-bold text-[#0529a0]">
                Basic Automation
              </h3>

              <p className="text-gray-600 mt-2">
                ₹10K – ₹25K/month
              </p>
            </div>

            <div className="p-6 border rounded-xl bg-white">
              <h3 className="font-bold text-[#0529a0]">
                Growth Campaigns
              </h3>

              <p className="text-gray-600 mt-2">
                ₹25K – ₹60K/month
              </p>
            </div>

            <div className="p-6 border rounded-xl bg-white">
              <h3 className="font-bold text-[#0529a0]">
                Enterprise Solutions
              </h3>

              <p className="text-gray-600 mt-2">
                ₹60K+
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
            title="Why Your WhatsApp Marketing Is Not Generating Leads"
          />

          <ul className="space-y-4 text-gray-700">
            <li>❌ No automation or follow-up structure</li>
            <li>❌ Generic broadcast messaging without personalization</li>
            <li>❌ Slow inquiry response times</li>
            <li>❌ No lead nurturing workflows</li>
            <li>❌ No tracking for conversions or engagement</li>
          </ul>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0529a0] text-white text-center px-4">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Improve Customer Engagement & Lead Generation With WhatsApp Marketing
          </h2>

          <p className="mb-8 text-gray-200">
            We’ll identify what’s limiting your WhatsApp marketing performance and show exactly how to improve conversions within 48 hours.
          </p>

          <Link
            to="/contact"
            className="bg-[#f85415] px-8 py-4 rounded-lg font-semibold"
          >
            Book Free WhatsApp Marketing Consultation
          </Link>

        </div>
      </section>

    </div>
  );
}

export default WhatsAppMarketingSoftware;