import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Home, Mail } from 'lucide-react';

const messages = {
  enquiry: {
    title: 'Thank You for Your Enquiry!',
    description:
      'We have received your enquiry. Our team will review your details and get back to you shortly.',
  },
  contact: {
    title: 'Thank You for Contacting Us!',
    description:
      'Your message has been sent successfully. We will reach out to you as soon as possible.',
  },
};

function ThankYou() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') === 'contact' ? 'contact' : 'enquiry';
  const content = messages[type];

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 theme-bg-primary">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full text-center theme-card rounded-2xl shadow-2xl p-8 md:p-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.15 }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30"
        >
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </motion.div>

        <h1 className="text-2xl md:text-3xl font-bold theme-text-primary mb-4">
          {content.title}
        </h1>

        <p className="theme-text-secondary text-base leading-relaxed mb-8">
          {content.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 transition-all"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border theme-border theme-text-primary font-medium hover:theme-bg-secondary transition-all"
          >
            <Mail className="h-4 w-4" />
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default ThankYou;
