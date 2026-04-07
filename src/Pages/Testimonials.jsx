import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiAward, FiZap, FiTrendingUp, FiStar } from 'react-icons/fi';

const achievements = [
  {
    id: '01',
    icon: FiAward,
    tag: 'Recognition',
    title: 'University Recognition',
    subtitle: 'Appreciation Letter · Poornima University',
    description:
      'Received an official appreciation letter for building and deploying a live Mess Menu website actively used by students on campus.',
    date: '2024',
    link: { text: 'View Live Project', url: 'https://poornima-mess.vercel.app' },
  },
  {
    id: '02',
    icon: FiZap,
    tag: 'Launch',
    title: 'Live Product Launch',
    subtitle: 'Production-Ready Web App',
    description:
      'Designed and deployed a full-stack web application serving real users with high reliability and a polished experience.',
    date: 'July 2025',
    link: { text: 'Visit Lathishop', url: 'https://lathishop.com' },
  },
  {
    id: '03',
    icon: FiTrendingUp,
    tag: 'Award',
    title: 'Pitching Event Winner',
    subtitle: 'Shark Tank · 3rd Runner Up',
    description:
      'Secured 3rd Runner Up at a competitive pitching event for presenting STED — an EdTech solution for practical skill-based learning.',
    date: 'November 2025',
  },
  {
    id: '04',
    icon: FiStar,
    tag: 'Ongoing',
    title: 'Tech Journey',
    subtitle: 'Self-driven Builder',
    description:
      'Continuously expanding expertise through hands-on projects in web development, data science, and AI to solve real-world challenges.',
    date: 'Ongoing',
  },
];

const Testimonials = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="testimonials"
      className="bg-white py-16 sm:py-20 md:py-28 px-5 sm:px-8 lg:px-14 overflow-hidden"
      style={{ fontFamily: '"Clash Display", "DM Sans", "Segoe UI", system-ui, sans-serif' }}
    >
      <div className="max-w-[1600px] mx-auto">

        {/* ── Header ────────────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <motion.p
              className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Milestones
            </motion.p>
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-none"
              style={{ letterSpacing: '-0.04em' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
            >
              Achievements
              <br />
              <span className="text-gray-300">&amp; recognition</span>
            </motion.h2>
          </div>

          <motion.div
            className="flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-xs text-gray-500 font-semibold tracking-wide flex-shrink-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            {achievements.length} milestones
          </motion.div>
        </div>

        {/* ── 4-column card grid ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                className="group relative flex flex-col rounded-3xl border border-gray-100 bg-white overflow-hidden cursor-default"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                onHoverStart={() => setHovered(index)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(0,0,0,0.10)' }}
              >
                <div className="flex flex-col flex-1 p-5 sm:p-6">

                  {/* Icon + tag row */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-100 group-hover:bg-black transition-colors duration-300">
                      <Icon className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400 border border-gray-200 rounded-full px-2.5 py-1">
                      {item.tag}
                    </span>
                  </div>

                  {/* ID */}
                  <span className="text-[11px] font-mono text-gray-300 font-bold mb-2">{item.id}</span>

                  {/* Title */}
                  <h3 className="text-lg font-black text-black leading-snug mb-1" style={{ letterSpacing: '-0.01em' }}>
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-gray-400 font-semibold mb-4 tracking-wide">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {item.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-5 sm:mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-400 font-semibold">{item.date}</span>
                    {item.link ? (
                      <motion.a
                        href={item.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:text-gray-500 transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        {item.link.text}
                        <FiArrowUpRight className="w-3.5 h-3.5" />
                      </motion.a>
                    ) : (
                      <span className="text-xs font-bold text-gray-300">In progress</span>
                    )}
                  </div>
                </div>

                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.015] transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* ── Decorative label strip — scrollable on mobile ─────────────── */}
        <motion.div
          className="mt-12 sm:mt-16 flex items-center gap-4 sm:gap-6 select-none overflow-x-auto pb-2 scrollbar-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="w-8 sm:w-10 h-px bg-gray-200 flex-shrink-0" />
          {[
            'University Recognition', '·',
            'Product Launch', '·',
            'Shark Tank Runner-Up', '·',
            'Self-taught Builder',
          ].map((t, i) => (
            <span
              key={i}
              className="text-[11px] uppercase tracking-widest text-gray-300 font-bold whitespace-nowrap flex-shrink-0"
            >
              {t}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
