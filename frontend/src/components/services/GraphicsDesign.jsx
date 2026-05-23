import React from "react";
import { Link } from "react-router-dom";

const SectionHeader = ({ badge, title, description }) => (
  <div className="max-w-4xl mb-12">
    <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold text-[#0529a0] border border-[#0529a0]/20 rounded-full bg-white">
      {badge}
    </span>

    <h2 className="text-3xl md:text-4xl font-bold text-[#0529a0] leading-tight mb-4">
      {title}
    </h2>

    {description && (
      <p className="text-gray-600 text-lg leading-relaxed">
        {description}
      </p>
    )}

    <div className="w-16 h-1 bg-[#f85415] rounded mt-5"></div>
  </div>
);

const faqData = [
  {
    question: "Why is professional graphic design important for businesses?",
    answer:
      "Professional graphic design builds brand trust, improves customer perception, increases engagement, and helps businesses communicate more effectively across digital and print platforms.",
  },
  {
    question: "What graphic design services do you provide in Pune?",
    answer:
      "Foxaircomm provides logo design, social media creatives, branding, brochure design, packaging design, website graphics, ad creatives, and marketing collateral design services.",
  },
  {
    question: "How long does it take to complete a graphic design project?",
    answer:
      "Project timelines depend on complexity. Basic designs can be completed within a few days, while complete branding and packaging projects may take several weeks.",
  },
  {
    question: "Do graphic design services help improve marketing performance?",
    answer:
      "Yes. High-quality graphics improve ad engagement, click-through rates, brand recognition, and overall conversion performance across digital marketing campaigns.",
  },
];

function GraphicsDesign() {
  return (
    <div className="overflow-hidden bg-white">

      {/* HERO */}
      <section className="bg-[#0529a0] text-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <span className="inline-block bg-white/10 border border-white/20 text-sm px-4 py-1.5 rounded-full mb-6">
              Graphic Design Company in Pune
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Graphic Design Company in Pune That Builds Brands, Not Just Visuals
            </h1>

            <p className="text-gray-200 mb-5 leading-relaxed">
              If your brand visuals fail to capture attention, communicate trust,
              or drive engagement, your business is already losing opportunities.
              Design is not just decoration — it directly influences how customers
              perceive your brand and whether they choose you over competitors.
            </p>

            <p className="text-gray-200 mb-8 leading-relaxed">
              At Foxaircomm, every design project is built around branding,
              audience psychology, and conversion-focused creativity so your
              visuals support real business growth instead of just looking attractive.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-[#f85415] hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold"
              >
                Get Free Design Consultation
              </Link>

              <Link
                to="/contact"
                className="border border-white/30 px-8 py-4 rounded-xl font-semibold"
              >
                Book Consultation
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 text-gray-900 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#0529a0] mb-6">
              What We Focus On
            </h3>

            <div className="space-y-5">

              <div className="border rounded-xl p-5">
                <h4 className="font-semibold mb-2">
                  Branding Design
                </h4>
                <p className="text-gray-600 text-sm">
                  Logo design, brand identity systems, typography,
                  and visual branding built for long-term recognition.
                </p>
              </div>

              <div className="border rounded-xl p-5">
                <h4 className="font-semibold mb-2">
                  Marketing Creatives
                </h4>
                <p className="text-gray-600 text-sm">
                  Social media creatives, ad banners, brochures,
                  and promotional graphics designed for engagement.
                </p>
              </div>

              <div className="border rounded-xl p-5">
                <h4 className="font-semibold mb-2">
                  Conversion-Focused Design
                </h4>
                <p className="text-gray-600 text-sm">
                  Every visual is structured to improve trust,
                  user attention, and marketing performance.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Strategy"
            title="What Separates a Results-Focused Graphic Design Company From the Rest"
            description="Most designers focus only on aesthetics. Effective design focuses on communication, branding, and conversion impact."
          />

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Designs created around branding and audience psychology",
              "Visuals aligned with marketing and lead generation goals",
              "Creative assets optimized for digital engagement and ads",
              "Consistent branding across social media, websites, and print materials",
            ].map((item, i) => (
              <div
                key={i}
                className="p-7 border rounded-2xl hover:shadow-lg transition"
              >
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-6xl mx-auto">

          <SectionHeader
            badge="Case Study"
            title="How Strategic Graphic Design Improved Brand Engagement"
          />

          <div className="bg-white rounded-3xl border p-10">

            <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
              The Situation Before the Design Upgrade
            </h3>

            <ul className="space-y-4 text-gray-700 mb-10">
              <li>• Local business in Pune with inconsistent branding</li>
              <li>• Social media posts lacked engagement and professionalism</li>
              <li>• Website visuals reduced trust and conversion rates</li>
              <li>• Marketing creatives looked outdated and generic</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
              What Changed
            </h3>

            <ul className="space-y-4 text-gray-700 mb-10">
              <li>• Complete visual identity redesign implemented</li>
              <li>• Social media creatives optimized for engagement</li>
              <li>• Website graphics redesigned for better user trust</li>
              <li>• Marketing collateral aligned with brand positioning</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
              Results Within 60 Days
            </h3>

            <div className="grid md:grid-cols-4 gap-6">

              <div className="border rounded-2xl p-6 text-center">
                <h4 className="text-3xl font-bold text-[#f85415] mb-2">
                  58%
                </h4>
                <p className="text-sm text-gray-600">
                  Higher Social Engagement
                </p>
              </div>

              <div className="border rounded-2xl p-6 text-center">
                <h4 className="text-3xl font-bold text-[#f85415] mb-2">
                  2.3x
                </h4>
                <p className="text-sm text-gray-600">
                  Better Ad Performance
                </p>
              </div>

              <div className="border rounded-2xl p-6 text-center">
                <h4 className="text-3xl font-bold text-[#f85415] mb-2">
                  41%
                </h4>
                <p className="text-sm text-gray-600">
                  More Website Engagement
                </p>
              </div>

              <div className="border rounded-2xl p-6 text-center">
                <h4 className="text-3xl font-bold text-[#f85415] mb-2">
                  35%
                </h4>
                <p className="text-sm text-gray-600">
                  Increase in Brand Recall
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Services"
            title="Graphic Design Services in Pune — What You Actually Get"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Logo and brand identity design",
              "Social media creatives and ad banners",
              "Brochure, flyer, and catalog design",
              "Packaging and label design",
              "Website graphics and UI visuals",
              "Marketing collateral for digital and print campaigns",
            ].map((item, i) => (
              <div
                key={i}
                className="p-7 border rounded-2xl hover:shadow-lg transition"
              >
                <p className="text-gray-700">{item}</p>
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
            title="How Our Graphic Design Process Works"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: "Brand Discovery",
                desc:
                  "We understand your audience, market positioning, and business goals before designing.",
              },
              {
                title: "Creative Direction",
                desc:
                  "Visual concepts are developed around branding, communication, and engagement objectives.",
              },
              {
                title: "Design Execution",
                desc:
                  "Graphics are created for both digital and print marketing requirements.",
              },
              {
                title: "Review & Refinement",
                desc:
                  "Designs are refined based on usability, branding consistency, and audience response.",
              },
              {
                title: "Multi-Platform Optimization",
                desc:
                  "Creative assets are optimized for websites, social media, ads, and mobile devices.",
              },
              {
                title: "Final Delivery",
                desc:
                  "Files are delivered in high-quality formats ready for marketing and production use.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-7 rounded-2xl border hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-[#0529a0] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
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
            title="Graphic Design Strategy Must Change by Industry"
          />

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
                Manufacturing Businesses
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Corporate presentations, industrial brochures,
                product catalogs, and branding assets designed
                for credibility and B2B communication.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
                Service Businesses
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Social media creatives, promotional graphics,
                and branding visuals designed to increase
                engagement and inquiries.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
                E-Commerce Brands
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Product creatives, packaging design,
                ad banners, and conversion-focused
                graphics built to increase online sales.
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
            title="Graphic Design Pricing in Pune"
          />

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white border rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-4">
                Basic Design Packages
              </h3>

              <p className="text-3xl font-bold text-[#f85415] mb-2">
                ₹5K – ₹15K
              </p>

              <p className="text-gray-600">
                Per Project
              </p>
            </div>

            <div className="bg-white border rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-4">
                Branding Packages
              </h3>

              <p className="text-3xl font-bold text-[#f85415] mb-2">
                ₹15K – ₹50K
              </p>

              <p className="text-gray-600">
                Per Project
              </p>
            </div>

            <div className="bg-white border rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-4">
                Advanced Creative Solutions
              </h3>

              <p className="text-3xl font-bold text-[#f85415] mb-2">
                ₹50K+
              </p>

              <p className="text-gray-600">
                Per Project
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
            title="Why Most Graphic Design Fails to Generate Business Impact"
          />

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Designs focused only on appearance instead of communication",
              "Inconsistent branding across platforms",
              "Low-quality creatives reducing customer trust",
              "No alignment between graphics and marketing strategy",
              "Generic templates without brand differentiation",
              "Visuals not optimized for engagement or conversion",
            ].map((item, i) => (
              <div
                key={i}
                className="border rounded-2xl p-6"
              >
                <p className="text-gray-700">{item}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-7xl mx-auto overflow-x-auto">

          <SectionHeader
            badge="Comparison"
            title="Foxaircomm vs Typical Graphic Design Agency"
          />

          <table className="w-full border-collapse bg-white rounded-3xl overflow-hidden">
            <thead className="bg-[#0529a0] text-white">
              <tr>
                <th className="p-5 text-left">Factor</th>
                <th className="p-5 text-left">Typical Agency</th>
                <th className="p-5 text-left">Foxaircomm</th>
              </tr>
            </thead>

            <tbody>

              {[
                [
                  "Design Focus",
                  "Only aesthetics",
                  "Branding + business outcomes",
                ],
                [
                  "Creative Strategy",
                  "Generic templates",
                  "Custom brand-focused creatives",
                ],
                [
                  "Marketing Alignment",
                  "Separate from campaigns",
                  "Integrated with digital marketing goals",
                ],
                [
                  "Brand Consistency",
                  "Limited structure",
                  "Unified cross-platform branding",
                ],
                [
                  "Performance Thinking",
                  "Visual delivery only",
                  "Engagement and conversion-focused design",
                ],
              ].map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="p-5 font-semibold">{row[0]}</td>
                  <td className="p-5 text-gray-600">{row[1]}</td>
                  <td className="p-5 text-[#0529a0] font-medium">
                    {row[2]}
                  </td>
                </tr>
              ))}

            </tbody>
          </table>

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

            {faqData.map((faq, i) => (
              <div
                key={i}
                className="border rounded-2xl p-7"
              >
                <h3 className="text-xl font-semibold text-[#0529a0] mb-3">
                  {faq.question}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0529a0] text-white px-4 text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold mb-6">
            Build a Stronger Brand With Strategic Graphic Design
          </h2>

          <p className="text-gray-200 text-lg leading-relaxed mb-10">
            We’ll identify what is limiting your visual branding and show
            how better design can improve engagement, trust, and conversions.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <Link
              to="/contact"
              className="bg-[#f85415] hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold"
            >
              Book Free Design Consultation
            </Link>

            <Link
              to="/contact"
              className="border border-white/30 px-8 py-4 rounded-xl font-semibold"
            >
              Request Free Brand Audit
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}

export default GraphicsDesign;