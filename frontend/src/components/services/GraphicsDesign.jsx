import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Palette, Share2, Megaphone, Globe, Package, FileText, Film, LayoutTemplate, Building2, Award, Users, Clock, Search, Lightbulb, PenTool, RefreshCw, PackageCheck, Stethoscope, ShoppingBag, GraduationCap, UtensilsCrossed, Rocket, TrendingUp, Users2, Layers, Zap, ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet";

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


  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  return (
    <div className="overflow-hidden bg-white">

      <Helmet>
        <title>Graphic Designing Company in Pune | Fox Aircomm
        </title>
        <meta name="description" content="Fox Aircomm is an affordable graphic design company in Pune creating custom social media creatives, ad creatives and website graphics for growing brands." />
      </Helmet>

      {/* HERO */}
      <section className="bg-[#0529a0] text-white py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* Left: Copy */}
          <div>
            <span className="inline-block bg-white/10 border border-white/20 text-sm px-4 py-1.5 rounded-full mb-6">
              Graphic Design Services in Pune
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Graphic Design Services in Pune for Business Growth
            </h1>

            <p className="text-gray-200 mb-5 leading-relaxed text-lg">
              Strong visuals do more than attract attention; they shape buying
              decisions, build trust, and drive real business results.
            </p>

            <p className="text-gray-200 mb-4 leading-relaxed">
              Our graphic design services in Pune help businesses in Baner,
              Wakad, Hinjewadi, and Pimpri-Chinchwad create visual assets that
              enhance engagement, strengthen brand identity, and drive
              measurable marketing performance.
            </p>

            <p className="text-gray-200 mb-8 leading-relaxed">
              Whether you're a startup finding your footing or an established
              brand refreshing your identity, the right design partner makes
              all the difference.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-[#f85415] hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold"
              >
                👉 Book a Free Graphic Design Consultation
              </Link>

              <Link
                to="/portfolio"
                className="border border-white/30 hover:bg-white/10 transition px-8 py-4 rounded-xl font-semibold"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right: Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80"
                alt="Graphic designer working on brand visuals"
                className="rounded-2xl object-cover w-full h-56 shadow-xl translate-y-6"
              />
              <img
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80"
                alt="Brand identity and packaging design mockup"
                className="rounded-2xl object-cover w-full h-56 shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1611162617263-4ec3060a058e?auto=format&fit=crop&w=600&q=80"
                alt="Color palette and typography swatches"
                className="rounded-2xl object-cover w-full h-56 shadow-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80"
                alt="Marketing creatives and social media design"
                className="rounded-2xl object-cover w-full h-56 shadow-xl translate-y-6"
              />
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white text-gray-900 rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#0529a0]">500+</p>
                <p className="text-xs text-gray-500">Designs Delivered</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-[#0529a0]">4.9★</p>
                <p className="text-xs text-gray-500">Client Rating</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DIFFERENCE */}
      {/* SECTION 1: Why design matters */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Why It Matters"
            title="Why Professional Graphic Design Is No Longer Optional for Pune Businesses?"
            description="In a market as competitive as Pune's, first impressions are often visual ones."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-700 leading-relaxed mb-5">
                Customers judge your brand within seconds through your logo, ads,
                social posts, and website. If those visuals are inconsistent or
                underwhelming, you lose attention before you get a chance to earn
                trust.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Professional design solves that. When design is treated as a
                strategy, not just decoration, it becomes one of your most
                reliable business assets.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="text-sm font-semibold text-[#0529a0] uppercase tracking-wide mb-5">
                Professional design gives your brand
              </p>
              <div className="space-y-4">
                {[
                  "A consistent visual identity across every touchpoint",
                  "Higher engagement on digital platforms",
                  "Stronger ad performance and click-through rates",
                  "Better brand recall among your target audience",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#f85415] shrink-0 mt-0.5" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Services overview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            badge="Our Services"
            title="What Our Graphic Design Services in Pune Cover?"
            description="We offer end-to-end design solutions built around your business goals, not generic templates."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { icon: Palette, label: "Logo Design and Branding" },
              { icon: Share2, label: "Social Media Creatives Design" },
              { icon: Megaphone, label: "Ad Creative Design" },
              { icon: Globe, label: "Website Graphic Design" },
              { icon: Package, label: "Packaging and Label Design" },
            ].map(({ icon: Icon, label }, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border hover:border-[#0529a0]/30 hover:shadow-lg transition text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0529a0]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[#0529a0]" />
                </div>
                <p className="text-gray-800 font-medium text-sm leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Service deep-dives */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-6">
          {[
            {
              icon: Palette,
              title: "Logo Design and Branding Services in Pune",
              description:
                "Your logo is the visual anchor of everything your brand communicates. Our logo design and branding services in Pune go beyond creating a mark — we build a complete visual identity that reflects your brand's values and resonates with your audience.",
              items: [
                "Logo creation and redesign",
                "Brand guidelines and colour systems",
                "Stationery and corporate identity design",
              ],
              note: "Done right, branding creates lasting recognition. Done wrong, it creates confusion. We make sure your first impression holds.",
            },
            {
              icon: Package,
              title: "Packaging and Label Design in Pune",
              description:
                "First impressions on the shelf are as important as first impressions online. We design product packaging and labels that communicate quality, stand out in competitive retail environments, and stay consistent with your brand identity.",
              items: [
                "Product box and pouch design",
                "Label and sticker design",
                "Packaging artwork for print production",
                "Brand-consistent packaging systems across product lines",
              ],
            },
            {
              icon: FileText,
              title: "Brochure and Print Design Services in Pune",
              description:
                "Print materials remain one of the most direct ways to communicate your offer. Whether for an event, a sales visit, or a product launch, a well-designed brochure puts your brand in your customer's hands — literally.",
              items: [
                "Bi-fold and tri-fold brochures",
                "Product catalogues and company profiles",
                "Flyers and promotional inserts",
                "Business cards and corporate stationery",
              ],
              note: "All print files are delivered press-ready with correct bleed, resolution, and colour profiles.",
            },
          ].map(({ icon: Icon, title, description, items, note }, i) => (
            <div
              key={i}
              className="border rounded-2xl p-8 md:p-10 hover:shadow-lg transition grid md:grid-cols-[auto_1fr] gap-6"
            >
              <div className="w-14 h-14 rounded-xl bg-[#f85415]/10 flex items-center justify-center shrink-0">
                <Icon className="w-7 h-7 text-[#f85415]" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0529a0] mb-3">{title}</h3>
                <p className="text-gray-700 leading-relaxed mb-5">{description}</p>

                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                  {items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0529a0] shrink-0 mt-1" />
                      <p className="text-gray-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>

                {note && (
                  <p className="text-gray-600 text-sm italic border-t pt-4">{note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDY */}

      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Specialized Services"
            title="More Ways We Help Your Brand Show Up"
          />

          <div className="space-y-6">
            {[
              {
                icon: Film,
                title: "Motion Graphics and Animated Creatives in Pune",
                description:
                  "Static visuals get attention. Motion keeps it. Our motion graphics team produces animated content that elevates your brand across digital touchpoints — from social media reels to video ad intros.",
                items: [
                  "Animated social media posts and Instagram reels",
                  "Video intro sequences and logo animations",
                  "Motion-based ad creatives for Meta and Google",
                  "Product explainer animations",
                ],
                note: "Motion content consistently outperforms static in engagement metrics — we make sure yours is built to convert, not just to look good.",
                tint: "bg-[#0529a0]/10 text-[#0529a0]",
              },
              {
                icon: Share2,
                title: "Social Media Creatives Design in Pune",
                description:
                  "Consistency and creativity are what separate scroll-stopping content from content that gets ignored. Our branding team builds platform-specific visual strategies that keep your brand visible and engaging.",
                items: [
                  "Instagram and Facebook creatives",
                  "Story formats and paid ad visuals",
                  "Promotional campaign graphics",
                  "Engagement-driven content series",
                ],
                note: "Every piece is designed with your brand guidelines in mind — so your audience always knows it's you, regardless of the platform.",
                tint: "bg-[#f85415]/10 text-[#f85415]",
              },
              {
                icon: Megaphone,
                title: "Ad Creative Design Services in Pune",
                description:
                  "Ad performance is directly tied to visual quality. Our branding team focuses on producing visuals that don't just look good — they convert.",
                items: [
                  "Display ad banners for web and app placements",
                  "Google Ads and Meta Ads creatives",
                  "Print advertisement layouts",
                  "Campaign-specific graphic sets",
                ],
                note: "We build each creative around a clear objective — whether that's clicks, sign-ups, footfall, or sales — so your ad spend works harder.",
                tint: "bg-[#0529a0]/10 text-[#0529a0]",
              },
              {
                icon: LayoutTemplate,
                title: "Website Graphic Design Services in Pune",
                description:
                  "Your website is often the first real interaction a customer has with your brand. Weak visuals undermine even the best products. Our branding team ensures that your site looks credible, communicates clearly, and keeps users engaged.",
                items: [
                  "UI/UX design and visual hierarchy",
                  "Website banners and hero sections",
                  "Landing page creatives optimised for conversions",
                  "Custom web elements and iconography",
                ],
                note: "Good website design isn't just aesthetic — it directly impacts how long visitors stay and whether they take action.",
                tint: "bg-[#f85415]/10 text-[#f85415]",
              },
              {
                icon: Building2,
                title: "Large Format and Outdoor Advertising Design in Pune",
                description:
                  "Outdoor visibility is brand visibility. From site hoardings to exhibition backdrops, we design large-format graphics that hold attention at scale — without losing brand detail or print quality.",
                items: [
                  "Hoarding and billboard designs",
                  "Standees and roll-up banners",
                  "Exhibition stall backdrops and panels",
                  "Flex and vinyl print-ready artwork",
                ],
                note: "Every file is delivered at the correct DPI and dimensions for large-format printing — no pixelation, no last-minute reprints.",
                tint: "bg-[#0529a0]/10 text-[#0529a0]",
              },
            ].map(({ icon: Icon, title, description, items, note, tint }, i) => (
              <div
                key={i}
                className={`bg-white rounded-3xl border p-8 md:p-10 grid md:grid-cols-[220px_1fr] gap-8 items-start ${i % 2 === 1 ? "md:[direction:rtl]" : ""
                  }`}
              >
                <div className={`md:[direction:ltr] flex md:flex-col items-center md:items-start gap-4 md:gap-0`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${tint}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                </div>

                <div className="md:[direction:ltr]">
                  <h3 className="text-2xl font-bold text-[#0529a0] mb-3">{title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-5">{description}</p>

                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
                    {items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#f85415] shrink-0 mt-1" />
                        <p className="text-gray-700 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm italic border-t pt-4">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      {/* SECTION 1: How to choose */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            badge="Before You Decide"
            title="How to Choose the Right Graphic Design Company in Pune"
            description="Not every design agency is built the same. Look beyond price and turnaround time."
          />

          <div className="bg-gray-50 rounded-3xl p-8 md:p-10">
            <p className="text-gray-700 leading-relaxed mb-8">
              The right graphic design company in Pune should be able to show you:
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 mb-8">
              {[
                "A strong portfolio with diverse, relevant work",
                "Demonstrated results — not just pretty visuals, but outcomes",
                "Clear processes for revisions, feedback, and timelines",
                "Experience in your industry or similar verticals",
                "The ability to scale — from a single creative to a full campaign",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0529a0] shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed border-t pt-6">
              Ask to see case studies. Ask how they approach briefs.{" "}
              <span className="font-semibold text-[#0529a0]">
                A good agency will ask you as many questions as you ask them.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Why Fox Aircomm */}
      <section className="py-20 px-4 bg-[#0529a0] text-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Why Fox Aircomm"
            title="Why Fox Aircomm for Graphic Design in Pune"
            className="text-white"
          />

          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* Stats column */}
            <div className="lg:col-span-1 space-y-6">
              <p className="text-gray-200 leading-relaxed">
                Founded in 2016, Fox Aircomm has established itself as a trusted
                custom graphic design company in Pune, backed by 10+ years of
                creative and marketing expertise.
              </p>

              <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
                {[
                  { icon: Clock, value: "2016", label: "Founded" },
                  { icon: Award, value: "10+ Years", label: "Creative Expertise" },
                  { icon: Users, value: "100+", label: "Clients Served" },
                ].map(({ icon: Icon, value, label }, i) => (
                  <div key={i} className="bg-white/10 border border-white/20 rounded-2xl p-5 flex items-center gap-4">
                    <Icon className="w-6 h-6 text-[#f85415] shrink-0" />
                    <div>
                      <p className="text-xl font-bold leading-none">{value}</p>
                      <p className="text-xs text-gray-300 mt-1">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Differentiators + CTA */}
            <div className="lg:col-span-2">
              <p className="text-gray-200 leading-relaxed mb-8">
                We blend creative thinking with strategic execution to deliver
                designs that go beyond visual appeal — helping businesses
                strengthen their brand presence, improve engagement, and drive
                measurable growth. Our work is backed by strong client trust,
                long-term partnerships, and consistent positive feedback.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { label: "Strategy before aesthetics", detail: "Every design decision is tied to a business objective" },
                  { label: "Performance-driven creatives", detail: "Built to improve engagement, clicks, and conversions" },
                  { label: "Brand consistency", detail: "Cohesive visuals across social, web, and advertising" },
                  { label: "Cross-industry experience", detail: "Real estate, healthcare, e-commerce, startups, education, hospitality" },
                  { label: "Reliable execution", detail: "Fast turnaround, clear communication, and scalable output" },
                ].map(({ label, detail }, i) => (
                  <div key={i} className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <CheckCircle2 className="w-5 h-5 text-[#f85415] shrink-0 mt-0.5" />
                    <p>
                      <span className="font-semibold">{label}</span>{" "}
                      <span className="text-gray-300">— {detail}</span>
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-gray-200 italic mb-8">
                We treat your brand the way you do — with purpose.
              </p>

              <Link
                to="/contact"
                className="inline-block bg-[#f85415] hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold"
              >
                👉 Start Your Design Project With Our Team
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      {/* SECTION 1: Process — genuine sequence, so numbering earns its place */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Process"
            title="Our Graphic Design Process"
            description="Built to ensure every creative asset aligns with your brand goals, audience expectations, and marketing objectives."
          />

          <div className="relative">
            {/* connecting line */}
            <div className="hidden md:block absolute top-8 left-8 right-8 h-0.5 bg-gray-200" />

            <div className="grid md:grid-cols-5 gap-8 md:gap-4">
              {[
                { icon: Search, title: "Understanding Your Brand", desc: "Analysing your business, audience, competitors, and positioning to create a strong creative direction." },
                { icon: Lightbulb, title: "Strategy & Concept Development", desc: "Design concepts focused on visual consistency, engagement, and conversion-driven communication." },
                { icon: PenTool, title: "Creative Design Execution", desc: "Custom graphics, branding materials, social creatives, website visuals, and marketing assets." },
                { icon: RefreshCw, title: "Feedback & Refinement", desc: "A structured revision process to ensure the final output matches your brand standards." },
                { icon: PackageCheck, title: "Final Delivery & Support", desc: "Optimised files for digital, print, and social use, plus ongoing creative support." },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#0529a0] flex items-center justify-center mb-4 relative z-10">
                    <Icon className="w-7 h-7 text-[#0529a0]" />
                  </div>
                  <span className="text-xs font-semibold text-[#f85415] mb-1">STEP {i + 1}</span>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Tools table */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            badge="Our Toolkit"
            title="Tools Our Graphic Designers in Pune Use"
            description="Tool selection is always matched to the deliverable — not the other way around."
          />

          <div className="border rounded-2xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0529a0] text-white">
                  <th className="px-6 py-4 font-semibold text-sm">Tool</th>
                  <th className="px-6 py-4 font-semibold text-sm">Primary Use</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Adobe Photoshop", "Social media creatives, ad banners, image retouching, and background removal"],
                  ["Adobe Illustrator", "Logo design, vector graphics, brand identity elements"],
                  ["Adobe InDesign", "Brochures, catalogues, multi-page print layouts"],
                  ["CorelDRAW", "Print DTP, flex boards, visiting cards, and packaging artwork"],
                  ["Figma", "Website UI/UX design, web banners, wireframes"],
                  ["Adobe After Effects", "Motion graphics, animated social reels, video intros"],
                ].map(([tool, use], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-medium text-gray-900 text-sm whitespace-nowrap">{tool}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 3: Affordability argument */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="Investment"
            title="Are Affordable Graphic Design Services in Pune Worth It?"
            description="Affordability and quality are not mutually exclusive if you're working with the right team."
          />

          <p className="text-gray-700 leading-relaxed mb-8 text-center">
            Affordable graphic design services in Pune are particularly valuable for
            startups and SMEs that need professional-grade output without
            enterprise-level budgets.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              "High ROI on design investment",
              "Access to skilled, experienced designers",
              "Scalable packages that grow with your needs",
              "No compromise on brand quality or consistency",
            ].map((item, i) => (
              <div key={i} className="bg-white border rounded-xl px-5 py-4 text-gray-700 text-sm font-medium">
                {item}
              </div>
            ))}
          </div>

          <p className="text-center text-xl font-semibold text-[#0529a0] border-t pt-8">
            The real question isn't whether you can afford professional design —
            it's whether you can afford <span className="text-[#f85415]">not</span> to have it.
          </p>
        </div>
      </section>

      {/* SECTION 4: Value beyond visuals */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Beyond the Visuals"
            title="How Professional Graphic Designers in Pune Add Value Beyond Visuals"
            description="Design is problem-solving. Our designers bring brand psychology, audience behaviour, and marketing performance to every project."
          />

          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            {[
              { icon: TrendingUp, text: "Translating business goals into visual strategies" },
              { icon: Layers, text: "Maintaining brand consistency across formats and channels" },
              { icon: Zap, text: "Creating conversion-focused layouts and visual hierarchies" },
              { icon: Users2, text: "Iterating quickly based on performance data and feedback" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#0529a0]/5 rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-[#0529a0] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-800 font-medium text-sm">{text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 italic">
            When designers think like marketers, your creatives perform like assets.
          </p>
        </div>
      </section>

      {/* SECTION 5: Industries served + closing CTA */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Who We Work With"
            title="Industries We Serve"
            description="Our creative graphic design services in Pune are adapted to the specific audiences, regulations, and communication styles of different sectors. We've worked across:"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {[
              { icon: Building2, name: "Real Estate", desc: "Property launches, site hoardings, digital campaigns" },
              { icon: Stethoscope, name: "Healthcare", desc: "Patient-facing materials, clinic branding, awareness campaigns" },
              { icon: ShoppingBag, name: "E-commerce", desc: "Product visuals, promotional banners, catalogue design" },
              { icon: GraduationCap, name: "Education", desc: "Institution branding, course creatives, admission campaigns" },
              { icon: UtensilsCrossed, name: "Hospitality", desc: "Menu design, event creatives, social media content" },
              { icon: Rocket, name: "IT and Startups", desc: "Brand identity, pitch decks, product UI support" },
            ].map(({ icon: Icon, name, desc }, i) => (
              <div key={i} className="bg-white border rounded-2xl p-6 hover:shadow-lg transition">
                <div className="w-10 h-10 rounded-lg bg-[#f85415]/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#f85415]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-6">
              Whatever your industry, we adapt our design thinking to fit your audience and goals.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#f85415] hover:bg-orange-600 transition px-8 py-4 rounded-xl font-semibold text-white"
            >
              👉 Talk to Our Design Experts Today
            </Link>
          </div>
        </div>
      </section>




      {/* INDUSTRIES */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="FAQs"
            title="Frequently Asked Questions — Graphic Design Services in Pune"
          />

          <div className="space-y-4">

            {/* FAQ 1 */}
            <div className="border rounded-2xl overflow-hidden transition">
              <button
                onClick={() => setOpen1(!open1)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-gray-50 transition"
                aria-expanded={open1}
              >
                <span className="font-semibold text-gray-900">
                  What do graphic design services in Pune typically include?
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#0529a0] shrink-0 transition-transform duration-200 ${open1 ? "rotate-180" : ""
                    }`}
                />
              </button>

              {open1 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 mb-4">
                    Graphic design services in Pune usually include:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                      Logo and brand identity design
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                      Social media creatives
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                      Ad banners and marketing materials
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                      Website graphics and UI visuals
                    </li>
                  </ul>
                  <p className="text-gray-600 text-sm italic bg-gray-50 rounded-xl p-4">
                    For example, a restaurant may need menu designs and Instagram
                    creatives, while a startup may require branding, pitch decks,
                    and website banners to improve visibility and engagement.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="border rounded-2xl overflow-hidden transition">
              <button
                onClick={() => setOpen2(!open2)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-gray-50 transition"
                aria-expanded={open2}
              >
                <span className="font-semibold text-gray-900">
                  What is the cost of graphic design services in Pune?
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#0529a0] shrink-0 transition-transform duration-200 ${open2 ? "rotate-180" : ""
                    }`}
                />
              </button>

              {open2 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 mb-4">
                    The cost depends on the scope, complexity, and experience of
                    the agency or designer. Typical pricing includes:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                      Logo design: ₹5,000 – ₹25,000+
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                      Social media creatives: ₹500 – ₹3,000 per post
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                      Branding packages: ₹15,000 – ₹1,00,000+
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                      Website graphics/UI design: ₹15,000 – ₹50,000+
                    </li>
                  </ul>
                  <p className="text-gray-600 text-sm italic bg-gray-50 rounded-xl p-4">
                    For example, startups may choose affordable monthly creative
                    packages, while established brands often invest in custom
                    branding and campaign design for better long-term results.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="border rounded-2xl overflow-hidden transition">
              <button
                onClick={() => setOpen3(!open3)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-gray-50 transition"
                aria-expanded={open3}
              >
                <span className="font-semibold text-gray-900">
                  How often should businesses invest in social media creative design?
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#0529a0] shrink-0 transition-transform duration-200 ${open3 ? "rotate-180" : ""
                    }`}
                />
              </button>

              {open3 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 mb-4">
                    Businesses should invest regularly to maintain visibility and
                    engagement. This typically includes:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                      Weekly promotional creatives
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                      Festival and campaign posts
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                      Product update graphics
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                      Daily or monthly content designs
                    </li>
                  </ul>
                  <p className="text-gray-600 text-sm italic bg-gray-50 rounded-xl p-4">
                    For example, restaurants may post offers weekly, while
                    e-commerce brands often require daily creatives to keep
                    audiences engaged and improve brand recognition across
                    Instagram and Facebook.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="border rounded-2xl overflow-hidden transition">
              <button
                onClick={() => setOpen4(!open4)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-gray-50 transition"
                aria-expanded={open4}
              >
                <span className="font-semibold text-gray-900">
                  What's the difference between a branding agency and a graphic design company?
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#0529a0] shrink-0 transition-transform duration-200 ${open4 ? "rotate-180" : ""
                    }`}
                />
              </button>

              {open4 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 mb-4">
                    A branding agency focuses on overall brand strategy, while a
                    graphic design company mainly creates visual assets.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-[#0529a0] mb-2">
                        Branding typically includes:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                          Brand positioning and messaging
                        </li>
                        <li className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                          Visual identity strategy
                        </li>
                        <li className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                          Audience perception and consistency
                        </li>
                        <li className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                          Long-term brand development
                        </li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#0529a0] mb-2">
                        Graphic design companies usually handle:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                          Logos and social media creatives
                        </li>
                        <li className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                          Ad banners and marketing materials
                        </li>
                        <li className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                          Website graphics and visual content
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm italic bg-gray-50 rounded-xl p-4">
                    For example, a branding agency defines how your business
                    should be perceived, while a graphic design company designs
                    the visuals that communicate that identity.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="border rounded-2xl overflow-hidden transition">
              <button
                onClick={() => setOpen5(!open5)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-gray-50 transition"
                aria-expanded={open5}
              >
                <span className="font-semibold text-gray-900">
                  How long does a logo design project take in Pune?
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#0529a0] shrink-0 transition-transform duration-200 ${open5 ? "rotate-180" : ""
                    }`}
                />
              </button>

              {open5 && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 mb-4">
                    A professional logo design project in Pune typically takes:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                      3–7 days for basic logo concepts
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                      2–4 weeks for custom logo design
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f85415] mt-2 shrink-0" />
                      4–6 weeks for complete branding projects
                    </li>
                  </ul>
                  <p className="text-gray-600 text-sm italic bg-gray-50 rounded-xl p-4">
                    The timeline depends on research, revisions, and project
                    complexity. For example, startups may need faster logo
                    delivery, while established businesses often require detailed
                    branding guidelines and multiple design iterations for a
                    refined brand identity.
                  </p>
                </div>
              )}
            </div>

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