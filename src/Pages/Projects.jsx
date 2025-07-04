import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Project data
const projects = [
  {
    title: 'CentralizedAI',
    description: 'CentralizedAI is an all-in-one platform that brings multiple AI tools together in one place. It simplifies access to AI for learning, productivity, and real-world problem-solving.',
    tech: ['ReactJs', 'Tailwind CSS', 'Firebase','AI Tools'],
    github: 'https://github.com/NEGO2522/CentralizedAI',
    demo: 'https://centralized-ai.vercel.app/',
    image: 'https://img.freepik.com/free-photo/artificial-intelligence-technology-science-background_53876-124643.jpg'
  },
  {
    title: 'College Mess App',
    description: 'A responsive web application using React.js and Tailwind CSS to manage daily menus and meal schedules for a college mess. The app focuses on clean UI/UX and provides dynamic updates to students.',
    tech: ['React.js', 'Tailwind CSS', 'Responsive Design', 'UI/UX'],
    github: 'https://github.com/NEGO2522/Poornima-mess',
    demo: 'https://poornima-mess.vercel.app/',
    image: 'https://img.freepik.com/free-vector/restaurant-menu-background-with-photo_52683-47043.jpg'
  },
  {
    title: 'Diwali Sales Data Analysis',
    description: 'Conducted exploratory data analysis on Diwali sales data using NumPy, Pandas, Matplotlib, and Seaborn. Extracted insights related to consumer behavior, peak sales categories, and regional performance.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/NEGO2522/Diwali-Sales-Project',
    image: 'https://img.freepik.com/free-vector/business-analytics-concept-illustration_114360-1500.jpg'
  },
];

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

export default function Projects() {
  return (
    <section className="min-h-screen pt-20 pb-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full mt-8">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center mb-16"
        >
          <motion.span 
            variants={item}
            className="inline-block mb-4 text-sm md:text-base font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full"
          >
            My Work
          </motion.span>
          
          <motion.h2 
            variants={item}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
          >
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </motion.h2>
          
          <motion.p 
            variants={item}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.github}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <FiExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          variants={item}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">Want to see more of my work?</p>
          <button
            onClick={() => window.open('https://github.com/NEGO2522', '_blank')}
            className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors cursor-pointer border-0"
            style={{ display: 'inline-block' }}
          >
            View All Projects on GitHub
          </button>
        </motion.div>
      </div>
    </section>
  );
}
