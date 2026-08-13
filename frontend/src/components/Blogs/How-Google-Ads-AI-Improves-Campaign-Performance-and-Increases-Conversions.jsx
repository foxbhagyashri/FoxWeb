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

function HowGoogleAdsimproveperformance() {
    return (
        <section className="bg-white py-10 md:py-16">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* 🔥 HERO */}
                <div className="mb-12">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600 mb-5">
                        Marketing
                    </span>

                    <h1 className="font-serif text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6">
                        How Google Ads AI Improves Campaign Performance and Increases Conversions
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
                        src="/ChatGPT Image Jul 29, 2026, 04_54_38 PM.png"
                        alt="Blog"
                        className="w-full h-[320px] md:h-[100%] object-cover rounded-2xl ring-1 ring-gray-200"
                    />
                </div>

                {/* CONTENT + SIDEBAR */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* BLOG CONTENT */}
                    <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">

                        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                            What Is Google Ads AI and Why It Matters
                        </h2>

                        <p>
                            Running Google Ads without leveraging AI is like navigating without GPS. You might
                            eventually reach your destination, but you will spend more time, money, and energy
                            getting there. Google's AI-powered advertising tools have transformed how businesses
                            manage campaigns, making smarter decisions faster than any manual approach could.
                        </p>

                        <p>
                            Whether you are a small business owner or an experienced digital marketer,
                            understanding how Google Ads AI works gives you a significant edge. This article
                            breaks down the key AI features inside Google Ads, explains how they improve
                            campaign performance, and shows you how to use them to drive more conversions.
                        </p>

                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 mt-6">
                            What Is Google Ads AI and Why Does It Matter?
                        </h3>

                        <p>
                            Google Ads AI refers to the suite of machine learning and automation tools embedded
                            within the Google Ads platform. These tools look at large amounts of live data such
                            as what people are searching for, the devices they use, their location, the time of
                            day, and their interests—to automatically make better decisions about ad bidding,
                            audience targeting, and ad content.
                        </p>

                        <p>
                            For businesses like those served by Fox Air Comm, where every advertising rupee must
                            deliver results, Google Ads AI removes guesswork and replaces it with data-driven
                            precision. Instead of manually adjusting bids or testing ad copy one variation at a
                            time, AI does the heavy lifting in milliseconds.
                        </p>

                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 mt-6">
                            Why Traditional Manual Campaign Management Falls Short
                        </h3>

                        <p>
                            Manual campaign management, while useful for control, has clear limitations:
                        </p>

                        <ul className="list-disc pl-6 space-y-1 my-4">
                            <li>It cannot process thousands of auction signals simultaneously.</li>
                            <li>Human reaction to performance data is slower than market changes.</li>
                            <li>A/B testing at scale requires months of manual effort.</li>
                            <li>Bid adjustments rely on historical reports, not real-time intent signals.</li>
                        </ul>

                        <p>
                            Google Ads AI addresses every one of these gaps by working continuously in the
                            background, learning from your campaign data and optimising for your stated goals.
                        </p>



                        <h2 className="font-serif text-2xl font-bold text-gray-900 mt-12 mb-2">
                            Core Google Ads AI Features That Drive Campaign Performance
                        </h2>

                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 mt-6">
                            1. Smart Bidding: Bidding That Learns and Adapts
                        </h3>

                        <p>
                            Smart Bidding is arguably the most impactful AI feature in Google Ads. It uses
                            machine learning to set bids for each individual auction based on the likelihood
                            of conversion, not just keyword averages.
                        </p>

                        <p>
                            <strong>Smart Bidding strategies include:</strong>
                        </p>

                        <ul className="list-disc pl-6 space-y-1 my-4">
                            <li>
                                <strong>Target CPA (Cost Per Acquisition):</strong> Automatically adjusts bids
                                to help you get more conversions while staying close to your desired cost per
                                conversion.
                            </li>
                            <li>
                                <strong>Target ROAS (Return on Ad Spend):</strong> Maximises conversion value
                                while achieving your target return.
                            </li>
                            <li>
                                <strong>Maximise Conversions:</strong> Automatically uses your budget to
                                generate the maximum number of conversions possible.
                            </li>
                            <li>
                                <strong>Maximise Conversion Value:</strong> Focuses on getting the highest
                                total revenue from your budget.
                            </li>
                        </ul>

                        <p>
                            What makes Smart Bidding powerful is the range of contextual signals it evaluates
                            at the moment of each auction, signals that go beyond what any manual strategy can
                            account for:
                        </p>

                        <ul className="list-disc pl-6 space-y-1 my-4">
                            <li>User's device and operating system</li>
                            <li>Physical location and location intent</li>
                            <li>Day and time of the search</li>
                            <li>Search query and its match to intent</li>
                            <li>Audience lists the user belongs to</li>
                            <li>Browser and language settings</li>
                        </ul>

                        <p>
                            These signals combine to produce a unique bid for every single ad impression,
                            maximising the chance of conversion at the right cost.
                        </p>

                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 mt-6">
                            2. Performance Max Campaigns: AI Across Every Google Channel
                        </h3>

                        <p>
                            Performance Max (PMax) is Google's fully AI-driven campaign type that runs ads
                            across all Google inventory from a single campaign. This includes Google Search,
                            Display Network, YouTube, Gmail, Google Maps, and Discover.
                        </p>

                        <p>
                            Rather than managing separate campaigns for each channel, Performance Max uses your
                            asset groups' headlines, descriptions, images, and videos and automatically
                            assembles ad combinations that are most likely to convert on each surface.
                        </p>

                        <p>
                            <strong>Key advantages of Performance Max:</strong>
                        </p>

                        <ul className="list-disc pl-6 space-y-1 my-4">
                            <li>Eliminates the need to manually manage channel-specific campaigns.</li>
                            <li>
                                AI can discover new audience groups that you may not have identified or
                                targeted on your own.
                            </li>
                            <li>
                                The budget is automatically distributed across different channels based on
                                which ones are delivering the best results at that moment.
                            </li>
                            <li>Remarketing and prospecting happen simultaneously within one campaign.</li>
                        </ul>

                        <p>
                            For businesses looking to scale reach while maintaining conversion efficiency,
                            Performance Max is one of the most significant advances in Google Ads history.
                        </p>

                        <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-700 my-6">
                            Fox Air Comm uses AI-driven campaign strategies to help businesses maximise reach
                            across Google's advertising ecosystem while maintaining strong conversion
                            performance.
                        </blockquote>

                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 mt-6">
                            3. Responsive Search Ads: Dynamic Ad Copy Optimisation
                        </h3>

                        <p>
                            Responsive Search Ads (RSAs) allow you to provide up to 15 headlines and 4
                            descriptions. Google's AI then tests thousands of combinations and identifies
                            which combinations perform best for different search queries and audience
                            segments.
                        </p>

                        <p>
                            This approach replaces the slow, manual process of A/B testing individual ad
                            variations. Instead of waiting weeks to determine a winning combination, the AI
                            continuously learns and serves the most effective ad for each unique user.
                        </p>

                        <p>
                            <strong>Best practices for RSAs:</strong>
                        </p>

                        <ul className="list-disc pl-6 space-y-1 my-4">
                            <li>Write headlines that are genuinely distinct from each other.</li>
                            <li>
                                Use your main keyword in at least two or three headings to improve relevance
                                and SEO.
                            </li>
                            <li>
                                Mix benefit-led, feature-led, and CTA-led headlines for maximum coverage.
                            </li>
                            <li>Avoid pinning headlines unless necessary, as it restricts AI optimisation.</li>
                        </ul>

                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 mt-6">
                            4. Audience Signals and In-Market Targeting
                        </h3>

                        <p>
                            Google Ads AI studies user behaviour across Google's platforms to create audience
                            groups based on their interests and purchase intent. For example, In-Market
                            Audiences help you reach people who are actively searching for products or
                            services like yours, increasing the chances of getting conversions.
                        </p>

                        <p>
                            Custom segments, similar audiences, and first-party audience lists can all be fed
                            into AI-powered campaigns as signals, allowing the system to find and target
                            high-intent users with greater precision than demographic targeting alone could
                            achieve.
                        </p>

                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 mt-6">
                            5. Automated Ad Extensions and Asset Recommendations
                        </h3>

                        <p>
                            Google Ads AI also generates automated ad extensions such as sitelinks, callouts,
                            and structured snippets based on your website content. It continuously tests
                            different ad extensions to see which ones generate more clicks and conversions,
                            then automatically shows the best-performing options to users at the right time.
                        </p>

                        <p>
                            The AI also provides asset-level performance ratings, showing which headlines and
                            descriptions are rated Strong, Good, or Low, so you can replace underperforming
                            assets with better alternatives.
                        </p>




                        <h2 className="font-serif text-2xl font-bold text-gray-900 mt-12 mb-2">
                            How Google Ads AI Directly Increases Conversions
                        </h2>

                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 mt-6">
                            Reaching High-Intent Users at the Right Moment
                        </h3>

                        <p>
                            The most significant conversion driver in Google Ads AI is its ability to identify
                            conversion intent in real time. A user searching for a service late at night on a
                            mobile device in a specific city may be at a very different stage of the buying
                            journey than someone doing a broad exploratory search during work hours.
                        </p>

                        <p>
                            Google Ads AI detects these nuances and adjusts ad delivery and bids accordingly
                            showing your ad more aggressively when conversion probability is high, and holding
                            back when the signal is weak.
                        </p>

                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 mt-6">
                            Reducing Wasted Spend on Low-Intent Traffic
                        </h3>

                        <p>
                            One of the biggest conversion killers is budget wasted on low-quality clicks.
                            AI-powered bidding continuously evaluates traffic quality and adjusts bids
                            downward for signals associated with low conversion likelihood. This means more of
                            your budget flows toward users who are genuinely likely to take action.
                        </p>

                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 mt-6">
                            Personalising Ad Experiences at Scale
                        </h3>

                        <p>
                            A single static ad cannot speak effectively to every user. Google Ads AI solves
                            this by assembling personalised ad combinations pulling the most relevant
                            headline, description, and extension for each query context. The result is an ad
                            that feels more relevant to the user, which directly improves both click-through
                            rate and post-click conversion rate.
                        </p>

                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 mt-6">
                            Accelerating Learning Through Conversion Data
                        </h3>

                        <p>
                            The more conversion data your campaigns generate, the smarter Google's AI becomes
                            at optimising for your goals. This is why it is important to:
                        </p>

                        <ul className="list-disc pl-6 space-y-1 my-4">
                            <li>
                                Set up conversion tracking correctly across all key actions (calls, form
                                fills, purchases).
                            </li>
                            <li>
                                Import Google Analytics goals or enable enhanced conversions for more
                                accurate data.
                            </li>
                            <li>
                                Avoid frequent campaign changes during the learning phase, which resets the
                                AI's optimisation.
                            </li>
                            <li>
                                Feed the algorithm as many conversion signals as possible, including
                                micro-conversions like page visits or video views.
                            </li>
                        </ul>

                        <h2 className="font-serif text-2xl font-bold text-gray-900 mt-12 mb-2">
                            Actionable Steps to Get the Most Out of Google Ads AI
                        </h2>

                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 mt-6">
                            Set Up Conversion Tracking Before Anything Else
                        </h3>

                        <p>
                            Google Ads AI cannot optimise for outcomes it cannot measure. Before launching any
                            AI-powered campaign, ensure your conversion actions are correctly configured,
                            whether that is a phone call, contact form submission, WhatsApp enquiry, or
                            purchase. Use Google Tag Manager for cleaner implementation.
                        </p>

                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 mt-6">
                            Provide Strong Creative Inputs
                        </h3>

                        <p>
                            AI optimises what you give it. For Performance Max and RSAs, the quality and
                            diversity of your creative assets directly determine campaign performance. Invest
                            in:
                        </p>

                        <ul className="list-disc pl-6 space-y-1 my-4">
                            <li>Multiple high-quality images that represent your service clearly.</li>
                            <li>Distinct headlines covering different value propositions.</li>
                            <li>
                                At least one short-form video, even a simple testimonial or service showcase.
                            </li>
                            <li>Clear, action-oriented descriptions that speak to user needs.</li>
                        </ul>

                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 mt-6">
                            Choose the Right Bidding Strategy for Your Stage
                        </h3>

                        <p>
                            AI bidding works best with sufficient data. A practical approach:
                        </p>

                        <ul className="list-disc pl-6 space-y-1 my-4">
                            <li>Start with Maximise Conversions to generate initial conversion data.</li>
                            <li>
                                Once you have 30 to 50 conversions per month, transition to Target CPA or
                                Target ROAS.
                            </li>
                            <li>Set realistic targets based on your historical data, not aspirational numbers.</li>
                            <li>
                                Review and adjust targets gradually — no more than 10-15% changes at a time.
                            </li>
                        </ul>

                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 mt-6">
                            Use Audience Signals to Accelerate Learning
                        </h3>

                        <p>
                            Especially for Performance Max campaigns, feeding high-quality audience signals
                            speeds up the AI's learning phase. Use:
                        </p>

                        <ul className="list-disc pl-6 space-y-1 my-4">
                            <li>Your existing customer list (email list or CRM export).</li>
                            <li>Website visitors segmented by page or intent.</li>
                            <li>In-market audiences relevant to your category.</li>
                        </ul>

                        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 mt-6">
                            Monitor Performance Without Micromanaging
                        </h3>

                        <p>
                            AI-powered campaigns require a different management mindset. Your role shifts from
                            daily bid adjustments to strategic oversight:
                        </p>

                        <ul className="list-disc pl-6 space-y-1 my-4">
                            <li>Review campaign performance weekly, not daily.</li>
                            <li>
                                Focus on conversion trends and cost efficiency, not individual keyword-level
                                metrics.
                            </li>
                            <li>
                                Allow the AI learning phase to complete (typically 2-4 weeks) before making
                                changes.
                            </li>
                            <li>Use search term reports and placement reports to catch any irrelevant traffic.</li>
                        </ul>

                        <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-700 my-6">
                            At Fox Air Comm, proper conversion tracking and campaign optimisation form the
                            foundation of every successful AI-powered Google Ads strategy.
                        </blockquote>

                        <h2 className="font-serif text-2xl font-bold text-gray-900 mt-12 mb-2">
                            Common Mistakes That Undermine Google Ads AI Performance
                        </h2>

                        <p>
                            Even with powerful AI tools, certain errors consistently hinder results:
                        </p>

                        <ul className="list-disc pl-6 space-y-1 my-4">
                            <li>
                                Setting bids or budgets too low, which starves the algorithm of enough data
                                to optimise.
                            </li>
                            <li>
                                Making frequent changes during the learning phase, resetting optimisation
                                progress.
                            </li>
                            <li>
                                Using poor-quality creative assets that limit the AI's ability to assemble
                                effective ads.
                            </li>
                            <li>
                                Tracking the wrong conversions, such as page views instead of meaningful
                                actions.
                            </li>
                            <li>
                                Setting unrealistic CPA or ROAS targets that the algorithm cannot achieve,
                                causing the campaign to underdeliver.
                            </li>
                            <li>
                                Ignoring placement and search term data that reveals where budget is being
                                wasted.
                            </li>
                        </ul>

                        <h2 className="font-serif text-2xl font-bold text-gray-900 mt-12 mb-2">
                            E-E-A-T Signals and Google Ads: Why Trust Matters
                        </h2>

                        <p>
                            E-E-A-T — Experience, Expertise, Authoritativeness, and Trustworthiness — is a
                            framework Google uses to evaluate content quality. While it applies primarily to
                            organic search, its principles align directly with what makes AI-optimised ads
                            convert better.
                        </p>

                        <p>
                            When your landing page communicates genuine expertise and trust, conversion rates
                            improve, and when conversion rates improve, Google Ads AI has better signals to
                            optimise with. The two work together.
                        </p>

                        <p>
                            <strong>To strengthen E-E-A-T on your advertising journey:</strong>
                        </p>

                        <ul className="list-disc pl-6 space-y-1 my-4">
                            <li>
                                Ensure your landing pages match ad promises — no bait-and-switch experiences.
                            </li>
                            <li>
                                Display trust signals: reviews, certifications, case studies, and clear
                                contact information.
                            </li>
                            <li>
                                Use first-party data (your CRM, customer lists) to feed AI tools with
                                high-quality audience inputs.
                            </li>
                            <li>
                                Align ad messaging with your brand's real expertise and proven results.
                            </li>
                        </ul>

                        <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-700 my-6">
                            Fox Air Comm focuses on creating trustworthy ad experiences and
                            conversion-focused landing pages that support both advertising performance and
                            long-term brand credibility.
                        </blockquote>



                        <h2 className="font-serif text-2xl font-bold text-gray-900 mt-12 mb-2">
                            Frequently Asked Questions (FAQ)
                        </h2>

                        <h3 className="font-serif text-lg font-bold text-gray-900 mb-1 mt-6">
                            Q: What is Google Ads AI and how does it work?
                        </h3>
                        <p>
                            A: Google Ads AI refers to machine learning tools built into the Google Ads
                            platform that automate bidding, targeting, and ad creative decisions. The AI
                            analyses real-time auction signals including device, location, time of day, and
                            user intent to make smarter decisions for each ad impression, to drive more
                            conversions at your target cost.
                        </p>

                        <h3 className="font-serif text-lg font-bold text-gray-900 mb-1 mt-6">
                            Q: Is Smart Bidding better than manual bidding?
                        </h3>
                        <p>
                            A: In most cases, yes. Smart Bidding evaluates far more signals per auction than
                            manual bidding can account for, and it learns from campaign data over time.
                            Manual bidding still has value for very tight control in highly specific
                            scenarios, but for most campaigns focused on conversions, Smart Bidding
                            consistently outperforms manual approaches once sufficient conversion data is
                            available.
                        </p>

                        <h3 className="font-serif text-lg font-bold text-gray-900 mb-1 mt-6">
                            Q: How long does Google Ads AI take to learn?
                        </h3>
                        <p>
                            A: The learning phase typically takes 2 to 4 weeks, during which the AI is
                            gathering data and calibrating its optimisation. During this period, performance
                            may be inconsistent. Avoid making major changes — such as budget cuts or bidding
                            strategy changes — until the learning phase is complete.
                        </p>

                        <h3 className="font-serif text-lg font-bold text-gray-900 mb-1 mt-6">
                            Q: What is Performance Max and should I use it?
                        </h3>
                        <p>
                            A: Performance Max is an AI-driven campaign type that serves ads across all
                            Google channels — Search, Display, YouTube, Gmail, Maps, and Discover — from a
                            single campaign. It is best suited for advertisers who have conversion tracking
                            set up, high-quality creative assets, and enough budget to generate learning
                            data. It is particularly effective for lead generation and e-commerce
                            objectives.
                        </p>

                        <h3 className="font-serif text-lg font-bold text-gray-900 mb-1 mt-6">
                            Q: How much conversion data does Google Ads AI need to work effectively?
                        </h3>
                        <p>
                            A: Smart Bidding generally requires a minimum of 30 to 50 conversions per month
                            to optimise reliably. Campaigns with fewer conversions can still use automated
                            bidding, but performance improvements will be more gradual. Tracking
                            micro-conversions (such as page visits, video plays, or phone clicks) alongside
                            primary conversions helps provide more signals for the AI to work with.
                        </p>

                        <h3 className="font-serif text-lg font-bold text-gray-900 mb-1 mt-6">
                            Q: Can small businesses benefit from Google Ads AI?
                        </h3>
                        <p>
                            A: Absolutely. Google Ads AI levels the playing field for smaller advertisers by
                            automating the complex optimisation tasks that previously required large teams
                            or significant expertise. With proper conversion tracking, clear creative
                            assets, and realistic budget targets, small businesses can see meaningful
                            improvements in campaign performance and cost efficiency through AI-powered
                            Google Ads features.
                        </p>

                        <h3 className="font-serif text-lg font-bold text-gray-900 mb-1 mt-6">
                            Q: Does Google Ads AI replace the need for a digital marketing expert?
                        </h3>
                        <p>
                            A: No. Google Ads AI handles tactical optimisation — bidding, targeting, and ad
                            assembly — but it still requires strategic input. A digital marketing expert
                            sets campaign goals, creates high-quality creative assets, interprets
                            performance trends, and makes strategic decisions about budget allocation and
                            audience strategy. AI is a powerful tool within a broader campaign management
                            approach, not a replacement for expertise.
                        </p>

                        <h2 className="font-serif text-2xl font-bold text-gray-900 mt-12 mb-2">
                            Conclusion
                        </h2>

                        <p>
                            Google Ads AI has fundamentally changed what is possible in digital advertising.
                            Features like Smart Bidding, Performance Max, and Responsive Search Ads give
                            businesses the ability to reach the right users, at the right time, with the
                            right message at a scale and speed that manual management simply cannot match.
                        </p>

                        <p>
                            But AI is only as effective as the inputs you provide. Strong conversion
                            tracking, high-quality creative assets, realistic bidding targets, and a
                            strategic mindset are what separate campaigns that deliver results from those
                            that burn through budget without meaningful return.
                        </p>

                        <p>
                            Whether you are running campaigns for lead generation, service enquiries, or
                            brand awareness, integrating Google Ads AI tools into your strategy is no longer
                            optional — it is the foundation of competitive digital advertising.
                        </p>


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

export default HowGoogleAdsimproveperformance;