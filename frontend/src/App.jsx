import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// Eager load Home page for instant first paint
import Home from './components/Home'

// Common layout components (eager loaded)
import Navbar from './common/Navbar'
import Footer from './common/Fotter'
import FloatingContact from "./components/FloatingContact"
import AhmedabadSection from "./components/AhmedabadSection"
import Preloader from "./common/Preloader"

// Lazy load secondary pages
const Aboutus = lazy(() => import('./components/Aboutus'))
const Conactus = lazy(() => import('./components/Conactus'))
const Career = lazy(() => import('./components/Career'))
const CareerForm = lazy(() => import('./components/CareerForm'))
const Blog = lazy(() => import('./components/Blog'))
const Ourservice = lazy(() => import('./components/Ourservice'))
const Ourclients = lazy(() => import('./components/Ourclients'))
const Privacy = lazy(() => import('./components/Privacy'))
const Terms = lazy(() => import('./components/Terms'))
const ThankYou = lazy(() => import('./components/ThankYou'))

// Lazy load Service Pages
const SocialMediaMarketing = lazy(() => import('./components/services/SocialMediaMarketing'))
const SearchEngineOptimization = lazy(() => import('./components/services/SearchEngineOptimization'))
const GoogleAdwords = lazy(() => import('./components/services/GoogleAdwords'))
const BulkSMS = lazy(() => import('./components/services/BulkSMS'))
const RCSSMS = lazy(() => import('./components/services/RCSSMS'))
const MetaWhatsApp = lazy(() => import('./components/services/MetaWhatsApp'))
const VoiceCall = lazy(() => import('./components/services/VoiceCall'))
const WebsiteDesign = lazy(() => import('./components/services/WebsiteDesign'))
const EcommerceDesign = lazy(() => import('./components/services/EcommerceDesign'))
const CustomSoftwareDevelopment = lazy(() => import('./components/services/CustomSoftwareDevelopment'))
const DataExtractorSoftware = lazy(() => import('./components/services/DataExtractorSoftware'))
const WhatsAppMarketingSoftware = lazy(() => import('./components/services/WhatsAppMarketingSoftware'))
const GraphicsDesign = lazy(() => import('./components/services/GraphicsDesign'))
const BrochureDesign = lazy(() => import('./components/services/BrochureDesign'))
const VisitingCardDesign = lazy(() => import('./components/services/VisitingCardDesign'))
const LogoDesign = lazy(() => import('./components/services/LogoDesign'))
const VideoEditing = lazy(() => import('./components/services/VideoEditing'))
const InfluencerMarketing = lazy(() => import('./components/services/InfluencerMarketing'))
const ConstructionManagementSoftware = lazy(() => import('./components/services/ConstructionManagementSoftware'))
const CustomCRMDevelopment = lazy(() => import('./components/services/Custom-CRM-Development'))
const PPCmanagement = lazy(() => import('./components/services/PPC-Management-Services-in-Pune'))

// Lazy load Blog Pages
const BlogDetail = lazy(() => import('./components/Blogs/BlogDetail'))
const BenefitsOfDigitalMarketingSmallBusiness = lazy(() => import('./components/Blogs/benefits-of-digital-marketing-For-Small-Businesses'))
const WhyFoxaircommbestSocialmediaagency = lazy(() => import('./components/Blogs/Why-Foxaircomm-Is-the-Best-Social-Media-Marketing-Agency-in-Pune'))
const What7typesofDigitalMarketingyouknow = lazy(() => import('./components/Blogs/What-Are-The-7-Types-Of-Digital-Marketing-You-Must-Know-In-2025'))
const Top10questionaskmarketingAgency = lazy(() => import('./components/Blogs/Top-10-Questions-to-Ask-Before-Hiring-a-Digital-Marketing-Agency'))
const HowtodoSeoforWebsite = lazy(() => import('./components/Blogs/How-to-Do-SEO-for-website'))
const AdvantagesOfDigigtalMarketing = lazy(() => import('./components/Blogs/Advantages-Of-Digital-Marketing-For-Small-Businesses-nd-Startups'))
const HowGoogleAdsimproveperformance = lazy(() => import('./components/Blogs/How-Google-Ads-AI-Improves-Campaign-Performance-and-Increases-Conversions'))

// Lazy load Ahmedabad Location Pages
const WebDevelopmentServiceAhemdabad = lazy(() => import("./components/Ahemdabad/WebDevelopmentServiceAhemdabad"))
const SocialMediaMarketingServiceAhemdabad = lazy(() => import("./components/Ahemdabad/SocialMediaMarketingServiceAhemdabad"))
const GraphicDesignService = lazy(() => import('./components/Ahemdabad/GraphicDesignServicesAhemdabad'))
const SearchEngineOptimizationAhmdabad = lazy(() => import('./components/Ahemdabad/SEO-Company-in-Ahmedabad'))
const PPCCompanyAhemdabad = lazy(() => import('./components/Ahemdabad/PPC-Company-in-Ahmedabad'))
const RCSMessageAhemdabad = lazy(() => import('./components/Ahemdabad/RCS-Messaging-Services-in-Ahmedabad'))
const EcommWebsiteDevelopmentAhemdabad = lazy(() => import('./components/Ahemdabad/E-Commerce-Website-Development-Ahmedabad'))
const BulkSmsAhemdabad = lazy(() => import('./components/Ahemdabad/Bulk-SMS-Service-in-Ahmedabad'))
const WhatsAppMarketingAhemdabad = lazy(() => import('./components/Ahemdabad/WhatsApp-Marketing-Services-in-Ahmedabad'))

// Loading Fallback Component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh] w-full">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
      <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Loading...</span>
    </div>
  </div>
)


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
      <Preloader />
      <Navbar />

      <AnimatePresence mode="wait">
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </AnimatePresence>

      <AhmedabadSection />

      <Footer />
      <FloatingContact />
    </>
  )
}

export default App
