import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheckCircle, FiMapPin, FiPhone } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    } 
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using EmailJS with environment variables
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          to_email: process.env.REACT_APP_EMAILJS_TARGET_EMAIL,
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submission status after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Failed to send message:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try again later.');
    }
  };

  const contactInfo = [
    { 
      icon: <FiLinkedin className="w-5 h-5" />, 
      title: 'LinkedIn',
      text: 'Connect with me',
      href: 'https://www.linkedin.com/in/kshitij-jain-422025342/',
    },
    { 
      icon: <FiGithub className="w-5 h-5" />, 
      title: 'GitHub',
      text: 'View my projects',
      href: 'https://github.com/NEGO2522',
      // color: 'from-gray-700 to-gray-800'
    }
  ];

  return (
    <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full relative z-10">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center mb-16"
        >
          <motion.span 
            variants={item}
            className="inline-block mb-4 text-sm md:text-base font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full"
          >
            Get In Touch
          </motion.span>
          
          <motion.h2 
            variants={item}
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
          >
            Contact <span className="text-blue-600 dark:text-blue-400">Me</span>
          </motion.h2>
          
          <motion.p 
            variants={item}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div 
            variants={item}
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition"
                    required
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition"
                  required
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting && !isSubmitted ? { y: -2 } : {}}
                whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
                className={`w-full py-4 px-6 rounded-xl font-medium text-lg transition-all ${
                  isSubmitting 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center">
                    <FiCheckCircle className="mr-2" />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <FiSend className="mr-2" />
                    Send Message
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                variants={item}
                initial="hidden"
                animate="show"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block group ${item.noHover ? '' : 'hover:-translate-y-1'}`}
              >
                <div className={`h-full p-6 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg transition-all duration-300 ${!item.noHover && 'group-hover:shadow-xl'}`}>
                  <div className="flex items-start">
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-blue-100">{item.text}</p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div 
          variants={item}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300">
            I typically respond within 24 hours. Looking forward to connecting with you! 👋
          </p>
        </motion.div>
      </div>
    </section>
  );
}
