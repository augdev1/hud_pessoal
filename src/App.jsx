import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiGithub,
  SiInstagram,
  SiX,
  SiCounterstrike,
  SiSoundcloud
} from 'react-icons/si';
import { ExternalLink } from 'lucide-react';
import Cursor from './components/Cursor';
import Player from './components/Player';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const links = [
    {
      label: 'GitHub',
      handle: '@augdev1',
      category: 'Code',
      url: 'https://github.com/augdev1',
      icon: <SiGithub className="w-5 h-5 text-white" />,
      iconBg: 'bg-[#18181b] border border-zinc-700/80 shadow-inner',
      accentColor: '#ffffff',
      glowClass: 'hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] hover:border-zinc-500/50',
      badgeBg: 'bg-zinc-800/80 text-zinc-300 border-zinc-700'
    },
    {
      label: 'Instagram',
      handle: '@augrocky',
      category: 'Social',
      url: 'https://www.instagram.com/augrocky/',
      icon: <SiInstagram className="w-5 h-5 text-white" />,
      iconBg: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-sm',
      accentColor: '#E1306C',
      glowClass: 'hover:shadow-[0_0_24px_rgba(225,48,108,0.22)] hover:border-pink-500/40',
      badgeBg: 'bg-pink-950/40 text-pink-300 border-pink-800/40'
    },
    {
      label: 'X',
      handle: '@augrockyy',
      category: 'Social',
      url: 'https://x.com/augrockyy',
      icon: <SiX className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />,
      iconBg: 'bg-black border border-white/20 shadow-inner',
      accentColor: '#ffffff',
      glowClass: 'hover:shadow-[0_0_24px_rgba(255,255,255,0.15)] hover:border-zinc-400/50',
      badgeBg: 'bg-zinc-800/80 text-zinc-300 border-zinc-700/80'
    },
    {
      label: 'Counter-Strike',
      handle: 'Allstar • extr3myz',
      category: 'Gaming',
      url: 'https://allstar.gg/u/extr3myz',
      icon: <SiCounterstrike className="w-5 h-5 text-zinc-950" />,
      iconBg: 'bg-gradient-to-br from-[#F5A623] to-[#C97B00] shadow-sm',
      accentColor: '#DE9B35',
      glowClass: 'hover:shadow-[0_0_24px_rgba(222,155,53,0.22)] hover:border-amber-500/40',
      badgeBg: 'bg-amber-950/40 text-amber-300 border-amber-800/40'
    },
    {
      label: 'SoundCloud',
      handle: '@augustorockyy',
      category: 'Audio',
      url: 'https://soundcloud.com/augustorockyy',
      icon: <SiSoundcloud className="w-5 h-5 text-white" />,
      iconBg: 'bg-gradient-to-r from-[#FF5500] to-[#FF3300] shadow-sm',
      accentColor: '#FF5500',
      glowClass: 'hover:shadow-[0_0_24px_rgba(255,85,0,0.22)] hover:border-orange-500/40',
      badgeBg: 'bg-orange-950/40 text-orange-300 border-orange-800/40'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070709] text-white selection:bg-white/20 selection:text-white overflow-x-hidden">
      {/* Custom Cursor */}
      <Cursor />

      {/* Responsive Fullscreen Fixed Cosmic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
        <picture className="w-full h-full block">
          {/* Desktop & Tablet Widescreen: Native High-Res 16:9 Landscape Artwork */}
          <source media="(min-width: 768px)" srcSet="/images/bg-desktop.jpg" />
          {/* Mobile Portrait: Native Vertical Wallpaper */}
          <img
            src="/images/bg-mobile.jpg"
            alt="Cosmic Vortex Horizon"
            className="w-full h-full object-cover object-center select-none"
          />
        </picture>
        {/* Subtle dark tint and vignette for enhanced contrast */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.75)_100%)]" />
      </div>

      {/* Audio Player */}
      <Player />

      {/* Main Content Container - Fixed & 100% Static */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="fixed inset-0 z-10 flex flex-col items-center justify-center px-3.5 sm:px-6 lg:px-8 py-2 sm:py-6 overflow-hidden select-none"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
        >
          {/* Main Card */}
          <motion.div
            variants={itemVariants}
            className="glass-morphism rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 shadow-2xl relative border border-white/10"
          >
            {/* Profile Section */}
            <motion.div
              variants={itemVariants}
              className="text-center mb-3 sm:mb-4"
            >
              {/* Avatar with authentic glowing border */}
              <motion.div
                variants={itemVariants}
                className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-2.5"
              >
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-700 opacity-50 blur-sm" />
                <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-b from-white/30 via-white/10 to-transparent">
                  <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 border border-black/40">
                    <img
                      src="/images/aug1.jpg"
                      alt="Augusto Sousa"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="text-lg sm:text-2xl font-extrabold tracking-tight mb-1 bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent"
              >
                Augusto Sousa
              </motion.h1>

              {/* Subtitle / Tags */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] sm:text-xs text-zinc-400"
              >
                <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-zinc-300 font-medium">
                  Música
                </span>
                <span className="text-zinc-600">•</span>
                <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-zinc-300 font-medium">
                  Tecnologia
                </span>
                <span className="text-zinc-600">•</span>
                <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-zinc-300 font-medium">
                  IA
                </span>
                <span className="text-zinc-600">•</span>
                <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-zinc-300 font-medium">
                  CS
                </span>
              </motion.div>
            </motion.div>

            {/* Links Section with Authentic Brand Logos */}
            <motion.div
              variants={itemVariants}
              className="space-y-1.5 sm:space-y-2.5"
            >
              {links.map((link, index) => (
                <motion.button
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open(link.url, '_blank')}
                  className={`w-full glass-morphism-card rounded-xl sm:rounded-2xl p-2 sm:p-3 flex items-center space-x-2.5 sm:space-x-3.5 border border-white/[0.06] transition-all duration-300 group cursor-pointer text-left ${link.glowClass}`}
                >
                  {/* Authentic Logo Container */}
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${link.iconBg}`}
                  >
                    {link.icon}
                  </div>

                  {/* Brand & Handle Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-white font-semibold text-sm sm:text-base group-hover:text-white transition-colors truncate">
                        {link.label}
                      </h3>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.2 rounded border font-medium ${link.badgeBg}`}
                      >
                        {link.category}
                      </span>
                    </div>
                    <p className="text-zinc-400 text-xs truncate font-mono mt-0.5 group-hover:text-zinc-300 transition-colors">
                      {link.handle}
                    </p>
                  </div>

                  {/* External Indicator */}
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-white/20 group-hover:bg-white/[0.08] transition-all duration-300 flex-shrink-0">
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {/* Footer */}
            <motion.div
              variants={itemVariants}
              className="mt-6 pt-4 border-t border-white/[0.06] text-center text-xs text-zinc-500 font-mono"
            >
              <span>© 2026 augrocky</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
