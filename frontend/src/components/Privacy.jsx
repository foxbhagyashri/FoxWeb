import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/home/Logo.png";

function Privacy() {
  return (
    <div className="min-h-screen theme-bg-primary relative">
      <div className="py-12 pb-20">
        <div className="page-container">
          <div className="mx-auto max-w-5xl px-6 md:px-10 py-12">

            <h1 className="page-title text-center mb-2">
              Privacy Policy
            </h1>
            <p className="subtitle text-center mb-10">
              Last updated: January 17, 2025
            </p>

            {/* MAIN CONTENT */}
            <div className="space-y-8 body-text text-justify leading-relaxed break-words hyphens-auto">

              <section>
                <p>
                  This Privacy Policy describes our policies and procedures on the collection,
                  use, and disclosure of your information when you use the Service. It tells
                  you about your privacy rights and how the law protects you. We use your
                  personal data to provide and improve the Service. By using the Service,
                  you agree to the collection and use of information in accordance with
                  this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="section-title mb-3">Interpretation and Definitions</h2>

                <h3 className="text-xl font-semibold theme-text-primary mb-2">
                  Interpretation
                </h3>
                <p>
                  The words of which the initial letter is capitalized have meanings defined
                  under the following conditions. The following definitions shall have the
                  same meaning regardless of whether they appear in singular or in plural.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold theme-text-primary mb-3">
                  Definitions
                </h3>

                <p>For the purposes of this Privacy Policy:</p>

                <ul className="list-disc list-inside space-y-2 mt-4 text-left">
                  <li>
                    <strong>Account</strong> means a unique account created for you to access
                    our Service or parts of our Service.
                  </li>
                  <li>
                    <strong>Affiliate</strong> means an entity that controls, is controlled
                    by, or is under common control with a party.
                  </li>
                  <li>
                    <strong>Company</strong> refers to Fox AirComm Pvt Ltd, registered in
                    India, with its principal place of business at Jai Ganesh Vision,
                    Akurdi, Pune.
                  </li>
                  <li>
                    <strong>Cookies</strong> are small files placed on your device to enhance
                    browsing experience.
                  </li>
                  <li>
                    <strong>Country</strong> refers to Maharashtra, India.
                  </li>
                  <li>
                    <strong>Device</strong> means any device that can access the Service.
                  </li>
                  <li>
                    <strong>Personal Data</strong> is any information that identifies an
                    individual.
                  </li>
                  <li>
                    <strong>Service</strong> refers to the Website.
                  </li>
                  <li>
                    <strong>Service Provider</strong> means third parties who process data
                    on behalf of the Company.
                  </li>
                  <li>
                    <strong>Usage Data</strong> refers to data collected automatically.
                  </li>
                  <li>
                    <strong>Website</strong> refers to foxaircomm.com.
                  </li>
                  <li>
                    <strong>You</strong> means the user of the Service.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="section-title mb-3">
                  Collecting and Using Your Personal Data
                </h2>

                <h3 className="text-xl font-semibold theme-text-primary mb-2">
                  Types of Data Collected
                </h3>

                <h4 className="text-lg font-semibold theme-text-primary mb-2">
                  Personal Data
                </h4>

                <p>
                  While using our Service, we may ask you to provide certain personally
                  identifiable information.
                </p>

                <ul className="list-disc list-inside space-y-2 mt-4 text-left">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, ZIP code, City</li>
                </ul>

                <h4 className="text-lg font-semibold theme-text-primary mt-6 mb-2">
                  Usage Data
                </h4>

                <p>
                  Usage Data is collected automatically and may include IP address,
                  browser type, time spent on pages, and diagnostic data.
                </p>
              </section>

              <section>
                <h2 className="section-title mb-3">
                  Security of Your Personal Data
                </h2>
                <p>
                  The security of your personal data is important to us, but no method
                  of transmission over the Internet is 100% secure. While we strive
                  to protect your data, we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="section-title mb-3">
                  Contact Us
                </h2>

                <p>If you have any questions about this Privacy Policy, contact us:</p>

                <ul className="list-disc list-inside space-y-2 mt-4 text-left">
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:info@foxaircomm.com"
                      className="theme-text-primary hover:underline"
                    >
                      info@foxaircomm.com
                    </a>
                  </li>
                  <li>
                    Phone:{" "}
                    <a
                      href="tel:+918879864151"
                      className="theme-text-primary hover:underline"
                    >
                      +91 8879864151
                    </a>
                  </li>
                </ul>
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

export default Privacy;
