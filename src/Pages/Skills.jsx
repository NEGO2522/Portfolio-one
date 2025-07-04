import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Development Stack',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'C', level: 80 },
      { name: 'SQL', level: 80 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'DSA', level: 85 },
    ],
    icon: '💻'
  },
  {
    title: 'Data Science & Analysis',
    skills: [
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 80 },
      { name: 'Matplotlib', level: 80 },
      { name: 'Seaborn', level: 75 },
      { name: 'Machine Learning', level: 75 },
      { name: 'OpenCV', level: 75 },
    ],
    icon: '📊'
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Firebase', level: 80 },
      { name: 'BeautifulSoup', level: 80 },
      { name: 'Responsive Design', level: 85 },
    ],
    icon: '🌐'
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Fluent English', level: 90 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Teamwork', level: 85 },
      { name: 'Communication', level: 90 },
      { name: 'Adaptability', level: 85 },
    ],
    icon: '🌟'
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export default function Skills() {
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
            My Abilities
          </motion.span>
          
          <motion.h2 
            variants={item}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
          >
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </motion.h2>
          
          <motion.p 
            variants={item}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Here's a showcase of my technical and professional skills that I've developed over time.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + (index * 0.1) + (idx * 0.05) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={item}
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Additional Skills</h3>
          <div className="flex flex-wrap gap-3">
            {['AI Tools (ChatGPT, Midjourney)', 'Web Scraping', 'Data Analysis', 'Technical Writing', 'Project Management', 'Critical Thinking', 'Collaboration', 'Continuous Learning'].map((skill, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (idx * 0.05) }}
                className="inline-block px-4 py-2 bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
