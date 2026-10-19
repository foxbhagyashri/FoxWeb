import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

/* -------------------------------------------------------------------------- */
/*  CONFIG                                                                    */
/* -------------------------------------------------------------------------- */

// Point every CTA at your real contact route.
const CONTACT_URL = "/contact";

// Flip to false to keep linking to the current /services/... URLs
// until the new Pune-focused routes are live and redirected.
const USE_RECOMMENDED_URLS = true;

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2070&q=80";
const CTA_IMAGE =
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2070&q=80";

/* -------------------------------------------------------------------------- */
/*  CONTENT                                                                   */
/* -------------------------------------------------------------------------- */

const planSteps = [
  {
    title: "Customer analysis",
    text: "Understand who your customers are and what they need.",
  },
  {
    title: "Marketing audit",
    text: "Review current channels, campaigns, and performance.",
  },
  {
    title: "Set sustainable objectives",
    text: "Define clear goals: where do we want to go?",
  },
  {
    title: "Segment your customer base",
    text: "Group customers by behavior, needs, and value.",
  },
  {
    title: "Target and position",
    text: "Focus on high-potential segments and position your brand.",
  },
  {
    title: "Create your marketing action plan",
    text: "Turn strategy into concrete campaigns and tactics.",
  },
  {
    title: "Monitor, manage, and improve",
    text: "Track results, optimize continuously, and scale what works.",
  },
];

const growthStages = [
  {
    title: "Build visibility",
    text: "SEO, social media, content, Google Ads and other channels help businesses reach relevant audiences.",
  },
  {
    title: "Generate qualified leads",
    text: "Search, paid advertising, social media and messaging channels bring potential customers into the sales funnel.",
  },
  {
    title: "Nurture customers",
    text: "WhatsApp, SMS, RCS and email help businesses maintain communication with prospects and existing customers.",
  },
  {
    title: "Convert and retain",
    text: "Websites, CRM, remarketing and analytics help businesses improve conversions and customer relationships.",
  },
];

const approach = [
  {
    n: "01",
    title: "Learn",
    text: "Understand your business, audience, competitors, objectives and market.",
  },
  {
    n: "02",
    title: "Apply",
    text: "Create and execute a customised digital strategy.",
  },
  {
    n: "03",
    title: "Grow",
    text: "Track performance, optimise campaigns and scale what works.",
  },
];

const outcomes = [
  "Higher online visibility",
  "More qualified website traffic",
  "Increased enquiries",
  "Better lead quality",
  "Improved customer engagement",
  "Stronger brand presence",
  "Better conversion opportunities",
  "More efficient marketing campaigns",
];

// [name, current URL, recommended URL]
const s = (name, current, recommended) => ({
  name,
  href: USE_RECOMMENDED_URLS ? recommended : current,
});
const base = "https://www.foxaircomm.com/services";

