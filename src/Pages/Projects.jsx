import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Project data
const projects = [
  {
    title: 'Healthcare Platform',
    description: 'A smart platform connecting patients to doctors, with features like AI symptom checker, emergency ambulance, and online prescriptions.',
    tech: ['React', 'Tailwind', 'Firebase', 'Node.js'],
    github: '#',
    demo: '#',
    image: '/healthcare-platform.jpg'
  },
  {
    title: 'EduCommute',
    description: 'Real-time tracking system for school/college buses with safety, transparency, and efficiency in mind.',
    tech: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
    github: '#',
    demo: '#',
    image: '/edutrack.jpg'
  },
  {
    title: 'NextGenOva',
    description: 'A platform helping students discover career paths, join communities, and access field-specific roadmaps.',
    tech: ['React', 'Vite', 'Tailwind', 'Firebase'],
    github: '#',
    demo: '#',
    image: '/nextgenova.jpg'
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
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">{project.title.charAt(0)}</div>
                </div>
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
                  <a
                    href={project.demo}
                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <FiExternalLink className="ml-1 w-4 h-4" />
                  </a>
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
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
