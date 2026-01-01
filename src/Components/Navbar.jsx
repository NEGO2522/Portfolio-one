import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiLayers, FiMail, FiAward } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Small delay to ensure the page has loaded before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navLinks = [
    { name: 'Work', id: 'work', icon: <FiCode className="w-5 h-5" /> },
    { name: 'About', id: 'about', icon: <FiUser className="w-5 h-5" /> },
    { name: 'Skills', id: 'skills', icon: <FiLayers className="w-5 h-5" />, path: '/skills' },
    { name: 'Testimonials', id: 'testimonials', icon: <FiAward className="w-5 h-5" /> },
    { name: 'Contact', id: 'contact', icon: <FiMail className="w-5 h-5" /> },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      className="fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 w-full"
    >
      <div className={`relative transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/30 backdrop-blur-md shadow-lg py-2 sm:py-3 px-4 sm:px-6 rounded-t-2xl border-t border-x border-[#B6B09F]/20'
          : 'bg-black/20 backdrop-blur-sm py-3 sm:py-4 px-4 sm:px-8 rounded-t-2xl border-t border-x border-[#B6B09F]/10'
      } w-full max-w-7xl mx-auto`}>
        <div className="flex justify-between items-center h-14 sm:h-16 max-w-6xl mx-auto">
          {/* Home Button */}
          <motion.div 
            className="hidden md:flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#F2F2F2] text-gray-900 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium ${
                location.pathname === '/' ? 'ring-2 ring-offset-2 ring-offset-black ring-[#B6B09F]' : ''
              }`}
              title="Home"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiHome className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium">Home</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center ml-6 sm:ml-12 space-x-1 sm:space-x-2">
            <motion.ul 
              className="flex items-center space-x-6"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.id}
                  variants={itemVariants}
                  className="relative group"
                >
                  {link.path ? (
                    <Link
                      to={link.path}
                      className={`px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors duration-200 flex flex-col items-center ${
                        location.pathname === link.path
                          ? 'text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {link.icon}
                      <span className="mt-1 text-xs">{link.name}</span>
                      <span className={`absolute -bottom-1 left-1/2 h-0.5 bg-white transition-all duration-300 group-hover:w-3/5 ${
                        location.pathname === link.path ? 'w-3/5' : 'w-0'
                      }`} style={{ transform: 'translateX(-50%)' }}></span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors duration-200 flex flex-col items-center ${
                        location.hash === `#${link.id}`
                          ? 'text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {link.icon}
                      <span className="mt-1 text-xs">{link.name}</span>
                      <span className={`absolute -bottom-1 left-1/2 h-0.5 bg-white transition-all duration-300 group-hover:w-3/5 ${
                        location.hash === `#${link.id}` ? 'w-3/5' : 'w-0'
                      }`} style={{ transform: 'translateX(-50%)' }}></span>
                    </button>
                  )}
                </motion.div>
              ))}
            </motion.ul>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-md text-gray-300 hover:bg-gray-800/50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FiX className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <FiMenu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </motion.button>
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
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md overflow-hidden border-t border-gray-800 w-full"
            style={{ boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)' }}
          >
            <motion.ul 
              className="px-2 pt-2 pb-3 space-y-1"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.li key={link.id} variants={itemVariants}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-md text-sm sm:text-base font-medium transition-colors duration-200 ${
                      location.hash === `#${link.id}`
                        ? 'bg-[#F2F2F2] text-gray-900'
                        : 'text-gray-300 active:bg-gray-800/70 hover:bg-gray-800/50 hover:text-[#F2F2F2]'
                    }`}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    <span className="text-base sm:text-lg">
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
