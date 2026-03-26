import { motion } from 'framer-motion';
import { 
  FaPython, FaJs, FaReact, FaHtml5, FaCss3Alt, FaDatabase, 
  FaNodeJs, FaGithub, FaGitAlt, FaDocker, FaAws
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiMysql,
  SiTypescript, SiNextdotjs, SiFramer, SiFirebase, SiVercel
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'JavaScript', icon: FaJs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express', icon: SiExpress },
  { name: 'Python', icon: FaPython },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Docker', icon: FaDocker },
  { name: 'AWS', icon: FaAws },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Framer', icon: SiFramer },
];

export function Skills() {
  // Double the skills array for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="w-full bg-white py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12">
          {/* Skills Marquee */}
          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex gap-10"
              animate={{
                x: [0, -50 * skills.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {duplicatedSkills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex items-center justify-center w-14 h-14 hover:scale-110 transition-transform cursor-pointer group flex-shrink-0"
                  title={skill.name}
                >
                  <skill.icon 
                    className="w-9 h-9 text-gray-600 group-hover:text-black transition-colors duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side Text */}
          <div className="flex flex-col justify-center pl-8 flex-shrink-0">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Not Just Tech</p>
            <p className="text-2xl font-black text-black">800+ Hours of Hands-on Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
