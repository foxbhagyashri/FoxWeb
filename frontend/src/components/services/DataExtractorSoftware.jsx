import React from "react";
// import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import EnquiryPopup from "../Enquirypopup";
import {
  Building2, Search, TrendingUp, Star, Table, MapPin, Zap, MessageCircle
} from "lucide-react";

/* Section Header */
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
    question:
      "What makes Foxaircomm’s data extractor different from other tools?",
    answer:
      "Foxaircomm provides a structured data extraction solution that converts publicly available online data into clean, ready-to-use datasets with local support and customised setups.",
  },
  {
    question:
      "How does your data extractor actually help a business?",
    answer:
      "It automates lead generation, competitor analysis, product research, and market data collection, reducing hours of manual work into minutes.",
  },
  {
    question:
      "Can Foxaircomm extract data from Google search results?",
    answer:
      "Yes. Our Google data extraction setup helps businesses collect publicly available Google search data, business listings, and SERP insights efficiently.",
  },
  {
    question:
      "Does the data extractor require technical expertise?",
    answer:
      "No. The solution is designed for non-technical users. Our team configures the extraction process and delivers the output in Excel, CSV, or JSON formats.",
  },
  {
    question:
      "What type of data can Foxaircomm extract?",
    answer:
      "Business listings, pricing details, reviews, competitor data, webpage content, URLs, contact information, and structured tables.",
  },
];

