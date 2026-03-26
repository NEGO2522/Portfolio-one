import React from 'react';

const Footer = () => {
  return (
    // min-h-screen ensures it takes the full height of the device
    // w-full ensures it spans the full width
    <footer className="bg-black text-white min-h-screen w-full flex flex-col justify-between px-6 md:px-12 py-12 font-sans overflow-hidden">
      
      {/* Top Section: Links and Contact */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mt-10">
        
        {/* Contact Info (Spans 6 columns) */}
        <div className="lg:col-span-6">
          <p className="text-gray-400 text-sm mb-6 max-w-sm leading-relaxed">
            Be it a full-time role, a new project, or simply bouncing around ideas—I'd love to connect. Feel free to drop me a message anytime.
          </p>
          <a 
            href="mailto:draft.kshitij@gmail.com" 
            className="text-2xl md:text-3xl font-medium border-b-2 border-white pb-2 hover:text-gray-300 transition-all inline-block"
          >
            draft.kshitij@gmail.com
          </a>
        </div>

        {/* Navigation (Spans 2 columns) */}
        <div className="lg:col-span-2">
          <h4 className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#home" className="hover:opacity-60 transition-opacity">Home</a></li>
            <li><a href="#about" className="hover:opacity-60 transition-opacity">About</a></li>
            <li><a href="#projects" className="hover:opacity-60 transition-opacity">Projects</a></li>
            <li><a href="#blog" className="hover:opacity-60 transition-opacity">Blog</a></li>
            <li><a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a></li>
          </ul>
        </div>

        {/* Social (Spans 2 columns) */}
        <div className="lg:col-span-2">
          <h4 className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-8">Social</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:opacity-60 transition-opacity">Medium</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Discord</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Linkedin</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Twitter (X)</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Github</a></li>
          </ul>
        </div>

        {/* Others (Spans 2 columns) */}
        <div className="lg:col-span-2">
          <h4 className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-8">Others</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:opacity-60 transition-opacity">Landmarks</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Privacy Policy</a></li>
            <li><a href="#" className="hover:opacity-60 transition-opacity">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      {/* Middle Bar: Location and Role */}
      <div className="max-w-7xl w-full mx-auto mt-auto">
        <div className="border-t border-gray-800 pt-6 pb-4 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.3em] text-gray-500">
          <p>Based in MP, India</p>
          <div className="flex flex-col md:flex-row md:gap-24 mt-4 md:mt-0">
            <p>Fullstack Web Developer</p>
            <p className="mt-2 md:mt-0">© 2025</p>
          </div>
        </div>
      </div>

      {/* Bottom: Massive Glow Name */}
      <div className="w-full text-center pointer-events-none select-none">
        <h1 className="text-[18vw] font-bold leading-none tracking-tighter text-white 
          drop-shadow-[0_0_45px_rgba(255,255,255,0.4)] transition-all duration-700">
          KSHITIJ
        </h1>
      </div>

    </footer>
  );
};

export default Footer;