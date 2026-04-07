import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiGithub, FiLinkedin, FiMail,
  FiMapPin, FiMessageCircle, FiX, FiCode,
  FiExternalLink, FiTwitter, FiArrowUpRight
} from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import profileImage from '../assets/img.png';
import Testimonials from './Testimonials';
import { Services } from './Services';
import { Skills } from './Skills';
import Footer from './Footer';

/* ─── Shared font — applied once at the root div ────────────────────────── */
const FONT = { fontFamily: '"Clash Display", "DM Sans", "Segoe UI", system-ui, sans-serif' };

/* ─── AnimatedLogo ──────────────────────────────────────────────────────── */
function AnimatedLogo() {
  return (
    <motion.div
      className="absolute top-7 left-7 z-20"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 120, damping: 12 } }}
      whileHover={{ scale: 1.12, rotate: 6, transition: { duration: 0.25 } }}
    >
      <div className="relative w-11 h-11 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-black/15"
          animate={{ rotate: 360 }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full" />
        </motion.div>
        <span className="text-base font-black tracking-tight text-black select-none">KJ</span>
      </div>
    </motion.div>
  );
}

/* ─── ProfileImage ──────────────────────────────────────────────────────── */
function ProfileImage() {
  return (
    <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.18)] border-[10px] border-white bg-gray-100 max-w-7xl mx-auto">
      <img
        src={profileImage}
        alt="Kshitij"
        className="w-full h-auto object-cover brightness-[0.97] contrast-[1.02]"
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
    </div>
  );
}

