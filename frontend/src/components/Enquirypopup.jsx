import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Send, CheckCircle2, MessageSquare } from "lucide-react";

// ---------------------------------------------------------------------------
// CONFIG  (leads go ONLY to this CRM. No WhatsApp code anywhere.)
// ---------------------------------------------------------------------------
// const CRM_URL = "https://workspace.foxaircomm.co.in/api/webhook-leads/lead";
// const INTEGRATION_KEY = "b781f70b-d980-4a37-9ac9-d352ca5fed85";
const CRM_URL = "https://workspace.foxaircomm.co.in/api/webhook-leads/lead";
const INTEGRATION_KEY = "b781f70b-d980-4a37-9ac9-d352ca5fed85";
const AUTO_OPEN_MS = 15000; // auto popup after 15 seconds (set 0 to disable)
const SEEN_KEY = "foxair-enquiry-seen:";
const seenKey = () => SEEN_KEY + window.location.pathname;

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

export default function EnquiryWidget() {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState(emptyForm);
    const firstRef = useRef(null);

    // Auto open once per page per session
    useEffect(() => {
        if (!AUTO_OPEN_MS) return;
        let seen = false;
        try { seen = sessionStorage.getItem(seenKey()) === "1"; } catch (_) { }
        if (seen) return;
        const t = setTimeout(() => setOpen(true), AUTO_OPEN_MS);
        return () => clearTimeout(t);
    }, []);

    // Focus, lock scroll, Esc to close
    useEffect(() => {
        if (!open) return;
        firstRef.current?.focus();
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (e) => e.key === "Escape" && closeForm();
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    function openForm() {
        setStatus("idle");
        setOpen(true);
    }

    function closeForm() {
        setOpen(false);
        try { sessionStorage.setItem(seenKey(), "1"); } catch (_) { }
    }

    function onChange(e) {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
        if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
    }

    function validate() {
        const er = {};
        if (!form.name.trim()) er.name = "Enter your name";
        if (form.phone.replace(/\D/g, "").length < 10) er.phone = "Enter a valid 10-digit phone number";
        if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim())) er.email = "Enter a valid email";
        return er;
    }

    async function onSubmit(e) {
        e.preventDefault();
        if (status === "sending") return;

        const er = validate();
        if (Object.keys(er).length) return setErrors(er);

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
            try { sessionStorage.setItem(seenKey(), "1"); } catch (_) { }
            setTimeout(() => setOpen(false), 3000);
        } catch (err) {
            console.error("Enquiry submit failed:", err);
            setStatus("error");
        }
    }

    return (
        <>
            {/* Side "Enquire Now" tab */}
            <button
                type="button"
                onClick={openForm}
                aria-label="Open enquiry form"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", zIndex: 9999 }}
                className="fixed right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 rounded-r-xl bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-700"
            >
                <MessageSquare className="h-4 w-4 rotate-90" aria-hidden="true" />
                Enquire Now
            </button>

            {open &&
                createPortal(
                    <div
                        style={{ zIndex: 2147483647 }}
                        className="fixed inset-0 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
                        onMouseDown={(e) => e.target === e.currentTarget && closeForm()}
                    >
                        <div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="enquiry-title"
                            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
                        >
                            <button
                                type="button"
                                onClick={closeForm}
                                aria-label="Close"
                                className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            {status === "success" ? (
                                <div className="py-10 text-center">
                                    <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600" />
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

                                    <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
                                        <Field label="Full name" required error={errors.name} htmlFor="eq-name">
                                            <input
                                                ref={firstRef}
                                                id="eq-name"
                                                name="name"
                                                type="text"
                                                autoComplete="name"
                                                value={form.name}
                                                onChange={onChange}
                                                placeholder="Your name"
                                                className={`${inputBase} ${errors.name ? "border-red-500" : "border-slate-200"}`}
                                            />
                                        </Field>

                                        <Field label="Phone number" required error={errors.phone} htmlFor="eq-phone">
                                            <input
                                                id="eq-phone"
                                                name="phone"
                                                type="tel"
                                                autoComplete="tel"
                                                value={form.phone}
                                                onChange={onChange}
                                                placeholder="+91 98765 43210"
                                                className={`${inputBase} ${errors.phone ? "border-red-500" : "border-slate-200"}`}
                                            />
                                        </Field>

                                        <Field label="Email" error={errors.email} htmlFor="eq-email">
                                            <input
                                                id="eq-email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                value={form.email}
                                                onChange={onChange}
                                                placeholder="you@company.com"
                                                className={`${inputBase} ${errors.email ? "border-red-500" : "border-slate-200"}`}
                                            />
                                        </Field>

                                        <Field label="Business name" htmlFor="eq-business">
                                            <input
                                                id="eq-business"
                                                name="business"
                                                type="text"
                                                autoComplete="organization"
                                                value={form.business}
                                                onChange={onChange}
                                                placeholder="Your company"
                                                className={`${inputBase} border-slate-200`}
                                            />
                                        </Field>

                                        <Field label="Service you need" htmlFor="eq-service">
                                            <select
                                                id="eq-service"
                                                name="service"
                                                value={form.service}
                                                onChange={onChange}
                                                className={`${inputBase} border-slate-200`}
                                            >
                                                {SERVICES.map((s) => (
                                                    <option key={s} value={s}>{s}</option>
                                                ))}
                                            </select>
                                        </Field>

                                        {status === "error" && (
                                            <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
                                                Something went wrong. Please try again.
                                            </p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === "sending"}
                                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-3 font-semibold text-white shadow-lg shadow-orange-600/25 transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-70"
                                        >
                                            <Send className="h-5 w-5" aria-hidden="true" />
                                            {status === "sending" ? "Sending..." : "Submit Enquiry"}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}

function Field({ label, required, error, htmlFor, children }) {
    return (
        <div>
            <label htmlFor={htmlFor} className="mb-1 block text-sm font-medium text-slate-800">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {children}
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
}