import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/NEGO2522', icon: FiGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kshitij-kj-jain-422025342/', icon: FiLinkedin },
  { label: 'Discord', href: 'https://discord.com', icon: FaDiscord },
  { label: 'Twitter (X)', href: 'https://twitter.com', icon: FiTwitter },
  { label: 'Email', href: 'mailto:nextgenova28@gmail.com', icon: FiMail },
];

const otherLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Landmarks', href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white w-full flex flex-col overflow-hidden">

      {/* ── Top CTA Band ─────────────────────────────────────────────────── */}
      <div className="w-full px-5 sm:px-8 md:px-14 pt-14 sm:pt-20 pb-12 sm:pb-16 border-b border-white/6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-10">

          {/* Left */}
          <div className="max-w-lg">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/30 font-semibold mb-4">
              Let's work together
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Got a project<br />
              <span className="text-white/30">in mind?</span>
            </h2>
          </div>

          {/* Right — email + CTA */}
          <div className="flex flex-col items-start md:items-end gap-4 sm:gap-5">
            <p className="text-sm text-white/40 leading-relaxed max-w-xs md:text-right">
              Full-time role, freelance project, or just bouncing ideas — I'd love to connect.
            </p>
            <motion.a
              href="mailto:nextgenova28@gmail.com"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black font-bold text-sm rounded-full hover:bg-gray-100 transition-colors shadow-[0_8px_32px_rgba(255,255,255,0.1)] active:scale-95"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="truncate max-w-[200px] sm:max-w-none">nextgenova28@gmail.com</span>
              <FiArrowUpRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* ── Link Grid ────────────────────────────────────────────────────── */}
      <div className="w-full px-5 sm:px-8 md:px-14 py-10 sm:py-14 border-b border-white/6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">

          {/* Navigation */}
          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/30 font-semibold mb-5 sm:mb-6">Navigation</p>
            <ul className="space-y-2.5 sm:space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-white transition-all duration-300 overflow-hidden" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/30 font-semibold mb-5 sm:mb-6">Social</p>
            <ul className="space-y-2.5 sm:space-y-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other */}
          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/30 font-semibold mb-5 sm:mb-6">Other</p>
            <ul className="space-y-2.5 sm:space-y-3">
              {otherLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status card — full width on mobile */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3 flex flex-col justify-start">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/30 font-semibold mb-5 sm:mb-6">Status</p>
            <div className="inline-flex flex-col gap-3 p-4 rounded-2xl border border-white/8 bg-white/4 w-fit">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span className="text-xs text-white/80 font-semibold">Available for work</span>
              </div>
              <p className="text-[11px] text-white/35 leading-relaxed">
                Based in Rajasthan, India<br />
                Fullstack &amp; AI Developer
              </p>
              <p className="text-[11px] text-white/25 font-mono">Reply · 1–2 hrs</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ───────────────────────────────────────────────────── */}
      <div className="w-full px-5 sm:px-8 md:px-14 py-4 sm:py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 text-[10px] uppercase tracking-[0.25em] text-white/20 font-semibold">
          <span>© 2025 Kshitij Jain</span>
          <span>Designed &amp; Built with ❤️</span>
        </div>
      </div>

      {/* ── Giant Name ───────────────────────────────────────────────────── */}
      <div className="w-full overflow-hidden pointer-events-none select-none -mb-3">
        <h1
          className="text-[19vw] font-black leading-none tracking-[-0.04em] text-center"
          style={{
            WebkitTextStroke: '1px rgba(255,255,255,0.06)',
            color: 'transparent',
            textShadow: '0 0 80px rgba(255,255,255,0.04)',
          }}
        >
          KSHITIJ
        </h1>
      </div>

    </footer>
  );
};

export default Footer;
