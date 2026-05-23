import React from "react";
import { CheckCircle, AlertCircle, Target, AlertTriangle, TrendingUp, Layers, Clock } from "lucide-react";

export default function WebDevelopmentService() {
  return (
    <div className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <section className="bg-[#0B3C5D] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Website Development Company in Ahmedabad Focused on Real Business Outcomes

          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            We design and develop fast, SEO-ready, and conversion-focused websites that help Ahmedabad businesses to generate leads, build authority, and enhance their online presence.

          </p>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">Foxaircomm incorporates strategic UX, custom development, and performance optimisation to turn your website into a measurable growth asset.

          </p>
          <a
            href="/contact"
            className="bg-[#F2C94C] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Ahmedabad Businesses Are Upgrading Their Websites Faster Than Ever

          </h2>
          <p className="text-lg text-black-200 max-w-2xl mx-auto mb-8 text-center">Across Changodar’s manufacturing belt and Prahladnagar’s service economy, a clear shift is visible:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Website Development",
                desc: "Procurement teams finalise vendors from Google SERP results",
              },
              {
                title: "Responsive Design",
                desc: "Export buyers judge credibility through website experience( how easy it is to navigate, loading speed)",
              },
              {
                title: "SEO-Friendly Development",
                desc: "Mobile usability directly impacts enquiry volume",
              },
              {
                title: "E-commerce Development",
                desc: "Competitors investing in UX gain disproportionate visibility",
              },

            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                {/* <h3 className="text-xl font-semibold mb-3 text-[#0B3C5D]">
                  {item.title}
                </h3> */}
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>


        </div>

        <div className="mt-20">
          <p className="text-lg text-black-200  mx-auto mb-8">We often meet businesses heavily invested in high ad budgets, but their websites silently block conversions due to poor structure or slow loading speed.
          </p>
          <p className="text-lg text-black-200  mx-auto mb-8">This is why demand for professional website developers in Ahmedabad is increasing across different sectors.
          </p>
        </div>

      </section>



      <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What High-Performance Website Development Actually Includes
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Modern development is not limited to pages — it’s about building
              a complete revenue architecture that drives measurable growth.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Left Side */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Core Elements of Growth-Ready Websites
              </h3>

              <div className="space-y-4">

                <div className="flex gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <p>Conversion-first UI/UX journey design</p>
                </div>

                <div className="flex gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <p>Mobile-first responsive engineering</p>
                </div>

                <div className="flex gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <p>Clean, crawlable, SEO-ready structure (human + bot friendly)</p>
                </div>

                <div className="flex gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <p>Website speed optimisation</p>
                </div>

                <div className="flex gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <p>Secure and scalable backend systems</p>
                </div>

                <div className="flex gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <p>CMS control for internal teams</p>
                </div>

                <div className="flex gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <p>E-commerce and payment integration capability</p>
                </div>

                <div className="flex gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <p>Analytics, tracking, and automation readiness</p>
                </div>

              </div>
            </div>

            {/* Right Side */}
            <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Why This Matters
              </h3>

              <p className="text-blue-100 leading-relaxed">
                Businesses searching for Web design & development services in
                Ahmedabad are no longer focused only on design. They prioritise
                lead generation, scalability, and performance.
              </p>

              <p className="mt-4 font-medium">
                That shift defines Foxaircomm’s approach — building websites that
                don’t just look good, but actively generate business.
              </p>
            </div>

          </div>
        </div>
      </section>



      <section className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Micro-Reality: What We See Across Ahmedabad Industries
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              These are real-world business situations — not design issues, but
              strategy gaps that directly impact growth.
            </p>
          </div>

          {/* Micro Reality Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">

            <div className="p-6 border rounded-xl hover:shadow-md transition flex gap-4">
              <AlertCircle className="text-red-500 mt-1" />
              <p>A Naroda textile exporter is losing overseas enquiries due to slow mobile pages</p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-md transition flex gap-4">
              <AlertCircle className="text-red-500 mt-1" />
              <p>A Vatva pharma unit is invisible on Google SERP despite strong distribution</p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-md transition flex gap-4">
              <AlertCircle className="text-red-500 mt-1" />
              <p>A Prahladnagar consultancy is receiving traffic but has almost zero conversions</p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-md transition flex gap-4">
              <AlertCircle className="text-red-500 mt-1" />
              <p>A local service brand is rebuilding its site after competitors captured search demand</p>
            </div>

          </div>

          {/* Strategy Statement */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-16 text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              These are not design-related issues. They are{" "}
              <span className="font-semibold text-gray-900">
                website strategy failures
              </span>{" "}
              — and they can be fixed.
            </p>
          </div>

          {/* Who Needs This */}
          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Left */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Target className="text-blue-600" />
                Who Truly Needs Professional Website Development in Ahmedabad
              </h3>

              <div className="space-y-4">

                <div className="p-4 bg-white border rounded-xl shadow-sm">
                  Textile and manufacturing exporters scaling globally
                </div>

                <div className="p-4 bg-white border rounded-xl shadow-sm">
                  Pharma and compliance-driven industries needing credibility
                </div>

                <div className="p-4 bg-white border rounded-xl shadow-sm">
                  B2B service firms competing in dense search markets
                </div>

                <div className="p-4 bg-white border rounded-xl shadow-sm">
                  Startups seeking investor-ready digital presence
                </div>

                <div className="p-4 bg-white border rounded-xl shadow-sm">
                  Retail and eCommerce brands expanding online revenue
                </div>

              </div>
            </div>

            {/* Right Highlight */}
            <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                The Real Benchmark
              </h3>

              <p className="text-blue-100 leading-relaxed">
                To stand among the top web development companies in Ahmedabad,
                a website must go beyond visual appeal.
              </p>

              <p className="mt-4 font-medium">
                It must deliver speed, trust, and measurable enquiries — not just aesthetics.
              </p>
            </div>

          </div>

        </div>
      </section>


      <section className="w-full bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              The Risk of Delaying a Website Upgrade
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Many businesses wait until growth slows — but by then, the damage is already happening silently.
            </p>
          </div>

          {/* Risk Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">

            <div className="p-6 bg-white border rounded-xl flex gap-4 hover:shadow-md transition">
              <AlertTriangle className="text-red-500 mt-1" />
              <p>Silent loss of high-intent enquiries</p>
            </div>

            <div className="p-6 bg-white border rounded-xl flex gap-4 hover:shadow-md transition">
              <AlertTriangle className="text-red-500 mt-1" />
              <p>Increasing cost per lead (CPL) due to poor conversion rates</p>
            </div>

            <div className="p-6 bg-white border rounded-xl flex gap-4 hover:shadow-md transition">
              <AlertTriangle className="text-red-500 mt-1" />
              <p>Reduced credibility with new buyers</p>
            </div>

            <div className="p-6 bg-white border rounded-xl flex gap-4 hover:shadow-md transition">
              <AlertTriangle className="text-red-500 mt-1" />
              <p>Competitors gaining a long-term search advantage</p>
            </div>

          </div>

          {/* Statement */}
          <div className="bg-white p-8 rounded-2xl shadow-sm text-center mb-16">
            <p className="text-lg text-gray-700">
              A weak website rarely fails loudly.
              <span className="font-semibold text-gray-900">
                {" "}It fails quietly through missed opportunities.
              </span>
            </p>
          </div>

          {/* Differentiation */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900">
              What Makes Foxaircomm Structurally Different
            </h3>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Most agencies promise design and SEO — very few engineer predictable growth.
            </p>
          </div>

          {/* Framework */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">

            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
              <TrendingUp className="text-blue-600 mb-4" />
              <h4 className="font-semibold text-lg mb-2">1. Visibility Engineering</h4>
              <p className="text-gray-600 text-sm">
                Creation of search-ready architecture, schema clarity, and strong technical SEO foundation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
              <Layers className="text-blue-600 mb-4" />
              <h4 className="font-semibold text-lg mb-2">2. Conversion Architecture</h4>
              <p className="text-gray-600 text-sm">
                User-journey mapping, trust positioning, and enquiry-focused layouts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
              <TrendingUp className="text-blue-600 mb-4" />
              <h4 className="font-semibold text-lg mb-2">3. Scalability Readiness</h4>
              <p className="text-gray-600 text-sm">
                Future-proof development supporting automation, SEO growth, and marketing expansion.
              </p>
            </div>

          </div>

          {/* Closing + CTA */}
          <div className="bg-blue-600 text-white p-10 rounded-2xl text-center shadow-lg">
            <p className="text-blue-100 max-w-3xl mx-auto">
              This structured methodology is why Foxaircomm is trusted as one of the best web development companies in Ahmedabad — delivering measurable ROI, not just redesigned interfaces.
            </p>

            <h4 className="text-2xl font-semibold mt-6">
              Speak With Our Web Strategy Team
            </h4>

            <p className="mt-3 text-blue-100">
              If you're planning a new website or redesign, now is the right time to evaluate goals, timelines, and realistic growth outcomes.
            </p>

            <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              Book Strategy Call
            </button>
          </div>

        </div>
      </section>


      <section className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How Foxaircomm Builds High-Impact Websites
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              A structured, strategy-first approach designed to deliver measurable business outcomes.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">

            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h4 className="font-semibold text-lg mb-2">1. Business & Market Discovery</h4>
              <p className="text-gray-600 text-sm">
                Understanding buyers, competitors, and revenue pathways to define direction.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h4 className="font-semibold text-lg mb-2">2. UX Strategy & Wireframing</h4>
              <p className="text-gray-600 text-sm">
                Designing user journeys that drive calls, enquiries, and conversions.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h4 className="font-semibold text-lg mb-2">3. Custom Brand-Aligned Design</h4>
              <p className="text-gray-600 text-sm">
                Creating strong first impressions with credibility and recall.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h4 className="font-semibold text-lg mb-2">4. Scalable Technical Development</h4>
              <p className="text-gray-600 text-sm">
                Secure, high-speed, and future-ready platforms built for growth.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h4 className="font-semibold text-lg mb-2">5. Search-Ready Technical Foundation</h4>
              <p className="text-gray-600 text-sm">
                Structured data, mobile optimisation, and SEO fundamentals from day one.
              </p>
            </div>

            <div className="p-6 border rounded-xl hover:shadow-md transition">
              <h4 className="font-semibold text-lg mb-2">6. Testing, Launch & Optimisation</h4>
              <p className="text-gray-600 text-sm">
                Ensuring stability, performance monitoring, and continuous improvement.
              </p>
            </div>

          </div>

          {/* Outcomes Section */}
          <div className="bg-gray-50 p-10 rounded-2xl mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Real Business Outcomes Companies Experience
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              <div className="flex gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <p>Noticeable improvement in Google SERP visibility within months</p>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <p>Higher volume of qualified inbound enquiries</p>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <p>Faster load speed and reduced bounce rates</p>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <p>Stronger trust among domestic and export buyers</p>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <p>Scalable base for SEO, ads, and automation</p>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <p>Long-term measurable digital ROI</p>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 text-white p-10 rounded-2xl text-center shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Request a Customised Website Proposal
            </h3>

            <p className="text-blue-100 max-w-2xl mx-auto">
              Get a clear scope, realistic timelines, and investment clarity aligned with your business goals.
            </p>

            <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              Get Proposal
            </button>
          </div>

        </div>
      </section>



      <section className="w-full bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">

          {/* SECTION 1 - HOW TO CHOOSE */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
              How to Choose the Best Web Development Company in Ahmedabad
            </h2>
            <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
              Many business owners ask this before making an investment. Here’s what truly matters.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-10">

              <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle className="text-blue-600 mt-1" />
                <p>Proven multi-industry execution</p>
              </div>

              <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle className="text-blue-600 mt-1" />
                <p>Transparent development workflow</p>
              </div>

              <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle className="text-blue-600 mt-1" />
                <p>SEO-first technical structure</p>
              </div>

              <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle className="text-blue-600 mt-1" />
                <p>Conversion-focused UX thinking</p>
              </div>

              <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle className="text-blue-600 mt-1" />
                <p>Reliable long-term support</p>
              </div>

            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700">
                The best company behaves like a{" "}
                <span className="font-semibold text-gray-900">growth partner</span>, not just a vendor.
              </p>
            </div>
          </div>

          {/* SECTION 2 - COST */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
              What Does Website Development Cost in Ahmedabad?
            </h3>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                <h4 className="font-semibold mb-2">Business Website</h4>
                <p className="text-blue-600 font-bold text-lg">₹25,000 – ₹60,000</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                <h4 className="font-semibold mb-2">Custom Corporate Platform</h4>
                <p className="text-blue-600 font-bold text-lg">₹60,000 – ₹1.5L+</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                <h4 className="font-semibold mb-2">E-Commerce / Advanced System</h4>
                <p className="text-blue-600 font-bold text-lg">₹1L – ₹3L+</p>
              </div>

            </div>

            <p className="mt-6 text-gray-600 text-center max-w-3xl mx-auto">
              Final costs depend on features, integrations, SEO depth, and scalability goals.
              A transparent company will always explain the reasoning behind the budget.
            </p>
          </div>

          {/* SECTION 3 - TIMELINE */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
              How Long Does Development Take?
            </h3>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                <Clock className="mx-auto text-blue-600 mb-3" />
                <h4 className="font-semibold mb-2">Business Website</h4>
                <p className="text-gray-700">2 – 4 Weeks</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                <Clock className="mx-auto text-blue-600 mb-3" />
                <h4 className="font-semibold mb-2">Corporate Website</h4>
                <p className="text-gray-700">4 – 8 Weeks</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                <Clock className="mx-auto text-blue-600 mb-3" />
                <h4 className="font-semibold mb-2">E-Commerce / Advanced</h4>
                <p className="text-gray-700">6 – 12 Weeks</p>
              </div>

            </div>

            <p className="mt-6 text-gray-600 text-center max-w-2xl mx-auto">
              Clear scope and quick feedback significantly speed up the delivery timeline.
            </p>
          </div>

        </div>
      </section>


      <section className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">

          {/* SECTION 1 - CUSTOM VS TEMPLATE */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
              Why Custom Development Delivers Stronger ROI Than Templates
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mt-10">

              <div className="flex gap-3 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="text-blue-600 mt-1" />
                <p>Unique brand differentiation</p>
              </div>

              <div className="flex gap-3 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="text-blue-600 mt-1" />
                <p>Faster, cleaner performance</p>
              </div>

              <div className="flex gap-3 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="text-blue-600 mt-1" />
                <p>Stronger SEO foundation</p>
              </div>

              <div className="flex gap-3 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="text-blue-600 mt-1" />
                <p>Easier scalability for marketing</p>
              </div>

              <div className="flex gap-3 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="text-blue-600 mt-1" />
                <p>Better long-term return on investment</p>
              </div>

            </div>

            <p className="text-center mt-8 text-gray-700">
              Templates may launch quickly.
              <span className="font-semibold text-gray-900">
                {" "}Custom platforms win in long-term growth.
              </span>
            </p>
          </div>

          {/* SECTION 2 - SEO READY */}
          <div className="mb-16 bg-gray-50 p-10 rounded-2xl">
            <h3 className="text-2xl font-semibold text-center mb-8">
              What Makes a Website Truly SEO-Ready?
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              <div className="flex gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <p>Clean URL hierarchy and navigation</p>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <p>Mobile-first responsive performance</p>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <p>Fast loading speed</p>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <p>Structured metadata and schema</p>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <p>Crawlable technical architecture</p>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <p>Optimised content hierarchy</p>
              </div>

            </div>

            <p className="text-center mt-8 text-gray-600 max-w-2xl mx-auto">
              Without this foundation, marketing spend struggles to convert into consistent enquiries.
            </p>
          </div>

          {/* SECTION 3 - FINAL CTA */}
          <div className="bg-blue-600 text-white p-10 rounded-2xl text-center shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Build a Website That Quietly Drives Revenue for Years
            </h3>

            <p className="text-blue-100 max-w-2xl mx-auto">
              In Ahmedabad’s competitive environment, the real question is not:
            </p>

            <p className="mt-3 text-lg font-medium">
              “Do you need a new website?”
            </p>

            <p className="mt-2 text-xl font-semibold">
              “How many opportunities are you already losing without one?”
            </p>

            <p className="mt-6 text-blue-100 max-w-2xl mx-auto">
              Foxaircomm helps businesses replace uncertainty with structured digital growth.
            </p>

            <div className="mt-6 space-y-2 text-blue-100">
              <p>• Speak with our experts</p>
              <p>• Discuss your business goals</p>
              <p>• Receive a customised development roadmap</p>
            </div>

            <button className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              Start Your Project
            </button>
          </div>

        </div>
      </section>



      {/* CTA SECTION */}
      <section className="bg-[#0B3C5D] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build Your Website?
        </h2>
        <p className="mb-6 text-gray-200">
          Let’s create a high-performing website for your business.
        </p>
        <a
          href="/contact"
          className="bg-[#F2C94C] text-black px-6 py-3 rounded-lg font-semibold"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}