import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import profileImage from '../assets/img.png';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-center justify-between gap-12 py-20 md:py-28 lg:py-36"
        >
          {/* Content */}
          <motion.div 
            variants={item}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.span 
              variants={item}
              className="inline-block mb-4 text-sm md:text-base font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full"
            >
              Data Scientist & Web Developer
            </motion.span>
            
            <motion.h1 
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Kshitij Jain</span>
            </motion.h1>
            
            <motion.p 
              variants={item}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
             I’m a frontend web developer and data science enthusiast, passionate about building useful and interactive tech solutions.
            </motion.p>

            <motion.div 
              variants={item}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 ease-out hover:ring-2 hover:ring-blue-600 hover:ring-offset-2"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-blue-700"></span>
                <span className="relative flex items-center gap-2">
                  Get in Touch <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a
                href="/data/Kshitij_Jain_Resume.pdf"
                download="Kshitij_Jain_Resume.pdf"
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-gray-800 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <FiDownload className="group-hover:animate-bounce" /> Download CV
                </span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={item}
              className="flex flex-col gap-4 mt-10"
            >
              <p className="text-gray-600 dark:text-gray-300 text-lg font-medium text-center lg:text-left">Connect with me</p>
              <div className="flex justify-center lg:justify-start gap-6">
                <motion.a 
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/kshitij-jain-422025342/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
                  aria-label="LinkedIn Profile"
                  title="Connect on LinkedIn"
                >
                  <FiLinkedin className="w-6 h-6" />
                  <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    LinkedIn Profile
                  </span>
                </motion.a>
                
                <motion.a 
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/NEGO2522" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-lg hover:shadow-xl hover:shadow-gray-800/20 transition-all duration-300 cursor-pointer"
                  aria-label="GitHub Profile"
                  title="View GitHub Profile"
                >
                  <FiGithub className="w-6 h-6" />
                  <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    GitHub Profile
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Profile Image */}
          <motion.div 
            variants={item}
            className="relative w-full max-w-md lg:w-1/2 mt-12 lg:mt-0 perspective-1000"
            initial={{ rotateY: 0 }}
            whileHover={{
              rotateY: 5,
              rotateX: 5,
              scale: 1.05,
              transition: { duration: 0.5 }
            }}
          >
            <div className="relative z-10 w-full max-w-md mx-auto">
              {/* Subtle background glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-700"></div>
              
              {/* 3D Container */}
              <motion.div 
                className="relative z-10 w-full h-full transform-style-preserve-3d transition-all duration-700 ease-out"
                whileHover={{
                  rotateY: -5,
                  rotateX: 5,
                  transition: { duration: 0.5 }
                }}
              >
                <img 
                  src={profileImage} 
                  alt="Kshitij Jain" 
                  className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105 shadow-2xl"
                />
                
                {/* Subtle reflection effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-gradient-to-t from-white to-transparent mix-blend-overlay transition-opacity duration-700 pointer-events-none"></div>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
