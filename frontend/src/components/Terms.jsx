import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/home/Logo.png";

function Terms() {
  return (
    <div className="min-h-screen theme-bg-primary relative">
      <div className="py-12 pb-20">
        <div className="page-container">
          <div className="mx-auto max-w-5xl px-6 md:px-10 py-12">
            <h1 className="page-title text-center mb-2">Terms And Conditions</h1>
            <p className="subtitle text-center mb-10">Last updated: January 17, 2025</p>

            <div className="space-y-8 body-text text-justify leading-relaxed break-words hyphens-auto">
              <section>
                <p>
                  The terms "you," "your," and "yours" refer to the customer. Fox AirComm Pvt Ltd, incorporated under the provisions of the Companies Act, 1956, hereinafter referred to as "Fox AirComm Pvt Ltd", "we," "us," and "our." These General Terms and Conditions are governed by our Terms of Service. Our Terms of Service take precedence over any conflicting General Terms and Conditions provision. BY USING Fox AirComm Pvt Ltd SERVICES AND WEBSITE, YOU CONSENT TO THE TERMS AND CONDITIONS OF THESE General Terms and Conditions. IF YOU DO NOT AGREE TO THESE General Terms and Conditions, PLEASE DO NOT USE THE WEBSITE AND/OR SERVICES.
                </p>
                <p className="mt-4">
                  We may modify these General Terms and Conditions at any time by posting the revised terms on our website. Your continued use of the website and/or services after such changes constitutes your acceptance of the new General Terms and Conditions.
                </p>
              </section>

              <section>
                <h2 className="section-title mb-3">Account ethics and confidentiality</h2>
                <p>
                  You are entitled to withhold all the account confidentiality standards and shall not engage in partial or complete disclosure of "Account" information to any third-party resources. You are entitled to keep all the information regarding invoices, recent transactions, payments, application fields, and other panel details confidential.
                </p>
              </section>

              <section>
                <h2 className="section-title mb-3">Privacy Policy</h2>
                <p>
                  Fox AirComm Pvt Ltd's use of any personally identifiable information you submit to the Website is governed by the Website's <Link to="/privacy" className="theme-text-primary hover:underline">Privacy Policy</Link>.
                </p>
              </section>

              <section>
                <h2 className="section-title mb-3">Contact</h2>
                <p>
                  In case you have any queries or suggestions about this Terms of Use Policy, please reach out to us at <a href="mailto:info@foxaircomm.com" className="theme-text-primary hover:underline">info@foxaircomm.com</a>
                </p>
              </section>
            </div>
          </div>

          {/* Bottom-left back arrow */}
          <Link to="/" className="absolute bottom-6 left-6 w-10 h-10 flex items-center justify-center rounded-full theme-bg-card theme-border border dark:border-white/50 dark:hover:shadow-lg dark:hover:shadow-white/20 theme-text-secondary hover:theme-btn-primary transition">
            <i className="fas fa-arrow-left text-lg"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Terms;
