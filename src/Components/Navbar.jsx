import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiChevronDown } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import { useState, useEffect } from 'react';

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
    { name: 'Blog', id: 'blog', path: '/blog' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="pointer-events-auto w-full max-w-7xl relative"
        style={arialFont}
      >
        <div className="mt-0 px-0">
          
          {/* Main Nav Bar */}
          <div className="relative z-20 flex items-center justify-between px-10 py-4 shadow-xl bg-[#D8D8D8] rounded-b-3xl">
            <button 
              onClick={() => { navigate('/'); setDropdownOpen(false); }} 
              className="text-2xl font-bold tracking-tight text-gray-800"
            >
              Kshitij
            </button>

            {/* Desktop Navigation Logic */}
            <div className="hidden md:flex items-center gap-8">
              <AnimatePresence mode="wait">
                {!dropdownOpen ? (
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
                          className="font-semibold text-gray-700 hover:text-gray-900 transition-all uppercase text-xs tracking-[0.15em]"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                ) : null}
              </AnimatePresence>

              {/* Contact / Dropdown Toggle Button - Always Visible */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 font-semibold text-gray-700 hover:text-gray-900 transition-all uppercase text-xs tracking-[0.15em] border-l border-gray-400/30 pl-8"
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

          {/* Width-Matched Shutter Dropdown */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`overflow-hidden bg-[#D8D8D8] text-gray-800 shadow-2xl border-x border-b border-white/20 z-10 rounded-b-[3rem]`}
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
                      <motion.button
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 + 0.2 }}
                        onClick={() => scrollToSection(item.id)}
                        className="group flex items-center gap-4 w-fit"
                      >
                        <span className="text-gray-500 font-bold text-[10px]">{item.n}</span>
                        <span className="text-3xl md:text-5xl font-bold uppercase tracking-tighter group-hover:text-white transition-all duration-300">
                          {item.label}
                        </span>
                      </motion.button>
                    ))}
                  </nav>

                  <div className="hidden md:flex flex-col justify-between border-l border-white/30 pl-10">
                    <div>
                      <h4 className="text-gray-500 uppercase tracking-widest text-[10px] font-bold mb-3">Inquiries</h4>
                      <a 
                        href="mailto:nextgenova28@gmail.com" 
                        className="text-xl font-semibold text-gray-700 hover:text-white transition-colors"
                      >
                        nextgenova28@gmail.com
                      </a>
                    </div>
                    
                    <div className="flex gap-6 text-xl text-gray-600 mt-8">
                      <a href="#" className="hover:text-white transition-colors"><FiGithub /></a>
                      <a href="#" className="hover:text-white transition-colors"><FiLinkedin /></a>
                      <a href="#" className="hover:text-white transition-colors"><FaDiscord /></a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 py-3 px-10 flex justify-between items-center text-[9px] uppercase tracking-[0.2em] text-gray-500">
                  <span>© 2024 Kshitij</span>
                  <span>Scroll to explore</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
}
