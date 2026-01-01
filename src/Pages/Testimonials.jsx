import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const achievements = [
    {
      title: "University Recognition",
      subtitle: "Appreciation Letter from Poornima University",
      description: "Received an appreciation letter for building and deploying a live Mess Menu website used by students.",
      date: "2024",
      link: {
        text: "View Live Project",
        url: "https://poornima-mess.vercel.app"
      }
    },
    {
      title: "Live Product Launch",
      subtitle: "Production-Ready Web Application",
      description: "Successfully designed and deployed a full-stack web application currently serving real users with high reliability.",
      date: "July 2025",
      link: {
        text: "Visit Lathishop",
        url: "https://lathishop.com"
      }
    },
    {
      title: "Pitching Event Winner",
      subtitle: "Shark Tank Event – 3rd Runner Up",
      description: "Secured 3rd Runner Up position for presenting STED, an EdTech solution focused on practical skill-based learning.",
      date: "November 2025"
    },
    {
      title: "Tech Journey",
      subtitle: "Self-driven Tech Builder",
      description: "Continuously expanding expertise through hands-on projects in web development, data science, and AI, with a strong focus on solving real-world challenges.",
      date: "Ongoing",
      isLast: true
    }
  ];

  return (
    <div className="bg-black text-white py-4 sm:py-6 px-2 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-extrabold italic tracking-tight text-gray-700/30 mb-4">
            TESTIMONIALS
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-transparent mx-auto mt-4" style={{ background: 'linear-gradient(to right, #9ca3af, transparent)' }}></div>
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          
          <div className="flex flex-nowrap gap-4 sm:gap-8 pb-16 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory -mx-2 sm:mx-auto sm:justify-center">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="relative flex-shrink-0 w-[calc(100vw-2rem)] sm:w-80 snap-center sm:snap-none mx-1 sm:mx-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 -top-8 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-[#F2F2F2] to-gray-400 flex items-center justify-center z-10">
                <div className="w-3 h-3 rounded-full bg-[#F2F2F2]"></div>
              </div>
              
              {/* Content */}
              <div className="w-full">
                <div className="bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-[#F2F2F2]/20 transition-all duration-300 h-full min-h-[260px] sm:min-h-[300px] flex flex-col">
                  <div className="text-sm text-[#F2F2F2]/70 mb-3">{achievement.date}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{achievement.title}</h3>
                  <h4 className="text-[#F2F2F2]/80 text-xs sm:text-sm font-medium mb-2 sm:mb-3">{achievement.subtitle}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow">
                    {achievement.description}
                  </p>
                  
                  {achievement.link && (
                    <a 
                      href={achievement.link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 bg-[#F2F2F2] text-gray-900 rounded-full hover:bg-opacity-90 transition-all duration-300 font-medium mt-auto self-start"
                    >
                      {achievement.link.text}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;