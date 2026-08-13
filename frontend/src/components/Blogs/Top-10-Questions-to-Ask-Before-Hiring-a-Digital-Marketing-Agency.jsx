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

function Top10questionaskmarketingAgency() {
    return (
        <section className="bg-white py-10 md:py-16">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* 🔥 HERO */}
                <div className="mb-12">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600 mb-5">
                        Marketing
                    </span>

                    <h1 className="font-serif text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6">
                        Top 10 Questions to Ask Before Hiring a Digital Marketing Agency
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
                        src="/ChatGPT Image Jul 23, 2026, 05_11_11 PM.png"
                        alt="Blog"
                        className="w-full h-[320px] md:h-[100%] object-cover rounded-2xl ring-1 ring-gray-200"
                    />
                </div>

                {/* CONTENT + SIDEBAR */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* BLOG CONTENT */}
                    <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">

                        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                            Introduction
                        </h2>

                        <p>
                            Are you a business owner depressed by fluctuating online results? Do you feel stuck
                            with an agency that gives you confusing reports instead of showing you real growth?
                        </p>

                        <p>
                            The problem with a bad partnership is more than just the money you pay them. It's the
                            wasted budget and the growth you miss out on, which quietly hamper your business.
                        </p>

                        <p>
                            Hiring a digital marketing agency isn't just a contract; it's choosing someone who
                            will help shape your brand's future. Too many businesses get drawn in by flashy
                            pitches and "we do it all" promises, only to end up disappointed with no real results.
                        </p>

                        <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-700 my-6">
                            💬 "Real marketing isn't about chasing traffic — it's about earning trust."
                        </blockquote>

                        <p>
                            A great agency enhances your profit and return on investment (ROI). A poor one slowly
                            erodes your brand's value.
                        </p>

                        <p>
                            In this article, we have provided a checklist of the 10 most important questions to
                            ask before you hire a digital marketing agency.
                        </p>

                        <h2 className="font-serif text-2xl font-bold text-gray-900 mt-12 mb-2">
                            1. What is Your Experience in My Industry?
                        </h2>

                        <p>
                            <strong>The Real Pain:</strong> The biggest pain point is the wasted budget spent on
                            agencies that can't show real impact in your industry.
                        </p>

                        <p>
                            <strong>Why to Ask:</strong> An experienced agency knows your audience, competition,
                            and industry regulations, which helps them to skip the learning curve.
                        </p>

                        <p>
                            <strong>Key Details To Demand:</strong>
                        </p>

                        <p>
                            <strong>Industry Expertise:</strong> Ask for specific case studies from your niche
                            (e.g., B2B SaaS, E-commerce fashion, Local healthcare).
                        </p>

                        <p>
                            <strong>Data &amp; ROI:</strong> Data-backed results demonstrating real ROI, conversion
                            growth, or lead quality — not just "clicks" or "impressions."
                        </p>

                        <p>
                            <strong>Market Knowledge:</strong> Cross-verify their knowledge of your industry's
                            major competitors, market trends, and legal or regulatory constraints such as GDPR and
                            HIPAA.
                        </p>

                        <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-700 my-6">
                            "Don't be dazzled by portfolios; focus on the proof."
                        </blockquote>

                        <p>
                            🔴 <strong>Red Flag:</strong> If they are unable to provide relevant, recent examples,
                            or if their own clients aren't ranking well, they likely lack the required expertise.
                        </p>

                        <h2 className="font-serif text-2xl font-bold text-gray-900 mt-12 mb-2">
                            2. How Do You Measure Success Beyond Vanity Metrics?
                        </h2>

                        <p>
                            The exact issue here is that many business owners are paying for impressions and likes
                            when they need sales.
                        </p>

                        <p>
                            Note, businesses are investing in growth, not popularity contests.
                        </p>

                        <p>
                            <strong>Key Details to Look For (The Metrics):</strong>
                        </p>

                        <p>
                            <strong>Emphasize Outcomes:</strong> Focus the conversation on revenue, qualified
                            leads, and conversion rates.
                        </p>

                        <p>
                            <strong>Proof of ROI:</strong> Ask them to share details of metrics like ROI, Lifetime
                            Value (LTV), or Cost-Per-Lead (CPL).
                        </p>

                        <p>
                            <strong>Reporting:</strong> Kindly ask them whether the reports they are providing
                            will be transparent and easy to understand. Ensure they are providing actionable
                            insights, not just raw data tables.
                        </p>

                        <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-700 my-6">
                            "Marketing without measurement is like driving with your eyes closed."
                        </blockquote>

                        <p>
                            🔴 <strong>Red Flag:</strong> If the agency team is hesitant to discuss LTV, CPL, or
                            clear ROI reporting, they are focused on short-term surface-level wins, not your
                            long-term profit.
                        </p>

                        <h2 className="font-serif text-2xl font-bold text-gray-900 mt-12 mb-2">
                            3. What's Your Strategy for Understanding My Business?
                        </h2>

                        <p>
                            The pain point here is the "no-diagnosis" approach.
                        </p>

                        <p>
                            If an agency starts running ads the day you sign the contract, they're only
                            guessing — not strategizing.
                        </p>

                        <p>
                            <strong>What to Demand (The Process):</strong>
                        </p>

                        <p>
                            <strong>Discovery Phase:</strong> How do agencies learn your business DNA?
                            Understand their brand audit and discovery call process.
                        </p>

                        <p>
                            <strong>Market Research:</strong> Will they study clients' competitors, analyze
                            customer journey, and identify the business's unique selling points?
                        </p>

                        <p>
                            <strong>Timeline:</strong> Ask about the timeline of their strategy preparation
                            phase before the first campaign goes live.
                        </p>

                        <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-700 my-6">
                            "A marketing partner must first become your student — then your strategist."
                        </blockquote>

                        <p>
                            🔴 <strong>Red Flag:</strong> If they fail to provide a clear outline of a detailed
                            strategy phase (i.e., they rush right to execution), they rely on generic tactics
                            that stall your brand's growth.
                        </p>

                        <h2 className="font-serif text-2xl font-bold text-gray-900 mt-12 mb-2">
                            4. Who Will Actually Be Doing the Work?
                        </h2>

                        <p>
                            Ever notice how agencies bring out their "A-Team" for the sales pitch, then stick
                            you with a beginner once you sign? That switch — from the experienced leaders to
                            junior staff or interns — is a real problem.
                        </p>

                        <p>
                            Keep in mind that this gap between promise and delivery impacts your campaign
                            performance.
                        </p>

                        <div className="mt-6 rounded-2xl border border-gray-100 p-6">
                            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                                Get Specific: Your Team and Your Schedule
                            </span>
                            <p className="text-sm text-gray-700 mt-2">
                                You need clarity about the people and the process. Ask these questions to get
                                straight answers:
                            </p>
                        </div>

                        <p>
                            <strong>1. Dedicated Contact:</strong> Will you get an experienced Account Manager?
                            Someone dedicated to you, who knows your business, and is your single source for
                            updates?
                        </p>

                        <p>
                            <strong>2. Team Expertise:</strong> How many years has the person actually running
                            your strategy been doing this? You don't want a trainee; you want an expert who can
                            execute.
                        </p>

                        <p>
                            <strong>3. In-House or Outsourced?</strong> Are they using their own staff for the
                            heavy lifting (like writing content, running ads, or SEO), or are they shipping your
                            work off to freelancers?
                        </p>

                        <p>
                            <strong>4. Check-In Time:</strong> How often do they conduct formal reviews and
                            reporting meetings?
                        </p>

                        <p>
                            🛑 <strong>Red Flag:</strong> If they are not providing clear details about the
                            specific roles or avoid naming your dedicated contact, expect inconsistency and a
                            poor quality of work.
                        </p>



                        <div className="mt-12">
                            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                                5. How Do You Handle Constant Changes and Algorithms?
                            </h2>

                            <p>
                                The pain point here is stagnation: Search engines (like Google) and social
                                platforms constantly change their algorithms.
                            </p>

                            <p>
                                An outdated agency can destroy your online visibility overnight.
                            </p>

                            <p>
                                <strong>What to Demand (The Agility):</strong>
                            </p>

                            <p>
                                <strong>Training &amp; Updates:</strong> How frequently does your team get
                                trained on new algorithms, tools, and best practices (e.g., SEO, AI)?
                            </p>

                            <p>
                                <strong>Proactive Testing:</strong> Do you test new strategies (like a new ad
                                format or content structure) internally before using them on my live campaigns?
                            </p>

                            <p>
                                <strong>Adaptation Plan:</strong> What is your exact plan for adapting my
                                campaigns in the event of a major change or algorithm shift?
                            </p>

                            <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-700 my-6">
                                "Digital is a moving target — and only agile minds can hit it."
                            </blockquote>

                            <p>
                                🔴 <strong>Red Flag:</strong> They rely on "industry blogs" or promise stability
                                in a non-stable environment. If they aren't proactively testing new methods and
                                evolving with data/AI, your campaigns are at high risk of failure with the next
                                algorithm change.
                            </p>
                        </div>

                        <div className="mt-12">
                            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                                6. What Tools and Technology Do You Use?
                            </h2>

                            <p>
                                The pain point is simple: paying a premium amount for an agency that relies on
                                free tools and guesswork.
                            </p>

                            <p>
                                You need to know you're getting world-class efficiency or outdated methods,
                                which give zero results.
                            </p>

                            <p>
                                <strong>What to Demand (The Technology):</strong>
                            </p>

                            <p>
                                <strong>Tool Transparency:</strong> Collect the details about specific paid
                                tools they use for SEO, analytics, automation, and reporting (e.g., SEMrush,
                                HubSpot, Looker Studio).
                            </p>

                            <p>
                                <strong>Access &amp; Visibility:</strong> Will you receive direct access or
                                logins to the dashboards showcasing data-related website traffic and campaigns?
                            </p>

                            <p>
                                <strong>Tracking:</strong> How do they connect marketing activity to sales?
                                Whether campaigns are tracked through a CRM or a robust lead management system.
                            </p>

                            <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-700 my-6">
                                "Technology is not a replacement for strategy — it's the amplifier."
                            </blockquote>

                            <p>
                                🔴 <strong>Red Flag:</strong> They hide details, refuse to name the tools, or
                                don't offer any access to your live data. You should never pay for what you
                                can't see.
                            </p>
                        </div>

                        <div className="mt-12">
                            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                                7. How Do You Approach Content and Storytelling?
                            </h2>

                            <p>
                                The pain point is getting generic, robotic content.
                            </p>

                            <p>
                                Anyone can post, but you need a partner who builds emotional trust and clearly
                                communicates your brand's unique value to your target audience.
                            </p>

                            <p>
                                <strong>What to Demand (The Strategy):</strong>
                            </p>

                            <p>
                                <strong>Brand Voice:</strong> How will they learn and maintain your brand
                                language and tone to grab the attention of the audience?
                            </p>

                            <p>
                                <strong>Planning:</strong> What is their process for developing comprehensive
                                content calendars and campaigns?
                            </p>

                            <p>
                                <strong>SEO Integration:</strong> How do they weave high-value keywords and SEO
                                research into compelling storytelling? The content must rank and resonate.
                            </p>

                            <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-700 my-6">
                                "Content isn't king. Consistency with purpose is."
                            </blockquote>

                            <p>
                                🔴 <strong>Red Flag:</strong> They rely heavily on promises of "high-volume
                                AI-generated content" or focus only on trending topics.
                            </p>
                        </div>

                        <div className="mt-12">
                            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                                8. What is Your Complete Pricing Structure?
                            </h2>

                            <p>
                                Hidden fees are a major pain point. You need a clear, itemized financial
                                roadmap.
                            </p>

                            <p>
                                <strong>Key Answers to Look For:</strong>
                            </p>

                            <p>
                                A clear differentiation between the agency fee (retainer/project cost),
                                media/ad spend budget, and service charges.
                            </p>

                            <p>
                                Details on any extra charges for software, tools, or frequent revisions.
                            </p>

                            <p>
                                A simple, easy-to-understand pricing model (retainer, project-based, or
                                hybrid).
                            </p>

                            <p>
                                🔴 <strong>Red Flag:</strong> If agency charges are only linked to activity
                                (e.g., "10 blog posts") and not measurable business growth (leads, sales), they
                                are asking you to pay for effort, not results. A reliable agency's pricing
                                structure is outcome-based, not service-based. They'll tie efforts to
                                measurable growth.
                            </p>
                        </div>

                        <div className="mt-12">
                            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                                9. What Happens If We Don't See Results in the First 3 Months?
                            </h2>

                            <p>
                                The pain point here is a lack of accountability: getting stuck paying an agency
                                that delivers excuses instead of performance.
                            </p>

                            <p>
                                You need a partner who stands by their work.
                            </p>

                            <p>
                                <strong>What to Demand (The Exit Plan):</strong>
                            </p>

                            <p>
                                <strong>Define "Results":</strong> Ask the agency owner about exactly which
                                KPIs (Key Performance Indicators) will define success or failure for the first
                                90 days.
                            </p>

                            <p>
                                <strong>Optimization Plan:</strong> What is their step-by-step process for
                                course-correction when those targets aren't fulfilled?
                            </p>

                            <p>
                                <strong>Performance Clause:</strong> Does the contract mention any
                                performance-based clauses or clear terms that let you exit the agreement if
                                they consistently miss agreed-upon goals?
                            </p>

                            <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-700 my-6">
                                "Accountability is the most expensive promise an agency can make — and the
                                only one that matters."
                            </blockquote>

                            <p>
                                🔴 <strong>Red Flag:</strong> If they dodge this question, promise only
                                excuses, or refuse to include a performance clause, they lack confidence in
                                their ability to deliver.
                            </p>
                        </div>

                        <div className="mt-12">
                            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                                10. What Are Your Contract Terms and Cancellation Policy?
                            </h2>

                            <p>
                                The pain point is getting trapped in a long, expensive contract with a partner
                                that underperforms.
                            </p>

                            <p>
                                You need protection and flexibility if the relationship isn't working out.
                            </p>

                            <p>
                                <strong>What to Demand (The Terms):</strong>
                            </p>

                            <p>
                                <strong>Commitment:</strong> Clearly discuss the minimum contract period. A
                                good agency won't require overly long lock-in periods if they trust their
                                performance.
                            </p>

                            <p>
                                <strong>Cancellation:</strong> Understand the exact cancellation clause. Demand
                                clear, simple terms for ending the agreement and any associated wind-down fees.
                            </p>

                            <p>
                                🔴 <strong>Red Flag:</strong> They demand a 12-month lock-in period or have a
                                complicated cancellation clause designed to keep you trapped.
                            </p>
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

export default Top10questionaskmarketingAgency;