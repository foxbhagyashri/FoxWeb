import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Send, CheckCircle2 } from "lucide-react";

// ---------------------------------------------------------------------------
// CONFIG  (leads go ONLY to the CRM. No WhatsApp code anywhere.)
// "/crm-lead" = Vite proxy from vite.config.js (for local testing).
// For the live site use your backend route, e.g. "/api/lead".
// ---------------------------------------------------------------------------
const CRM_URL = "https://workspace.foxaircomm.co.in/api/webhook-leads/lead";
const INTEGRATION_KEY = "b781f70b-d980-4a37-9ac9-d352ca5fed85";
const POPUP_DELAY_MS = 15000; // 15 seconds
const SEEN_KEY_PREFIX = "foxair-enquiry-popup-seen:";
// One flag per page, so closing it on /about does not hide it on Home.
const seenKey = () => SEEN_KEY_PREFIX + window.location.pathname;

const SERVICES = [
  "Social Media Marketing",
  "SEO Services",
  "Google Ads & PPC",
  "Website Development",
  "E-Commerce Development",
  "Graphic Design",
  "WhatsApp Marketing",
  "RCS Messaging",
  "Bulk SMS",
  "CRM Software",
  "Other",
];

const inputBase =
  "w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition focus:outline-none focus:ring-2 focus:ring-orange-500/60";

const emptyForm = { name: "", phone: "", email: "", business: "", service: SERVICES[0] };

export default function EnquiryPopupp() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState(emptyForm);
  const firstFieldRef = useRef(null);

  // Open once after 15s (skipped if already shown/closed this session)
  useEffect(() => {
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(seenKey()) === "1";
    } catch (_) { }
    if (alreadySeen) return;

    const timer = setTimeout(() => setOpen(true), POPUP_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // Lets any button on the site open the form:
  // window.dispatchEvent(new Event("open-enquiry-popup"))
  useEffect(() => {
    const openFromButton = () => {
      setStatus("idle");
      setOpen(true);
    };
    window.addEventListener("open-enquiry-popup", openFromButton);
    return () => window.removeEventListener("open-enquiry-popup", openFromButton);
  }, []);

  // Focus first field, lock scroll, close on Escape
  useEffect(() => {
    if (!open) return;
    firstFieldRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem(seenKey(), "1");
    } catch (_) { }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  }

  function validate() {
    const er = {};
    if (!form.name.trim()) er.name = "Enter your name";
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10) er.phone = "Enter a valid 10-digit phone number";
    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim()))
      er.email = "Enter a valid email address";
    return er;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;

    const er = validate();
    if (Object.keys(er).length) {
      setErrors(er);
      return;
    }

    setStatus("sending");
    try {
      const fullName = form.name.trim();
      const [firstName, ...rest] = fullName.split(/\s+/);

      const res = await fetch(CRM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          integrationKey: INTEGRATION_KEY,
          firstName,
          lastName: rest.join(" "),
          fullName,
          email: form.email.trim(),
          phoneNumber: form.phone.replace(/\D/g, "").slice(-10),
          service: form.service,
        }),
      });

      if (!res.ok) throw new Error("CRM error " + res.status);

      setStatus("success");
      setForm(emptyForm);
      try {
        sessionStorage.setItem(seenKey(), "1");
      } catch (_) { }
      setTimeout(() => setOpen(false), 3000);
    } catch (err) {
      console.error("Enquiry submit failed:", err);
      setStatus("error");
    }
  }

  // Rendered into <body> via a portal so no parent stacking context (e.g. the
  // sticky header) can cover it.
  return createPortal(
    <>
      {open && (
        <div
          style={{ zIndex: 2147483647 }}
          className="fixed inset-0 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
          onMouseDown={(e) => e.target === e.currentTarget && close()}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close enquiry form"
              className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              <X className="h-5 w-5" />
            </button>

            {status === "success" ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600" aria-hidden="true" />
                <h2 id="enquiry-title" className="mt-4 text-2xl font-bold text-slate-900">
                  Thank you!
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Your enquiry has been received. Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <>
                <h2 id="enquiry-title" className="pr-8 text-2xl font-bold text-slate-900">
                  Get a free consultation
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Share your details and our team will get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="eq-name" className="mb-1 block text-sm font-medium text-slate-800">
                      Full name <span className="text-red-500">*</span>
                    </label>
                    <input
                      ref={firstFieldRef}
                      id="eq-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      className={`${inputBase} ${errors.name ? "border-red-500" : "border-slate-200"}`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="eq-phone" className="mb-1 block text-sm font-medium text-slate-800">
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="eq-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      aria-invalid={!!errors.phone}
                      className={`${inputBase} ${errors.phone ? "border-red-500" : "border-slate-200"}`}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="eq-email" className="mb-1 block text-sm font-medium text-slate-800">
                      Email Id
                    </label>
                    <input
                      id="eq-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your email id"
                      aria-invalid={!!errors.email}
                      className={`${inputBase} ${errors.email ? "border-red-500" : "border-slate-200"}`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="eq-business" className="mb-1 block text-sm font-medium text-slate-800">
                      Business name
                    </label>
                    <input
                      id="eq-business"
                      name="business"
                      type="text"
                      autoComplete="organization"
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Your company"
                      className={`${inputBase} border-slate-200`}
                    />
                  </div>

                  <div>
                    <label htmlFor="eq-service" className="mb-1 block text-sm font-medium text-slate-800">
                      Service you need
                    </label>
                    <select
                      id="eq-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputBase} border-slate-200`}
                    >
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {status === "error" && (
                    <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-3 font-semibold text-white shadow-lg shadow-orange-600/25 transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
                  >
                    <Send className="h-5 w-5" aria-hidden="true" />
                    {status === "sending" ? "Sending..." : "Submit Enquiry"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>,
    document.body
  );
}