import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail, Music, Code, Zap } from 'lucide-react';
import LinkButton from './LinkButton';

const MainCard = () => {
  const links = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      url: 'https://github.com',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      url: 'https://instagram.com',
      color: 'from-pink-600 to-purple-600'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      url: 'mailto:contact@example.com',
      color: 'from-green-600 to-teal-600'
    },
    {
      icon: <Music className="w-5 h-5" />,
      label: 'Spotify',
      url: 'https://spotify.com',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: <Code className="w-5 h-5" />,
      label: 'Portfolio',
      url: 'https://portfolio.example.com',
      color: 'from-purple-600 to-indigo-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-md mx-auto"
    >
      {/* Main Card */}
      <motion.div
        variants={itemVariants}
        className="glass rounded-2xl p-8 shadow-2xl border border-glass-border"
      >
        {/* Profile Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8"
        >
          {/* Avatar */}
          <motion.div
            variants={itemVariants}
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1"
          >
            <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
              <Zap className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            Seu Nome
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm font-light tracking-wider"
          >
            Música • Tecnologia • IA
          </motion.p>
        </motion.div>

        {/* Links Section */}
        <motion.div
          variants={itemVariants}
          className="space-y-3"
        >
          {links.map((link, index) => (
            <LinkButton
              key={index}
              icon={link.icon}
              label={link.label}
              url={link.url}
              color={link.color}
              index={index}
            />
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-8 pt-6 border-t border-glass-border text-center"
        >
          <p className="text-xs text-gray-500">
            © 2024 • Designed with passion
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MainCard;
