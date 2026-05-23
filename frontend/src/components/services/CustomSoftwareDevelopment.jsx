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

const faqData = [
  {
    question:
      "What is construction management software used for?",
    answer:
      "Construction management software helps businesses manage projects, labor, contractors, budgets, timelines, billing, reports, and communication from a single platform.",
  },
  {
    question:
      "Can Foxaircomm build custom construction management software?",
    answer:
      "Yes. Foxaircomm develops customized construction management software solutions based on your workflow, team structure, reporting needs, and project requirements.",
  },
  {
    question:
      "Which construction businesses benefit from this software?",
    answer:
      "Builders, contractors, infrastructure companies, architects, civil engineers, real estate developers, and project management firms benefit significantly from construction software solutions.",
  },
  {
    question:
      "Can the software manage multiple construction projects?",
    answer:
      "Yes. The software can manage multiple ongoing projects, contractor teams, budgets, progress tracking, approvals, and reporting through a centralized dashboard.",
  },
];

function CustomSoftwareDevelopment() {
  return (
    <div className="overflow-hidden bg-white">

      {/* SEO SECTION */}
      {/* <Helmet> */}
        <title>
          Construction Management Software Company in Pune | Foxaircomm
        </title>

        <meta
          name="description"
          content="Foxaircomm develops custom construction management software in Pune for builders, contractors, and infrastructure companies. Manage projects, contractors, budgets, billing, reporting, inventory, and site operations through one centralized platform."
        />

        <meta
          name="keywords"
          content="Construction Management Software Pune, Construction Software Development Pune, Builder Management Software, Contractor Management Software, Construction ERP Software Pune, Real Estate Software Development Pune, Infrastructure Project Management Software, Foxaircomm"
        />

        <link
          rel="canonical"
          href="https://www.foxaircomm.com/construction-management-software-pune"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Construction Management Software Company in Pune"
        />

        <meta
          property="og:description"
          content="Custom construction management software solutions for builders, contractors, and infrastructure companies in Pune."
        />

        <meta
          property="og:url"
          content="https://www.foxaircomm.com/construction-management-software-pune"
        />

        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content="Construction Management Software Company in Pune"
        />

        <meta
          name="twitter:description"
          content="Foxaircomm develops scalable construction management software for project tracking, contractor management, budgeting, billing, reporting, and operational automation."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Construction Management Software",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "Custom construction management software developed for builders, contractors, infrastructure companies, and real estate developers in Pune.",
            provider: {
              "@type": "Organization",
              name: "Foxaircomm",
              url: "https://www.foxaircomm.com",
            },
            areaServed: {
              "@type": "City",
              name: "Pune",
            },
          })}
        </script>
      {/* </Helmet> */}

      {/* HERO */}
      <section className="bg-[#0529a0] text-white py-24 px-4 text-center">
        <div className="max-w-5xl mx-auto">

          <span className="inline-block bg-white/10 border border-white/20 text-sm px-4 py-1.5 rounded-full mb-6">
            Construction Management Software Company in Pune
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Construction Management Software in Pune for Builders & Contractors
          </h1>

          <p className="text-gray-200 mb-4 leading-relaxed">
            Construction projects fail when communication, timelines,
            contractors, budgets, and approvals are managed manually.
            Delays, cost overruns, and project confusion become inevitable.
          </p>

          <p className="text-gray-200 mb-4 leading-relaxed">
            Foxaircomm develops construction management software designed
            for builders, contractors, developers, and infrastructure companies
            that need complete visibility across projects, teams, billing,
            materials, and site operations.
          </p>

          <p className="text-gray-200 mb-8 leading-relaxed">
            From project planning and contractor tracking to budgeting,
            reporting, attendance, and billing management, our software
            centralizes everything into one scalable platform.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-[#f85415] px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition"
            >
              Book Free Demo
            </Link>

            <Link
              to="/contact"
              className="border border-white/30 px-8 py-4 rounded-xl font-semibold"
            >
              Request Consultation
            </Link>
          </div>

        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Why Choose Us"
            title="What Makes Our Construction Management Software Different"
          />

          <p className="mb-8 text-gray-600 max-w-4xl">
            Most construction businesses still rely on spreadsheets,
            WhatsApp communication, and disconnected systems.
            Foxaircomm builds centralized software that improves visibility,
            accountability, and project execution.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Centralized project tracking across multiple sites",
              "Real-time contractor, labor, and attendance management",
              "Material purchase and inventory monitoring",
              "Budget tracking and expense management",
              "Approval workflows for faster decision-making",
              "Custom dashboards for project progress reporting",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border rounded-2xl hover:shadow-lg transition"
              >
                <p className="text-gray-700 font-medium">
                  {item}
                </p>
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
            title="How Construction Software Improved Project Execution"
          />

          <div className="bg-white p-10 rounded-3xl border">

            <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
              Challenges Before Software Implementation
            </h3>

            <ul className="space-y-4 text-gray-700 mb-10">
              <li>• Builder managing multiple projects across Pune and PCMC</li>
              <li>• Delayed contractor coordination and approvals</li>
              <li>• Material tracking issues causing budget overruns</li>
              <li>• No centralized reporting system</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
              What Foxaircomm Implemented
            </h3>

            <ul className="space-y-4 text-gray-700 mb-10">
              <li>• Multi-project management dashboard</li>
              <li>• Contractor and attendance tracking system</li>
              <li>• Budget monitoring and expense approvals</li>
              <li>• Real-time reporting and project status updates</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
              Results Within 6 Months
            </h3>

            <div className="grid md:grid-cols-4 gap-6">

              <div className="border rounded-2xl p-6 text-center">
                <h4 className="text-3xl font-bold text-[#f85415] mb-2">
                  37%
                </h4>
                <p className="text-sm text-gray-600">
                  Faster Project Coordination
                </p>
              </div>

              <div className="border rounded-2xl p-6 text-center">
                <h4 className="text-3xl font-bold text-[#f85415] mb-2">
                  42%
                </h4>
                <p className="text-sm text-gray-600">
                  Reduction in Reporting Delays
                </p>
              </div>

              <div className="border rounded-2xl p-6 text-center">
                <h4 className="text-3xl font-bold text-[#f85415] mb-2">
                  29%
                </h4>
                <p className="text-sm text-gray-600">
                  Better Budget Visibility
                </p>
              </div>

              <div className="border rounded-2xl p-6 text-center">
                <h4 className="text-3xl font-bold text-[#f85415] mb-2">
                  2.5x
                </h4>
                <p className="text-sm text-gray-600">
                  Improved Operational Efficiency
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default CustomSoftwareDevelopment;