const serviceGroups = [
  {
    id: "marketing",
    label: "Search & social",
    blurb: "Get found, get clicks and build an audience.",
    items: [
      s("Social Media Marketing", `${base}/services/social-media-marketing`, "/services/social-media-marketing"),
      s("Search Engine Optimization", `${base}/services/seo`, "/services/seo"),
      s("Google Adwords", `${base}/services/google-adwords`, "/services/google-adwords"),
      s("PPC Management", `${base}/services/PPC-Management-Services-in-Pune`, "/services/PPC-Management-Services-in-Pune"),
    ],
  },
  {
    id: "messaging",
    label: "Messaging",
    blurb: "Stay in touch with prospects and customers.",
    items: [
      s("Bulk SMS", `${base}/services/bulk-sms`, "/services/bulk-sms"),
      s("RCS SMS", `${base}/services/rcs-sms`, "/services/rcs-sms"),
      s("Meta WhatsApp", `${base}/services/meta-whatsapp`, "/services/meta-whatsapp"),
      s("Voice Call", `${base}/services/voice-call`, "/services/voice-call"),
    ],
  },
  {
    id: "web",
    label: "Web & software",
    blurb: "Websites and tools built around how you work.",
    items: [
      s("Website Design", `${base}/services/website-design`, "/services/website-design"),
      s("Ecommerce Design", `${base}/services/ecommerce-design`, "/services/ecommerce-design"),
      s("Custom Software Development", `${base}/services/custom-software`, "/services/custom-software"),
      s("Data Extractor Software", `${base}/services/data-extractor`, "/services/data-extractor"),
      s("WhatsApp Marketing Software", `${base}/services/whatsapp-software`, "/services/whatsapp-software"),
    ],
  },
  {
    id: "creative",
    label: "Creative design",
    blurb: "Visuals that make your brand look consistent.",
    items: [
      s("Graphics Design", `${base}/services/graphics-design`, "/services/graphics-design"),
      s("Brochure Design", `${base}/services/brochure-design`, "/services/brochure-design"),
      s("Visiting Card Design", `${base}/services/visiting-card-design`, "/services/visiting-card-design"),
      s("Logo Design", `${base}/services/logo-design`, "/services/logo-design"),
      s("Video Editing", `${base}/services/video-editing`, "/services/video-editing"),
    ],
  },
  {
    id: "crm",
    label: "CRM & management",
    blurb: "Keep customers and projects organised.",
    items: [
      s("CRM", `${base}/services/custom-crm-development`, "/services/custom-crm-development"),
      s(
        "Construction Management Software",
        `${base}/services/construction-management-software`,
        "/services/construction-management-software"
      ),
    ],
  },
];

const faqs = [
  {
    q: "What digital marketing services does Fox AirComm offer?",
    a: "Fox AirComm offers SEO, Google Ads, PPC management, social media marketing, WhatsApp, SMS, RCS and voice messaging, website and ecommerce design, custom software, CRM, and creative design. We work with businesses from our base in Pune, PCMC.",
  },
  {
    q: "Does Fox AirComm provide 360° digital marketing services?",
    a: "Yes, Fox AirComm provides 360° digital marketing under one roof. That covers visibility, lead generation, customer communication, websites, software and creative design, so you don't need separate vendors for each.",
  },
  {
    q: "Which businesses can benefit from your digital marketing services?",
    a: "Any business that wants a stronger online presence and more qualified enquiries can benefit. We tailor the plan to your audience, competitors and goals, whether you sell products, offer services or run a specialised operation such as construction.",
  },
  {
    q: "Does Fox AirComm provide SEO and Google Ads services?",
    a: "Yes, Fox AirComm provides SEO, Google Ads and PPC management. SEO helps your site appear in organic search results, while Google Ads and PPC campaigns put your business in front of people searching right now.",
  },
  {
    q: "Can Fox AirComm manage social media marketing?",
    a: "Yes, Fox AirComm can manage social media marketing for your business. We plan content, build your brand presence across platforms and use social channels to bring potential customers into your sales funnel.",
  },
  {
    q: "Does Fox AirComm provide website development services?",
    a: "Yes, Fox AirComm designs and develops websites, including ecommerce websites. We also build custom software, CRM systems and other tools when your business needs more than a standard site.",
  },
  {
    q: "Do you offer WhatsApp, SMS and RCS marketing solutions?",
    a: "Yes, we offer WhatsApp, Bulk SMS, RCS SMS and voice call solutions, along with WhatsApp marketing software. These channels help you keep in touch with prospects and existing customers.",
  },
  {
    q: "Can I choose multiple digital marketing services together?",
    a: "Yes, you can combine as many services as you need. Channels work best together, so we build one plan that connects search, social, messaging, web and CRM instead of running them separately.",
  },
];

/* -------------------------------------------------------------------------- */
/*  SMALL PIECES                                                              */
/* -------------------------------------------------------------------------- */

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500";

const ArrowIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 20 20"
    className={`w-4 h-4 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 10h12M11 5l5 5-5 5" />
  </svg>
);

const CheckIcon = () => (
  <svg
    viewBox="0 0 20 20"
    className="w-5 h-5 shrink-0 text-orange-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="8.25" />
    <path d="M6.5 10.2l2.3 2.3 4.7-4.9" />
  </svg>
);

const PrimaryButton = ({ href, children }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-3.5 text-base font-semibold text-white transition hover:from-orange-600 hover:to-red-600 active:scale-95 ${focusRing}`}
  >
    {children}
  </a>
);

