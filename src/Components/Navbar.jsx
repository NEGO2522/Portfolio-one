import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiChevronDown, FiTwitter } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import { useState } from 'react';
import NavbarImage from '../assets/Navbar_Image.png';

const arialFont = { fontFamily: 'Arial, Helvetica, sans-serif' };

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'work' },
    { name: 'Blog', id: 'blog' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="pointer-events-auto w-full max-w-7xl flex flex-col items-center"
        style={arialFont}
      >
        {/* Main Nav Bar Container */}
        <div className="w-full relative px-4 md:px-10">
          <div className={`relative z-30 flex items-center justify-between px-10 py-4 shadow-xl bg-[#D8D8D8] transition-all duration-500 ${dropdownOpen ? 'rounded-b-none' : 'rounded-b-3xl'}`}>
            <button 
              onClick={() => { navigate('/'); setDropdownOpen(false); }} 
              className="text-2xl font-bold tracking-tight text-gray-800"
            >
              Kshitij
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <AnimatePresence mode="wait">
                {!dropdownOpen && (
                  <motion.ul 
                    key="nav-links"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex items-center gap-8"
                  >
                    {navLinks.map((link) => (
                      <li key={link.id}>
                        <button
                          onClick={() => scrollToSection(link.id)}
                          className="font-bold text-gray-700 hover:text-gray-900 transition-all text-xs tracking-[0.15em] cursor-pointer"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 font-bold text-gray-700 hover:text-gray-900 transition-all text-xs tracking-[0.15em] pl-8 border-l border-gray-400/30 cursor-pointer"
              >
                {dropdownOpen ? 'Close' : 'Contact'}
                <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }}>
                  <FiChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Shutter Dropdown - Attached directly below */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden bg-[#D8D8D8] border-t border-gray-400/20 shadow-2xl rounded-b-[3rem] origin-top"
              >
                <div className="px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                  <nav className="flex flex-col gap-3">
                    {[
                      { n: '01', label: 'Home', id: 'hero' },
                      { n: '02', label: 'About', id: 'about' },
                      { n: '03', label: 'Work', id: 'work' },
                      { n: '04', label: 'Blog', id: 'blog' },
                      { n: '05', label: 'Connect', id: 'contact' },
                    ].map((item, i) => (
                      <div key={i}>
                        <motion.button
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 + 0.2 }}
                          onClick={() => scrollToSection(item.id)}
                          className="group flex items-center gap-4 w-fit cursor-pointer"
                        >
                          <span className="text-gray-500 font-bold text-[10px]">{item.n}</span>
                          <span className="text-2xl md:text-3xl font-bold tracking-tighter text-gray-800 group-hover:translate-x-2 transition-transform duration-300">
                            {item.label}
                          </span>
                        </motion.button>
                        {i < 4 && <div className="border-b border-gray-400/50 my-3"></div>}
                      </div>
                    ))}
                  </nav>

                  <div className="hidden md:flex flex-col justify-between">
                    <div>
                      <img 
                        src={NavbarImage} 
                        alt="Navbar" 
                        className="w-98 h-70 object-cover rounded-2xl mb-6"
                      />
                    </div>
                    <div>
                      <a 
                        href="mailto:nextgenova28@gmail.com" 
                        className="text-xl font-semibold text-gray-700 hover:text-black transition-colors"
                      >
                        nextgenova28@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-black/5 py-3 px-10 flex justify-between items-center text-[9px] uppercase tracking-[0.2em] text-gray-500">
                  <span className="font-bold">Kshitij Jain</span>
                  <div className="flex items-center gap-4 text-lg">
                    <span className="border-l border-gray-400/30 h-4"></span>
                    <a href="https://github.com/NEGO2522" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors text-xs">GitHub</a>
                    <span className="border-l border-gray-400/30 h-4"></span>
                    <a href="https://www.linkedin.com/in/kshitij-kj-jain-422025342/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors text-xs">LinkedIn</a>
                    <span className="border-l border-gray-400/30 h-4"></span>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors text-xs">Twitter</a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
}