import { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LabelList,
} from "recharts";

function BenefitsOfDigitalMarketingSmallBusiness() {
    return (
        <section className="bg-white py-10 md:py-16">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* 🔥 HERO */}
                <div className="mb-12">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600 mb-5">
                        Marketing
                    </span>

                    <h1 className="font-serif text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6">
                        What are the benefits of digital marketing for small businesses?
                    </h1>

                    <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                            A
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-sm font-medium text-gray-900">Admin</span>
                            <span className="text-xs text-gray-500">April 2026 · 6 min read</span>
                        </div>
                    </div>
                </div>

                {/* FEATURE IMAGE */}
                <div className="mb-12">
                    <img
                        src="/ChatGPT Image Jul 22, 2026, 04_34_29 PM.png"
                        alt="Blog"
                        className="w-full h-[320px] md:h-[100%] object-cover rounded-2xl ring-1 ring-gray-200"
                    />
                </div>

                {/* CONTENT + SIDEBAR */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* BLOG CONTENT */}
                    <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">

                        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                            Benefits of Digital Marketing for Small Businesses
                        </h2>

                        {/* IN THIS ARTICLE */}
                        <div className="bg-orange-50/60 rounded-2xl p-6 not-prose">
                            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                                In this article
                            </span>
                            <ul className="mt-3 space-y-2.5">
                                {[
                                    "Reaching the Right Customers",
                                    "Getting Found Online",
                                    "Affordability and Measurability",
                                    "Building Trust and Credibility",
                                    "Engaging Customers",
                                    "Long-Term Survival and Growth",
                                ].map((item, i) => (
                                    <li key={item} className="flex items-baseline gap-3">
                                        <span className="font-serif text-sm text-orange-500 shrink-0">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="text-sm font-medium text-gray-800">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <h2 className="font-serif text-2xl font-bold text-gray-900 mt-10 mb-2">
                            Introduction
                        </h2>

                        <p>
                            Running a business, whether it's a coaching center, a dental clinic, or
                            a new restaurant, means you're constantly competing to survive in the
                            market. It's not just about having a presence on a local street
                            anymore; your business is now on the world's busiest street: the
                            internet. You need to compete online.
                        </p>

                        {/* PULL QUOTE / STAT */}
                        <div className="relative my-10 pl-2">
                            <span className="absolute -left-1 -top-6 font-serif text-6xl text-orange-500 leading-none select-none">
                                "
                            </span>
                            <p className="font-serif text-xl text-gray-900 pl-8 leading-snug">
                                76% of people check out a business online before visiting in
                                person, and 45% are more likely to convert when they find a
                                polished website or social page.
                            </p>
                        </div>

                        <p>
                            If your business isn't online, you're missing a lot of potential
                            customers, and a chance to make more money. Digital marketing is
                            crucial for small businesses, and with the right approach, it lets
                            you reach precisely the people most likely to buy what you're
                            selling.
                        </p>

                        <p>
                            This guide breaks down the core benefits of digital marketing, from
                            increasing visibility to building a loyal customer base, with
                            practical insights to help you harness its power.
                        </p>



                        {/* DIGITAL ADVERTISING MARKET BY COUNTRY */}
                        <div className="my-10 bg-white rounded-2xl border border-gray-100 p-6">
                            <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">
                                Digital Advertising Market by Country
                            </h3>
                            <p className="text-sm text-gray-500 mb-6">
                                Estimated ad spend, 2026 (USD billions)
                            </p>

                            <img src="/ChatGPT Image Jul 22, 2026, 04_43_50 PM.png" alt="top countries by digital advertising makret"></img>

                            <p className="text-xs text-gray-400 mt-4">
                                Source: eMarketer, 2026. Together these five markets account for
                                roughly 69% of global digital ad spend.
                            </p>
                        </div>

                        {/* BENEFIT 1 */}
                        <div className="mt-10">
                            <div className="flex items-baseline gap-3 mb-2">
                                <span className="font-serif text-orange-500 text-lg shrink-0">01</span>
                                <h2 className="font-serif text-2xl font-bold text-gray-900">
                                    Attracting Ideal Customers with Accuracy
                                </h2>
                            </div>

                            <p>
                                One of the most powerful advantages of digital marketing is that
                                businesses can precisely target the right audience for their
                                products or services.
                            </p>

                            <div className="mt-6 space-y-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        Audience-oriented targeting
                                    </h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                            <span>
                                                Businesses can target potential customers based on
                                                particular demographics, interests, online
                                                behaviours, and location.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                            <span>
                                                It ensures the marketing budget is spent on the
                                                audience genuinely interested in what you offer,
                                                leading to a higher return on investment (ROI).
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <img src="/ChatGPT Image Jul 22, 2026, 04_46_05 PM.png"></img>

                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        Global potential
                                    </h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                            <span>
                                                A strong digital presence helps capture global
                                                market opportunities.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                            <span>
                                                Global e-commerce's share of retail sales is
                                                projected to grow from 18.6% in 2022 to an
                                                estimated 22.9% by 2028 —{" "}

                                                <a href="https://www.oberlo.com/statistics/ecommerce-share-of-retail-sales"
                                                    className="text-orange-600 underline underline-offset-2"
                                                >
                                                    a sign of the opportunity waiting online
                                                </a>
                                                .
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* BENEFIT 2 */}
                        <div className="mt-12">
                            <div className="flex items-baseline gap-3 mb-2">
                                <span className="font-serif text-orange-500 text-lg shrink-0">02</span>
                                <h2 className="font-serif text-2xl font-bold text-gray-900">
                                    Get Discovered When People Need You
                                </h2>
                            </div>

                            <div className="mt-6 space-y-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        Turn online searches into walk-ins
                                    </h3>
                                    <p>
                                        Suppose a family in Pune is searching for "physiotherapist
                                        near me" on Google. If your clinic's profile is up to date
                                        on Google Business Profile and has a solid online presence,
                                        you're far more likely to get that walk-in.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        Connect with customers at the right moment
                                    </h3>
                                    <p>
                                        Digital marketing puts you in front of a customer exactly
                                        when they're looking for what you offer — unlike
                                        traditional marketing, which pushes your message out to
                                        everyone, whether they're in the market or not.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-gray-900 text-white p-6">

                                    <img src="/ChatGPT Image Jul 22, 2026, 04_47_20 PM.png"></img>

                                    <h3 className="font-serif font-semibold mb-2">
                                        Local search is the key to your door
                                    </h3>
                                    <p className="text-gray-300 text-sm">
                                        For small businesses, your Google Business Profile and
                                        local search rankings have become just as crucial as your
                                        physical storefront.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* BENEFIT 3 */}
                        <div className="mt-12">
                            <div className="flex items-baseline gap-3 mb-2">
                                <span className="font-serif text-orange-500 text-lg shrink-0">03</span>
                                <h2 className="font-serif text-2xl font-bold text-gray-900">
                                    Cost-Effective, and You Can See What's Working
                                </h2>
                            </div>

                            <p>
                                For small businesses, every rupee counts. Digital marketing is more
                                affordable than traditional advertising, and gives you a clear
                                picture of your results.
                            </p>

                            <div className="mt-6 space-y-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        Cost-effective
                                    </h3>
                                    <p className="mb-4">
                                        You can start online advertising with a small budget and
                                        still make a big impact.
                                    </p>

                                    {/* REAL EXAMPLE CARD */}
                                    <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-5">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                                            Real example
                                        </span>
                                        <p className="mt-2 text-gray-800">
                                            A home-made pickle brand in Mumbai spent just{" "}
                                            <span className="font-semibold text-gray-900">₹7,000</span>{" "}
                                            on Facebook ads and reached thousands of food lovers
                                            across Maharashtra's cities — turning weekend orders
                                            into a consistent stream of business.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        High returns
                                    </h3>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="rounded-2xl bg-gray-900 text-white p-5 text-center">
                                            <p className="font-serif text-3xl font-bold text-orange-400">
                                                ₹36
                                            </p>
                                            <p className="text-xs text-gray-400 mt-1">
                                                returned per ₹1 spent on email marketing
                                            </p>
                                        </div>
                                        <div className="rounded-2xl bg-gray-900 text-white p-5 text-center">
                                            <p className="font-serif text-3xl font-bold text-orange-400">
                                                200%
                                            </p>
                                            <p className="text-xs text-gray-400 mt-1">
                                                average return on PPC ad spend
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2">
                                        Source:{" "}

                                        <a href="https://www.wordstream.com/blog/ws/2022/04/19/digital-marketing-statistics"
                                            className="underline underline-offset-2"
                                        >
                                            WordStream
                                        </a>
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        Trackable results
                                    </h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                            <span>
                                                You can check exactly how many people clicked on the
                                                ad, visited the landing page, or made a purchase.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                            <span>
                                                This lets you make data-driven decisions about
                                                campaign optimization and where to spend your
                                                money.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* BENEFIT 4 */}
                        <div className="mt-12">
                            <img src="/ChatGPT Image Jul 22, 2026, 04_48_45 PM.png"></img>

                            <div className="flex items-baseline gap-3 mb-2">
                                <span className="font-serif text-orange-500 text-lg shrink-0">04</span>
                                <h2 className="font-serif text-2xl font-bold text-gray-900">
                                    Build Credibility and Trust Among Your Audience
                                </h2>
                            </div>

                            <div className="mt-6 space-y-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        Establish a professional presence
                                    </h3>
                                    <p>
                                        A well-maintained website, a blog with helpful content, and
                                        a robust social media presence help your business appear
                                        more credible and trustworthy to potential customers.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        Engage customers directly
                                    </h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                            <span>
                                                Social media is a two-way channel — a powerful
                                                medium to interact with users and answer their
                                                questions directly.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                            <span>
                                                This direct interaction helps build a loyal
                                                community around your brand and fosters genuine
                                                customer loyalty.
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        Showcase expertise and authority
                                    </h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                            <span>
                                                Creating helpful content, such as how-to guides or
                                                industry insights, establishes your business as an
                                                expert in your field.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                            <span>
                                                This doesn't just bring in new customers — it also
                                                builds long-term trust.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* BENEFIT 5 */}
                        <div className="mt-12">
                            <div className="flex items-baseline gap-3 mb-2">
                                <span className="font-serif text-orange-500 text-lg shrink-0">05</span>
                                <h2 className="font-serif text-2xl font-bold text-gray-900">
                                    Be Where Your Customers Are
                                </h2>
                            </div>

                            <div className="flex items-center gap-4 my-6 rounded-2xl bg-orange-50/60 p-5">
                                <span className="font-serif text-4xl font-bold text-orange-500 shrink-0">
                                    500M+
                                </span>
                                <p className="text-sm text-gray-700">
                                    Indians have an active social media account —{" "}

                                    <a href="https://datareportal.com/reports/digital-2026-india"
                                        className="text-orange-600 underline underline-offset-2"
                                    >
                                        DataReportal, 2026
                                    </a>
                                    . That's a massive audience.
                                </p>
                            </div>

                            <p>
                                They're watching Instagram Reels, sharing WhatsApp offers, and
                                looking for information. Digital marketing helps you show up in
                                their daily scrolling.
                            </p>

                            <div className="grid sm:grid-cols-3 gap-4 mt-6">
                                {[
                                    { place: "Bengaluru", biz: "Salon", action: "posts daily deals on Instagram" },
                                    { place: "Patna", biz: "Coaching center", action: "gives quick math tips on YouTube Shorts" },
                                    { place: "Delhi", biz: "Grocery store", action: "shares special offers on WhatsApp" },
                                ].map((item) => (
                                    <div key={item.place} className="rounded-2xl border border-gray-100 p-5">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                                            {item.place}
                                        </span>
                                        <p className="mt-2 text-sm text-gray-800">
                                            <span className="font-medium text-gray-900">{item.biz}</span>{" "}
                                            {item.action}.
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-6">
                                With digital marketing, you don't have to chase customers — they'll
                                find you while doing what they already do online.
                            </p>
                        </div>

                        {/* BENEFIT 6 */}
                        <div className="mt-12">
                            <div className="flex items-baseline gap-3 mb-2">
                                <span className="font-serif text-orange-500 text-lg shrink-0">06</span>
                                <h2 className="font-serif text-2xl font-bold text-gray-900">
                                    Stay Alive in the Long Game
                                </h2>
                            </div>

                            {/* PULL QUOTE / STAT */}
                            <div className="relative my-8 pl-2">
                                <span className="absolute -left-1 -top-6 font-serif text-6xl text-orange-500 leading-none select-none">
                                    "
                                </span>
                                <p className="font-serif text-xl text-gray-900 pl-8 leading-snug">
                                    70% of small businesses don't make it to their tenth
                                    anniversary.
                                </p>
                            </div>

                            <p>
                                To survive in business, you must adapt to new technological
                                changes. Today, adaptation means being digital.
                            </p>

                            <div className="mt-6 rounded-2xl bg-gray-900 text-white p-6">
                                <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                                    Real example
                                </span>
                                <p className="mt-2 text-gray-200">
                                    A handloom shop in Varanasi shifted online during the
                                    pandemic. They now ship sarees all over India, collecting
                                    leads through Instagram and WhatsApp. Without a digital
                                    presence, they might have shut their doors for good.
                                </p>
                            </div>

                            <p className="mt-6 font-medium text-gray-900">
                                Digital marketing isn't just for growth — it's for survival.
                            </p>
                        </div>

                        {/* TAKEAWAY */}
                        <div className="mt-14 rounded-2xl bg-orange-50/60 p-7">
                            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                                Takeaway
                            </span>
                            <p className="mt-3 font-serif text-xl text-gray-900 leading-snug">
                                Digital marketing helps people find you, builds their confidence in
                                you, and lets you advertise without spending a fortune. It's your
                                most effective way to stand out against bigger companies and keep
                                your business thriving for years to come.
                            </p>
                            <p className="mt-4 text-gray-700">
                                Especially in a market as competitive and full of potential as
                                India's, digital marketing isn't just a good idea — it's essential
                                for survival.
                            </p>
                        </div>


                        {/* FAQ */}
                        <div className="mt-14">
                            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                                FAQ
                            </span>
                            <h2 className="font-serif text-2xl font-bold text-gray-900 mt-2 mb-6">
                                Frequently Asked Questions
                            </h2>

                            <div className="divide-y divide-gray-100 border-t border-b border-gray-100">

                                <FaqItem
                                    number="01"
                                    question="What are the services of digital marketing?"
                                    answer="Digital marketing services include a range of activities that help your business get noticed online — social media posts, blog articles (content marketing), email campaigns, search engine optimization (SEO) to rank in search results, and paid online ads (PPC)."
                                />

                                <FaqItem
                                    number="02"
                                    question="Which type of business needs digital marketing?"
                                    answer="Any business that wants to attract and retain customers can benefit. From local shops to online stores and large corporations — if your customers are online, you need to be too."
                                />

                                <FaqItem
                                    number="03"
                                    question="What is pay-per-click in digital marketing?"
                                    answer="Pay-per-click (PPC) is an online advertising method where you're only charged when someone clicks on your ad."
                                />

                                <FaqItem
                                    number="04"
                                    question="What are the charges for digital marketing services in India?"
                                    answer="Costs vary a lot depending on your business objectives and the services you need — anywhere from a small monthly fee for basic services to a significant investment for a full campaign. It's best to get a customized quote for your specific needs."
                                />

                                <FaqItem
                                    number="05"
                                    question="Is it worth paying for digital marketing?"
                                    answer="Yes — treat it as an investment rather than an expense. A good strategy can lead to more customers, stronger brand recognition, and a healthier bottom line, with a solid return on investment."
                                />

                                <FaqItem
                                    number="06"
                                    question="How does digital marketing help small businesses compete with big brands?"
                                    answer="It lets you reach your target audience directly and cost-effectively. Audience-oriented targeted campaigns connect with customers in ways that big brands, with their broad advertising, often can't."
                                />

                                <FaqItem
                                    number="07"
                                    question="Can digital marketing really bring footfall to local stores?"
                                    answer="Yes. Local SEO, targeted social media ads, and online reviews can all direct nearby people to your physical store, bridging the gap between your online presence and your location."
                                />

                                <FaqItem
                                    number="08"
                                    question="How long does it take to see results from digital marketing?"
                                    answer="Some results, like PPC ads, can show up within days or weeks. Others, like brand reputation and search rankings, take consistent effort over a few months to a year."
                                />

                            </div>
                        </div>

                    </div>





                    {/* SIDEBAR */}
                    <div className="space-y-6">

                        {/* Latest Blogs */}
                        <div className="bg-white p-5 rounded-2xl border border-gray-100">
                            <h3 className="font-serif font-bold text-gray-900 mb-4">
                                Latest Blogs
                            </h3>

                            <div className="space-y-4">
                                {[
                                    { title: "Top 10 SEO Tips for 2026", date: "April 2026" },
                                    { title: "Social Media Trends to Watch", date: "March 2026" },
                                    { title: "Email Marketing That Converts", date: "March 2026" },
                                ].map((post) => (

                                    <a key={post.title}
                                        href="#"
                                        className="flex gap-3 group"
                                    >
                                        <img
                                            src="/socialmediamarketing.jpg"
                                            className="w-16 h-16 object-cover rounded-lg shrink-0"
                                            alt=""
                                        />
                                        <div className="min-w-0">
                                            <p className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors leading-snug">
                                                {post.title}
                                            </p>
                                            <span className="text-xs text-gray-500">
                                                {post.date}
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-gray-900 text-white p-6 rounded-2xl">
                            <div className="h-1 w-10 bg-orange-500 rounded-full mb-4" />
                            <h3 className="font-serif text-lg font-bold mb-2">
                                Grow your business
                            </h3>
                            <p className="text-sm text-gray-400 mb-5">
                                Get expert digital marketing services today.
                            </p>
                            <button className="w-full bg-white text-gray-900 px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-500 hover:text-white transition-colors">
                                Contact us
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </section>

    );


}

function FaqItem({ number, question, answer }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="py-5">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-start justify-between gap-4 text-left"
            >
                <span className="flex items-baseline gap-3">
                    <span className="font-serif text-sm text-orange-500 shrink-0">
                        {number}
                    </span>
                    <span className="font-medium text-gray-900">
                        {question}
                    </span>
                </span>
                <span
                    className={`shrink-0 mt-0.5 text-orange-500 transition-transform duration-200 ${open ? "rotate-45" : ""
                        }`}
                >
                    +
                </span>
            </button>

            <div
                className={`grid transition-all duration-200 ease-in-out ${open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="text-gray-600 pl-7 pr-8">{answer}</p>
                </div>
            </div>
        </div>
    );
}

export default BenefitsOfDigitalMarketingSmallBusiness;