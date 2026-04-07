import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiMail, FiArrowUpRight } from 'react-icons/fi';
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
    { n: '01', label: 'Home',     id: 'hero' },
    { n: '02', label: 'About',    id: 'about' },
    { n: '03', label: 'Work',     id: 'work' },
    { n: '04', label: 'Services', id: 'services' },
    { n: '05', label: 'Connect',  id: 'contact' },
  ];

  const socials = [
    { label: 'GitHub',   href: 'https://github.com/NEGO2522' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kshitij-kj-jain-422025342/' },
    { label: 'Twitter',  href: 'https://twitter.com' },
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

          {/* ── Main bar ── */}
          <div
            className={`relative z-30 flex items-center justify-between px-4 md:px-10 py-2.5 md:py-4 shadow-xl bg-[#D8D8D8]/95 backdrop-blur-md transition-all duration-500 ${`
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

          {/* ── Desktop dropdown — LIGHT REDESIGN ── */}
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-b-[3rem] origin-top shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #f9f9f7 0%, #efefec 100%)' }}
              >
                <div className="px-10 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">

                  {/* Left — nav items (3 cols) */}
                  <nav className="md:col-span-3 flex flex-col gap-1">
                    {dropdownNav.map((item, i) => (
                      <div key={i}>
                        <motion.button
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.06 + 0.1 }}
                          onClick={() => scrollToSection(item.id)}
                          className="group flex items-center gap-4 w-full cursor-pointer py-2 px-3 rounded-2xl hover:bg-black/5 transition-colors duration-200"
                        >
                          <span className="text-gray-300 font-mono text-[10px] font-bold w-6 shrink-0">{item.n}</span>
                          <span className="text-3xl md:text-4xl font-black tracking-tight text-gray-800 group-hover:text-black transition-colors duration-200">
                            {item.label}
                          </span>
                          <FiArrowUpRight className="ml-auto text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 w-5 h-5 shrink-0" />
                        </motion.button>
                        {i < dropdownNav.length - 1 && (
                          <div className="border-b border-gray-200 mx-3" />
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Right — image + contact (2 cols) */}
                  <div className="hidden md:flex md:col-span-2 flex-col gap-6">
                    {/* Image card */}
                    <div className="relative overflow-hidden rounded-2xl shadow-md flex-1">
                      <img
                        src={NavbarImage}
                        alt="Kshitij"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Email card */}
                    <div className="bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 flex items-center justify-between group hover:shadow-md transition-shadow">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.25em] text-gray-400 font-semibold mb-1">Say hello</p>
                        <a
                          href="mailto:nextgenova28@gmail.com"
                          className="text-sm font-bold text-gray-700 hover:text-black transition-colors"
                        >
                          nextgenova28@gmail.com
                        </a>
                      </div>
                      <div className="bg-gray-100 group-hover:bg-black group-hover:text-white text-gray-400 rounded-full p-2 transition-colors duration-300">
                        <FiArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom strip */}
                <div className="border-t border-gray-200 py-4 px-10 flex justify-between items-center bg-white/40">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Kshitij Jain · 2025</span>
                  <div className="flex items-center gap-5">
                    {socials.map((s, i) => (
                      <span key={i} className="flex items-center gap-5">
                        {i !== 0 && <span className="border-l border-gray-300 h-3" />}
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors font-semibold"
                        >
                          {s.label}
                        </a>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Mobile menu ── */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden overflow-hidden rounded-b-3xl shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #f9f9f7 0%, #efefec 100%)' }}
              >
                <div className="px-6 py-8 flex flex-col gap-1">
                  {dropdownNav.map((item, i) => (
                    <div key={i}>
                      <motion.button
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => scrollToSection(item.id)}
                        className="group flex items-center gap-3 w-full py-2 px-2 rounded-xl hover:bg-black/5 transition-colors cursor-pointer"
                      >
                        <span className="text-gray-300 text-[10px] font-mono font-bold">{item.n}</span>
                        <span className="text-xl font-black text-gray-800 group-hover:text-black transition-colors">{item.label}</span>
                        <FiArrowUpRight className="ml-auto text-gray-300 group-hover:text-gray-500 w-4 h-4 transition-colors" />
                      </motion.button>
                      {i < dropdownNav.length - 1 && <div className="border-b border-gray-200 mx-2 my-1" />}
                    </div>
                  ))}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <a href="mailto:nextgenova28@gmail.com" className="text-sm font-semibold text-gray-500 hover:text-black transition-colors flex items-center gap-2">
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
