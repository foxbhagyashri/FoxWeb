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

function HowtodoSeoforWebsite() {
    return (
        <section className="bg-white py-10 md:py-16">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* 🔥 HERO */}
                <div className="mb-12">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600 mb-5">
                        Marketing
                    </span>

                    <h1 className="font-serif text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6">
                        How to Do SEO for a website: step-by-step guide
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
                        src="/ChatGPT Image Jul 23, 2026, 05_30_13 PM.png"
                        alt="Blog"
                        className="w-full h-[320px] md:h-[100%] object-cover rounded-2xl ring-1 ring-gray-200"
                    />
                </div>

                {/* CONTENT + SIDEBAR */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* BLOG CONTENT */}
                    <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">

                        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                            The Reality of Starting SEO on a New Website
                        </h2>

                        <p>
                            Every new website owner starts their journey with the same quiet fear: "What if no
                            one ever finds my site?" And to be honest, that fear is valid.
                        </p>

                        <p>
                            Launching a new website today feels like you're sending a message into overwhelming
                            noise. As your domain is new, so no authority. Your pages have no history. Google
                            doesn't know you exist, and users have no strong reason to trust you yet.
                        </p>

                        <p>
                            But here's the truth: every website you admire today, every big blog, every brand,
                            every authority site started its journey with the identical feeling.
                        </p>

                        <p>
                            What separates the winners from the forgotten isn't luck. It's a structured,
                            strategic, emotionally intelligent SEO foundation. And that's exactly what this
                            guide about how to do SEO for a website will help you build a strong online
                            presence.
                        </p>

                        <h2 className="font-serif text-2xl font-bold text-gray-900 mt-10 mb-2">
                            Why New Websites Struggle to Rank (The Invisible Battle Every Beginner Faces)
                        </h2>

                        <p>
                            When experienced SEO professionals analyze new websites, three deep-rooted issues
                            always appear:
                        </p>

                        <p>
                            <strong>1. Zero Search Engine Trust (the harsh reality):</strong> New domains
                            start with no trust, and Google's algorithms are built to protect users. Google
                            does not reward new sites, and this effect is known as the sandbox effect. Trust
                            must be earned, not assumed.
                        </p>
                        <img src="/ChatGPT Image Jul 23, 2026, 05_50_36 PM.png"></img>
                        <p>
                            <strong>2. No historical user signals:</strong> As the website is new and doesn't
                            have any historical data, Google is not able to understand the patterns related to
                            engagement, click depth, satisfaction, bounce patterns, and return visits. Without
                            this, ranking becomes a waiting game unless you push strategic signals early.
                        </p>

                        <p>
                            <strong>3. Poor early decisions create long-term ranking damage:</strong> Factors
                            such as poor URL structure, weak content, and thin topical authority have had a
                            significant impact on rankings for many years. This step-by-step guide helps you to
                            prevent those mistakes.
                        </p>
                        {/* PULL QUOTE / STAT */}
                        <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                            The Reality of Starting SEO on a New Website
                        </h2>

                        <p>
                            Every new website owner starts their journey with the same quiet fear: "What if no
                            one ever finds my site?" And to be honest, that fear is valid.
                        </p>

                        <p>
                            Launching a new website today feels like you're sending a message into overwhelming
                            noise. As your domain is new, so no authority. Your pages have no history. Google
                            doesn't know you exist, and users have no strong reason to trust you yet.
                        </p>

                        <p>
                            But here's the truth: every website you admire today, every big blog, every brand,
                            every authority site started its journey with the identical feeling.
                        </p>

                        <p>
                            What separates the winners from the forgotten isn't luck. It's a structured,
                            strategic, emotionally intelligent SEO foundation. And that's exactly what this
                            guide about how to do SEO for a website will help you build a strong online
                            presence.
                        </p>

                        <h2 className="font-serif text-2xl font-bold text-gray-900 mt-10 mb-2">
                            Why New Websites Struggle to Rank (The Invisible Battle Every Beginner Faces)
                        </h2>

                        <p>
                            When experienced SEO professionals analyze new websites, three deep-rooted issues
                            always appear:
                        </p>

                        <p>
                            <strong>1. Zero Search Engine Trust (the harsh reality):</strong> New domains
                            start with no trust, and Google's algorithms are built to protect users. Google
                            does not reward new sites, and this effect is known as the sandbox effect. Trust
                            must be earned, not assumed.
                        </p>

                        <p>
                            <strong>2. No historical user signals:</strong> As the website is new and doesn't
                            have any historical data, Google is not able to understand the patterns related to
                            engagement, click depth, satisfaction, bounce patterns, and return visits. Without
                            this, ranking becomes a waiting game unless you push strategic signals early.
                        </p>

                        <p>
                            <strong>3. Poor early decisions create long-term ranking damage:</strong> Factors
                            such as poor URL structure, weak content, and thin topical authority have had a
                            significant impact on rankings for many years. This step-by-step guide helps you to
                            prevent those mistakes.
                        </p>
                        {/* BENEFIT 1 */}
                        <div className="mt-10">
                            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                                The Psychology Behind Search Behavior &amp; Organic Trust Building
                            </h2>

                            <p>
                                Understanding SEO concepts means understanding how humans think while
                                searching.
                            </p>

                            <p>People search because they want:</p>

                            <ul className="space-y-2 my-4">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Clarity</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Confidence</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Direction</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Reassurance</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Answers that reduce emotional friction</span>
                                </li>
                            </ul>

                            <p>
                                Google's job is to provide the most trustworthy and fastest answer. Your job is
                                to become that answer.
                            </p>

                            <p>
                                SEO is not just an algorithm game. It's trust, behavior, emotion, credibility,
                                and structure working together.
                            </p>

                            <h3 className="font-serif text-lg font-bold text-gray-900 mt-8 mb-3">
                                Why Doing SEO for a New Website Matters More Than Ever
                            </h3>

                            <div className="mt-6 space-y-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">
                                        1. Organic search still delivers the highest measurable ROI
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                            <span>
                                                A study by Search Engine Journal on organic search ROI concluded
                                                that 49% of marketers believe organic search delivers the best
                                                ROI of all marketing channels.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                            <span>
                                                This subsequently proves that SEO isn't just a visibility
                                                strategy; it's a revenue strategy.
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">
                                        2. Google organic search still powers global web traffic
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                            <span>

                                                <a href="https://sparktoro.com/blog/the-powerhouses-of-the-internet-are-turning-hostile-to-websites/"
                                                    className="text-orange-600 underline underline-offset-2"
                                                >
                                                    SparkToro's web traffic analysis
                                                </a>{" "}
                                                stated that Google organic search drives 57.8% of the world's
                                                web traffic.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                            <span>
                                                Even in an AI-driven world, Google remains the gateway to global
                                                attention.
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">
                                        3. Voice search and AI-driven results dominate answer discovery
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                            <span>

                                                <a href="https://backlinko.com/voice-search-seo-study"
                                                    className="text-orange-600 underline underline-offset-2"
                                                >
                                                    Brian Dean's study
                                                </a>{" "}
                                                of 10,000 Google Home results revealed that 40.7% of voice
                                                search answers are extracted from Featured Snippets.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                            <span>
                                                So we can conclude that if you don't optimize for snippets, you
                                                don't exist in voice search.
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">
                                        4. Google AI Mode is rolling out across 200+ countries, and it changes
                                        everything
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                            <span>
                                                Google publicly confirmed that AI Mode is now active in more
                                                than 200 countries and is rapidly growing, a major step in the{" "}

                                                <a href="https://blog.google/inside-google/message-ceo/alphabet-earnings-q2-2025/#introduction"
                                                    className="text-orange-600 underline underline-offset-2"
                                                >
                                                    AI-driven search evolution
                                                </a>
                                                .
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p className="mt-6">
                                This signals one clear truth: search in 2025 is conversational, answer-driven,
                                context-sensitive, and deeply reliant on structured, authoritative, reliable
                                content. To survive in this new landscape, your new website must be optimized
                                from day one.
                            </p>
                        </div>

                        <img src="/ChatGPT Image Jul 23, 2026, 05_48_50 PM.png"></img>

                        {/* BENEFIT 2 */}
                        <div className="mt-12">
                            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                                How to Do SEO for a New Website in 7 Steps
                            </h2>

                            <h3 className="font-serif text-lg font-bold text-gray-900 mt-8 mb-2">
                                Step 1: Start the Process by Setting Up the Essentials
                            </h3>

                            <p>
                                While doing SEO, most beginners make this mistake as they rush into content and
                                keywords.
                            </p>

                            <p>
                                But a senior SEO professional knows this truth: a website without proper
                                foundational setup is like a house built on a sinkhole; eventually, everything
                                collapses. Technical and analytical foundations determine how well your SEO
                                strategy scales, how accurately data is captured, and how quickly Google trusts
                                your domain.
                            </p>

                            <p>Let's break this down into 5 different steps:</p>

                            <ol className="space-y-2 my-4 list-decimal pl-5">
                                <li>Install the Right Tracking Tools (Your Data Backbone)</li>
                                <li>Submit an XML Sitemap That's Clean, Not Auto-Generated Junk</li>
                                <li>Configure robots.txt to Guide Crawlers, Not Block Them</li>
                                <li>Ensure Mobile-First Indexing Readiness</li>
                                <li>GEO SEO Setup</li>
                            </ol>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                1. Install the Right Tracking Tools
                            </h4>
                            <p>
                                At the initial stage, you must install these essentials to understand backend
                                issues:
                            </p>
                            <ul className="space-y-2 my-4">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>
                                        <strong>Google Analytics 4:</strong> gives an overall idea of how users
                                        interact with your website, such as bounce rate and engaged sessions.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>
                                        <strong>Google Search Console:</strong> gives an overview of the issues
                                        related to indexing, coverage, and crawling.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>
                                        <strong>Bing Webmaster Tools:</strong> additional indexing
                                        opportunities, especially in GEO variants.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>
                                        <strong>Tag Manager + Proper Event Tracking:</strong> if you want to
                                        track specific events on the website, such as link clicks, scroll
                                        depth, conversions, etc.
                                    </span>
                                </li>
                            </ul>
                            <p>
                                These metrics help Google interpret user satisfaction as a rising ranking
                                factor.
                            </p>

                            <img src="/ChatGPT Image Jul 23, 2026, 05_47_09 PM.png"></img>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                2. Submit an XML Sitemap That's Clean, Not Auto-Generated Junk
                            </h4>
                            <p>
                                New websites often make the mistake of submitting a sitemap with thin pages,
                                broken URLs, and duplicate pages, which leads to wastage of crawl budget.
                            </p>
                            <p>
                                An ideal sitemap consists of only the URLs which are canonical, crawl-worthy,
                                and strategically important. By listing only these URLs, you signal to Google:
                                "These are the pages I want you to focus on."
                            </p>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                3. Configure robots.txt to Guide Crawlers, Not Block Them
                            </h4>
                            <p>
                                Many beginners accidentally block essential folders or scripts, which prevents
                                the indexing of important pages. A senior SEO professional uses robots.txt
                                strategically to:
                            </p>
                            <ul className="space-y-2 my-4">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Allow clean crawling</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Prevent junk indexation</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Protect the indexing of important pages such as /wp-admin</span>
                                </li>
                            </ul>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                4. Ensure Mobile-First Indexing Readiness
                            </h4>
                            <p>
                                Google evaluates your mobile experience first. While doing SEO, kindly analyse
                                the following things:
                            </p>
                            <ul className="space-y-2 my-4">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Is the text readable without zooming?</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Are call-to-action buttons tappable?</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Are fonts consistent throughout the website?</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Is the site stable (no layout shifts)?</span>
                                </li>
                            </ul>
                            <p>
                                This directly influences Core Web Vitals, which Google now uses in AI Mode
                                ranking logic.
                            </p>

                            <h3 className="font-serif text-lg font-bold text-gray-900 mt-10 mb-2">
                                Step 2: Perform Keyword Research with an Authority-Building Lens
                            </h3>
                            <p>
                                Many people traditionally conduct keyword research, but they only collect
                                keywords. Only an expert creates clusters. Senior SEOs know that Google doesn't
                                rank pages — Google ranks topics, entities, and relationships. That means your
                                keyword strategy must build topical authority, not random posts.
                            </p>

                            <img src="/ChatGPT Image Jul 23, 2026, 05_44_59 PM.png"></img>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                1. Understand the Emotional Layer Behind Search Intent
                            </h4>
                            <p>
                                Did you know that every keyword carries a certain set of emotions, such as
                                fear, uncertainty, curiosity, and desire? When you understand exactly what the
                                searcher needs, your content satisfies them better. It makes Google trust you
                                faster.
                            </p>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                2. Build Semantic Topic Clusters (Expert Technique)
                            </h4>
                            <p>Instead of choosing 20 keywords, build topic clusters that include:</p>
                            <ul className="space-y-2 my-4">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Primary keyword</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Semantic variations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>People-also-ask questions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Long-tail queries</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Supporting subtopics</span>
                                </li>
                            </ul>

                            <div className="mt-6 rounded-2xl border border-gray-100 p-6">
                                <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                                    Example
                                </span>
                                <p className="text-sm text-gray-700 mt-2">
                                    Main topic: "How to Do SEO for a Website, Step-by-Step Guide." Semantic
                                    subtopics: website optimization process, ranking improvements for new
                                    websites, SEO setup checklist, step-by-step SEO tutorial, beginner SEO
                                    roadmap, how Google indexes new sites.
                                </p>
                            </div>

                            <p>
                                This creates topical relevance and increases the chances of ranking for 20+
                                keywords per article.
                            </p>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                3. Use AI-Era Keyword Strategy
                            </h4>
                            <p>
                                Since Google AI Mode is rolling out in more than 200 countries, your keywords
                                must be written naturally in formats that AI engines prefer: question formats,
                                statistical inputs, and answer-ready phrases. Voice search and AI Mode thrive
                                on formats like "How to guide," "What is the best way to…," "step-by-step…,"
                                and "Why does…" — and your primary keyword fits perfectly.
                            </p>

                            <h3 className="font-serif text-lg font-bold text-gray-900 mt-10 mb-2">
                                Step 3: Create High-Quality Content
                            </h3>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                1. AEO Optimisation for Featured Snippets &amp; Voice Search
                            </h4>
                            <p>
                                Voice search functionality is enhanced significantly when content is clear,
                                concise, and properly structured.
                            </p>
                            <p>
                                Backlinko's voice search SEO study concluded that 40.7% of all voice search
                                answers come from Featured Snippets. To win position zero, an expert includes
                                details in content such as 50–60-word direct answers, ordered steps, tables,
                                definitions, and question-based subheadings. This increases visibility in both
                                AI Mode and voice search.
                            </p>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                2. Story-Driven SEO Writing
                            </h4>
                            <p>
                                Effective SEO writing combines clarity for the algorithm with a human
                                storytelling boost to user trust and time on page, making it a direct driver of
                                stronger ranking signals.
                            </p>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                3. EEAT for a New Site
                            </h4>
                            <p>
                                New websites start with zero trust in Google's eyes, so establishing EEAT from
                                day one is crucial for ranking. By showcasing real expertise, transparent
                                author details, authorised references, and firsthand insights, a new site
                                signals credibility. It tells Google, "I may be new, but I'm trustworthy."
                            </p>

                            <h3 className="font-serif text-lg font-bold text-gray-900 mt-10 mb-2">
                                Step 4: Improve the Foundation of Technical SEO — The Silent Ranking Engine
                            </h3>
                            <p>
                                Technical SEO isn't so much glamorous. You won't see quick likes, traffic
                                spikes, or applause from it. A new website with poor technical foundations
                                will struggle for months, even with great content. So let's break down what
                                really matters.
                            </p>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                1. Core Web Vitals: Your First Impression in Google's Eyes
                            </h4>
                            <p>Core Web Vitals measure the following three things:</p>
                            <ul className="space-y-2 my-4">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>
                                        <strong>LCP (Largest Contentful Paint):</strong> how fast your webpage
                                        loads.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>
                                        <strong>FID/INP:</strong> measures how your website reacts when a user
                                        makes their first interaction.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>
                                        <strong>CLS:</strong> measures how stable the website layout is.
                                    </span>
                                </li>
                            </ul>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                2. Crawl Budget Efficiency for New Domains
                            </h4>
                            <p>
                                Note that Google allocates a limited crawl budget to a new website, which means
                                every technical mistake costs visibility. Common issues that waste crawl
                                budget include duplicate content, pagination loops, thin tag pages, and
                                unnecessary parameter URLs. A senior SEO handles this by consolidating thin
                                pages, enforcing canonicalization, removing unnecessary archives, blocking
                                low-value folders in robots.txt, and using breadcrumb navigation for clarity.
                                When Google crawls efficiently, it trusts your site more and ranks faster.
                            </p>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                3. Indexation Strategy — The Approach Senior SEOs Actually Use
                            </h4>
                            <p>
                                Most beginners have the impression that they can just publish and wait, but
                                effective indexation is actively controlled. Top SEOs enhance indexation by
                                maintaining a clean sitemap with only high-value URLs, strengthening internal
                                links to signal priority, and manually submitting key pages through Search
                                Console. They also block low-quality or unnecessary pages to prevent signal
                                dilution. Google does not reward volume; it rewards a clean, high-quality crawl
                                path.
                            </p>

                            <h3 className="font-serif text-lg font-bold text-gray-900 mt-10 mb-2">
                                Step 5: On-Page SEO — The Scientific Approach to Relevance Signals
                            </h3>
                            <p>
                                Working on on-page SEO factors is a critical aspect of SEO work. On-page SEO is
                                where your keyword becomes relevant, understandable, and valuable to search
                                engines. A senior SEO professional strategically places relevance signals and
                                doesn't stuff keywords for ranking.
                            </p>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                1. Optimizing Title Tags &amp; Meta Descriptions
                            </h4>
                            <p>
                                Your title must appeal to both humans and algorithms. A high-performing
                                structure of title and meta description consists of Emotion + Keyword +
                                Promise. For example: "How to Do SEO for a Website, Step-by-Step Guide: Proven
                                Expert Methods for Ranking a New Site." A compelling meta description
                                increases CTR, and CTR improves ranking in turn.
                            </p>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                2. Header Hierarchy (H1–H6) Helps Google Understand Your Website Structure
                            </h4>
                            <p>
                                Crawlers read your headers like a table of contents. A strong H1 should
                                contain your primary keyword, while H2s define the key sections of the page.
                                Use H3s and H4s to break down supporting details and maintain a clear, logical
                                content hierarchy. This helps readers understand your content flow, helps
                                Google extract answers for snippets, and helps AI Mode digest structured
                                context.
                            </p>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                3. Image Optimization — Essential for AEO and Accessibility
                            </h4>
                            <p>
                                Proper image filenames with your primary keyword and alt text help search
                                engines, voice search systems, and visually impaired users understand your
                                content. Well-optimized images also reduce load time, improving Core Web
                                Vitals and overall page performance.
                            </p>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                4. Schema Markup for AI Mode, Snippets &amp; GEO Targeting
                            </h4>
                            <p>
                                Schema markup implementation is no longer optional — it's mandatory for
                                competitive ranking. A senior SEO adds the following schema within the code:
                                FAQ schema, Article schema, HowTo schema, Breadcrumb schema, Organization
                                schema, and, where relevant, LocalBusiness schema (for GEO search). Schema
                                improves how AI Mode interprets your content.
                            </p>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                5. Internal Linking — The Engine Behind Your Topical Authority
                            </h4>
                            <p>
                                Most beginner sites have pages that don't connect. Experienced SEOs build
                                topical clusters where related pages link to and support each other. This
                                approach helps Google understand your expertise, passes authority from strong
                                pages to new ones, keeps users engaged longer, and speeds up rankings.
                            </p>

                            <h3 className="font-serif text-lg font-bold text-gray-900 mt-10 mb-2">
                                Step 6: Creation of High-Quality Backlinks
                            </h3>
                            <p>
                                A new website has credibility issues. No matter how good your content is,
                                Google doesn't consider you authoritative yet. This step fixes that.
                            </p>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                1. Digital PR for New Websites
                            </h4>
                            <p>
                                An SEO professional knows that backlinks are not just any random links — they
                                are references, votes, trust signals, and brand validations. To earn a new
                                link, use unique data insights, founder stories, emotional narratives, expert
                                commentary, and mini case studies to earn genuine backlinks, as these elements
                                naturally attract citations from blogs, local news, and industry websites.
                            </p>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                2. Reverse-Engineer Competitor Backlinks
                            </h4>
                            <p>
                                Use tools like Semrush or Ahrefs to analyse which sites link to your
                                competitors, why those sites link, and what angle you can improve. The expert
                                approach: rebuild the link that's relevant to your niche — quality matters more
                                than quantity.
                            </p>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                3. Natural Link Attraction Through AEO Content
                            </h4>
                            <ul className="space-y-2 my-4">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Clear, answer-focused content naturally earns citations.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Well-structured explanations encourage bookmarks from users.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>High-value responses attract organic backlinks.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Authoritative insights generate frequent references.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Precise, direct answers improve snippet visibility.</span>
                                </li>
                            </ul>

                            <h3 className="font-serif text-lg font-bold text-gray-900 mt-10 mb-2">
                                Step 7: Build Brand Mentions
                            </h3>
                            <p>Consider brand mentions as social proof for algorithms.</p>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                1. Why Brand Mentions Matter
                            </h4>
                            <p>
                                Even if a site doesn't link to you, mentioning your brand tells Google that
                                people are aware of you and your brand, that your brand is part of the
                                conversation, and that you are recognized in a niche. This enhances relevance,
                                trust, and authority — especially for new websites.
                            </p>

                            <h4 className="font-semibold text-gray-900 mt-6 mb-2">
                                2. Fast Ways to Earn Brand Mentions
                            </h4>
                            <p>A senior SEO uses the following methods:</p>
                            <ul className="space-y-2 my-4">
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Interviews</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Guest posts</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Expert roundups</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Local community features</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Niche communities</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span>Podcast appearances</span>
                                </li>
                            </ul>
                            <p>
                                You don't need hundreds. A handful of strong mentions can significantly boost
                                your perceived authority.
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

export default HowtodoSeoforWebsite;
;