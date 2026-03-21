import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Reusable Theme Classes for Input Fields
const inputClasses = "w-full theme-bg-secondary theme-border theme-text-primary placeholder-gray-500 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#9C7AEB] theme-input max-w-lg";

// --- Contact Form Component ---
const ContactForm = () => {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the Privacy Policy terms.");
      return;
    }
    console.log("Form Submitted! (Replace this with API call logic)");
    alert("Form submitted successfully!");
    // You would typically reset the form fields here.
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto lg:max-w-full">
      
      {/* 1. Full Name Input */}
      <div>
        <label htmlFor="full-name" className="block text-sm font-medium theme-text-secondary mb-2">
          Full Name
        </label>
        <div className="relative">
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          <input
            type="text"
            id="full-name"
            placeholder="Enter your full name..."
            className={`pl-12 ${inputClasses}`}
            required
          />
        </div>
      </div>

      {/* 2. Email Address Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium theme-text-secondary mb-2">
          Email Address
        </label>
        <div className="relative">
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v10a4 4 0 004 4h10a4 4 0 004-4v-1" /></svg>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address..."
            className={`pl-12 ${inputClasses}`}
            required
          />
        </div>
      </div>

      {/* 3. Phone Number Input */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium theme-text-secondary mb-2">
          Phone Number
        </label>
        <div className="flex relative">
          <div className="absolute left-0 top-0 h-full flex items-center theme-bg-secondary border-r theme-border rounded-l-xl pl-4 pr-3">
            <span className="theme-text-muted">
              <span className="mr-2">IND</span> +91
            </span>
          </div>
          <input
            type="tel"
            id="phone"
            placeholder="Enter Your mobile number"
            className={`w-full ${inputClasses} pl-24`}
            required
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
        </div>
      </div>

      {/* 4. Message Textarea */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium theme-text-secondary mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows="3"
          placeholder="Enter your main text here..."
          className={`${inputClasses} resize-none pt-2`}
          maxLength="300"
          required
        ></textarea>
      </div>
      
      {/* 5. Privacy Policy Checkbox */}
      <div className="flex items-center pt-2">
        <input
          id="privacy-agree"
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          // Custom color for checkbox
          className="w-4 h-4 text-[#9C7AEB] theme-bg-secondary theme-border rounded focus:ring-[#9C7AEB]"
        />
        <label htmlFor="privacy-agree" className="ml-2 text-sm theme-text-secondary">
          I hereby agree to our <a href="#" className="text-[#9C7AEB] hover:text-[#B89AFF] underline">Privacy Policy terms.</a>
        </label>
      </div>

      {/* 6. Submit Button */}
      <button
        type="submit"
        // Using theme-btn-primary class to match enquiry button color
        className="theme-btn-primary flex justify-center items-center w-full max-w-lg font-semibold py-3 px-4 rounded-xl shadow-xl disabled:opacity-50"
      
      >
        Submit Form
        {/* Right Arrow Icon */}
        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 8.5l4 4-4 4M21 12H3" /></svg>
      </button>
    </form>
  );
};


// --- Main Contact Page Component ---
const ContactUsPage = () => {
  const [isSatelliteView, setIsSatelliteView] = useState(false);

  const mapSrc = isSatelliteView
    ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30448.653465799715!2d73.7787184!3d18.5295432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c0a1e4a9a7%3A0x8f9c9c9c9c9c9c9c!2sPune%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin&maptype=satellite"
    : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30448.653465799715!2d73.7787184!3d18.5295432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c0a1e4a9a7%3A0x8f9c9c9c9c9c9c9c!2sPune%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin";

  return (
    // Main container with the dark blue/purple background
    <div className="min-h-screen theme-bg-primary theme-text-primary py-16 lg:py-20">
      
      {/* Centered content container */}
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Two-Column Layout (Text Left, Form Right) */}
        <div className="flex flex-col lg:flex-row gap-30 lg:gap-58">
          
          {/* Left Column: Contact Information/Text */}
          <div className="w-full lg:w-6/12 space-y-5">
            
            {/* Main Headline */}
            <h1 className="page-title">
              Let's Get In Touch.
            </h1>

            {/* Subtext */}
            <p className="subtitle">
              Or just reach out manually to <a href="mailto:info@foxaircomm.com" className="text-[#9C7AEB] hover:text-[#B89AFF]">info@foxaircomm.com</a>.
            </p>
            
            {/* Our Locations Section */}
            <div className="mt-8">
              

              <div className="text-sm theme-text-secondary">
                {/* Single Map showing all 3 locations */}
                <div className="mb-4">
                 
                  <iframe
                    title="Fox Aircomm Office Locations"
                    src={mapSrc}
                    className="w-full rounded-lg border theme-border aspect-video"
                    loading="lazy"
                    allowFullScreen
                  />
                   <p className="font-medium theme-text-primary mb-2 pt-5 text-center">
                    Our Office Locations - Pune, Mumbai & Ahmedabad
                  </p>
                </div>
              </div>
              
              <h2 className="text-center pt-9
               text-xl font-semibold theme-text-secondary">
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">Fox Aircomm</span> - Smarter Marketing. Measurable Growth.
              </h2>
            </div>
          </div>
          

          {/* Right Column: The Form Component */}
          <div className="w-full lg:w-6/12">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;