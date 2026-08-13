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
import BlogDetail from './components/Blogs/BlogDetail'
import WebDevelopmentServiceAhemdabad from "./components/Ahemdabad/WebDevelopmentServiceAhemdabad";
import SocialMediaMarketingServiceAhemdabad from "./components/Ahemdabad/SocialMediaMarketingServiceAhemdabad";
import GraphicDesignService from './components/Ahemdabad/GraphicDesignServicesAhemdabad';
import FloatingContact from "./components/FloatingContact";
import AhmedabadSection from "./components/AhmedabadSection";
import CustomCRMDevelopment from './components/services/Custom-CRM-Development';
import ThankYou from '../src/components/ThankYou';
import PPCmanagement from './components/services/PPC-Management-Services-in-Pune';
import SearchEngineOptimizationAhmdabad from './components/Ahemdabad/SEO-Company-in-Ahmedabad'
import PPCCompanyAhemdabad from './components/Ahemdabad/PPC-Company-in-Ahmedabad'
import RCSMessageAhemdabad from './components/Ahemdabad/RCS-Messaging-Services-in-Ahmedabad'
import EcommWebsiteDevelopmentAhemdabad from './components/Ahemdabad/E-Commerce-Website-Development-Ahmedabad'
import BulkSmsAhemdabad from './components/Ahemdabad/Bulk-SMS-Service-in-Ahmedabad'
import WhatsAppMarketingAhemdabad from './components/Ahemdabad/WhatsApp-Marketing-Services-in-Ahmedabad'
import BenefitsOfDigitalMarketingSmallBusiness from './components/Blogs/benefits-of-digital-marketing-For-Small-Businesses'
import WhyFoxaircommbestSocialmediaagency from './components/Blogs/Why-Foxaircomm-Is-the-Best-Social-Media-Marketing-Agency-in-Pune'
import What7typesofDigitalMarketingyouknow from './components/Blogs/What-Are-The-7-Types-Of-Digital-Marketing-You-Must-Know-In-2025'
import Top10questionaskmarketingAgency from './components/Blogs/Top-10-Questions-to-Ask-Before-Hiring-a-Digital-Marketing-Agency'
import HowtodoSeoforWebsite from './components/Blogs/How-to-Do-SEO-for-website'
import AdvantagesOfDigigtalMarketing from './components/Blogs/Advantages-Of-Digital-Marketing-For-Small-Businesses-nd-Startups'
import HowGoogleAdsimproveperformance from './components/Blogs/How-Google-Ads-AI-Improves-Campaign-Performance-and-Increases-Conversions'


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
          <Route path="/thank-you" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ThankYou />
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

          <Route path="/services/custom-crm-development" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <CustomCRMDevelopment />
            </motion.div>
          } />


          <Route path="/services/PPC-Management-Services-in-Pune" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <PPCmanagement />
            </motion.div>
          } />



          <Route path="/Blogs/BlogDetail" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <BlogDetail />
            </motion.div>
          } />


          <Route
            path="ahmedabad/web-development-service"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <WebDevelopmentServiceAhemdabad />
              </motion.div>
            }
          />


          <Route
            path="ahmedabad/SocialMediaMarketingServiceAhemdabad"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <SocialMediaMarketingServiceAhemdabad />
              </motion.div>
            }
          />


          <Route
            path="ahmedabad/GraphicDesignServicesAhemdabad"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <GraphicDesignService />
              </motion.div>
            }
          />


          <Route
            path="ahmedabad/SEO-Company-in-Ahmedabad"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <SearchEngineOptimizationAhmdabad />
              </motion.div>
            }
          />



          <Route
            path="ahmedabad/PPC-Company-in-Ahmedabad"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <PPCCompanyAhemdabad />
              </motion.div>
            }
          />

          <Route
            path="ahmedabad/RCS-Messaging-Services-in-Ahmedabad"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <RCSMessageAhemdabad />
              </motion.div>
            }
          />


          <Route
            path="ahmedabad/E-Commerce-Website-Development-Ahmedabad"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <EcommWebsiteDevelopmentAhemdabad />
              </motion.div>
            }
          />


          <Route
            path="ahmedabad/Bulk-SMS-Service-in-Ahmedabad"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <BulkSmsAhemdabad />
              </motion.div>
            }
          />


          <Route
            path="ahmedabad/WhatsApp-Marketing-Services-in-Ahmedabad"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <WhatsAppMarketingAhemdabad />
              </motion.div>
            }
          />




          <Route path="/Blogs/Benefits-of-digital-marketing-For-Small-Businesses" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <BenefitsOfDigitalMarketingSmallBusiness />
            </motion.div>
          } />

          <Route path="/Blogs/Why-Foxaircomm-Is-the-Best-Social-Media-Marketing-Agency-in-Pune" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <WhyFoxaircommbestSocialmediaagency />
            </motion.div>
          } />

          <Route path="/Blogs/What-Are-The-7-Types-Of-Digital-Marketing-You-Must-Know-In-2025" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <What7typesofDigitalMarketingyouknow />
            </motion.div>
          } />

          <Route path="/Blogs/Top-10-Questions-to-Ask-Before-Hiring-a-Digital-Marketing-Agency" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <Top10questionaskmarketingAgency />
            </motion.div>
          } />

          <Route path="/Blogs/How-to-Do-SEO-for-website" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <HowtodoSeoforWebsite />
            </motion.div>
          } />


          <Route path="/Blogs/Advantages-Of-Digital-Marketing-For-Small-Businesses-nd-Startups" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <AdvantagesOfDigigtalMarketing />
            </motion.div>
          } />


          <Route path="/Blogs/How-Google-Ads-AI-Improves-Campaign-Performance-and-Increases-Conversions" element={
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
              <HowGoogleAdsimproveperformance />
            </motion.div>
          } />


        </Routes>







      </AnimatePresence>

      <AhmedabadSection />

      <Footer />
      <FloatingContact />
    </>
  )
}

export default App
