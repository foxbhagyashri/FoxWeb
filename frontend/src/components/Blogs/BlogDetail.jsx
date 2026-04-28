import React from "react";

function BlogDetail() {
    return (
        <section className="bg-white py-10 md:py-16">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* 🔥 HERO */}
                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                        How Digital Marketing Helps Your Business Grow Faster 🚀
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
                        <span>By Admin</span>
                        <span>•</span>
                        <span>April 2026</span>
                        <span>•</span>
                        <span className="text-orange-500 font-medium">Marketing</span>
                    </div>
                </div>

                {/* 🔥 FEATURE IMAGE */}
                <div className="mb-10">
                    <img
                        src="/seo.jpg"
                        alt="Blog"
                        className="w-full rounded-xl shadow-md"
                    />
                </div>

                {/* 🔥 CONTENT + SIDEBAR */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* 📝 BLOG CONTENT */}
                    <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed">

                        <p>
                            Digital marketing has become one of the most powerful tools for
                            businesses to grow in today’s competitive market...
                        </p>

                        <h2 className="text-xl font-semibold mt-6">
                            Why Digital Marketing is Important
                        </h2>

                        <p>
                            It helps businesses reach their target audience effectively using
                            channels like SEO, social media, and paid ads...
                        </p>

                        <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-600">
                            "Marketing is no longer about the stuff you make, but about the stories you tell."
                        </blockquote>

                        <h2 className="text-xl font-semibold mt-6">
                            Key Benefits
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Better online visibility</li>
                            <li>Higher ROI compared to traditional marketing</li>
                            <li>Targeted audience reach</li>
                            <li>Real-time analytics</li>
                        </ul>

                        <p>
                            Investing in digital marketing ensures long-term business growth
                            and sustainability.
                        </p>

                    </div>

                    {/* 📌 SIDEBAR */}
                    <div className="space-y-6">

                        {/* Latest Blogs */}
                        <div className="bg-gray-50 p-5 rounded-xl shadow-sm">
                            <h3 className="font-semibold mb-4">Latest Blogs</h3>

                            <div className="space-y-4">

                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="flex gap-3">
                                        <img
                                            src="/socialmediamarketing.jpg"
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                        <div>
                                            <p className="text-sm font-medium">
                                                Top 10 SEO Tips for 2026
                                            </p>
                                            <span className="text-xs text-gray-500">
                                                April 2026
                                            </span>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6 rounded-xl text-center">
                            <h3 className="font-semibold mb-2">
                                Grow Your Business 🚀
                            </h3>
                            <p className="text-sm mb-3">
                                Get expert digital marketing services today.
                            </p>
                            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                                Contact Us
                            </button>
                        </div>

                    </div>

                </div>

           
            </div>
        </section>
    );
}

export default BlogDetail;