import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiArrowUpRight } from "react-icons/fi";

export function Services() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const services = [
    {
      id: "(1)",
      title: "Brand Development & Identity",
      description: "Creating compelling brand identities and visual systems that resonate with your target audience and set you apart from the competition.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "(2)",
      title: "Digital Strategy & Consulting",
      description: "Strategic planning and consulting to help businesses leverage technology effectively and achieve their digital transformation goals.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "(3)",
      title: "Custom Online Business Platforms",
      description: "I build tailored web applications that help your business run smoothly—from customer portals and booking systems to internal tools that automate your workflows and boost productivity.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "(4)",
      title: "High-Converting Business Websites",
      description: "Strategic design meets high performance. I create websites focused on turning visitors into customers through optimized user flows.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "(5)",
      title: "Beautiful User Interface Design",
      description: "Visual excellence that aligns with your brand identity. I focus on clean layouts, intuitive navigation, and interactive elements.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: "(6)",
      title: "Complete End-to-End Technical Solutions",
      description: "From initial architecture and database design to deployment and maintenance, I handle the full lifecycle of your digital product.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600",
    }
  ];

  return (
    <section id="services" className="w-full bg-white px-2.5 py-20 flex flex-col items-center overflow-hidden">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');`}</style>
      
      <div className="max-w-[1600px] w-full mx-auto bg-black rounded-[3rem] pt-32 pb-32 px-10 md:px-24 shadow-2xl relative overflow-visible">
        
        {/* Background "Services" Text - Reduced size and width */}
        <div className="absolute top-[-20px] md:top-[-10px] left-0 right-0 flex justify-start md:justify-center pointer-events-none select-none z-0 pl-10 md:pl-0">
          <h1 className="text-[100px] md:text-[160px] font-extrabold tracking-[-0.05em] leading-none text-transparent bg-clip-text bg-gradient-to-t from-white/5 to-white/10 inline-block uppercase" style={{ fontFamily: 'Syne, sans-serif' }}>
            Services
          </h1>
        </div>

        {/* Services List Content */}
        <div className="relative z-10 mt-10 md:mt-20">
          {services.map((service, index) => {
            const isOpen = expandedIndex === index;
            
            return (
              <div key={index} className="border-b border-white/10 last:border-none">
                <button
                  onClick={() => setExpandedIndex(isOpen ? -1 : index)}
                  className="w-full py-6 md:py-10 flex items-start justify-between group transition-all"
                >
                  <div className="flex items-start gap-8 md:gap-24 lg:gap-40 text-left">
                    <span className="text-xs font-mono text-white/40 pt-2.5 tracking-widest">
                      {service.id}
                    </span>
                    
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col xl:flex-row xl:items-center gap-8">
                        {isOpen && (
                          <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-40 h-24 rounded-xl overflow-hidden flex-shrink-0 border border-white/10 shadow-xl"
                          >
                            <img 
                              src={service.image} 
                              className="w-full h-full object-cover grayscale brightness-110"
                              alt=""
                            />
                          </motion.div>
                        )}
                        <h3 
                          className={`text-xl md:text-2xl lg:text-3xl font-bold tracking-tight transition-all duration-500 ease-out ${isOpen ? 'text-white' : 'text-white/30 group-hover:text-white'}`}
                          style={{ fontFamily: 'Syne, sans-serif' }}
                        >
                          {service.title}
                        </h3>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="text-white/50 text-sm md:text-lg leading-relaxed max-w-2xl pb-6">
                              {service.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  
                  <div className={`flex-shrink-0 mt-2 p-1.5 rounded-full border transition-all duration-500 ${isOpen ? 'border-white text-white' : 'border-white/10 text-white/20 group-hover:border-white group-hover:text-white'}`}>
                    {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Action Button - Shifted Left */}
        <div className="mt-20 flex justify-start relative z-10 md:ml-32 lg:ml-48">
          <button 
            className="group relative flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-xl active:scale-95 uppercase tracking-widest"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Start Project 
            <FiArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}