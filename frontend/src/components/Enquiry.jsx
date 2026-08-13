import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { submitEnquiry } from '../lib/formsApi';

const Enquiry = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessName: '',
    contactNumber: '',
    typeOfService: 'Social Media Marketing',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear the field-level error as the user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.consent) newErrors.consent = 'Consent is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setErrors({});  // clear stale field errors on every submit attempt

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      await submitEnquiry(formData);
      onClose();
      setFormData({
        fullName: '',
        email: '',
        businessName: '',
        contactNumber: '',
        typeOfService: 'Social Media Marketing',
        consent: false
      });
      navigate('/thank-you?type=enquiry');
    } catch (err) {
      // Works whether formsApi uses fetch (err.message) or axios (err.response.data.message)
      const message =
        err?.response?.data?.message ||
        err?.message ||
        'Failed to send. Please try again.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">

        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
          className="relative theme-bg-card rounded-2xl shadow-2xl max-w-lg w-full mx-4 my-8 md:my-12 z-[10001]"
        >

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full theme-bg-secondary hover:theme-bg-tertiary transition-colors z-10"
          >
            <svg className="w-5 h-5 theme-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Form Content */}
          <div className="p-8">
            {/* Title */}
            <h2 className="text-2xl font-bold theme-text-primary mb-6 text-center">
              ENQUIRE NOW
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Submit Error Banner */}
              {submitError && (
                <div className="rounded-lg border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm">
                  {submitError}
                </div>
              )}

              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full name*"
                  className={`w-full px-4 py-3 rounded-lg theme-input theme-text-primary placeholder-theme-text-muted border ${errors.fullName ? 'border-red-500' : 'theme-border'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email address*"
                  className={`w-full px-4 py-3 rounded-lg theme-input theme-text-primary placeholder-theme-text-muted border ${errors.email ? 'border-red-500' : 'theme-border'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Business Name */}
              <div>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Business Name"
                  className="w-full px-4 py-3 rounded-lg theme-input theme-text-primary placeholder-theme-text-muted border theme-border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Contact Number */}
              <div>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Contact Number"
                  className="w-full px-4 py-3 rounded-lg theme-input theme-text-primary placeholder-theme-text-muted border theme-border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Type of Service */}
              <div>
                <select
                  name="typeOfService"
                  value={formData.typeOfService}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg theme-input theme-text-primary border theme-border focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="SEO Services">SEO Services</option>
                  <option value="Content Marketing">Content Marketing</option>
                  <option value="Google Adwords">Google Adwords</option>
                  <option value="Email Marketing">Email Marketing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Consent Checkbox */}
              <div className="space-y-3">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className={`mt-1 w-4 h-4 rounded border ${errors.consent ? 'border-red-500' : 'theme-border'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <span className="text-sm theme-text-secondary leading-relaxed">
                    I authorize company representatives to Call, SMS, RCS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
                  </span>
                </label>
                {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Enquiry;
