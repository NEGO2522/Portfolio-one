import { motion } from 'framer-motion';
import profileImage from '../assets/img.png';

export default function About() {
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
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5 
      } 
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full py-16">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* 3D Profile Image */}
          <motion.div 
            variants={item}
            className="relative w-full max-w-md lg:w-1/3 perspective-1000"
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

          {/* Content */}
          <motion.div 
            variants={item}
            className="w-full lg:w-2/3 text-center lg:text-left"
          >
            <motion.span 
              variants={item}
              className="inline-block mb-4 text-sm md:text-base font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full"
            >
              About Me
            </motion.span>
            
            <motion.h2 
              variants={item}
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Get to <span className="text-blue-600 dark:text-blue-400">Know Me</span>
            </motion.h2>
            
            <motion.div 
              variants={item}
              className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
            >
              <p>
                I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Kshitij Jain</span>, a first-year B.Tech student in Computer Science (AI & ML) at Poornima University. 
                I'm passionate about creating tech solutions that help people and solve real-life problems.
              </p>

              <p>
                My interests lie in web development, AI, and entrepreneurship. I'm currently working on innovative projects 
                like a healthcare platform and transport solution for daily commuters. I love exploring new ideas and learning 
                how to bring them to life with code.
              </p>

              <p>
                In my free time, I enjoy playing football and volleyball, reading books, and watching inspiring movies. 
                I'm constantly striving to improve and contribute to meaningful change through technology.
              </p>

              <blockquote className="relative p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl border-l-4 border-blue-500 italic mt-8">
                <p className="text-gray-700 dark:text-gray-300">
                  "Success is not final; failure is not fatal: It is the courage to continue that counts."
                </p>
                <footer className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  — Winston Churchill
                </footer>
              </blockquote>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