const GhostButton = ({ href, children }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 active:scale-95 ${focusRing}`}
  >
    {children}
  </a>
);

/* -------------------------------------------------------------------------- */
/*  SECTIONS                                                                  */
/* -------------------------------------------------------------------------- */

function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "20%"]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.12 } },
  };
  const item = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <header ref={ref} className="relative isolate overflow-hidden bg-stone-900">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${HERO_IMAGE})`, y }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950/95 via-stone-950/75 to-stone-950/30"
      />

      <motion.div
        className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-5 py-28 md:px-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={item}
          className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl"
        >
          Our Services
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl"
        >
          Fox AirComm is a 360° digital marketing agency based in Pune, PCMC for
          online presence, generating qualified leads, engaging customers and
          helping businesses grow in measurable terms.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          From SEO and Google Ads to social media, web development, software,
          messaging, and creative design, we bring every digital growth
          requirement under one roof.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <PrimaryButton href="tel:8879864151">Get a Free Consultation</PrimaryButton>
          <GhostButton href="#all-services">Explore Our Services</GhostButton>
        </motion.div>
      </motion.div>
    </header>
  );
}

function WhatWeDo() {
  return (
    <section className="theme-bg-primary px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-3xl font-bold tracking-tight theme-text-primary md:text-5xl">
            What we do
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed theme-text-secondary">
            At Fox Aircomm, we focus on understanding customers and using customer insights, market research, and data-driven strategies to shape effective digital marketing plans. Our approach helps businesses in Pune and PCMC reach the right audience, build stronger brands, and achieve sustainable business growth.
          </p>

          <img src="/ChatGPT Image Sep 19, 2026, 12_18_16 PM.png" className="mt-5 rounded-lg"></img>
        </div>

        <ol className="relative border-l-2 border-orange-500/30">
          {planSteps.map((step, i) => (
            <li key={step.title} className="relative pb-10 pl-10 last:pb-0 md:pl-14">
              <span
                aria-hidden="true"
                className="absolute -left-[19px] top-0 flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white ring-4 ring-white/0"
              >
                {i + 1}
              </span>
              <h3 className="text-xl font-bold theme-text-primary md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xl text-base leading-relaxed theme-text-secondary">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function GrowthFunnel() {
  const reduce = useReducedMotion();
  // Each stage is narrower than the last: a literal funnel.
  const widths = ["100%", "90%", "80%", "70%"];

  return (
    <section className="bg-orange-50 px-5 py-20 dark:bg-stone-900 md:px-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight theme-text-primary md:text-5xl">
          How do our digital marketing services drive business growth?
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed theme-text-secondary">
          Our services aren't a checklist. They work together, moving people
          from first search to loyal customer.
        </p>

        <ol className="mt-14 flex flex-col items-center gap-3">
          {growthStages.map((stage, i) => (
            <motion.li
              key={stage.title}
              className="flex w-full items-stretch overflow-hidden rounded-2xl border theme-border theme-bg-card"
              style={{ maxWidth: widths[i] }}
              initial={reduce ? false : { opacity: 0, scaleX: 0.85 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
            >
              <div className="flex w-14 shrink-0 items-center justify-center bg-orange-600 text-lg font-bold text-white md:w-20 md:text-2xl">
                {i + 1}
              </div>
              <div className="p-5 md:p-7">
                <h3 className="text-lg font-bold theme-text-primary md:text-2xl">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed theme-text-secondary md:text-base">
                  {stage.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ServiceDirectory() {
  const [active, setActive] = useState(serviceGroups[0].id);
  const group = serviceGroups.find((g) => g.id === active);

  return (
    <section id="all-services" className="theme-bg-primary px-5 py-20 md:px-8 md:py-28 scroll-mt-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight theme-text-primary md:text-5xl">
          Every service, one team
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed theme-text-secondary">
          Pick a category to see what we offer. Each service has its own page
          with details.
        </p>

        <div
          role="tablist"
          aria-label="Service categories"
          className="mt-10 flex flex-wrap gap-2"
        >
          {serviceGroups.map((g) => {
            const on = g.id === active;
            return (
              <button
                key={g.id}
                role="tab"
                id={`tab-${g.id}`}
                aria-selected={on}
                aria-controls={`panel-${g.id}`}
                onClick={() => setActive(g.id)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition md:text-base ${focusRing} ${on
                  ? "border-orange-600 bg-orange-600 text-white"
                  : "theme-border theme-text-primary hover:border-orange-500"
                  }`}
              >
                {g.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${group.id}`}
          aria-labelledby={`tab-${group.id}`}
          className="mt-10 grid gap-x-16 gap-y-2 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"
        >
          <p className="pb-6 text-xl font-semibold leading-snug theme-text-primary lg:pt-4">
            {group.blurb}
          </p>

          <ul key={group.id} className="border-t theme-border">
            {group.items.map((item, i) => (
              <motion.li
                key={item.name}
                className="border-b theme-border"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <a
                  href={item.href}
                  className={`group flex items-center justify-between gap-4 py-5 text-lg font-semibold theme-text-primary transition hover:text-orange-600 md:text-2xl ${focusRing}`}
                >
                  {item.name}
                  <ArrowIcon className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="bg-stone-950 px-5 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
          Our approach to digital growth
        </h2>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0">
          {approach.map((step, i) => (
            <li
              key={step.title}
              className={`md:px-10 ${i === 0 ? "md:pl-0" : "md:border-l md:border-white/15"
                } ${i === approach.length - 1 ? "md:pr-0" : ""}`}
            >
              <span className="block text-7xl font-extrabold leading-none text-orange-500 md:text-8xl">
                {step.n}
              </span>
              <h3 className="mt-6 text-2xl font-bold md:text-3xl">{step.title}</h3>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-white/75 md:text-lg">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section className="theme-bg-primary px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div>
          <h2 className="text-3xl font-bold tracking-tight theme-text-primary md:text-5xl">
            What results can you expect from our services?
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed theme-text-secondary">
            Every business starts from a different place, so we focus on the
            outcomes we work toward with you.
          </p>
          {/*
            Have verified case-study numbers? Add them here, e.g. a short
            list of client results with the metric, timeframe and channel.
          */}
        </div>

        <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {outcomes.map((o) => (
            <li
              key={o}
              className="flex items-start gap-3 border-b theme-border pb-6 text-lg font-medium theme-text-primary"
            >
              <CheckIcon />
              {o}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="bg-orange-50 px-5 py-20 dark:bg-stone-900 md:px-8 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-20">
        <h2 className="text-3xl font-bold tracking-tight theme-text-primary md:text-5xl lg:sticky lg:top-28 lg:self-start">
          Frequently asked questions about our digital marketing services
        </h2>

        <div className="border-t theme-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b theme-border">
                <h3>
                  <button
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className={`flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold theme-text-primary md:text-xl ${focusRing}`}
                  >
                    {f.q}
                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border theme-border text-xl leading-none transition-transform ${isOpen ? "rotate-45 bg-orange-600 border-orange-600 text-white" : ""
                        }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 text-base leading-relaxed theme-text-secondary md:text-lg">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-stone-900 px-5 py-24 md:px-8 md:py-36">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${CTA_IMAGE})` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-stone-950/50"
      />
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
          Ready to build a stronger digital presence?
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
          Whether you need better search visibility, more qualified leads,
          stronger customer engagement, a high-performing website, or
          customised software, Fox AirComm can help you build the right digital
          growth strategy.
        </p>
        <div className="mt-10">
          <PrimaryButton href={CONTACT_URL}>Get a Free Consultation</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                      */
/* -------------------------------------------------------------------------- */

function Ourservice() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <WhatWeDo />
      <GrowthFunnel />
      <ServiceDirectory />
      <Approach />
      <Results />
      <FAQ />
      <FinalCTA />
    </main>
  );
}

export default Ourservice;