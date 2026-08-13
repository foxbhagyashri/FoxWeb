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

function ConstructionManagementSoftware() {
  return (
    <div className="overflow-hidden bg-white">

      <Helmet>
        <title>
          Construction Management Software in Pune | Fox Aircomm

        </title>
        <meta
          name="description"
          content="Fox Aircomm builds construction management software for contractors in Pune, covering ERP, project tracking, billing and labour management in one system."
        />
      </Helmet>

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

      {/* SERVICES */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          <SectionHeader
            badge="Modules"
            title="Construction Management Software Features"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Project planning and milestone tracking",
              "Contractor and subcontractor management",
              "Labor attendance and payroll management",
              "Material inventory and procurement tracking",
              "Budget estimation and expense monitoring",
              "Billing, invoices, and payment tracking",
              "Site progress reports and image uploads",
              "Approval workflows and document management",
              "Real-time analytics and reporting dashboards",
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
            title="How We Build Construction Management Software"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: "Requirement Analysis",
                desc:
                  "We study your construction workflow, reporting structure, and operational bottlenecks.",
              },
              {
                title: "Software Planning",
                desc:
                  "Modules, dashboards, approval flows, and user roles are structured based on business operations.",
              },
              {
                title: "UI/UX Design",
                desc:
                  "User-friendly dashboards are created for project managers, contractors, and admin teams.",
              },
              {
                title: "Development & Integration",
                desc:
                  "Core features, automation workflows, and reporting systems are developed and integrated.",
              },
              {
                title: "Testing & Deployment",
                desc:
                  "The software is tested across devices, workflows, and user roles before deployment.",
              },
              {
                title: "Support & Scaling",
                desc:
                  "Foxaircomm provides ongoing support, upgrades, and scalability for future growth.",
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
            title="Who Uses Our Construction Management Software"
          />

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
                Real Estate Developers
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Manage residential and commercial construction projects,
                approvals, budgeting, and contractor coordination efficiently.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
                Civil Contractors
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Monitor labor, materials, billing, attendance,
                and execution timelines across multiple sites.
              </p>
            </div>

            <div className="border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-5">
                Infrastructure Companies
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Handle large-scale project execution, approvals,
                vendor coordination, and centralized reporting systems.
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
            title="Construction Software Development Cost in Pune"
          />

          <div className="grid md:grid-cols-3 gap-6 text-center">

            <div className="bg-white border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-4">
                Basic Software
              </h3>

              <p className="text-3xl font-bold text-[#f85415] mb-2">
                ₹80K – ₹2L
              </p>

              <p className="text-gray-600">
                Small Teams & Contractors
              </p>
            </div>

            <div className="bg-white border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-4">
                Mid-Level ERP
              </h3>

              <p className="text-3xl font-bold text-[#f85415] mb-2">
                ₹2L – ₹6L
              </p>

              <p className="text-gray-600">
                Multi-Project Businesses
              </p>
            </div>

            <div className="bg-white border rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0529a0] mb-4">
                Enterprise Solutions
              </h3>

              <p className="text-3xl font-bold text-[#f85415] mb-2">
                ₹6L+
              </p>

              <p className="text-gray-600">
                Large Infrastructure Companies
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHY FAIL */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">

          <SectionHeader
            badge="Challenges"
            title="Why Construction Businesses Face Operational Delays"
          />

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Manual project tracking and reporting",
              "No centralized contractor coordination system",
              "Budget leakages and delayed approvals",
              "Poor communication between teams and sites",
              "Lack of real-time project visibility",
              "Disconnected billing and procurement systems",
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
      <section className="py-24 bg-[#0529a0] text-white text-center px-4">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold mb-6">
            Streamline Your Construction Operations with Smart Software
          </h2>

          <p className="text-gray-200 text-lg leading-relaxed mb-10">
            Foxaircomm helps construction businesses automate operations,
            improve project visibility, and reduce execution delays
            through custom software solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <Link
              to="/contact"
              className="bg-[#f85415] hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold"
            >
              Book Free Consultation
            </Link>

            <Link
              to="/contact"
              className="border border-white/30 px-8 py-4 rounded-xl font-semibold"
            >
              Request Software Demo
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}

export default ConstructionManagementSoftware;