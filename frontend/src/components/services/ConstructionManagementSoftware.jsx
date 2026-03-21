import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import {
  Layers,
  FileSpreadsheet,
  BarChart3,
  Users,
  Warehouse,
  Receipt,
  Building2,
} from "lucide-react";

const ConstructionManagementSoftware = () => {
  return (
     <motion.div className="overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <style>{`
        .parallax-layer { will-change: transform; transform-style: preserve-3d; }
        .float-animation { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
      `}</style>
      <div className="relative h-[70vh] md:h-[85vh] overflow-hidden">

  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-110"
    style={{ backgroundImage: `url('/assets/images/construction-management-system.png')` }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/65" />

  {/* Content */}
  <div className="relative z-10 h-full flex items-center px-4">
    <div className="container mx-auto max-w-6xl">

      <div className="max-w-3xl">

        {/* Eyebrow */}
        <motion.p
          className="text-sm font-semibold tracking-wide text-white uppercase mb-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Custom CRM Software Development for Construction Companies
        </motion.p>

        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-semibold
                     text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Custom CRM Software Development
          <span className="block text-gray-300">
            for Construction Companies
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base md:text-lg text-gray-300
                     leading-relaxed max-w-2xl mb-8"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Requirement-Driven CRM & ERP Solutions Built for Real Construction Operations
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center
                       px-8 py-3.5 bg-white text-gray-900
                       font-semibold rounded-md
                       hover:bg-gray-100 transition-colors"
          >
            Request a Consultation
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center
                       px-8 py-3.5 border border-gray-400
                       text-gray-200 font-semibold rounded-md
                       hover:border-white hover:text-white
                       transition-colors"
          >
            View Our Services
          </Link>
        </motion.div>

      </div>
    </div>
  </div>
</div>
<section className="container mx-auto max-w-7xl py-14 px-4">

  <div className="max-w-7xl space-y-8">

    {/* Heading */}
    <motion.h2
      className="text-3xl md:text-4xl lg:text-5xl font-bold 
                 theme-text-primary leading-snug"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Custom CRM Software Development That Fits Construction Workflows
    </motion.h2>

    {/* Paragraph */}
    <motion.p
      className="theme-text-secondary text-base md:text-lg leading-relaxed 
                 max-w-7xl"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.6 }}
    >
      Most CRM software is built for sales teams. Construction companies don’t
      work like sales-driven businesses.
      <br />
      <br />
      They operate through{" "}
      <span className="font-semibold theme-text-primary">
        projects, sites, labour, materials, assets, vendors, and purchase orders
      </span>
      . That’s why ready-made CRM systems fail in construction environments.
      <br />
      <br />
      We specialize in{" "}
      <span className="font-semibold theme-text-primary">
        custom CRM software development for construction companies
      </span>
      , where the CRM is tightly integrated with ERP, project management,
      warehouse, asset, and purchase order systems.
    </motion.p>

  </div>
</section>


<section className="container mx-auto max-w-7xl px-4 py-1">

  {/* Wrapper */}
  <div className="space-y-12">

    {/* Main Heading */}
    <motion.h2
      className="text-4xl font-bold 
                 text-gray-900 leading-tight"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      What is CRM Software?
    </motion.h2>

    {/* Paragraphs */}
    <motion.div
      className="space-y-6 text-lg md:text-xl text-gray-700 
                 leading-[1.85] max-w-4xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.7 }}
    >
      <p>
        <span className="font-bold text-gray-900">CRM software</span> stands for{" "}
        <span className="font-bold text-gray-900">
          Customer Relationship Management software
        </span>
        .
      </p>

      <p>
        CRM software is a system that helps businesses{" "}
        <span className="font-bold text-gray-900">
          manage customers, leads, vendors, and all related communication in one
          place
        </span>
        .
      </p>
    </motion.div>

    {/* Sub Heading */}
    <motion.h3
      className="text-2xl md:text-3xl font-bold text-gray-900"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15, duration: 0.7 }}
    >
      What CRM software does:
    </motion.h3>

    {/* Grid List */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.7 }}
    >
      {/* Card 1 */}
      <div className="flex items-start gap-4 p-6 rounded-2xl 
                      border border-gray-200 bg-white shadow-md w-full">
        <div className="w-12 h-12 flex items-center justify-center 
                        rounded-xl bg-indigo-50 text-indigo-600 text-xl font-bold">
          ✓
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          Stores{" "}
          <span className="font-bold text-gray-900">
            customer & lead details
          </span>{" "}
          (name, phone, email, company)
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex items-start gap-4 p-6 rounded-2xl 
                      border border-gray-200 bg-white shadow-md w-full">
        <div className="w-12 h-12 flex items-center justify-center 
                        rounded-xl bg-indigo-50 text-indigo-600 text-xl font-bold">
          ✓
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          Tracks{" "}
          <span className="font-bold text-gray-900">
            calls, emails, meetings, and follow-ups
          </span>
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex items-start gap-4 p-6 rounded-2xl 
                      border border-gray-200 bg-white shadow-md w-full">
        <div className="w-12 h-12 flex items-center justify-center 
                        rounded-xl bg-indigo-50 text-indigo-600 text-xl font-bold">
          ✓
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          Manages the{" "}
          <span className="font-bold text-gray-900">
            sales or enquiry lifecycle
          </span>{" "}
          (new lead → active → closed)
        </p>
      </div>

      {/* Card 4 */}
      <div className="flex items-start gap-4 p-6 rounded-2xl 
                      border border-gray-200 bg-white shadow-md w-full">
        <div className="w-12 h-12 flex items-center justify-center 
                        rounded-xl bg-indigo-50 text-indigo-600 text-xl font-bold">
          ✓
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          Helps teams{" "}
          <span className="font-bold text-gray-900">
            remember who to contact and when
          </span>
        </p>
      </div>

      {/* Card 5 Full Width */}
      <div className="flex items-start gap-4 p-6 rounded-2xl 
                      border border-gray-200 bg-white shadow-md w-full md:col-span-2">
        <div className="w-12 h-12 flex items-center justify-center 
                        rounded-xl bg-indigo-50 text-indigo-600 text-xl font-bold">
          ✓
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">
          Gives{" "}
          <span className="font-bold text-gray-900">
            dashboards and reports
          </span>{" "}
          for better decisions
        </p>
      </div>
    </motion.div>
  </div>
</section>


<section className="container mx-auto max-w-7xl px-4 py-10">

  <div className="max-w-7xl space-y-10">

    {/* Heading */}
    <motion.h3
    as="h3"
      className="text-3xl font-bold 
                 text-gray-900 leading-tight"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      Why businesses use CRM software:
    </motion.h3>

    {/* List Grid */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15, duration: 0.7 }}
    >
      {/* Item 1 */}
      <div className="flex items-center gap-4 p-6 rounded-2xl bg-white 
                      border border-gray-200 shadow-sm hover:shadow-md transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                        bg-indigo-50 text-indigo-600 text-xl font-bold">
          ✓
        </div>
        <p className="text-lg font-medium text-gray-800">
          No missed follow-ups
        </p>
      </div>

      {/* Item 2 */}
      <div className="flex items-center gap-4 p-6 rounded-2xl bg-white 
                      border border-gray-200 shadow-sm hover:shadow-md transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                        bg-indigo-50 text-indigo-600 text-xl font-bold">
          ✓
        </div>
        <p className="text-lg font-medium text-gray-800">
          Better customer communication
        </p>
      </div>

      {/* Item 3 */}
      <div className="flex items-center gap-4 p-6 rounded-2xl bg-white 
                      border border-gray-200 shadow-sm hover:shadow-md transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                        bg-indigo-50 text-indigo-600 text-xl font-bold">
          ✓
        </div>
        <p className="text-lg font-medium text-gray-800">
          Organized customer data
        </p>
      </div>

      {/* Item 4 */}
      <div className="flex items-center gap-4 p-6 rounded-2xl bg-white 
                      border border-gray-200 shadow-sm hover:shadow-md transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                        bg-indigo-50 text-indigo-600 text-xl font-bold">
          ✓
        </div>
        <p className="text-lg font-medium text-gray-800">
          Improved sales and service efficiency
        </p>
      </div>

      {/* Item 5 Full Width */}
      <div className="flex items-center gap-4 p-6 rounded-2xl bg-white 
                      border border-gray-200 shadow-sm hover:shadow-md transition
                      sm:col-span-2">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                        bg-indigo-50 text-indigo-600 text-xl font-bold">
          ✓
        </div>
        <p className="text-lg font-medium text-gray-800">
          Clear visibility for management
        </p>
      </div>
    </motion.div>
  </div>
</section>
<section className="container mx-auto max-w-7xl px-4 py-5">

  <div className="space-y-14">

    {/* Title */}
    <motion.div
      className=" max-w-7xl mx-auto space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-extrabold text-gray-900">
        Simple example:
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed">
        This example shows how businesses manage customer data without a CRM and
        how the same process becomes organized and efficient with a CRM system.
      </p>

      <p className="text-lg text-gray-600">
        Without CRM, information is scattered, and follow-ups are missed.
      </p>

      <p className="text-lg text-gray-600">
        With CRM, all customer interactions are tracked in one centralized platform.
      </p>
    </motion.div>

    {/* Comparison Table */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.8 }}
    >
      {/* WITHOUT CRM Column */}
      <div className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="bg-gray-50 px-8 py-6">
          <h3 className="text-2xl font-bold text-gray-900 text-center">
            Without CRM
          </h3>
        </div>

        <div className="divide-y divide-gray-200">
          {[
            "Leads stored in Excel sheets",
            "Follow-ups managed through WhatsApp",
            "Calls and discussions are often forgotten",
            "No clear view of lead status",
            "Data scattered across tools",
          ].map((item, i) => (
            <div
              key={i}
              className="px-8 py-6 text-gray-700 text-lg text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* WITH CRM Column */}
      <div className="rounded-3xl border border-indigo-200 bg-indigo-50 shadow-sm overflow-hidden">
        <div className="bg-indigo-600 px-8 py-6">
          <h3 className="text-2xl font-bold text-white text-center">
            With CRM
          </h3>
        </div>

        <div className="divide-y divide-indigo-200">
          {[
            "All leads are stored in one centralized system",
            "Automatic follow-up reminders and alerts",
            "Complete call and communication history saved",
            "Clear visibility of every lead’s current stage",
            "All customer information in one place",
          ].map((item, i) => (
            <div
              key={i}
              className="px-8 py-6 text-gray-800 text-lg text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
</section>
<section className="container mx-auto max-w-7xl px-4 py-4">

  <motion.div
    className="max-w-7xl mx-auto rounded-2xl 
               border border-gray-200 bg-white 
               shadow-sm px-10 py-9
               relative overflow-hidden"
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {/* Accent Line */}
    <div className="absolute left-0 top-0 h-full w-1 bg-indigo-600" />

    {/* Title */}
    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-7">
      Important note (real-world clarity):
    </h3>

    {/* Points */}
    <div className="space-y-5 text-lg text-gray-700 leading-relaxed">

      <div className="flex items-start gap-3">
        <span className="mt-2 w-2.5 h-2.5 rounded-full bg-indigo-600" />
        <p>
          <span className="font-semibold text-gray-900">Normal CRM</span> = Focuses
          mainly on customers & sales
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="mt-2 w-2.5 h-2.5 rounded-full bg-indigo-600" />
        <p>
          <span className="font-semibold text-gray-900">Custom CRM</span> = Built
          as per business workflow
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="mt-2 w-2.5 h-2.5 rounded-full bg-indigo-600" />
        <p>
          <span className="font-semibold text-gray-900">Construction CRM</span> =
          CRM + projects + vendors + operations
        </p>
      </div>

    </div>
  </motion.div>
</section>
<section className="container mx-auto max-w-7xl px-4 py-10">

  <div className="max-w-7xl space-y-10">

    {/* Heading */}
    <motion.h2
      className="text-4xl  font-bold 
                 text-gray-900 leading-tight tracking-tight"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      Industry Focus: Construction & Project-Based Businesses
    </motion.h2>

    {/* Intro Text */}
    <motion.p
      className="text-lg md:text-xl text-gray-700 leading-relaxed"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.7 }}
    >
      Our custom CRM development services are designed for:
    </motion.p>

    {/* Bullet List */}
    <motion.ul
      className="space-y-3 text-lg text-gray-700 pl-8 list-disc"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.7 }}
    >
      <li>Construction companies</li>
      <li>Builders and contractors</li>
      <li>Real estate developers</li>
      <li>Infrastructure and project-based organizations</li>
    </motion.ul>

    {/* Closing Line */}
    <motion.p
      className="text-lg md:text-xl text-gray-700 leading-relaxed pt-1"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.7 }}
    >
      Especially businesses managing{" "}
      <span className="font-semibold text-gray-900">
        multiple projects, sites, vendors, and operational teams
      </span>
      .
    </motion.p>

  </div>
</section>
<section className="container mx-auto max-w-7xl px-4 py-5">

  <div className="max-w-7xl space-y-10">

    {/* Heading */}
    <motion.div
      className="space-y-4 max-w-4xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold text-gray-900">
        Core Problems Our Custom CRM Software Solves
      </h2>

      <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
        From real construction industry experience, we address these challenges:
      </p>
    </motion.div>

<motion.div
  className="grid grid-cols-1 md:grid-cols-2 gap-8"
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1, duration: 0.8 }}
>
  {[
    {
      icon: Layers,
      text: "Disconnected systems for projects, CRM, and operations",
    },
    {
      icon: FileSpreadsheet,
      text: "Data scattered across Excel, WhatsApp, and manual registers",
    },
    {
      icon: BarChart3,
      text: "No real-time visibility of project progress and costs",
    },
    {
      icon: Users,
      text: "Labour attendance and payments handled manually",
    },
    {
      icon: Warehouse,
      text: "Material loss due to weak warehouse control",
    },
  ].map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className="group flex items-start gap-5 p-7 rounded-2xl 
                   border border-gray-200 bg-white shadow-sm
                   hover:shadow-xl hover:-translate-y-1
                   transition-all duration-300"
      >
        {/* Icon Box (Same Style as Your Example) */}
        <div
          className="flex-shrink-0 w-12 h-12 rounded-lg border border-gray-200
                     flex items-center justify-center text-indigo-600 text-xl
                     group-hover:border-indigo-300 group-hover:bg-indigo-50
                     transition"
        >
          <Icon className="w-5 h-5" />
        </div>

        {/* Text */}
        <p className="text-lg text-gray-800 leading-relaxed font-medium">
          {item.text}
        </p>
      </div>
    );
  })}
</motion.div>




    {/* Divider */}
<div className="border-t border-gray-200 pt-1" />

    {/* Second Part Grid */}
<motion.div
  className="grid grid-cols-1 md:grid-cols-2 gap-8"
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.15, duration: 0.8 }}
>
  {[
    {
      icon: Receipt,
      text: "Unapproved purchase orders and budget leakage",
    },
    {
      icon: Building2,
      text: "No single system for assets, machinery, and vendors",
    },
  ].map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className="group flex items-start gap-5 p-7 rounded-2xl 
                   border border-gray-200 bg-white shadow-sm
                   hover:shadow-xl hover:-translate-y-1
                   transition-all duration-300"
      >
        {/* Icon Box */}
        <div
          className="flex-shrink-0 w-12 h-12 rounded-lg border border-gray-200
                     flex items-center justify-center text-indigo-600 text-xl
                     group-hover:border-indigo-300 group-hover:bg-indigo-50
                     transition"
        >
          <Icon className="w-5 h-5" />
        </div>

        {/* Text */}
        <p className="text-lg text-gray-800 leading-relaxed font-medium">
          {item.text}
        </p>
      </div>
    );
  })}
</motion.div>

    {/* Closing Statement */}
    <motion.p
      className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl pt-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      The problem is not the absence of software — it is the absence of a{" "}
      <span className="font-semibold text-gray-900">
        custom-built, connected CRM system
      </span>
      .
    </motion.p>

  </div>
</section>


          </motion.div>
      
  )
}

export default ConstructionManagementSoftware
