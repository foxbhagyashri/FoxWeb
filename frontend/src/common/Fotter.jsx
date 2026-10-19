import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LOGO from "../assets/home/Foxaircomm web logo Logo_Web logo.png";

const SERVICES = [
  "Social Media Marketing",
  "Search Engine Optimization",
  "Google Adwords",
  "PPC Management",
  "Website Design",
  "Graphics Design",
  "Custom Software Development",
  "CRM",
];

const COMPANY = [
  { label: "About Us", to: "/about" },
  { label: "Careers", to: "/career" },
  { label: "Services", to: "/services" },
  { label: "Our Clients", to: "/clients" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
];

const LOCATIONS = [
  {
    city: "Pune",
    title: "Pune Office",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.3635604935907!2d73.78211697372403!3d18.64767466528227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b932b28d611b%3A0x12cb3926a3034efe!2sFox%20Aircomm%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1779945492796!5m2!1sen!2sin",
  },
  {
    city: "Mumbai",
    title: "Mumbai Office",
    src: "https://www.google.com/maps?q=Borivali+West+Mumbai&output=embed",
  },
  {
    city: "Ahmedabad",
    title: "Ahmedabad Office",
    src: "https://www.google.com/maps?q=Ashram+Road+Ahmedabad&output=embed",
  },
];

const SOCIALS = [
  { icon: "facebook-f", label: "Facebook", url: "https://www.facebook.com/foxaircommservice/" },
  { icon: "linkedin-in", label: "LinkedIn", url: "https://www.linkedin.com/company/foxaircomm/?originalSubdomain=in" },
  { icon: "instagram", label: "Instagram", url: "https://www.instagram.com/fox_aircomm.pvt.ltd/?hl=en" },
  { icon: "whatsapp", label: "WhatsApp", url: "https://wa.me/918879864151" },
];

const linkClass =
  "theme-text-secondary text-sm font-medium transition hover:text-orange-500 hover:translate-x-0.5 inline-block";

function ColumnTitle({ children }) {
  return (
    <h3 className="theme-text-primary mb-5 flex items-center gap-2 text-base font-bold uppercase tracking-wider">
      <span className="h-0.5 w-5 rounded bg-orange-500" />
      {children}
    </h3>
  );
}

function Footer() {
  const location = useLocation();

  // Scroll to top when any navigation occurs
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <footer className="theme-bg-secondary theme-border border-t">
      <div className="container mx-auto px-4">
        {/* Call-to-action band */}
        <div className="-translate-y-1/2">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 px-6 py-7 shadow-xl md:flex-row md:items-center md:px-10">
            <div>
              <h2 className="text-2xl font-extrabold text-white md:text-3xl">
                Smarter Marketing. Measurable Growth.
              </h2>
              <p className="mt-1 text-sm text-white/90">
                Talk to our team about SEO, ads, web design and more.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 rounded-lg bg-white px-6 py-3 text-sm font-bold text-orange-600 transition hover:bg-orange-50"
            >
              Get a free consultation
            </Link>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="mb-5 inline-block">
              <img src={LOGO} alt="Fox Aircomm Logo" className="h-14 w-auto object-contain" />
            </Link>
            <p className="theme-text-secondary mb-6 max-w-sm text-sm leading-relaxed">
              Fox AirComm Pvt. Ltd. is a result-oriented digital marketing agency in Pune with
              10+ years of experience in SEO, Google Ads, social media, web design, and branding,
              helping 500+ clients across the globe achieve their business objectives.
            </p>
            <div className="flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.icon}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-500 hover:text-white"
                >
                  <i className={`fab fa-${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services" className="lg:col-span-3">
            <ColumnTitle>Services</ColumnTitle>
            <ul className="space-y-3">
              {SERVICES.map((name) => (
                <li key={name}>
                  <Link to="/services" className={linkClass}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="lg:col-span-2">
            <ColumnTitle>Company</ColumnTitle>
            <ul className="space-y-3">
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <ColumnTitle>Contact</ColumnTitle>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  <i className="fas fa-phone" />
                </span>
                <a href="tel:+918879864151" className="theme-text-secondary pt-1.5 text-sm font-medium transition hover:text-orange-500">
                  +91 8879864151
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  <i className="fas fa-envelope" />
                </span>
                <a href="mailto:info@foxaircomm.com" className="theme-text-secondary break-all pt-1.5 text-sm font-medium transition hover:text-orange-500">
                  info@foxaircomm.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  <i className="fas fa-clock" />
                </span>
                <span className="theme-text-secondary pt-1.5 text-sm font-medium">
                  Office Time: 09:30 AM - 06:00 PM
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  <i className="fas fa-map" />
                </span>
                <span className="theme-text-secondary pt-1.5 text-sm font-medium">
                  Office No: 505-506,VTP Altitude,
                  Dange Chowk, Aundh-Ravet BRTS Rd,
                  Wakad, Pimpri-Chinchwad, Pune,
                  Maharashtra 411033
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Locations */}
        <div className="theme-border border-t pt-10">
          <ColumnTitle>Our Locations</ColumnTitle>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {LOCATIONS.map((loc) => (
              <div key={loc.city} className="theme-border overflow-hidden rounded-xl border">
                <p className="theme-text-primary flex items-center gap-2 px-4 py-2.5 text-sm font-bold">
                  <i className="fas fa-map-marker-alt text-orange-500" />
                  {loc.city}
                </p>
                <iframe
                  title={loc.title}
                  src={loc.src}
                  className="h-36 w-full grayscale transition duration-300 hover:grayscale-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="theme-border mt-10 flex flex-col items-center justify-between gap-4 border-t py-6 md:flex-row">
          <p className="theme-text-secondary text-center text-sm font-medium">
            © {new Date().getFullYear()} Fox Aircomm Pvt Ltd — Best Digital Marketing Agency
          </p>
          <div className="flex gap-6">
            <Link to="/terms" className={linkClass}>
              Terms &amp; Condition
            </Link>
            <Link to="/privacy" className={linkClass}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;