function DataExtractorSoftware() {
  return (
    <div className="overflow-hidden bg-white">

      {/* <Helmet>
        <title>
          Data Extraction Software Services in Pune | Fox Aircomm

        </title>
        <meta name="description" content="Automate data collection with custom data extraction tools from Fox Aircomm, Akurdi PCMC Pune. Save time on manual research and reporting." />
      </Helmet> */}

      <EnquiryPopup />

      {/* HERO */}
      <section className="bg-[#0529a0] text-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="inline-block mb-5 px-4 py-1.5 text-sm font-semibold border border-white/20 rounded-full bg-white/10">
              Data Extractor Software in Pune
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Data Extractor Software for Businesses in Pune – Powered by Fox Aircomm
            </h1>

            <p className="text-gray-200 mb-5 leading-relaxed">
              Get clean, accurate, and ready-to-use data from websites, directories, and Google search results—without the manual work or technical hassle.
            </p>

            <p className="text-gray-200 mb-8 leading-relaxed">
              Ideal for sales, research, and competitive analysis.
            </p>

            <div className="flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="bg-[#f85415] hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold"
              >
                Request Free Demo
              </Link>

              <Link
                to="tel:8879864151"
                className="border border-white/30 px-8 py-4 rounded-xl font-semibold"
              >
                Talk to Our Team
              </Link>

            </div>

          </div>

          <div className="bg-white rounded-2xl p-5 shadow-xl text-gray-900">

            <h3 className="text-xl font-bold text-[#0529a0] mb-4">
              What You Can Extract
            </h3>

            {/* Illustration */}
            <div className="rounded-xl overflow-hidden mb-4 bg-[#eef2ff]">
              <img
                src="/Data Extractor Software Infographic.png"
                alt="Data extraction from Google, social media, reviews and business listings"
                className="w-full max-h-48 object-cover object-center"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { Icon: Building2, text: "Business listings & contact details" },
                { Icon: Search, text: "Google search result data" },
                { Icon: TrendingUp, text: "Product pricing & competitor data" },
                { Icon: Star, text: "Reviews & ratings" },
                { Icon: Table, text: "URLs, webpage text & structured tables" },
                { Icon: MapPin, text: "Local business and service provider data" },
              ].map(({ Icon, text }, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-2 flex items-center gap-2.5 hover:shadow-md transition"
                >
                  <div
                    className={`w-8 h-8 min-w-[32px] rounded-lg flex items-center justify-center ${i % 2 === 0
                        ? "bg-[#0529a0]/10 text-[#0529a0]"
                        : "bg-[#f85415]/10 text-[#f85415]"
                      }`}
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.75} />
                  </div>
                  <p className="text-sm font-medium text-gray-700 leading-snug">{text}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* WHY FOXAIRCOMM */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">

            {/* Left: copy */}
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-widest uppercase text-[#0529a0] bg-[#eef2ff] border border-blue-100 px-3.5 py-1.5 rounded-full mb-4">
                Why Choose Us
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-3">
                What makes Fox Aircomm’s{" "}
                <span className="text-[#0529a0]">data extractor different</span>{" "}
                from other tools?
              </h2>
              <div className="w-16 h-1 rounded-full bg-[#f85415] mb-6"></div>

              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Fox Aircomm’s data extractor is ideal for companies that heavily depend on accurate and quick information.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Unlike running basic scripts or using generic online tools, our structured data extraction environment takes publicly available data online and turns it into clean, ready-to-use data sets for clients.
              </p>
            </div>

            {/* Right: highlight card */}
            <div className="relative bg-[#0529a0] rounded-3xl p-8 md:p-10 overflow-hidden shadow-xl">
              {/* dot texture */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>

              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                  <MapPin className="w-5 h-5 text-white" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  A local Pune-based solution
                </h3>
                <p className="text-white/80 text-base leading-relaxed mb-6">
                  We are a local Pune-based solution—deployed and supported right here. This means we can set up clients quickly, respond to queries almost immediately, and build customised data extraction solutions tailored to the Indian market.
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { Icon: Zap, label: "Quick setup" },
                    { Icon: MessageCircle, label: "Fast response" },
                    { Icon: Settings, label: "Custom built" },
                  ].map(({ Icon, label }) => (
                    <div
                      key={label}
                      className="bg-white/10 border border-white/10 rounded-xl p-3 flex flex-col items-center text-center gap-2"
                    >
                      <Icon className="w-5 h-5 text-orange-400" strokeWidth={1.75} />
                      <span className="text-xs font-medium text-white leading-snug">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#f85415]" />
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT HELPS */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-6xl mx-auto">

          <SectionHeader
            badge="Benefits"
            title="How the Data Extractor Helps Businesses"
          />

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-3xl border">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
                Eliminate Manual Work
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Automate lead generation, market research, competitor analysis,
                and product data collection without spending hours manually
                browsing websites.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
                Faster Business Decisions
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Convert publicly available online data into structured datasets
                for CRM systems, reports, spreadsheets, sales teams, and
                analytics workflows.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Features"
            title="What the Data Extraction Tool Can Handle"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Google search result extraction",
              "Business directory scraping",
              "Competitor price monitoring",
              "Product detail extraction",
              "Review and rating collection",
              "Lead generation database building",
              "Category-wise structured datasets",
              "Public business contact extraction",
              "Bulk website data extraction",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] border rounded-2xl p-7 hover:shadow-lg transition"
              >
                <p className="font-medium text-gray-700">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* GOOGLE EXTRACTION */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-6xl mx-auto">

          <SectionHeader
            badge="Google Extraction"
            title="Google Search Data Extractor Software"
          />

          <div className="bg-white border rounded-3xl p-10">

            <p className="text-gray-700 leading-relaxed mb-6">
              Foxaircomm provides a dedicated Google data extractor setup
              designed to pull publicly available information from Google
              search listings, snippets, and local business results.
            </p>

            <p className="text-gray-700 leading-relaxed mb-10">
              Businesses use this solution for competitor intelligence,
              lead generation, market research, and category-level analysis.
            </p>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="border rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-bold text-[#f85415] mb-2">
                  SERP
                </h3>

                <p className="text-gray-600">
                  Search Result Extraction
                </p>
              </div>

              <div className="border rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-bold text-[#f85415] mb-2">
                  Maps
                </h3>

                <p className="text-gray-600">
                  Business Listing Data
                </p>
              </div>

              <div className="border rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-bold text-[#f85415] mb-2">
                  Leads
                </h3>

                <p className="text-gray-600">
                  Market Intelligence Data
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Industries"
            title="Who Benefits Most From This Solution in Pune"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Sales and lead generation teams",
              "Market research companies",
              "Consultants and agencies",
              "E-commerce businesses",
              "Service providers and local brands",
              "Competitive intelligence teams",
            ].map((item, i) => (
              <div
                key={i}
                className="border rounded-2xl p-7 hover:shadow-lg transition"
              >
                <p className="text-gray-700 font-medium">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SECURITY */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-6xl mx-auto">

          <SectionHeader
            badge="Security"
            title="Secure and Compliant Data Extraction"
          />

          <div className="bg-white rounded-3xl border p-10">

            <p className="text-gray-700 leading-relaxed mb-5">
              Foxaircomm follows responsible extraction and data-handling practices.
              The system only collects publicly available information and does not
              access restricted or confidential content.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Every extraction setup is aligned with internal business workflows
              and regional compliance expectations.
            </p>

          </div>

        </div>
      </section>

      {/* CUSTOMIZATION */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">

          <SectionHeader
            badge="Customization"
            title="Custom Data Extraction Setups for Businesses"
          />

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
                Flexible Extraction Workflows
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Configure daily scraping, scheduled extraction, bulk processing,
                competitor tracking, and custom data pipelines based on your
                business requirements.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
                Multiple Export Formats
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Export extracted datasets into Excel, CSV, JSON, or structured
                formats ready for CRM systems, ERP tools, and reporting dashboards.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC] px-4">
        <div className="max-w-5xl mx-auto">

          <SectionHeader
            badge="FAQs"
            title="Frequently Asked Questions"
          />

          <div className="space-y-6">

            {faqData.map((faq, i) => (
              <div
                key={i}
                className="bg-white border rounded-2xl p-7"
              >
                <h3 className="text-xl font-semibold text-[#0529a0] mb-4">
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
      <section className="py-24 bg-[#0529a0] text-white text-center px-4">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold mb-6">
            Start Extracting Business Data Faster
          </h2>

          <p className="text-gray-200 text-lg leading-relaxed mb-10">
            Schedule a free demo with Foxaircomm and discover how automated
            data extraction can improve lead generation, competitor research,
            and business intelligence workflows.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <Link
              to="/contact"
              className="bg-[#f85415] hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold"
            >
              Book Free Demo
            </Link>

            <Link
              to="/contact"
              className="border border-white/30 px-8 py-4 rounded-xl font-semibold"
            >
              Request Custom Setup
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}

export default DataExtractorSoftware;