import { motion } from 'framer-motion';
import { 
  FaPython, FaJs, FaReact, FaHtml5, FaCss3Alt, FaDatabase, 
  FaChartLine, FaRobot, FaFire, FaGithub, FaNodeJs, FaGitAlt, FaDocker
} from 'react-icons/fa';
import { 
  SiPandas, SiNumpy, SiOpencv, SiTailwindcss, SiExpress, 
  SiScikitlearn, SiDjango, SiKubernetes, SiGnubash 
} from 'react-icons/si';
import { TbChartLine } from 'react-icons/tb';

// Skills data for the grid

const SkillIcon = ({ name, icon }) => (
  <motion.div 
    className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:scale-105"
    whileHover={{ y: -5 }}
  >
    <div className="mb-2">{icon}</div>
    <span className="text-sm font-medium text-white/80">{name}</span>
  </motion.div>
);

const allSkills = [
  { name: 'Python', icon: <FaPython className="w-12 h-12 text-gray-400" /> },
  { name: 'JavaScript', icon: <FaJs className="w-12 h-12 text-gray-400" /> },
  { name: 'React', icon: <FaReact className="w-12 h-12 text-gray-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="w-12 h-12 text-gray-400" /> },
  { name: 'Express.js', icon: <SiExpress className="w-12 h-12 text-gray-400" /> },
  { name: 'Django', icon: <SiDjango className="w-12 h-12 text-gray-400" /> },
  { name: 'Docker', icon: <FaDocker className="w-12 h-12 text-gray-400" /> },
  { name: 'Kubernetes', icon: <SiKubernetes className="w-12 h-12 text-gray-400" /> },
  { name: 'HTML5', icon: <FaHtml5 className="w-12 h-12 text-gray-400" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="w-12 h-12 text-gray-400" /> },
  { name: 'SQL', icon: <FaDatabase className="w-12 h-12 text-gray-400" /> },
  { name: 'Pandas', icon: <SiPandas className="w-12 h-12 text-gray-400" /> },
  { name: 'NumPy', icon: <SiNumpy className="w-12 h-12 text-gray-400" /> },
  { name: 'Scikit-Learn', icon: <SiScikitlearn className="w-12 h-12 text-gray-400" /> },
  { name: 'Matplotlib', icon: <FaChartLine className="w-12 h-12 text-gray-400" /> },
  { name: 'Seaborn', icon: <TbChartLine className="w-12 h-12 text-gray-400" /> },
  { name: 'ML/AI', icon: <FaRobot className="w-12 h-12 text-gray-400" /> },
  { name: 'OpenCV', icon: <SiOpencv className="w-12 h-12 text-gray-400" /> },
  { name: 'Shell Scripting', icon: <SiGnubash className="w-12 h-12 text-gray-400" /> },
  { name: 'Firebase', icon: <FaFire className="w-12 h-12 text-gray-400" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="w-12 h-12 text-gray-400" /> },
  { name: 'GitHub', icon: <FaGithub className="w-12 h-12 text-gray-400" /> },
  { name: 'Git', icon: <FaGitAlt className="w-12 h-12 text-gray-400" /> },
];

export default function Skills() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Work Text */}
      <div className="absolute top-10 right-10 z-10">
        <span className="text-6xl md:text-8xl font-bold text-gray-700/30 font-['Poppins']">
          SKILLS
        </span>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <motion.div 
          className="bg-black rounded-3xl p-10 border border-gray-700 min-h-[600px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 h-full">
            {allSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + (index * 0.05) }}
              >
                <SkillIcon name={skill.name} icon={skill.icon} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
