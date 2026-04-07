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
    <section className="w-full bg-white overflow-hidden py-4">
      <div className="w-full">
        {/* Skills Marquee — full width */}
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-8 sm:gap-10"
            animate={{
              x: [0, -56 * skills.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 hover:scale-110 transition-transform cursor-pointer group flex-shrink-0"
                title={skill.name}
              >
                <skill.icon
                  className="w-7 h-7 sm:w-9 sm:h-9 text-gray-600 group-hover:text-black transition-colors duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Caption below marquee */}
        <p className="text-center text-sm sm:text-base md:text-lg font-black text-black mt-3 px-4">
          100+ Hours of Hands-on Experience
        </p>
      </div>
    </section>
  );
}
