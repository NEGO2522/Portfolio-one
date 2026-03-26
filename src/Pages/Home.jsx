import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiMessageCircle, FiX, FiAward, FiCode, FiGlobe, FiExternalLink, FiTwitter, FiArrowUp } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import profileImage from '../assets/img.jpg';
import Testimonials from './Testimonials';
import { Services } from './Services';

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
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rounded-full"
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
            className="text-xl font-bold text-gray-800"
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
    <div className="min-h-screen bg-white text-black pb-12 md:pb-24 overflow-x-hidden" style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive' }}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-start justify-start p-4 sm:p-6 relative overflow-hidden pt-16 sm:pt-20">
        {/* Radial Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-black/[0.02] rounded-full blur-[120px] pointer-events-none"></div>


        <div className="flex flex-col md:flex-row items-start justify-between w-full px-2 sm:px-6 lg:px-8 relative z-10">
          {/* Left — Name */}
          <div className="w-full md:w-1/2 text-left px-1 sm:px-0 mb-8 sm:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="relative">
                <h1 className="font-black mb-8 text-left tracking-tighter text-black leading-[0.9]" style={{ fontSize: 'clamp(140px, 18vw, 260px)', marginLeft: '8%', marginTop: '6rem' }}>
                  Kshitij
                </h1>
              </div>
            </motion.div>
          </div>

          {/* Right — Description + Let's Talk btn */}
          <motion.div
            className="w-full md:w-2/5 flex flex-col justify-end items-start md:items-end gap-6 pb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ marginTop: '8rem' }}
          >
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-medium text-left md:text-right">
              Designing and building digital products that<br />
              balance user needs and real-world problems.
            </p>
            <p className="text-sm sm:text-base text-gray-400 font-light text-left md:text-right">
              Exploring <b><u>AI</u></b>, <b><u>Web Dev</u></b>, and <u>Cloud solutions</u>.
            </p>
            <a
              href="#contact"
              className="mt-2 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 text-sm flex items-center gap-2"
            >
              Let's Talk
              <FiArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Social Media Boxes */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-5 gap-4 w-full">
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" title="Discord"
            className="flex items-center justify-center border border-gray-200 rounded-2xl text-gray-400 shadow-sm hover:bg-gray-100 hover:border-gray-300 hover:text-gray-600 transition-all duration-300"
            style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
            <FaDiscord className="w-9 h-9" />
          </a>
          <a href="https://www.linkedin.com/in/kshitij-kj-jain-422025342/" target="_blank" rel="noopener noreferrer" title="LinkedIn"
            className="flex items-center justify-center border border-gray-200 rounded-2xl text-gray-400 shadow-sm hover:bg-gray-100 hover:border-gray-300 hover:text-gray-600 transition-all duration-300"
            style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
            <FiLinkedin className="w-9 h-9" />
          </a>
          <a href="https://github.com/NEGO2522" target="_blank" rel="noopener noreferrer" title="GitHub"
            className="flex items-center justify-center border border-gray-200 rounded-2xl text-gray-400 shadow-sm hover:bg-gray-100 hover:border-gray-300 hover:text-gray-600 transition-all duration-300"
            style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
            <FiGithub className="w-9 h-9" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter / X"
            className="flex items-center justify-center border border-gray-200 rounded-2xl text-gray-400 shadow-sm hover:bg-gray-100 hover:border-gray-300 hover:text-gray-600 transition-all duration-300"
            style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
            <FiTwitter className="w-9 h-9" />
          </a>
          <a href="mailto:nextgenova28@gmail.com" title="Email"
            className="flex items-center justify-center border border-gray-200 rounded-2xl text-gray-400 shadow-sm hover:bg-gray-100 hover:border-gray-300 hover:text-gray-600 transition-all duration-300"
            style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
            <FiMail className="w-9 h-9" />
          </a>
        </div>
      </div>

      {/* Projects Section */}
      <Projects />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-6 text-center md:text-left text-black">
                I'm <span className="text-black">Kshitij Jain</span>
              </h2>

              <div className="space-y-3 sm:space-y-6 text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
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
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3 sm:p-6 transition-all duration-300">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-black/5 rounded-xl flex items-center justify-center mb-2 sm:mb-4 mx-auto sm:mx-0">
                    <FiAward className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-sm sm:text-xl font-semibold text-black mb-1 sm:mb-2 text-center sm:text-left">1+ Years</h3>
                  <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">Experience in Web Development</p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3 sm:p-6 transition-all duration-300">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-black/5 rounded-xl flex items-center justify-center mb-2 sm:mb-4 mx-auto sm:mx-0">
                    <FiCode className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-sm sm:text-xl font-semibold text-black mb-1 sm:mb-2 text-center sm:text-left">5+ Projects</h3>
                  <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">Completed Successfully</p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3 sm:p-6 transition-all duration-300">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-black/5 rounded-xl flex items-center justify-center mb-2 sm:mb-4 mx-auto sm:mx-0">
                    <FiGlobe className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-sm sm:text-xl font-semibold text-black mb-1 sm:mb-2 text-center sm:text-left">Always</h3>
                  <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">Learning & Growing</p>
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

      {/* Services Section */}
      <Services />

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Numbered FAQ Items */}
            <div className="space-y-2">
              {[
                {
                  question: " How long does it take to build a website?",
                  answer: "Timeline varies by complexity. A simple website takes 2-3 weeks, while custom web applications require 6-12 weeks. I'll provide a detailed timeline after understanding your requirements."
                },
                {
                  question: "Are you available to join full time?",
                  answer: "I'm open to freelance projects, collaborations, and full-time opportunities. Feel free to reach out through the contact form or email."
                },
                {
                  question: " Do you provide ongoing support after launch?",
                  answer: "Project timelines vary based on complexity. Most web applications take 2-8 weeks, while simpler projects can be completed in 1-2 weeks."
                },
                {
                  question: "Can you work with my existing brand and design?",
                  answer: "Yes, I provide post-launch support and maintenance services to ensure your project continues to run smoothly."
                },
                {
                  question: "Will my website work on mobile phones?",
                  answer: "I work with React, Next.js, Node.js, Python, and various AI/ML tools. I'm always learning new technologies to stay current."
                },
                {
                  question: "What technologies and frameworks do you specialize in?",
                  answer: "I work with modern tech stacks including Next.js, React.js, Node.js, and popular databases. I adapt quickly to new technologies and prioritize writing clean, maintainable code that scales."
                },
                {
                  question: "Do you help with hosting and domain setup??",
                  answer: "Absolutely! I can help with debugging, feature additions, performance optimization, and complete overhauls of existing applications."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  // Updated border color to border-gray-600 to match the button
                  className="border border-gray-600 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => {
                      const allItems = document.querySelectorAll('.faq-answer');
                      const currentAnswer = document.getElementById(`faq-answer-${index}`);

                      // Close all other items
                      allItems.forEach(item => {
                        if (item !== currentAnswer) {
                          item.classList.add('hidden');
                        }
                      });

                      // Toggle current item
                      currentAnswer.classList.toggle('hidden');
                    }}
                    className="w-full flex items-center gap-4 p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-2xl font-bold text-black w-8">{index + 1}</span>
                    <h3 className="text-lg font-semibold text-black">{faq.question}</h3>
                  </button>
                  <div id={`faq-answer-${index}`} className={`faq-answer ${index === 0 ? '' : 'hidden'} px-4 pb-4 pl-16`}>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side - Styled Text */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-xl font-black text-black mb-2">FAQ</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">Questions you</h3>
                <h3 className="text-3xl md:text-4xl font-semibold text-black mb-2">might be wondering</h3>

                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Got questions? I've got answers. Here's everything you need to know about working with me.
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-gray-600 text-white font-medium rounded-full hover:bg-gray-700 transition-all duration-300 text-sm"
                >
                  Contact Me
                  <FiArrowUp className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
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
    <section id="work" className="bg-white text-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl md:text-7xl font-extrabold italic tracking-tight text-gray-700 mb-12">WORK</h1>
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
              className={`py-6 ${index < projects.length - 1 ? 'border-b border-gray-200' : ''} cursor-pointer`}
              variants={item}
              whileHover="hover"
              onClick={() => window.open(project.demo || project.github, '_blank')}
            >
              <div className="flex items-start">
                <span className="text-2xl text-gray-300 w-12 flex-shrink-0">0{index + 1}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black">{project.title}</h2>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-black transition-colors transform hover:scale-110"
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