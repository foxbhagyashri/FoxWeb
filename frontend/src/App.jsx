import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// pages / components
import Home from '../src/components/Home'
import Aboutus from '../src/components/Aboutus'
import Conactus from '../src/components/Conactus'
import Career from '../src/components/Career'
import CareerForm from '../src/components/CareerForm'
import Blog from '../src/components/Blog'
import Ourservice from '../src/components/Ourservice'
import Ourclients from '../src/components/Ourclients'
import Privacy from '../src/components/Privacy'
import Terms from '../src/components/Terms'

// Service Pages
import {
  SocialMediaMarketing,
  SearchEngineOptimization,
  GoogleAdwords,
  BulkSMS,
  RCSSMS,
  MetaWhatsApp,
  VoiceCall,
  WebsiteDesign,
  EcommerceDesign,
  CustomSoftwareDevelopment,
  DataExtractorSoftware,
  WhatsAppMarketingSoftware,
  GraphicsDesign,
  BrochureDesign,
  VisitingCardDesign,
  LogoDesign,
  VideoEditing,
  InfluencerMarketing
} from '../src/components/services'

// common layout
import Navbar from '../src/common/Navbar'
import Footer from '../src/common/Fotter'
import ConstructionManagementSoftware from './components/services/ConstructionManagementSoftware'

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 0.98
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.6
};

function App() {
  // Ensure page starts at top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          } />
          <Route path="/about" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Aboutus />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Conactus />
            </motion.div>
          } />
          <Route path="/career" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Career />
            </motion.div>
          } />
          <Route path="/career-form" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <CareerForm />
            </motion.div>
          } />
          <Route path="/blog" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Blog />
            </motion.div>
          } />
          <Route path="/services" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Ourservice />
            </motion.div>
          } />
          <Route path="/clients" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Ourclients />
            </motion.div>
          } />
          <Route path="/privacy" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Privacy />
            </motion.div>
          } />
          <Route path="/terms" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Terms />
            </motion.div>
          } />
          
          {/* Digital Marketing Services */}
          <Route path="/services/social-media-marketing" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <SocialMediaMarketing />
            </motion.div>
          } />
          <Route path="/services/seo" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <SearchEngineOptimization />
            </motion.div>
          } />
          <Route path="/services/google-adwords" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <GoogleAdwords />
            </motion.div>
          } />
          
          {/* Bulk Marketing Services */}
          <Route path="/services/bulk-sms" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <BulkSMS />
            </motion.div>
          } />
          <Route path="/services/rcs-sms" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <RCSSMS />
            </motion.div>
          } />
          <Route path="/services/meta-whatsapp" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <MetaWhatsApp />
            </motion.div>
          } />
          <Route path="/services/voice-call" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <VoiceCall />
            </motion.div>
          } />
          
          {/* Software Services */}
          <Route path="/services/website-design" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <WebsiteDesign />
            </motion.div>
          } />
          <Route path="/services/ecommerce-design" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <EcommerceDesign />
            </motion.div>
          } />
          <Route path="/services/custom-software" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <CustomSoftwareDevelopment />
            </motion.div>
          } />
          <Route path="/services/data-extractor" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <DataExtractorSoftware />
            </motion.div>
          } />
          <Route path="/services/whatsapp-software" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <WhatsAppMarketingSoftware />
            </motion.div>
          } />
          
          {/* Design Services */}
          <Route path="/services/graphics-design" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <GraphicsDesign />
            </motion.div>
          } />
          <Route path="/services/brochure-design" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <BrochureDesign />
            </motion.div>
          } />
          <Route path="/services/visiting-card-design" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <VisitingCardDesign />
            </motion.div>
          } />
          <Route path="/services/logo-design" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <LogoDesign />
            </motion.div>
          } />
          <Route path="/services/video-editing" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <VideoEditing />
            </motion.div>
          } />
          
          {/* Influencer Marketing */}
          <Route path="/services/influencer-marketing" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <InfluencerMarketing />
            </motion.div>
          } />

           <Route path="/services/construction-management-software" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <ConstructionManagementSoftware />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>

       <Footer /> 
    </>
  )
}

export default App
