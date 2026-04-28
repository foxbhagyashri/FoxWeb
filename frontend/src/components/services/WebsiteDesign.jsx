import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function WebsiteDesign() {





  const process = [
    { step: "1", title: "Research", desc: "We study your audience, competitors & goals." },
    { step: "2", title: "Strategy", desc: "We plan UX, content & SEO structure." },
    { step: "3", title: "Development", desc: "We build fast, scalable websites." },
    { step: "4", title: "SEO Setup", desc: "Optimized for Google & AI search." },
    { step: "5", title: "Launch & Growth", desc: "Testing, tracking & improvements." }
  ];

  return (
    <div className="bg-[#F8FAFC] text-gray-800">

      {/* HERO */}
      <section className="py-18 text-center bg-[#0529a0] text-white">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Web Development Company in Pune That Builds Websites People Remember & Google Rewards
          </h1>

          <p className="text-gray-200 text-lg mb-4">
            Every business wants more traffic. But what truly converts is trust.
          </p>

          <p className="text-lg font-semibold mb-5">
            Foxaircomm builds websites that make people believe in your brand again.

          </p>

          <a href="tel:8879864151" className="bg-[#f85415] p-4 text-white font-bold text-xl rounded-xl">Book Your Free Strategy Call</a>

        </div>

      </section>

      {/* PROBLEM */}
      <section className="py-16 bg-[#F1F5F9]">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-[#0B3C5D] mb-6">
            What’s the real cost of having an “average” website in 2025?

          </h2>

          <p className="text-gray-600 mb-4">
            Do you know that your website isn't just a digital brochure; it's your most important asset (Salesperson).

          </p>

          <p className="text-gray-600 mb-4">
            Having an "average" website in 2025 means more than just looking old; it means being invisible and hampering your brand presence.

          </p>
          <p className="text-gray-600 mb-4">
            Here’s the simple truth:

          </p>
          <p className="text-gray-600 mb-4">
            If your site is slow, difficult to use, or doesn't appear in search results, your business is likely losing leads and revenue.

          </p>





          <ul className="space-y-3 text-gray-700">
            <li>⚡ Over 88% of web designers agree that the number one reason behind a high bounce rate (i.e., the percentage of users leaving your website) is slow loading time.
            </li>
            <li>📱 Beyond speed, nearly 3 out of 4 visitors (73%) will abandon your site if it's not properly optimized for mobile or tablet.
            </li>
            <li>🧭 The third most important reason is poor navigation, showing that if users can't easily find what they need, they won't stick around.
            </li>
          </ul>

          <div className="mt-8 p-6 bg-white rounded-xl shadow">
            <p className="font-semibold text-lg text-[#0B3C5D]">
              Your customers don’t care how pretty your website looks. They care how fast it answers their need.
            </p>

          </div>

        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-10 text-[#0B3C5D]">
            What makes Foxaircomm different from other website design companies in Pune?

          </h2>
          <p>Frankly speaking, Pune is full of developers, but very few understand the details of the sales funnel, Google visibility, and customer psychological journey.
          </p>
          <p>We don't just build websites for the pretty look. We design them for business impact:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-5">

            <div className="bg-[#F8FAFC] p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">⚡ Lightning Fast</h3>
              <p className="text-gray-600">Our designed websites load in 2.5 seconds or less. Why? Because we are well-versed with the fact that every extra second of delay costs you 7% in potential sales.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">🧠 Built for Humans</h3>
              <p className="text-gray-600">We use emotionally intelligent design—subtle colors, concise, human-oriented language, and CTAs placed exactly where they feel natural to the visitor.
              </p>
            </div>


            <div className="bg-[#F8FAFC] p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">📈 Instantly Visible:
              </h3>
              <p className="text-gray-600">We integrate SEO (Search Engine Optimization) and AEO (Answer Engine Optimization) into the structure so your brand is instantly understood and easily found by both search engines, AI crawlers, and people.

              </p>
              <p className="text-gray-600">Don't be satisfied with the small gains. While a basic UI update might boost conversions by 200%, comprehensive UX improvements can increase your conversion rates by up to 400% ( Source- https://blog.uxtweak.com/roi-of-ux/)

              </p>
              <p className="text-gray-600">Foxaircomm is a unique team in Pune, combining creative designers, sharp analytical marketers, and ethical coders all under one roof.

              </p>
            </div>


          </div>

        </div>
      </section>

      {/* CHALLENGES */}
      {/* CHALLENGES */}
      <section className="py-16 bg-[#F1F5F9]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-10 text-[#0B3C5D]">
            What Challenges Are Pune Businesses Facing Before They Partner With Us?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">1. Our new website isn't showing up on Google:
              </h3>
              You have invested in a new website, but it's invisible to your potential customers.

            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">2. We get the traffic, but no more conversions:
              </h3>
              People are visiting, but they aren't taking the next steps.

            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">3. Our site is not fully optimised for mobile:
              </h3>
              Your developer forgot about (or ignored) optimizing for phones and tablets.

            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">4. We can't update our own content:
              </h3>
              You're unable to make simple, essential changes to your own business platform.
              We've seen and fixed these problems over 100 times.
              Most websites fail because they are built only to deliver information, not to be discovered by search engines and users.

            </div>

          </div>
          {/* <p className="mt-4">Foxaircomm flips that script.
          </p>
          <p>We make sure your design, SEO (Search Engine Optimization), and content go hand in hand from the initial stage, so your site is built for success, not just launch.
          </p> */}
        </div>

      </section>
      {/* SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-10 text-[#0B3C5D]">
            What technologies does Foxaircomm specialize in?

          </h2>
          <p>We design everything your brand needs —not just to survive, but to scale and achieve success online truly.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">1. Corporate Website:
              </h3>
              Website not ranking on GoogleWe design sleek, professional business sites built to drive conversion-ready outcomes for your brand.

            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">2. E-commerce Website Development:

              </h3>
              We are an e-commerce development company that builds online stores to be reliable, fast, rank high on Google, and are designed to sell more products.

            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">3.WordPress Website Development:

              </h3>
              We are one of the best WordPress website development companies in Pune, building fully customizable, SEO-friendly WordPress sites that are simple for you to manage.

            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">4. Custom Web Development in Pune:

              </h3>
              Need something powerful? We use advanced technologies (Laravel, Angular, React, Node.js) to build platforms optimized for high performance and scalability.

            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">5. Landing Pages & Micro-sites:


              </h3>
              Focused designs that quickly capture high-quality leads, not just fleeting attention.
              <br></br>
              Every website we build is your essential digital handshake—designed to make a strong, professional impression in milliseconds.


            </div>


          </div>
        </div>
      </section>

      {/* PROCESS (ATTRACTIVE TIMELINE) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16 text-[#0B3C5D]">
            How does Foxaircomm build websites that dominate rankings and conversions?
          </h2>
          <p>We are not creating websites and then implementing SEO fixes. We design websites by using SEO practices from the very start.
          </p>
          <p>Here is our signature 5-step process:
          </p>

          <div className="relative">
            {/* <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200"></div> */}

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold">  🔍 Deep Dive Research:</h3>
                We initiate the process by collecting information about your competitors, understanding your audience, and details about your products/services.

              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold">  🧠 User-Focused Design & Content Plan:
                </h3>
                We create a design that emphasizes how you want your visitors to experience (like confident, excited, or trusting). After this, we plan your website content that directly answers the specific goals people have when they search on Google (this is known as keyword mapping).

              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold">  3.💻 Development & Setup:
                </h3>
                We write clean code that ensures maximum performance.

              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold">  4.🚀 SEO + AEO Implementation:
                </h3>
                We set up the technical aspects (like Schema markup and internal links) and create content designed to appear instantly for those valuable featured snippets results.

              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold">  5.📈 Testing & Results Review:
                </h3>
                We meticulously test parameters such as page speed, lead tracking, and engaged sessions on your site to ensure you get a solid Return on Investment (ROI).
                <br></br>
                Foxaircomm ensures your new website doesn't just launch—it launches ready to dominate and attract the right customers.

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 bg-[#F1F5F9] text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#0B3C5D]">
          Do you Develop Websites for Both Startups and Large Companies?
        </h2>

        <p className="text-gray-700">Absolutely, yes. No matter if you are a brand-new local startup in Pune or an established, large-scale enterprise, our web solutions are designed to scale with your business.
        </p>
        <p className="text-gray-700">We have successfully built high-performing websites for a wide range of industries, including:
        </p>
        <ul>
          <li>Healthcare and hospitals</li>
          <li>SaaS and IT firms</li>
          <li>Manufacturing and industrial brands</li>
          <li>Educational institutions
          </li>
          <li>E-commerce retailers
          </li>
        </ul>
        <p className="text-gray-700">We never believe in a one-size-fits-all approach. Each design is carefully tailored to meet the specific goals and needs of your industry.
        </p>
      </section>



      {/* LAUNCH TIMELINE - PROFESSIONAL */}
      {/* LAUNCH TIMELINE */}
      <section className="py-20 bg-[#F5F7FB]">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D] flex justify-center items-center gap-2">
              ⏱️ How Quickly Can We Launch Your New Website?
            </h2>

            <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded"></div>

            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              The launch timeline depends on the complexity of your project, but here are our typical estimates:
            </p>
          </div>

          {/* Table Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">

            {/* Header */}
            <div className="grid grid-cols-2 bg-[#0B3C5D] text-white">
              <div className="p-6 flex items-center gap-3 border-r border-white/20">
                <span className="text-xl">📋</span>
                <p className="font-semibold text-lg">Project Types</p>
              </div>
              <div className="p-6 flex items-center gap-3">
                <span className="text-xl">📅</span>
                <p className="font-semibold text-lg">Estimated Launch Time</p>
              </div>
            </div>

            {/* Row 1 */}
            <div className="grid md:grid-cols-2 border-t">

              {/* Left */}
              <div className="p-6 flex gap-4 items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl">
                  🏢
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B3C5D] text-lg">
                    Corporate / Portfolio Websites
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Ideal for businesses, brands and professionals who want a strong online presence.
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="p-6 flex items-center gap-4 border-l bg-gray-50">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-blue-500 text-blue-500">
                  ⏱️
                </div>
                <div>
                  <p className="text-xl font-bold text-[#0B3C5D]">15 – 30 days</p>
                  <p className="text-gray-500 text-sm">
                    Quick turnaround for a professional web presence
                  </p>
                </div>
              </div>

            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 border-t">

              <div className="p-6 flex gap-4 items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-xl">
                  🛒
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B3C5D] text-lg">
                    E-commerce or Dynamic Websites
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Feature-rich websites with dynamic functionality and user-friendly experience.
                  </p>
                </div>
              </div>

              <div className="p-6 flex items-center gap-4 border-l bg-gray-50">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-orange-500 text-orange-500">
                  ⏱️
                </div>
                <div>
                  <p className="text-xl font-bold text-[#0B3C5D]">60 – 90 days</p>
                  <p className="text-gray-500 text-sm">
                    Built with robust features and seamless performance
                  </p>
                </div>
              </div>

            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 border-t">

              <div className="p-6 flex gap-4 items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-xl">
                  🏭
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B3C5D] text-lg">
                    Enterprise Solutions
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Advanced solutions tailored for complex business needs and integrations.
                  </p>
                </div>
              </div>

              <div className="p-6 flex items-center gap-4 border-l bg-gray-50">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-green-500 text-green-500">
                  ⏱️
                </div>
                <div>
                  <p className="text-xl font-bold text-[#0B3C5D]">
                    Custom Timeline
                  </p>
                  <p className="text-gray-500 text-sm">
                    Depends on integrations and features
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Box */}
          <div className="mt-10 bg-white border rounded-xl p-6 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl">
              🚀
            </div>
            <p className="text-gray-700">
              Our process is designed to be fast enough to meet your marketing deadlines,{" "}
              <span className="font-semibold text-[#0B3C5D]">
                while detailed enough to ensure the final product is perfect.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B3C5D] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          What is the First Step to Working With You?
        </h2>

        <p className="mb-6 text-gray-200">
          It's simple: we start with a free 30-minute strategy session.

        </p>
        <p>In this quick call, we will:
        </p>
        <ul>
          <li>Analyse your current website.
          </li>
          <li>Identify what's holding you back (those "invisible losses")-
          </li>
          <li>Map out exactly how to fix those issues—fast.
          </li>
        </ul>
        <p className="mb-5 mt-3">Expect no jargon and no hard sales pitch. Just honest, straightforward insight from a team that has successfully <br></br> built and optimized over 120 digital experiences across Pune and India.

        </p>

        <Link to="/contact" className="bg-[#FF7A00] px-8 py-3 rounded-lg font-semibold">
          Book Free Consultation
        </Link>
      </section>

    </div>
  );
}

export default WebsiteDesign;