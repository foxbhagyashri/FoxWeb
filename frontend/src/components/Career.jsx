import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Career() {
  const careerBenefits = [
    {
      id: 1,
      title: 'Clear career paths',
      description: "You'll be recognized for your hard work through our fair promotion mechanism. Achieve your career goals with a personal development plan. Rich industry products and management skills training.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 30C36.6274 30 42 24.6274 42 18C42 11.3726 36.6274 6 30 6C23.3726 6 18 11.3726 18 18C18 24.6274 23.3726 30 30 30Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M48 54C48 44.0589 39.9411 36 30 36C20.0589 36 12 44.0589 12 54" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Competitive salary & benefits',
      description: "We offer generous packages, including comprehensive health insurance, paid time off, because we believe in rewarding our people. You can get bonuses and incentives including or.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M51 15H9C7.34315 15 6 16.3431 6 18V42C6 43.6569 7.34315 45 9 45H51C52.6569 45 54 43.6569 54 42V18C54 16.3431 52.6569 15 51 15Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 24H48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 33H48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="18" cy="18" r="2" fill="currentColor" />
          <circle cx="24" cy="18" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Work-life balance',
      description: "Flexible working hours and remote work options to help you maintain a healthy work-life balance. We understand the importance of personal time and family.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="3" />
          <path d="M30 10V20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M30 40V50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M10 30H20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M40 30H50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Professional development',
      description: "Continuous learning opportunities through workshops, courses, and conferences. We invest in your growth and provide resources for skill enhancement.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 15H45V45H15V15Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 25H45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M25 15V45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Innovative environment',
      description: "Work with cutting-edge technology and be part of innovative projects that make a real impact. We encourage creativity and out-of-the-box thinking.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 10L40 20L35 30H25L20 20L30 10Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="30" cy="30" r="15" stroke="currentColor" strokeWidth="3" />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Team collaboration',
      description: "Join a diverse and inclusive team where collaboration is key. We foster a supportive environment where everyone's voice is heard and valued.",
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="3" />
          <circle cx="40" cy="20" r="8" stroke="currentColor" strokeWidth="3" />
          <circle cx="30" cy="40" r="8" stroke="currentColor" strokeWidth="3" />
          <path d="M20 28C20 32 25 36 30 36C35 36 40 32 40 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const paginationClass = 'career-pagination';
  const prevButtonClass = 'career-button-prev';
  const nextButtonClass = 'career-button-next';
  return (
    <div className="min-h-screen theme-bg-primary py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - What makes us stand out */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold theme-text-secondary uppercase tracking-wider">
                JOB OPENINGS
              </h3>
              <h2 className="page-title leading-tight">
                What makes us
                <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">stand out ?</span>
              </h2>
            </div>

            <p className="subtitle max-w-lg">
              Discover what sets us apart and why talented professionals choose to build their careers with us.
            </p>

            <div className="flex flex-wrap gap-4 items-center pt-4">
              {/* Get Whitelist Button */}
              <a
                href="/career-form"
                className="theme-btn-outline px-8 py-3.5 font-semibold rounded-lg"
              >
                View Openings
              </a>

              {/* Watch Video Button */}
            </div>
          </div>

          {/* Right Side - Career Benefits Carousel */}
          <div className="relative flex items-center justify-center lg:justify-end ">
            <div className="relative  rounded-2xl p-6 md:p-8 w-full max-w-md lg:max-w-lg bg-red-50">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-medium theme-text-muted">
                    {String(activeIndex + 1).padStart(2, '0')}/{String(careerBenefits.length).padStart(2, '0')}
                  </span>
                  <div className="flex gap-2">
                    <button className={`w-10 h-10 rounded-full flex items-center justify-center theme-bg-secondary theme-text-primary hover:bg-brand-primary hover:text-white transition-all ${prevButtonClass}`}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <button className={`w-10 h-10 rounded-full flex items-center justify-center theme-bg-secondary theme-text-primary hover:bg-brand-primary hover:text-white transition-all ${nextButtonClass}`}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                slidesPerView={1}
                spaceBetween={30}
                grabCursor={true}
                speed={600}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.realIndex);
                }}
                navigation={{
                  nextEl: `.${nextButtonClass}`,
                  prevEl: `.${prevButtonClass}`,
                }}
                pagination={{
                  el: `.${paginationClass}`,
                  clickable: true,
                  bulletClass: 'pagination-bullet w-2 h-2 rounded-full transition-all duration-300',
                  bulletActiveClass: 'pagination-bullet-active',
                }}
                className="career-swiper"
              >
                {careerBenefits.map((benefit) => (
                  <SwiperSlide key={benefit.id} className="h-auto">
                    <div className="text-center space-y-6">
                      <div className="flex justify-center">
                        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center theme-text-primary">
                          {benefit.icon}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold theme-text-primary">
                          {benefit.title}
                        </h3>
                        <p className="theme-text-secondary leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination */}
              <div className={`${paginationClass} flex justify-center items-center gap-2 mt-8`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career