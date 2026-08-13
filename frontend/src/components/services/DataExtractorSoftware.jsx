import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

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

      <Helmet>
        <title>
          Data Extraction Software Services in Pune | Fox Aircomm

        </title>
        <meta name="description" content="Automate data collection with custom data extraction tools from Fox Aircomm, Akurdi PCMC Pune. Save time on manual research and reporting." />
      </Helmet>


      {/* HERO */}
      <section className="bg-[#0529a0] text-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="inline-block mb-5 px-4 py-1.5 text-sm font-semibold border border-white/20 rounded-full bg-white/10">
              Data Extractor Software in Pune
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Data Extractor Software for Businesses in Pune – Powered by Foxaircomm
            </h1>

            <p className="text-gray-200 mb-5 leading-relaxed">
              Extract clean, accurate, and ready-to-use data from websites,
              directories, and Google search results without manual effort or
              technical complexity.
            </p>

            <p className="text-gray-200 mb-8 leading-relaxed">
              Ideal for sales teams, competitor research, lead generation,
              pricing analysis, and business intelligence.
            </p>

            <div className="flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="bg-[#f85415] hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold"
              >
                Request Free Demo
              </Link>

              <Link
                to="/contact"
                className="border border-white/30 px-8 py-4 rounded-xl font-semibold"
              >
                Talk to Our Team
              </Link>

            </div>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl text-gray-900">

            <h3 className="text-2xl font-bold text-[#0529a0] mb-8">
              What You Can Extract
            </h3>

            <div className="grid gap-5">

              {[
                "Business listings & contact details",
                "Google search result data",
                "Product pricing & competitor data",
                "Reviews & ratings",
                "URLs, webpage text & structured tables",
                "Local business and service provider data",
              ].map((item, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-5 hover:shadow-md transition"
                >
                  <p className="font-medium text-gray-700">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* WHY FOXAIRCOMM */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Why Choose Us"
            title="What Makes Foxaircomm’s Data Extractor Different"
            description="A complete data extraction environment designed for businesses that depend on accurate and fast information."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Structured data extraction from multiple public sources",
              "Google search result extraction support",
              "Custom extraction setups based on business goals",
              "Local onboarding and support from Pune-based experts",
            ].map((item, i) => (
              <div
                key={i}
                className="border rounded-2xl p-7 hover:shadow-lg transition"
              >
                <p className="text-gray-700 font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}

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