/* ─── SocialPill ─────────────────────────────────────────────────────────── */
function SocialPill({ href, icon: Icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className="group relative flex flex-col items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white overflow-hidden"
      style={{ paddingTop: '2.75rem', paddingBottom: '2.75rem' }}
      whileHover={{ y: -4, scale: 1.03, borderColor: '#000' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Icon className="w-8 h-8 text-gray-400 group-hover:text-black transition-colors duration-200 relative z-10" />
      <span className="text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors duration-200 font-semibold relative z-10">
        {label}
      </span>
      <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </motion.a>
  );
}

/* ─── Section Divider — matches every other divider in the page ─────────── */
function Divider() {
  return (
    <div className="w-full px-5 sm:px-8 lg:px-14">
      <div className="max-w-[1600px] mx-auto h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </div>
  );
}

/* ─── Home ──────────────────────────────────────────────────────────────── */
export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    // no resize tracking needed since isDesktop is unused
  }, []);

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Timeline varies by complexity. A simple website takes 2–3 weeks, while custom web applications require 6–12 weeks. I'll provide a detailed timeline after understanding your requirements."
    },
    {
      question: "Are you available to join full time?",
      answer: "I'm open to freelance projects, collaborations, and full-time opportunities. Feel free to reach out through the contact form or email."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! I offer post-launch maintenance, bug fixes, and feature additions to ensure your project keeps running smoothly."
    },
    {
      question: "Can you work with my existing brand and design?",
      answer: "Absolutely. I adapt to your existing design system, brand guidelines, and visual language seamlessly."
    },
    {
      question: "Will my website work on mobile phones?",
      answer: "Every project I deliver is fully responsive and tested across devices — from phones to ultrawide monitors."
    },
    {
      question: "What technologies and frameworks do you specialize in?",
      answer: "I work with Next.js, React, Node.js, Python, and various AI/ML tools. I prioritize clean, maintainable, scalable code."
    },
    {
      question: "Do you help with hosting and domain setup?",
      answer: "Yes — I can help with everything from domain configuration to deployment on Vercel, AWS, or your preferred host."
    }
  ];

  return (
    <div className="text-black overflow-x-hidden bg-white" style={FONT}>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="min-h-[88vh] flex flex-col justify-center relative overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />

        <AnimatedLogo />

        <motion.div
          className="absolute top-7 right-7 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 text-xs font-semibold text-gray-600 tracking-wide"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for work
        </motion.div>

        <div className="max-w-[1600px] mx-auto w-full px-5 sm:px-8 lg:px-14 pt-24 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <motion.div
              className="md:col-span-8"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className="text-[22vw] md:text-[14rem] font-black leading-[0.82] text-black select-none"
                style={{ letterSpacing: '-0.04em' }}
              >
                Kshitij
              </h1>
            </motion.div>

            <motion.div
              className="md:col-span-4 flex flex-col items-start gap-5 pb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black text-white text-xs font-bold tracking-widest uppercase">
                <FiCode className="w-3.5 h-3.5" />
                Fullstack &amp; AI Developer
              </div>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium max-w-xs">
                Designing and building digital products that balance user needs with real-world problems.
              </p>
              <p className="text-sm text-gray-400 max-w-xs">
                Exploring{' '}
                <span className="font-bold text-black underline underline-offset-2">AI</span>,{' '}
                <span className="font-bold text-black underline underline-offset-2">Web Dev</span>, and{' '}
                <span className="underline underline-offset-2 text-gray-600">Cloud</span> solutions.
              </p>
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-bold tracking-wide hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Let's Talk
                <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="mt-10 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <div className="w-8 h-[1px] bg-gray-300" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-semibold">Scroll to explore</span>
          </motion.div>
        </div>

        <Skills />
      </section>

      {/* ── Profile Image ─────────────────────────────────────────────────── */}
      <div className="w-full px-5 sm:px-8 lg:px-14 -mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProfileImage />
        </motion.div>
      </div>

      {/* ── Social Media Row ───────────────────────────────────────────────── */}
      <div className="w-full px-5 sm:px-8 lg:px-14 py-10">
        <div className="grid grid-cols-5 gap-3 sm:gap-4 w-full">
          <SocialPill href="https://discord.com" icon={FaDiscord} label="Discord" />
          <SocialPill href="https://www.linkedin.com/in/kshitij-kj-jain-422025342/" icon={FiLinkedin} label="LinkedIn" />
          <SocialPill href="https://github.com/NEGO2522" icon={FiGithub} label="GitHub" />
          <SocialPill href="https://twitter.com" icon={FiTwitter} label="Twitter" />
          <SocialPill href="mailto:nextgenova28@gmail.com" icon={FiMail} label="Email" />
        </div>
      </div>

      {/* ── Projects ──────────────────────────────────────────────────────── */}
      <Projects />

      <Divider />

      {/* ── About ─────────────────────────────────────────────────────────── */}
      <section id="about" className="py-20 sm:py-28 px-5 sm:px-8 lg:px-14 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <div>
              <motion.p
                className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                About Me
              </motion.p>
              <motion.h2
                className="text-5xl sm:text-6xl md:text-7xl font-black text-black leading-none"
                style={{ letterSpacing: '-0.04em' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.05 }}
              >
                The person<br />
                <span className="text-gray-300">behind the work</span>
              </motion.h2>
            </div>

            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm text-gray-500 font-medium self-start sm:self-auto flex-shrink-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <FiMapPin className="w-3.5 h-3.5 text-gray-400" />
              Rajasthan, India
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* LEFT */}
            <motion.div
              className="lg:col-span-5 flex flex-col gap-5"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Kshitij Jain"
                  className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover"
                  style={{ maxHeight: '500px', objectPosition: 'top' }}
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-white/60 rounded-2xl px-4 py-2.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                  <span className="text-xs font-bold text-gray-700 tracking-wide">Open to opportunities</span>
                </div>
                <div className="absolute -top-3 -right-3 w-14 h-14 rounded-2xl border-2 border-gray-100 bg-white shadow-md flex items-center justify-center text-2xl select-none">
                  👋
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '1+', label: 'Years Exp.' },
                  { value: '5+', label: 'Projects' },
                  { value: '∞', label: 'Learning' },
                ].map(({ value, label }, i) => (
                  <motion.div
                    key={i}
                    className="group flex flex-col items-center justify-center py-5 rounded-2xl border border-gray-200 bg-white hover:border-black hover:bg-black transition-all duration-300 cursor-default"
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                  >
                    <span className="text-2xl font-black text-black group-hover:text-white transition-colors duration-300 tracking-tight">
                      {value}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-white/60 transition-colors duration-300 mt-1 font-semibold">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              className="lg:col-span-7 flex flex-col gap-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-5 text-gray-500 text-base sm:text-lg leading-relaxed">
                <p>
                  Hey, I'm <span className="font-bold text-black">Kshitij Jain</span> — a 2nd-year B.Tech
                  student in Computer Science (AI & ML) at Poornima University. I build things for the web
                  and love the intersection of design, code, and real-world impact.
                </p>
                <p>
                  Right now I'm deep into{' '}
                  <span className="text-black font-semibold">web development</span>,{' '}
                  <span className="text-black font-semibold">AI/ML</span>, and entrepreneurship — working
                  on an EdTech platform and experimenting with AI models that solve everyday problems.
                </p>
                <p>
                  Off-screen you'll find me on the football or volleyball court, buried in a good book,
                  or watching a film that changes how I see the world.
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-bold mb-3">Interests</p>
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'Artificial Intelligence', 'Machine Learning', 'Entrepreneurship', 'EdTech', 'Cloud & DevOps', 'Football', 'Reading', 'Films'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-600 hover:border-black hover:text-black hover:bg-gray-50 transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-bold mb-4">Currently</p>
                <div className="space-y-3">
                  {[
                    { dot: '#10b981', text: '2nd Year — B.Tech CS (AI & ML), Poornima University' },
                    { dot: '#3b82f6', text: 'Building an EdTech platform for students' },
                    { dot: '#8b5cf6', text: 'Experimenting with custom AI models' },
                    { dot: '#f59e0b', text: 'Open to freelance & full-time roles' },
                  ].map(({ dot, text }, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span
                        className="w-2 h-2 rounded-full mt-[5px] flex-shrink-0"
                        style={{ background: dot }}
                      />
                      <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <motion.a
                  href="mailto:draft.kshitij@gmail.com"
                  className="group inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-bold tracking-wide hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get in touch
                  <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/kshitij-kj-jain-422025342/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border border-gray-200 text-gray-600 hover:border-black hover:text-black px-6 py-3 rounded-full text-sm font-bold transition-all"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FiLinkedin className="w-4 h-4" />
                  LinkedIn
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Testimonials — no wrapper padding, section owns its own spacing ── */}
      <Testimonials />

      {/* ── Services ──────────────────────────────────────────────────────── */}
      <Services />

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 sm:py-28 px-5 sm:px-8 lg:px-14 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div className="space-y-1.5">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <motion.div
                    key={index}
                    className={`rounded-2xl border overflow-hidden transition-all duration-300 ${isOpen ? 'border-black bg-black' : 'border-gray-200 bg-white'}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="w-full flex items-center gap-4 p-4 sm:p-5 text-left"
                    >
                      <span className={`text-lg font-black w-7 flex-shrink-0 ${isOpen ? 'text-white/50' : 'text-gray-300'}`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={`text-sm sm:text-base font-semibold flex-1 ${isOpen ? 'text-white' : 'text-black'}`}>
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className={`flex-shrink-0 text-xl font-light ${isOpen ? 'text-white' : 'text-gray-400'}`}
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 pl-16 text-sm text-white/70 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="lg:sticky lg:top-24 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">FAQ</p>
              <h3 className="text-4xl md:text-5xl font-black text-black leading-tight" style={{ letterSpacing: '-0.03em' }}>
                Questions you<br />
                <span className="text-gray-300">might be wondering</span>
              </h3>
              <p className="text-base text-gray-500 leading-relaxed max-w-sm">
                Got questions? I've got answers. Here's everything you need to know about working with me.
              </p>
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold text-sm rounded-full hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
                <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">Response time</p>
                <p className="text-2xl font-black text-black">1–2 hours</p>
                <p className="text-xs text-gray-400 mt-1">Weekdays · Usually faster</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Chat Widget ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {!isChatOpen ? (
          <motion.div
            className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.8, type: 'spring', stiffness: 200 } }}
            exit={{ opacity: 0, scale: 0.7 }}
            whileHover={{ scale: 1.08 }}
          >
            <button
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black text-white flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.22)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.32)] transition-all border-2 border-white/15 active:scale-95"
              onClick={() => setIsChatOpen(true)}
              aria-label="Open chat"
            >
              <FiMessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            className="fixed bottom-5 right-5 sm:bottom-9 sm:right-9 z-50 w-[calc(100vw-2.5rem)] sm:w-96 bg-[#111] rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.45)] overflow-hidden border border-white/10"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          >
            <div className="bg-gradient-to-b from-white/6 to-transparent p-5 border-b border-white/8 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-sm font-black text-black shadow-lg">KJ</div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#111] rounded-full" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Kshitij Jain</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Available</p>
                  </div>
                </div>
              </div>
              <motion.button
                onClick={() => setIsChatOpen(false)}
                className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close chat"
              >
                <FiX className="w-4 h-4" />
              </motion.button>
            </div>
            <div className="p-5 space-y-4">
              <div className="bg-white/6 border border-white/8 p-4 rounded-2xl">
                <p className="text-sm text-gray-200 leading-relaxed">
                  Hey there! 👋<br />
                  I'm <span className="text-blue-400 font-semibold">Kshitij</span>. I build polished digital products with great UX.
                </p>
                <div className="mt-3 pt-3 border-t border-white/8">
                  <p className="text-xs text-gray-500 italic">"Design is not just what it looks like, but how it works."</p>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/kshitij-kj-jain-422025342/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-white text-black hover:bg-gray-100 py-3.5 px-4 rounded-2xl font-bold text-sm transition-all shadow-lg active:scale-95"
              >
                <FiLinkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
              <p className="text-center text-[10px] text-gray-600 uppercase tracking-widest">Typical reply · 1–2 hours</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

/* ─── Projects Data ──────────────────────────────────────────────────────── */
const projects = [
  { title: 'LATTHI', description: 'A fully functional E-Commerce Website built with a seamless, modern shopping experience and AI-powered features.', tech: ['ReactJs', 'Tailwind CSS', 'Firebase', 'AI Tools'], github: 'https://github.com/NEGO2522/CentralizedAI', demo: 'https://project-latthi.vercel.app/', year: '2024' },
  { title: 'College Mess App', description: 'Responsive web app to manage daily menus and meal schedules for college students with clean UI/UX and real-time updates.', tech: ['React.js', 'Tailwind CSS', 'Responsive Design', 'UI/UX'], github: 'https://github.com/NEGO2522/Poornima-mess', demo: 'https://poornima-mess.vercel.app/', year: '2024' },
  { title: 'Diwali Sales Analysis', description: 'Comprehensive data analysis of Diwali sales patterns using Python, revealing key consumer insights and trends.', tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'], github: 'https://github.com/NEGO2522/Diwali-Sales-Project', year: '2024' },
  { title: 'SIH 25', description: 'Smart India Hackathon 2025 project — innovative solutions for real-world problems using cutting-edge technology.', tech: ['React', 'Node.js', 'MongoDB', 'AI/ML'], github: 'https://github.com/NEGO2522/SIH-25', demo: 'https://sih-25-poornima.vercel.app', year: '2025' },
  { title: 'NEGO Services', description: 'A comprehensive service platform offering digital solutions and professional services worldwide.', tech: ['Next.js', 'Tailwind CSS', 'Firebase', 'Stripe'], github: 'https://github.com/NEGO2522/nego-services', demo: 'https://nego-services.vercel.app', year: '2025' },
  { title: 'STED Education', description: 'An educational platform enhancing student learning with interactive content, progress tracking, and a modern interface.', tech: ['MERN Stack', 'JWT Auth', 'Redux', 'Material-UI'], github: 'https://github.com/NEGO2522/STED', demo: 'https://sted-founder.vercel.app', year: '2025' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const rowVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 18 } },
};

/* ─── Projects Component ─────────────────────────────────────────────────── */
export function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="work" className="bg-white text-black py-20 sm:py-28 px-5 sm:px-8 lg:px-14" style={FONT}>
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          className="mb-14 flex items-end justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-2">Selected Work</p>
            <h2 className="text-6xl md:text-7xl font-black italic text-black leading-none" style={{ letterSpacing: '-0.04em' }}>WORK</h2>
          </div>
          <span className="text-sm text-gray-400 font-medium hidden sm:block">{projects.length} projects</span>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={rowVariants}
              className={`group relative ${index < projects.length - 1 ? 'border-b border-gray-100' : ''}`}
              onHoverStart={() => setHovered(index)}
              onHoverEnd={() => setHovered(null)}
            >
              <div
                className="flex items-start gap-5 py-7 cursor-pointer"
                onClick={() => window.open(project.demo || project.github, '_blank')}
              >
                <span className="text-sm text-gray-300 font-mono w-8 pt-1 flex-shrink-0 group-hover:text-gray-500 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-4 flex-wrap">
                    <h3 className="text-2xl md:text-4xl font-black text-black transition-all duration-300 group-hover:translate-x-1" style={{ letterSpacing: '-0.02em' }}>
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono text-gray-400 tracking-widest flex-shrink-0">{project.year}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1.5 max-w-xl line-clamp-2 leading-relaxed">{project.description}</p>
                  <div className="flex items-center gap-2 mt-3 flex-wrap">
                    {project.tech.map((t, ti) => (
                      <span key={ti} className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[11px] font-semibold tracking-wide">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-1 flex-shrink-0">
                  <motion.a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all" whileHover={{ scale: 1.1 }} title="GitHub">
                    <FiGithub className="w-4 h-4" />
                  </motion.a>
                  {project.demo && (
                    <motion.a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all" whileHover={{ scale: 1.1 }} title="Live Demo">
                      <FiExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                  <motion.div
                    className="w-9 h-9 rounded-xl bg-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={hovered === index ? { x: 0 } : { x: -4 }}
                  >
                    <FiArrowUpRight className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
