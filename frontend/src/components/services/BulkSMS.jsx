import React from "react";
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";

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

function BulkSMS() {
  return (
    <div className="overflow-hidden">

      {/* SEO META TAGS */}
      {/* <Helmet> */}
        <title>
          Bulk SMS Services in Pune | RCS & SMS Marketing Company Pune
        </title>

        <meta
          name="description"
          content="Foxaircomm provides Bulk SMS, transactional SMS, promotional SMS, and RCS marketing services in Pune. Improve customer engagement, lead generation, OTP delivery, and communication automation with high-delivery SMS campaigns."
        />

        <meta
          name="keywords"
          content="Bulk SMS services Pune, SMS marketing company Pune, RCS marketing Pune, promotional SMS Pune, transactional SMS Pune, OTP SMS services Pune, bulk SMS provider Pune, business SMS solutions Pune, Foxaircomm"
        />

        <link
          rel="canonical"
          href="https://www.foxaircomm.com/bulk-sms-services-pune"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Bulk SMS Services in Pune | RCS & SMS Marketing Company"
        />

        <meta
          property="og:description"
          content="Generate leads and improve customer engagement with professional Bulk SMS and RCS marketing services in Pune."
        />

        <meta
          property="og:url"
          content="https://www.foxaircomm.com/bulk-sms-services-pune"
        />

        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content="Bulk SMS Services in Pune | Foxaircomm"
        />

        <meta
          name="twitter:description"
          content="Professional Bulk SMS, transactional SMS, and RCS marketing solutions for businesses in Pune."
        />
      {/* </Helmet> */}

      {/* HERO */}
      <section className="bg-[#0529a0] text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">

          <span className="inline-block bg-white/10 border border-white/20 text-sm px-4 py-1.5 rounded-full mb-6">
            Bulk SMS & RCS Marketing Services in Pune
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bulk SMS Company in Pune That Improves Customer Engagement & Lead Generation
          </h1>

          <p className="text-gray-200 mb-3">
            Bulk SMS marketing is still one of the fastest and most effective
            communication channels for businesses looking to improve customer
            engagement, inquiry generation, and communication automation.
          </p>

          <p className="text-gray-200 mb-3">
            A professional bulk SMS company helps businesses automate messaging,
            improve delivery rates, send transactional alerts, and increase
            customer response using personalized SMS campaigns.
          </p>

          <p className="text-gray-200 mb-3">
            At Foxaircomm, Bulk SMS and RCS marketing campaigns are designed
            around customer intent, automation workflows, engagement tracking,
            and conversion-focused communication systems.
          </p>

          <p className="text-gray-200 mb-3">
            We provide bulk SMS services for healthcare providers, educational
            institutes, service businesses, e-commerce brands, real estate
            companies, and enterprises across Pune and PCMC.
          </p>

          <p className="text-gray-200 mb-5">
            Our SMS marketing solutions help businesses improve customer
            communication, generate qualified leads, increase repeat engagement,
            and automate important notifications with high delivery performance.
          </p>

          <Link
            to="/contact"
            className="bg-[#f85415] px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Get Free Bulk SMS Consultation
          </Link>

        </div>
      </section>

      {/* STRATEGY */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Strategy"
            title="What Makes a Results-Focused Bulk SMS Company Different"
          />

          <p className="mb-5 text-gray-700">
            A high-performing bulk SMS marketing agency focuses on customer
            engagement, communication speed, automation, and inquiry conversion —
            not just message delivery volume.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "High-delivery bulk SMS campaigns for business communication",
              "Automated transactional SMS and OTP systems",
              "Personalized promotional SMS campaigns for customer engagement",
              "RCS messaging campaigns with interactive customer experiences",
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
            Businesses searching for bulk SMS services in Pune increasingly
            prioritize automation, engagement tracking, and customer response
            optimization instead of basic bulk messaging systems.
          </p>

        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-6xl mx-auto">

          <SectionHeader
            badge="Case Study"
            title="How Bulk SMS Marketing Improved Customer Engagement"
          />

          <div className="bg-white p-8 rounded-2xl border">

            <p className="mb-4 text-gray-700">
              A healthcare clinic in Pune faced low patient engagement and
              missed appointment confirmations due to inconsistent follow-up
              communication.
            </p>

            <p className="mb-4 text-gray-700">
              Business category: Appointment-based healthcare services.
            </p>

            <p className="mb-4 text-gray-700">
              Patients frequently missed appointment reminders, resulting in
              lower operational efficiency and reduced repeat visits.
            </p>

            <p className="mb-4 text-gray-700">
              The Bulk SMS strategy included:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>📲 Automated appointment reminder SMS campaigns</li>
              <li>🚀 Personalized follow-up messaging workflows</li>
              <li>📈 Promotional SMS campaigns for repeat engagement</li>
              <li>💬 Transactional SMS automation for confirmations</li>
            </ul>

            <p className="mt-5 mb-3 font-medium">
              Within 90 days:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>Appointment confirmation rates improved significantly</li>
              <li>Customer engagement increased by 2.1x</li>
              <li>Missed follow-ups reduced substantially</li>
              <li>Repeat customer visits improved by 40%</li>
            </ul>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Services"
            title="Bulk SMS Services in Pune — What You Actually Get"
          />

          <p className="text-gray-700">
            Most providers treat SMS marketing as simple bulk message delivery.
            Effective SMS marketing is built around customer engagement,
            automation, and conversion-focused communication.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            {[
              "Promotional Bulk SMS campaigns",
              "Transactional SMS services",
              "OTP SMS integration solutions",
              "RCS messaging campaigns",
              "Lead nurturing and customer engagement workflows",
              "API integration for SMS automation",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border rounded-xl"
              >
                {item}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Process"
            title="How Our Bulk SMS Marketing Strategy Works"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: "Communication Audit",
                desc: "Identify customer engagement gaps and messaging inefficiencies.",
              },
              {
                title: "Audience Segmentation",
                desc: "Segment audiences based on engagement behavior and conversion intent.",
              },
              {
                title: "Campaign Automation",
                desc: "Build automated SMS workflows for faster communication.",
              },
              {
                title: "Campaign Deployment",
                desc: "Launch promotional, transactional, and engagement-focused SMS campaigns.",
              },
              {
                title: "Follow-Up Systems",
                desc: "Re-engage warm leads and inactive customers using automated workflows.",
              },
              {
                title: "Performance Optimization",
                desc: "Track delivery rates, response rates, clicks, and conversions.",
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

      {/* FAQ */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-5xl mx-auto">

          <SectionHeader
            badge="FAQs"
            title="Frequently Asked Questions"
          />

          <div className="space-y-6">

            <div className="border rounded-2xl p-6">
              <h3 className="font-bold text-[#0529a0] mb-3">
                What is Bulk SMS marketing?
              </h3>

              <p className="text-gray-700">
                Bulk SMS marketing allows businesses to send promotional,
                transactional, OTP, and engagement messages to customers at
                scale using automated SMS systems.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-bold text-[#0529a0] mb-3">
                What industries use Bulk SMS services?
              </h3>

              <p className="text-gray-700">
                Healthcare, education, e-commerce, real estate, finance,
                logistics, and service businesses commonly use bulk SMS
                marketing for customer communication and lead generation.
              </p>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-bold text-[#0529a0] mb-3">
                What is the difference between SMS and RCS messaging?
              </h3>

              <p className="text-gray-700">
                SMS delivers plain text messages, while RCS messaging supports
                interactive experiences including images, buttons, branding,
                and rich customer engagement features.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0529a0] text-white text-center px-4">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">
            Improve Customer Engagement With Bulk SMS Marketing
          </h2>

          <p className="mb-8 text-gray-200">
            We’ll identify what is limiting your customer communication
            performance and show exactly how to improve engagement, lead
            generation, and customer response rates.
          </p>

          <Link
            to="/contact"
            className="bg-[#f85415] px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Book Free Bulk SMS Consultation
          </Link>

        </div>
      </section>

    </div>
  );
}

export default BulkSMS;