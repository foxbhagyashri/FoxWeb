import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactUsPage = () => {
  const [isSatelliteView, setIsSatelliteView] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessName: "",
    contactNumber: "",
    typeOfService: "Social Media Marketing",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  // Map toggle
  const mapSrc = isSatelliteView
    ? "https://www.google.com/maps?q=Pune&output=embed&t=k"
    : "https://www.google.com/maps?q=Pune&output=embed";

  // Handle input
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Phone number is required";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree before submitting";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted:", formData);

      alert("Thank you! We will contact you shortly.");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        businessName: "",
        contactNumber: "",
        typeOfService: "Social Media Marketing",
        message: "",
        consent: false,
      });
    }
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              Let’s Grow Your Business 🚀
            </h1>

            <p className="text-gray-600 text-lg">
              Partner with us to scale your brand using smart digital marketing strategies.
            </p>

            {/* MAP */}
            <div className="rounded-xl overflow-hidden border shadow">
              <iframe
                src={mapSrc}
                className="w-full h-64"
                loading="lazy"
                title="map"
              ></iframe>
            </div>

            <button
              onClick={() => setIsSatelliteView(!isSatelliteView)}
              className="text-sm text-blue-600 hover:underline"
            >
              Toggle Satellite View
            </button>

            <p className="text-gray-700 font-medium">
              📍 Pune • Mumbai • Ahmedabad
            </p>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white shadow-2xl rounded-2xl p-8 border">

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name*"
                  className={`w-full p-3 rounded-lg border ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 outline-none`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address*"
                  className={`w-full p-3 rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 outline-none`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Business Name */}
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                placeholder="Business Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Phone Number*"
                  className={`w-full p-3 rounded-lg border ${
                    errors.contactNumber ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 outline-none`}
                />
                {errors.contactNumber && (
                  <p className="text-red-500 text-sm">{errors.contactNumber}</p>
                )}
              </div>

              {/* Service */}
              <select
                name="typeOfService"
                value={formData.typeOfService}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option>Social Media Marketing</option>
                <option>Web Development</option>
                <option>SEO Services</option>
                <option>Google Ads</option>
                <option>Content Marketing</option>
              </select>

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              {/* Consent */}
              <label className="flex items-start gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                />
                I authorize company representatives to Call, SMS, RCS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.

              </label>

              {errors.consent && (
                <p className="text-red-500 text-sm">{errors.consent}</p>
              )}

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 rounded-lg text-white font-semibold 
                bg-gradient-to-r from-blue-600 to-orange-500 
                shadow-lg hover:opacity-90 transition"
              >
                Send Message
              </motion.button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;