import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LOGO from "../assets/home/Logo.png";

function Footer() {
  const location = useLocation();

  // Scroll to top when any navigation occurs
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <footer className="theme-bg-secondary theme-border border-t">
      <div className="container mx-auto px-4 py-12 pb-3">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src={LOGO}
                alt="Fox Aircomm Logo"
                className="w-auto object-contain"
              />
            </Link>

            <p className="text-sm theme-text-secondary mb-4 leading-relaxed">
              Best Digital Marketing Agency. We help businesses grow with
              innovative, result-driven digital solutions.
            </p>

            <div className="flex gap-3 mb-4">
              {[
                { icon: "facebook-f", url: "https://www.facebook.com/foxaircommservice/" },
                { icon: "linkedin-in", url: "https://www.linkedin.com/company/foxaircomm/?originalSubdomain=in" },
                { icon: "instagram", url: "https://www.instagram.com/fox_aircomm.pvt.ltd/?hl=en" },
                { icon: "whatsapp", url: "https://wa.me/918879864151" }
              ].map(
                (item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded bg-white text-black dark:hover:shadow-lg dark:hover:shadow-white/20 transition"
                  >
                    <i className={`fab fa-${item.icon} text-sm`} />
                  </a>
                )
              )}
            </div>

            {/* <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--accent-green)" }}
              />
              <span className="text-xs theme-text-secondary">
                All systems operational
              </span>
            </div> */}

            {/* Contact Information */}

          </div>
          {/* Services */}
          <div>
            <h3 className="font-semibold theme-text-primary mb-4 pl-10 text-xl text-black[rgb(0 0 0)]">
              Services
            </h3>
            <ul className="space-y-3 pl-10">
              {[
                "Digital Marketing",
                "SEO Services",
                "Social Media Marketing",
                "Content Marketing",
                "Web Development",
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to="/services"
                    className="text-md font-semibold theme-text-secondary hover:text-orange-500 transition"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold theme-text-primary mb-4 text-xl pl-10">
              Company
            </h3>
            <ul className="space-y-3 pl-10">
              {["About Us", "Careers", "Our Clients", "Blog", "Contact Us"].map(
                (link, i) => {
                  const routes = {
                    "About Us": "/about",
                    "Careers": "/career",
                    "Our Clients": "/clients",
                    "Blog": "/blog",
                    "Contact Us": "/contact"
                  };
                  return (
                    <li key={i}>
                      <Link
                        to={routes[link]}
                        className="text-md font-semibold theme-text-secondary hover:text-orange-500 transition"
                      >
                        {link}
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          {/* Locations (ONE LINE) */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold theme-text-primary mb-4 text-xl">
              Our Locations
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm theme-text-secondary">

              {/* Pune */}
              <div>
                <p className="font-medium theme-text-primary mb-1">
                  Pune
                </p>
                <iframe
                  title="Pune Office"
                  src="https://www.google.com/maps?q=Jai+Ganesh+Vision+Akurdi+Pune&output=embed"
                  className="w-full h-32 rounded-md border theme-border"
                  loading="lazy"
                />
              </div>

              {/* Mumbai */}
              <div>
                <p className="font-medium theme-text-primary mb-1">
                  Mumbai
                </p>
                <iframe
                  title="Mumbai Office"
                  src="https://www.google.com/maps?q=Borivali+West+Mumbai&output=embed"
                  className="w-full h-32 rounded-md border theme-border"
                  loading="lazy"
                />
              </div>

              {/* Ahmedabad */}
              <div>
                <p className="font-medium theme-text-primary mb-1">
                  Ahmedabad
                </p>
                <iframe
                  title="Ahmedabad Office"
                  src="https://www.google.com/maps?q=Ashram+Road+Ahmedabad&output=embed"
                  className="w-full h-32 rounded-md border theme-border"
                  loading="lazy"
                />
              </div>

            </div>

            <div className="flex flex-wrap items-center gap-4 mt-4 pt-4">
              <div className="flex items-center gap-2">
                <i className="fas fa-clock text-orange-500"></i>
                <span className="text-md theme-text-secondary font-semibold">
                  Office Time: 09:30 AM - 06:00 PM
                </span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-phone text-orange-500"></i>
                <a href="tel:+918879864151" className="text-md theme-text-secondary font-semibold hover:text-orange-500 transition">
                  Call us: +91 8879864151
                </a>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-envelope text-orange-500"></i>
                <a href="mailto:info@foxaircomm.com" className="text-md theme-text-secondary font-semibold hover:text-orange-500 transition">
                  info@foxaircomm.com
                </a>
              </div>
            </div>
            {/* <h2 className="text-center pt-4 text-xl font-semibold theme-text-secondary "><span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">Fox Aircomm </span>     - Smarter Marketing. Measurable Growth.</h2> */}
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="border-t theme-border mt-10 pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-md font-bold theme-text-secondary">
              © 2025 Fox Aircomm — Best Digital Marketing Agency
            </p>

            <div className="flex gap-6">
              {["Terms & Condition", "Privacy Policy"].map((item, i) => {
                const routes = {
                  "Terms & Condition": "/terms",
                  "Privacy Policy": "/privacy"
                };
                return (
                  <Link
                    key={i}
                    to={routes[item]}
                    className="text-sm theme-text-secondary hover:text-orange-500 transition"
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
