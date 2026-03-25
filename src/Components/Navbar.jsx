import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiUser, FiCode, FiLayers, FiMail, FiAward, FiChevronDown } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const comicSans = { fontFamily: '"Comic Sans MS", "Comic Sans", cursive' };

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About',        id: 'about',         icon: <FiUser  className="w-4 h-4" /> },
    { name: 'Work',         id: 'work',         icon: <FiCode  className="w-4 h-4" /> },
    { name: 'Blog',         id: 'blog',         icon: <FiLayers className="w-4 h-4" />, path: '/blog' },
    { name: 'Contact',      id: 'contact',       icon: <FiMail  className="w-4 h-4" />, dropdown: true },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        className="pointer-events-auto w-full max-w-7xl"
        style={comicSans}
      >
        {/* Main bar */}
        <div
          className={`rounded-b-3xl transition-all duration-300 ${
            isScrolled
              ? 'bg-[#D8D8D8]/95 backdrop-blur-md shadow-xl py-2 px-10'
              : 'bg-[#D8D8D8]/90 backdrop-blur-sm shadow-lg py-3 px-10'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
              className="text-xl font-bold text-black cursor-pointer"
              style={comicSans}
            >
              Kshitij
            </button>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = link.path
                  ? location.pathname === link.path
                  : location.hash === `#${link.id}`;

                const baseClass =
                  'flex items-center gap-1.5 px-4 py-2 rounded-full text-base font-semibold text-black transition-none hover:underline hover:underline-offset-4';
                const activeClass = '';

                return (
                  <li key={link.id}>
                    {link.path ? (
                      <Link to={link.path} className={`${baseClass} ${activeClass}`} style={comicSans}>
                        {link.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className={`${baseClass} ${activeClass}`}
                        style={comicSans}
                      >
                        {link.name}
                        {link.dropdown && <FiChevronDown className="w-7 h-7 ml-2 p-2 bg-white rounded-full" />}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Mobile toggle */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-black"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-[#D8D8D8]/98 backdrop-blur-md overflow-hidden rounded-b-3xl shadow-xl border-t border-gray-400/30"
            >
              <ul className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold text-black"
                      style={{ ...comicSans, WebkitTapHighlightColor: 'transparent' }}
                    >
                      {link.name}
                      {link.dropdown && <FiChevronDown className="w-7 h-7 ml-auto p-2 bg-white rounded-full" />}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
