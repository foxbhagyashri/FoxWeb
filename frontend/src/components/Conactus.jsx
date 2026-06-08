import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { submitContact } from "../lib/formsApi";

const ContactUsPage = () => {
  const navigate = useNavigate();
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Map toggle
  const mapSrc = isSatelliteView
    ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.3635604935907!2d73.78211697372403!3d18.64767466528227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b932b28d611b%3A0x12cb3926a3034efe!2sFox%20Aircomm%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1779945492796!5m2!1sen!2sin"
    : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.3635604935907!2d73.78211697372403!3d18.64767466528227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b932b28d611b%3A0x12cb3926a3034efe!2sFox%20Aircomm%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1779945492796!5m2!1sen!2sin";
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        setIsSubmitting(true);
        await submitContact(formData);
        setFormData({
          fullName: "",
          email: "",
          businessName: "",
          contactNumber: "",
          typeOfService: "Social Media Marketing",
          message: "",
          consent: false,
        });
        navigate("/thank-you?type=contact");
      } catch (err) {
        setSubmitError(err?.response?.data?.message || "Failed to send. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}

          {/* RIGHT SIDE FORM */}
          <div className="bg-white shadow-2xl rounded-2xl p-4 border">

            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {submitError ? (
                <div className="rounded-lg border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm">
                  {submitError}
                </div>
              ) : null}

              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name*"
                  className={`w-full p-2 rounded-lg border ${errors.fullName ? "border-red-500" : "border-gray-300"
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
                  className={`w-full p-2 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"
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
                className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Phone Number*"
                  className={`w-full p-2 rounded-lg border ${errors.contactNumber ? "border-red-500" : "border-gray-300"
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
                className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="Social Media Marketing">Social Media Marketing</option>
                <option value="Web Development">Web Development</option>
                <option value="SEO Services">SEO Services</option>
                <option value="Google Ads">Google Ads</option>
                <option value="Content Marketing">Content Marketing</option>
                <option value="Custom CRM Development">Custom CRM Development</option>
              </select>



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
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg text-white font-semibold 
                bg-gradient-to-r from-blue-600 to-orange-500 
                shadow-lg hover:opacity-90 transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

            </form>
          </div>


          <div className="space-y-6">

            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2">
              Let’s Grow Your Business 🚀
            </h1>

            <p className="text-gray-600 text-lg mb-2">
              Partner with us to scale your brand using smart digital marketing strategies.
            </p>

            {/* MAP */}
            <div className="rounded-xl overflow-hidden border shadow">
              <iframe
                src={mapSrc}
                className="w-full h-80"
                loading="lazy"
                title="map"
              ></iframe>
            </div>



          </div>


        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;