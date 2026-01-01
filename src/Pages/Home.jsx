import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiMessageCircle, FiX, FiAward, FiCode, FiGlobe, FiExternalLink } from 'react-icons/fi';
import profileImage from '../assets/img.jpg';
import Testimonials from './Testimonials';

function AnimatedLogo({ isDesktop }) {
  return (
    <motion.div
      className="absolute top-6 left-6 z-10"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ 
        scale: 1, 
        rotate: 0,
        transition: { 
          type: 'spring', 
          stiffness: 100, 
          damping: 10 
        } 
      }}
      whileHover={{
        scale: 1.1,
        rotate: 5,
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative w-12 h-12">
        {/* Simple animated dot */}
        <motion.div 
          className="absolute inset-0 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <motion.div 
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#F2F2F2] rounded-full"
            animate={isDesktop ? {
              rotate: -360,
            } : {}}
            transition={isDesktop ? {
              duration: 8,
              repeat: Infinity,
              ease: 'linear'
            } : {}}
          />
        </motion.div>
        
        {/* KJ Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            className="text-xl font-bold text-[#F2F2F2]"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { delay: 0.5 }
            }}
          >
            KJ
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="min-h-screen bg-black text-white pb-12 md:pb-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 relative overflow-hidden pt-4 sm:pt-0">
        {/* Vertical Lines Background */}
        <div className="absolute inset-0 flex justify-between w-full max-w-7xl mx-auto px-4 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="w-0.5 h-full bg-gradient-to-b from-transparent via-gray-400/50 to-transparent"
              style={{
                left: `${(i + 0.5) * 20}%`,
                position: 'absolute',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 10px 1px rgba(255,255,255,0.1)'
              }}
            />
          ))}
        </div>
        <AnimatedLogo isDesktop={isDesktop} />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full px-2 sm:px-6 lg:px-8 relative z-10 mt-12 sm:mt-10 md:mt-0">
          <div className="w-full max-w-2xl text-center md:text-left px-1 sm:px-0 mb-8 sm:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y 2"
            >
              <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
                <motion.div 
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <span className="inline-flex items-center border border-gray-600 rounded-full px-4 py-2 text-gray-400 hover:text-white hover:border-white transition-colors duration-300">
                    <FiMapPin className="mr-2" />
                    Jaipur, Rajasthan, India
                  </span>
                </motion.div>
              </div>
              <div className="relative">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-center md:text-left text-white">
                  Hi, I'm <span className="text-white">Kshitij Jain</span>
                </h1>
                <div className="hidden md:block absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-transparent via-gray-400/50 to-transparent"></div>
              </div>
            
            <motion.p 
              className="text-base sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed px-1 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Designing and building digital products that balance user needs and real-world problems.
            </motion.p>
            
            <motion.p 
              className="text-sm sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-12 max-w-2xl mx-auto px-1 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Exploring AI, web development, and data-driven solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-2 sm:px-0 mb-8 sm:mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="/data/Kshitij Jain- Resume.pdf"
                download="Kshitij_Jain_Resume.pdf"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#F2F2F2] text-gray-900 font-medium rounded-full hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>Download Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#F2F2F2] text-[#F2F2F2] font-medium rounded-full hover:bg-[#F2F2F2] hover:text-gray-900 transition-all duration-300 text-sm sm:text-base"
              >
                Let's Chat
              </a>
            </motion.div>
            </motion.div>
          </div>
          
          {/* Profile Image with Decorative Cards */}
          <motion.div 
            className="mt-4 sm:mt-16 md:mt-0 md:ml-12 relative w-full max-w-[280px] sm:max-w-xs mx-auto md:max-w-none md:mx-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              scale: [1, 1.02, 1],
              y: [0, -5, 0],
              transition: { 
                opacity: { duration: 0.8, delay: 0.3 },
                x: { duration: 0.8, delay: 0.3 },
                scale: { 
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatType: 'reverse'
                },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatType: 'reverse'
                }
              }
            }}
          >
            {/* Card 1 - Top Left - Experience */}
            <motion.div 
              className="hidden sm:block absolute -top-4 left-0 sm:-left-8 w-40 sm:w-44 h-16 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-gray-800 shadow-lg z-10"
              initial={{ opacity: 0, x: -30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="text-xs text-gray-400">Experience</div>
              <div className="text-white font-medium text-sm">1+ Year in Web Dev</div>
            </motion.div>

            {/* Card 2 - Top Right - Status */}
            <motion.div 
              className="absolute -top-4 right-0 sm:-right-8 w-44 sm:w-48 h-16 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-gray-800 shadow-lg z-10"
              initial={{ opacity: 0, x: 30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="text-xs text-gray-400">Status</div>
              <div className="text-white font-medium text-sm">Open to Opportunities</div>
            </motion.div>

            {/* Card 3 - Bottom Center - Roles */}
            <motion.div 
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-48 sm:w-56 h-14 bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-gray-800 shadow-lg z-10 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <span className="text-white font-medium text-sm text-center">
                Web Developer & Data Scientist
              </span>
            </motion.div>

            {/* Centered Rotating Border */}
            <motion.div 
              className="absolute -z-10 w-full h-full flex items-center justify-center"
              style={{
                transformOrigin: 'center center',
                width: '100%',
                height: '100%',
              }}
            >
              <motion.div 
                className="border-2 border-[#F2F2F2]/50 rounded-lg"
                style={{
                  position: 'absolute',
                  width: isDesktop ? '24rem' : '18rem',
                  height: isDesktop ? '32rem' : '24rem',
                  transform: isDesktop ? 'rotate(45deg)' : 'none',
                  boxShadow: '0 0 15px rgba(242, 242, 242, 0.2)',
                }}
                initial={{
                  opacity: 0.7,
                }}
                animate={{
                  rotate: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 360],
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                variants={{
                  hidden: { rotate: 0 },
                  visible: (custom) => ({
                    rotate: custom ? 360 : 0,
                    transition: {
                      duration: 40,
                      repeat: custom ? Infinity : 0,
                      ease: 'linear',
                    },
                  }),
                }}
                custom={window.innerWidth >= 768}
              />
            </motion.div>
            
            {/* Profile Image */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#F2F2F2]/20 z-0 mx-auto mt-8 sm:mt-0">
              <img 
                src={profileImage} 
                alt="Kshitij Jain" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#F2F2F2]/20 to-transparent"></div>
      
      {/* Projects Section */}
      <Projects />
      
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#F2F2F2]/20 to-transparent"></div>
      
      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div 
            className="mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          ></motion.div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Left Column - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8 }
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative z-10 px-4 sm:px-0">
                <img 
                  src={profileImage} 
                  alt="Kshitij Jain" 
                  className="w-full max-w-[280px] sm:max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8, delay: 0.2 }
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-6 text-center md:text-left text-gray-700">
                I'm <span className="text-gray-700">Kshitij Jain</span>
              </h2>
              
              <div className="space-y-3 sm:space-y-6 text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                <p>
                  A 2nd-year B.Tech student in Computer Science (AI & ML) at Poornima University, 
                  passionate about creating tech solutions that help people and solve real-life problems.
                </p>
                
                <p>
                  My interests lie in web development, AI, and entrepreneurship. I'm currently working on innovative projects 
                  like a EdTech platform and focusing on making AI models.
                </p>
                
                <p>
                  In my free time, I enjoy playing football and volleyball, reading books, and watching inspiring movies. 
                  I'm constantly striving to improve and contribute to meaningful change through technology.
                </p>
              </div>

              {/* Stats/Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mt-6 sm:mt-12">
                <div className="bg-black/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-3 sm:p-6 hover:border-[#F2F2F2]/20 transition-all duration-300">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#F2F2F2]/10 rounded-xl flex items-center justify-center mb-2 sm:mb-4 mx-auto sm:mx-0">
                    <FiAward className="w-6 h-6 text-[#F2F2F2]" />
                  </div>
                  <h3 className="text-sm sm:text-xl font-semibold text-[#F2F2F2] mb-1 sm:mb-2 text-center sm:text-left">1+ Years</h3>
                  <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">Experience in Web Development</p>
                </div>
                
                <div className="bg-black/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-3 sm:p-6 hover:border-[#F2F2F2]/20 transition-all duration-300">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#F2F2F2]/10 rounded-xl flex items-center justify-center mb-2 sm:mb-4 mx-auto sm:mx-0">
                    <FiCode className="w-6 h-6 text-[#F2F2F2]" />
                  </div>
                  <h3 className="text-sm sm:text-xl font-semibold text-[#F2F2F2] mb-1 sm:mb-2 text-center sm:text-left">5+ Projects</h3>
                  <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">Completed Successfully</p>
                </div>
                
                <div className="bg-black/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-3 sm:p-6 hover:border-[#F2F2F2]/20 transition-all duration-300">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#F2F2F2]/10 rounded-xl flex items-center justify-center mb-2 sm:mb-4 mx-auto sm:mx-0">
                    <FiGlobe className="w-6 h-6 text-[#F2F2F2]" />
                  </div>
                  <h3 className="text-sm sm:text-xl font-semibold text-[#F2F2F2] mb-1 sm:mb-2 text-center sm:text-left">Always</h3>
                  <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">Learning & Growing</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-4">
        <Testimonials />
      </div>
      
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#F2F2F2]/20 to-transparent my-4"></div>
      
      {/* Contact Section */}
      <section id="contact" className="pt-12 pb-20 px-6 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Left Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-700 font-sans">
                Let's Have a Chat
              </h2>
              <p className="text-xl text-gray-700/90 mt-4 leading-relaxed">
                Want to talk tech, ideas, or building something useful? Let's connect. <br /> Hit me up!
              </p>
              <a
                href="https://www.linkedin.com/in/kshitij-kj-jain-422025342/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border-2 border-[#F2F2F2] text-[#F2F2F2] font-medium rounded-full hover:bg-[#F2F2F2] hover:text-gray-900 transition-all duration-300"
              >
                Let's Chat
              </a>
            </motion.div>

            {/* Right Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-5 space-y-8 md:pl-12"
            >
              <h3 className="text-2xl font-semibold text-[#F2F2F2]">Get in Touch</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:nextgenova28@gmail.com" 
                  className="flex items-center gap-3 text-gray-300 hover:text-[#F2F2F2] transition-colors"
                >
                  <FiMail className="w-5 h-5" />
                  <span>nextgenova28@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+919413973399" 
                  className="flex items-center gap-3 text-gray-300 hover:text-[#F2F2F2] transition-colors"
                >
                  <FiPhone className="w-5 h-5" />
                  <span>+91 94139 73399</span>
                </a>
              </div>

              <div className="pt-4">
                <h4 className="text-lg font-medium text-[#F2F2F2] mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/kshitij-kj-jain-422025342/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:text-[#F2F2F2] hover:border-[#F2F2F2] transition-all"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:nextgenova28@gmail.com"
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:text-[#F2F2F2] hover:border-[#F2F2F2] transition-all"
                  >
                    <FiMail className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/NEGO2522" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:text-[#F2F2F2] hover:border-[#F2F2F2] transition-all"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer - Removed as per request */}
        </div>
      </section>


      {/* Chat Widget */}
      <AnimatePresence>
        {!isChatOpen ? (
          <motion.div 
            className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 0.5 }
            }}
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
          >
            <button 
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#F2F2F2] text-black flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
              onClick={() => setIsChatOpen(true)}
              aria-label="Open chat"
            >
              <FiMessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </motion.div>
        ) : (
          <motion.div 
            className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-[calc(100vw-2rem)] sm:w-96 bg-[#1a1a1a] rounded-xl shadow-2xl overflow-hidden border border-gray-800"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Chat Header */}
            <div className="bg-[#1a1a1a] p-3 sm:p-4 border-b border-gray-800 flex justify-between items-start">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-lg sm:text-xl font-bold text-white mr-2 sm:mr-3">
                  KJ
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm sm:text-base">Kshitij Jain</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Web Developer</p>
                </div>
              </div>
              <motion.button 
                onClick={() => setIsChatOpen(false)}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-colors"
                aria-label="Close chat"
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ rotate: 180, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
              >
                <FiX className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
            
            {/* Chat Body */}
            <div className="p-3 sm:p-4">
              <div className="bg-[#222] p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
                <p className="text-sm sm:text-base text-gray-200">Hey there! 👋</p>
                <p className="text-sm sm:text-base text-gray-200">Kshitij here, Web Developer</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-2">Want to chat about design, products, or anything digital?</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">Click below to message me on LinkedIn!</p>
              </div>
              
              <a 
                href="https://www.linkedin.com/in/kshitij-kj-jain-422025342/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-[#0a66c2] hover:bg-[#0a5aad] text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium text-sm sm:text-base transition-colors"
              >
                <FiLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Message on LinkedIn</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Project data
const projects = [
  {
    title: 'LATTHI',
    description: 'A fully functional E-Commerce Website built to give users a seamless and modern shopping experience with AI-powered features.',
    tech: ['ReactJs', 'Tailwind CSS', 'Firebase', 'AI Tools'],
    github: 'https://github.com/NEGO2522/CentralizedAI',
    demo: 'https://project-latthi.vercel.app/',
    image: 'https://img.freepik.com/free-photo/artificial-intelligence-technology-science-background_53876-124643.jpg'
  },
  {
    title: 'College Mess App',
    description: 'A responsive web application to manage daily menus and meal schedules for college students with clean UI/UX and real-time updates.',
    tech: ['React.js', 'Tailwind CSS', 'Responsive Design', 'UI/UX'],
    github: 'https://github.com/NEGO2522/Poornima-mess',
    demo: 'https://poornima-mess.vercel.app/',
    image: 'https://img.freepik.com/free-vector/restaurant-menu-background-with-photo_52683-47043.jpg'
  },
  {
    title: 'Diwali Sales Analysis',
    description: 'Comprehensive data analysis of Diwali sales patterns using Python data science stack, revealing key consumer insights and trends.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/NEGO2522/Diwali-Sales-Project',
    image: 'https://img.freepik.com/free-vector/business-analytics-concept-illustration_114360-1500.jpg'
  },
  {
    title: 'SIH 25',
    description: 'Smart India Hackathon 2025 project focusing on innovative solutions for real-world problems using cutting-edge technology.',
    tech: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
    github: 'https://github.com/NEGO2522/SIH-25',
    demo: 'https://sih-25-poornima.vercel.app',
    image: 'https://img.freepik.com/free-vector/hackathon-background-with-hud-elements_23-2149067448.jpg'
  },
  {
    title: 'NEGO Services',
    description: 'A comprehensive service platform offering various digital solutions and professional services to clients worldwide.',
    tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'Stripe'],
    github: 'https://github.com/NEGO2522/nego-services',
    demo: 'https://nego-services.vercel.app',
    image: 'https://img.freepik.com/free-vector/digital-services-online-platform-abstract-concept-illustration_335657-2041.jpg'
  },
  {
    title: 'STED (Student Education)',
    description: 'An educational platform designed to enhance student learning experiences with interactive content and progress tracking.',
    tech: ['MERN Stack', 'JWT Auth', 'Redux', 'Material-UI'],
    github: 'https://github.com/NEGO2522/STED',
    demo: 'https://sted-founder.vercel.app',
    image: 'https://img.freepik.com/free-vector/online-education-concept-illustration_114360-5481.jpg'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.98
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    y: -5,
    transition: { duration: 0.2 }
  }
};

export function Projects() {
  return (
    <section id="work" className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-7xl font-serif font-extrabold italic tracking-tight text-gray-700 mb-12">WORK</h1>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`py-6 ${index < projects.length - 1 ? 'border-b border-gray-800' : ''} cursor-pointer`}
              variants={item}
              whileHover="hover"
              onClick={() => window.open(project.demo || project.github, '_blank')}
            >
              <div className="flex items-start">
                <span className="text-2xl font-mono text-gray-500 w-12 flex-shrink-0">0{index + 1}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">{project.title}</h2>
                    <div className="flex space-x-2">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                        title="View on GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-lg text-gray-400 mt-2">{project.tech.join(' • ')}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
