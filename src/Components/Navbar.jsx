import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiChevronDown, FiTwitter, FiMail } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import { useState } from 'react';
import NavbarImage from '../assets/Navbar_Image.png';

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
    { name: 'About',    id: 'about' },
    { name: 'Work',     id: 'work' },
    { name: 'Services', id: 'services' },
  ];

  const dropdownNav = [
    { n: '01', label: 'Home',       id: 'hero' },
    { n: '02', label: 'About',      id: 'about' },
    { n: '03', label: 'Work',       id: 'work' },
    { n: '04', label: 'Services',   id: 'services' },
    { n: '05', label: 'Connect',    id: 'contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        className="pointer-events-auto w-full max-w-7xl flex flex-col items-center"
        style={{ fontFamily: 'system-ui, sans-serif' }}
      >
        <div className="w-full relative px-4 md:px-10">
          {/* ── Main bar ──────────────────────────────────────────────── */}
          <div
            className={`relative z-30 flex items-center justify-between px-6 md:px-10 py-4 shadow-xl bg-[#D8D8D8]/95 backdrop-blur-md transition-all duration-500 ${
              dropdownOpen ? 'rounded-b-none' : 'rounded-b-3xl'
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => { navigate('/'); setDropdownOpen(false); }}
              className="text-xl font-black tracking-tight text-gray-800 hover:text-black transition-colors"
            >
              Kshitij
            </button>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              <AnimatePresence mode="wait">
                {!dropdownOpen && (
                  <motion.ul
                    key="nav-links"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                    className="flex items-center gap-8"
                  >
                    {navLinks.map((link) => (
                      <li key={link.id}>
                        <button
                          onClick={() => scrollToSection(link.id)}
                          className="font-bold text-gray-600 hover:text-gray-900 transition-colors text-xs tracking-[0.15em] uppercase cursor-pointer"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              {/* Contact / dropdown toggle */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 font-bold text-gray-600 hover:text-gray-900 transition-colors text-xs tracking-[0.15em] uppercase pl-6 border-l border-gray-400/30 cursor-pointer"
              >
                {dropdownOpen ? 'Close' : 'Contact'}
                <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <FiChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden flex">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 p-1"
              >
                {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>

          {/* ── Desktop dropdown ──────────────────────────────────────── */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden bg-[#D8D8D8]/95 backdrop-blur-md border-t border-gray-400/20 shadow-2xl rounded-b-[3rem] origin-top"
              >
                <div className="px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Left — nav items */}
                  <nav className="flex flex-col gap-3">
                    {dropdownNav.map((item, i) => (
                      <div key={i}>
                        <motion.button
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 + 0.15 }}
                          onClick={() => scrollToSection(item.id)}
                          className="group flex items-center gap-4 w-fit cursor-pointer"
                        >
                          <span className="text-gray-400 font-bold text-[10px] font-mono">{item.n}</span>
                          <span className="text-2xl md:text-3xl font-black tracking-tight text-gray-800 group-hover:translate-x-2 transition-transform duration-300">
                            {item.label}
                          </span>
                        </motion.button>
                        {i < dropdownNav.length - 1 && (
                          <div className="border-b border-gray-400/40 my-3" />
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Right — image + email */}
                  <div className="hidden md:flex flex-col justify-between">
                    <img
                      src={NavbarImage}
                      alt="Kshitij"
                      className="w-full h-56 object-cover object-top rounded-2xl"
                    />
                    <div className="mt-6">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-2">Say hello</p>
                      <a
                        href="mailto:nextgenova28@gmail.com"
                        className="text-lg font-bold text-gray-700 hover:text-black transition-colors"
                      >
                        nextgenova28@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom strip */}
                <div className="bg-black/6 py-3 px-10 flex justify-between items-center text-[9px] uppercase tracking-[0.2em] text-gray-500">
                  <span className="font-bold">Kshitij Jain · 2025</span>
                  <div className="flex items-center gap-5">
                    <a href="https://github.com/NEGO2522" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors font-semibold">GitHub</a>
                    <span className="border-l border-gray-400/40 h-3" />
                    <a href="https://www.linkedin.com/in/kshitij-kj-jain-422025342/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors font-semibold">LinkedIn</a>
                    <span className="border-l border-gray-400/40 h-3" />
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors font-semibold">Twitter</a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Mobile menu ───────────────────────────────────────────── */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden overflow-hidden bg-[#D8D8D8]/95 backdrop-blur-md border-t border-gray-400/20 rounded-b-3xl shadow-2xl"
              >
                <div className="px-6 py-8 flex flex-col gap-1">
                  {dropdownNav.map((item, i) => (
                    <div key={i}>
                      <motion.button
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => scrollToSection(item.id)}
                        className="group flex items-center gap-3 w-full py-2 cursor-pointer"
                      >
                        <span className="text-gray-400 text-[10px] font-mono font-bold">{item.n}</span>
                        <span className="text-xl font-black text-gray-800 group-hover:translate-x-1 transition-transform">{item.label}</span>
                      </motion.button>
                      {i < dropdownNav.length - 1 && <div className="border-b border-gray-400/30 my-1" />}
                    </div>
                  ))}
                  <div className="mt-6 pt-4 border-t border-gray-400/30">
                    <a href="mailto:nextgenova28@gmail.com" className="text-sm font-semibold text-gray-600 hover:text-black transition-colors flex items-center gap-2">
                      <FiMail className="w-4 h-4" />
                      nextgenova28@gmail.com
                    </a>
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
