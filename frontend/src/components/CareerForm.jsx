import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import careerImage from '../assets/home/career.png';
import { submitCareer } from '../lib/formsApi';

function CareerForm() {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const leftSideVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const rightSideVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const formVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Social Media Executive',
    project: '',
    salary: '',
    cvFile: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      cvFile: file
    }));

    if (errors.cvFile) {
      setErrors(prev => ({
        ...prev,
        cvFile: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.role) {
      newErrors.role = 'Role selection is required';
    }

    if (!formData.salary.trim()) {
      newErrors.salary = 'Salary information is required';
    }

    if (!formData.cvFile) {
      newErrors.cvFile = 'CV upload is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (validateForm()) {
      try {
        setIsSubmitting(true);
        const fd = new FormData();
        fd.append('name', formData.name);
        fd.append('email', formData.email);
        fd.append('phone', formData.phone);
        fd.append('role', formData.role);
        fd.append('project', formData.project);
        fd.append('salary', formData.salary);
        fd.append('cvFile', formData.cvFile);

        await submitCareer(fd);
        alert('Application submitted successfully!');

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          role: 'Social Media Executive',
          project: '',
          salary: '',
          cvFile: null
        });
      } catch (err) {
        setSubmitError(err?.response?.data?.message || 'Failed to send. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen theme-bg-primary py-12 lg:py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 md:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-center items-center min-h-screen  px-4 m-auto">

          {/* Left Side - Enhanced with animations */}

          {/* Right Side - Enhanced Form Section */}
          <motion.div
            className="relative"
            variants={rightSideVariants}
          >
            <motion.div
              className="theme-card rounded-2xl shadow-2xl p-6 md:p-8 backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border border-white/20 max-w-2xl mx-auto"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="mb-8"
                variants={formVariants}
              >
                <motion.h3
                  className="section-title leading-tight text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  Application Form
                </motion.h3>
                <motion.p
                  className="subtitle text-center"
                  whileHover={{ scale: 1.01 }}
                >
                  Fill in your details to apply for the position
                </motion.p>
              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                variants={formVariants}
              >
                {submitError ? (
                  <div className="md:col-span-2 rounded-lg border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm">
                    {submitError}
                  </div>
                ) : null}
                {/* Enhanced Name Field */}
                <motion.div
                  className="md:col-span-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.label
                    htmlFor="name"
                    className="block text-sm font-medium theme-text-primary mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    Your Name <span className="text-red-500">*</span>
                  </motion.label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg theme-input transition-all duration-300 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary ${errors.name ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : ''}`}
                    placeholder="Enter your full name"
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)" }}
                  />
                  {errors.name && (
                    <motion.p
                      className="mt-1 text-sm text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>

                {/* Enhanced Email Field */}
                <motion.div
                  className="md:col-span-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.label
                    htmlFor="email"
                    className="block text-sm font-medium theme-text-primary mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    Your Email address <span className="text-red-500">*</span>
                  </motion.label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg theme-input transition-all duration-300 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary ${errors.email ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : ''}`}
                    placeholder="Enter your email address"
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)" }}
                  />
                  {errors.email && (
                    <motion.p
                      className="mt-1 text-sm text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>

                {/* Enhanced Phone Field */}
                <motion.div
                  className="md:col-span-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.label
                    htmlFor="phone"
                    className="block text-sm font-medium theme-text-primary mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    Your Contact Number <span className="text-red-500">*</span>
                  </motion.label>
                  <motion.input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg theme-input transition-all duration-300 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary ${errors.phone ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : ''}`}
                    placeholder="Enter your contact number"
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)" }}
                  />
                  {errors.phone && (
                    <motion.p
                      className="mt-1 text-sm text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </motion.div>

                {/* Enhanced Role Selection */}
                <motion.div
                  className="md:col-span-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.label
                    htmlFor="role"
                    className="block text-sm font-medium theme-text-primary mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    Select Role <span className="text-red-500">*</span>
                  </motion.label>
                  <motion.select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg theme-input transition-all duration-300 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary ${errors.role ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : ''}`}
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)" }}
                  >
                    <option value="Social Media Executive">Social Media Executive (5 Positions)</option>
                    <option value="Digital Marketing Manager">Digital Marketing Manager (2 Positions)</option>
                    <option value="Content Writer">Content Writer</option>
                    <option value="SEO Executive">SEO Executive (3 Positions)</option>
                    {/* <option value="PPC Specialist">PPC Specialist</option> */}
                    <option value="Social Media Manager">Social Media Manager</option>
                    <option value="Marketing Analyst">Marketing Analyst</option>
                    <option value="Business Development Executive">Business Development Executive (10 Positions)</option>
                    <option value="Business Development Manager">Business Development Manager (2 Positions)</option>
                    <option value="Sales Executive">Sales Executive (5 Positions)</option>
                    <option value="Assistant Sales Manager">Asst. Sales Manager (5 Positions)</option>
                    <option value="Renewal And Client Service Executive">Renewal And Client Service Executive (5 Positions)</option>
                    <option value="Renewal Manager">Renewal Manager (2 Positions)</option>
                    <option value="Asst. Manager Social Media">Asst. Manager Social Media (2 Positions)</option>
                    <option value="Graphics and video editor">Graphics and Video Editor (5 Positions)</option>
                  </motion.select>
                  {errors.role && (
                    <motion.p
                      className="mt-1 text-sm text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.role}
                    </motion.p>
                  )}
                </motion.div>


                {/* Enhanced Salary Information */}
                <motion.div
                  className="md:col-span-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.label
                    htmlFor="salary"
                    className="block text-sm font-medium theme-text-primary mb-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    Your current salary & what are your salary expectations? <span className="text-red-500">*</span>
                  </motion.label>
                  <motion.textarea
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    rows={2}
                    className={`w-full px-4 py-3 rounded-lg theme-input resize-none transition-all duration-300 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary ${errors.salary ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : ''}`}
                    placeholder="Current salary: [amount] | Expected salary: [amount]"
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)" }}
                  />
                  {errors.salary && (
                    <motion.p
                      className="mt-1 text-sm text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.salary}
                    </motion.p>
                  )}
                </motion.div>



                <motion.div
                  className="md:col-span-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.label
                    htmlFor="phone"
                    className="block text-sm font-medium theme-text-primary mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    Total Experience <span className="text-red-500">*</span>
                  </motion.label>
                  <motion.input
                    type="text"
                    id="totalExperience"
                    name="totalExperience"
                    value={formData.totalExperience}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg theme-input transition-all duration-300 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary ${errors.totalExperience ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : ''}`}
                    placeholder="Enter your total experience"
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)" }}
                  />
                  {errors.totalExperience && (
                    <motion.p
                      className="mt-1 text-sm text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.totalExperience}
                    </motion.p>
                  )}
                </motion.div>


                <motion.div
                  className="md:col-span-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.label
                    htmlFor="phone"
                    className="block text-sm font-medium theme-text-primary mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    Relevant Experience <span className="text-red-500">*</span>
                  </motion.label>
                  <motion.input
                    type="text"
                    id="relevantExperience"
                    name="relevantExperience"
                    value={formData.relevantExperience}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg theme-input transition-all duration-300 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary ${errors.relevantExperience ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : ''}`}
                    placeholder="Enter your relevant experience"
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)" }}
                  />
                  {errors.relevantExperience && (
                    <motion.p
                      className="mt-1 text-sm text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.relevantExperience}
                    </motion.p>
                  )}
                </motion.div>


                {/* Enhanced CV Upload */}
                <motion.div
                  className="md:col-span-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.label
                    htmlFor="cvFile"
                    className="block text-sm font-medium theme-text-primary mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    Upload your CV <span className="text-red-500">*</span>
                  </motion.label>
                  <div className="relative">
                    <input
                      type="file"
                      id="cvFile"
                      name="cvFile"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                    <motion.label
                      htmlFor="cvFile"
                      className={`flex items-center justify-center w-full px-3 py-1 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-300 ${errors.cvFile
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : 'border-gray-300 dark:border-gray-600 hover:border-brand-primary hover:bg-brand-primary/5'
                        } theme-bg-secondary`}
                      whileHover={{ scale: 1.02, borderColor: "rgb(99, 102, 241)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="text-center">
                        <motion.svg
                          className="mx-auto h-12 w-12 theme-text-muted mb-3"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                        <motion.p
                          className="theme-text-primary font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          {formData.cvFile ? formData.cvFile.name : 'No file chosen'}
                        </motion.p>
                        <p className="text-sm theme-text-muted">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs theme-text-muted">
                          PDF, DOC, DOCX (MAX. 5MB)
                        </p>
                      </div>
                    </motion.label>
                  </div>
                  {errors.cvFile && (
                    <motion.p
                      className="mt-1 text-sm text-red-500"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.cvFile}
                    </motion.p>
                  )}
                </motion.div>

                {/* Enhanced Submit Button */}
                <motion.div
                  className="md:col-span-2 pt-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full theme-btn-primary py-3.5 px-6 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 relative overflow-hidden group"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r theme-bg-primary   theme-text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <motion.span
                      className="relative z-10 flex items-center justify-center gap-2 theme-text-primary "
                      whileHover={{ scale: 1.05 }}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Now'}
                      <motion.svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path
                          d="M7.5 5L12.5 10L7.5 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    </motion.span>
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default CareerForm;