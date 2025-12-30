import React from 'react';

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
    <div className="min-h-[calc(100vh-2rem)] bg-black text-white pt-4 pr-4 pb-8 sm:pt-6 sm:pr-6 lg:pt-8 lg:pr-8">
      <div className="max-w-5xl mx-auto pt-12">
        <div className="flex justify-end -mr-8 sm:-mr-12 lg:-mr-16 mb-12">
          <span className="text-6xl font-bold text-gray-700/30 tracking-widest">TESTIMONIALS & ACHIEVEMENTS</span>
        </div>
        
        <div className="relative
          before:absolute
          before:left-1/2
          before:top-0
          before:h-full
          before:w-1
          before:-translate-x-1/2
          before:bg-gradient-to-b
          before:from-blue-500
          before:to-purple-600
          before:rounded-full
          before:content-['']
          before:z-0">
          
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className={`relative mb-16 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 z-10
                ${index % 2 === 0 ? 'right-[-3.5rem]' : 'left-[-3.5rem]'}`}>
                <div className="absolute inset-1 bg-black rounded-full"></div>
              </div>
              
              {/* Card */}
              <div className={`relative bg-black p-6 rounded-xl border border-gray-700 transform transition-all duration-300 hover:border-blue-500
                ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                
                {/* Date */}
                <div className={`absolute top-4 text-sm font-medium text-blue-400 
                  ${index % 2 === 0 ? 'left-4' : 'right-4'}`}>
                  {achievement.date}
                </div>
                
                {/* Content */}
                <div className="mt-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    {achievement.title}
                  </h2>
                  <h3 className="text-lg font-semibold text-gray-200 mt-1">
                    {achievement.subtitle}
                  </h3>
                  <p className="mt-2 text-gray-400">
                    {achievement.description}
                  </p>
                  
                  {achievement.link && (
                    <a 
                      href={achievement.link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                    >
                      {achievement.link.text}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;