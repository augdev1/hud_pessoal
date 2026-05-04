import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Github } from 'lucide-react';
import Cursor from './components/Cursor';
import HeroCanvas from './components/HeroCanvas';
import Player from './components/Player';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const links = [
    {
      label: 'GitHub',
      url: 'https://github.com/augdev1',
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: 'from-gray-600 to-gray-800'
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/augrocky/',
      icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: 'from-pink-600 to-purple-600'
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/augusto-sousa-830719284/',
      icon: '💼',
      color: 'from-blue-600 to-blue-800'
    },
    {
      label: 'CS',
      url: 'https://allstar.gg/u/extr3myz',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
          <line x1="12" y1="2" x2="12" y2="6" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="18" x2="12" y2="22" stroke="currentColor" strokeWidth="2"/>
          <line x1="2" y1="12" x2="6" y2="12" stroke="currentColor" strokeWidth="2"/>
          <line x1="18" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      color: 'from-orange-600 to-yellow-600'
    },
    {
      label: 'SoundCloud',
      url: 'https://soundcloud.com/augustorockyy',
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.052-.1-.084-.1zm-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c.014.057.045.094.09.094s.089-.037.099-.094l.19-1.308-.19-1.334c-.01-.057-.054-.094-.078-.094zm1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.104.106.104.061 0 .12-.044.12-.104l.24-2.458-.24-2.563c0-.06-.045-.104-.12-.104zm.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.138l.24-2.544-.24-2.64c-.015-.075-.06-.135-.165-.135zm.93-.062c-.09 0-.149.075-.165.165l-.176 2.703.193 2.513c.016.09.075.165.165.165.089 0 .165-.075.165-.165l.21-2.513-.21-2.703c0-.09-.076-.165-.18-.165zm.929-.029c-.104 0-.179.09-.193.194l-.162 2.732.177 2.483c.015.104.09.194.178.194.104 0 .18-.09.194-.194l.194-2.483-.194-2.732c-.014-.104-.09-.194-.194-.194zm.945-.045c-.12 0-.21.104-.225.209l-.149 2.777.165 2.452c.015.12.105.209.225.209.119 0 .239-.104.239-.209l.24-2.452-.24-2.777c-.015-.105-.105-.209-.24-.209zm.945-.014c-.135 0-.239.119-.254.239l-.135 2.791.15 2.422c.015.135.119.239.254.239.119 0 .239-.104.239-.239l.165-2.422-.165-2.791c-.015-.12-.12-.239-.254-.239zm.96-.09c-.149 0-.269.135-.284.284l-.119 2.865.135 2.391c.015.149.135.284.284.284.149 0 .269-.135.284-.284l.149-2.391-.149-2.865c-.015-.149-.135-.284-.3-.284zm.959-.164c-.165 0-.299.149-.314.314l-.105 2.991.12 2.361c.015.164.149.313.314.313.165 0 .3-.149.314-.313l.135-2.361-.135-2.991c-.015-.165-.149-.314-.329-.314zm1.005-.344c-.179 0-.329.164-.344.344l-.09 3.27.105 2.331c.015.179.165.344.344.344.179 0 .329-.165.329-.344l.12-2.331-.12-3.27c-.015-.18-.15-.344-.344-.344zm.99-.488c-.194 0-.359.179-.374.389l-.075 3.713.09 2.301c.015.209.18.389.374.389.195 0 .359-.18.374-.389l.105-2.301-.105-3.713c-.015-.21-.179-.389-.389-.389zm1.02-.688c-.209 0-.389.194-.404.419l-.06 4.349.075 2.271c.015.224.195.419.404.419.21 0 .39-.195.404-.419l.09-2.271-.09-4.349c-.014-.225-.194-.419-.419-.419zm1.035-.959c-.224 0-.419.209-.434.449l-.045 5.244.06 2.241c.015.24.21.449.434.449.225 0 .419-.209.434-.449l.075-2.241-.075-5.244c-.015-.24-.209-.449-.449-.449zm1.05-1.245c-.239 0-.449.224-.464.479l-.03 6.414.045 2.211c.015.254.225.479.464.479.255 0 .449-.225.464-.479l.06-2.211-.06-6.414c-.015-.255-.209-.479-.479-.479zm1.065-1.604c-.254 0-.464.239-.479.509l-.015 7.934.03 2.181c.015.27.225.509.479.509.27 0 .479-.239.494-.509l.045-2.181-.045-7.934c-.015-.27-.224-.509-.509-.509zm1.065-2.181c-.27 0-.494.254-.509.539l-.015 9.989.015 2.151c.015.285.239.539.509.539.285 0 .509-.254.524-.539l.03-2.151-.03-9.989c-.015-.285-.239-.539-.524-.539z"/>
        </svg>
      ),
      color: 'from-orange-500 to-orange-700'
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
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Custom Cursor */}
      <Cursor />
      
      {/* Hero Canvas Background */}
      <HeroCanvas />
      
      {/* Audio Player */}
      <Player />
      
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md mx-auto sm:max-w-lg lg:max-w-xl"
        >
          {/* Main Card */}
          <motion.div
            variants={itemVariants}
            className="glass-morphism rounded-2xl p-3 sm:p-4 lg:p-5 shadow-2xl"
          >
            {/* Profile Section */}
            <motion.div
              variants={itemVariants}
              className="text-center mb-4 sm:mb-5"
            >
              {/* Avatar */}
              <motion.div
                variants={itemVariants}
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-2 sm:mb-3 rounded-full bg-transparent p-[2px] border border-white/20"
              >
                <div className="w-full h-full rounded-full bg-transparent overflow-hidden">
                  <img src="/images/aug1.jpg" alt="Avatar" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              >
                Augusto Sousa
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-gray-400 text-xs font-light tracking-wider"
              >
                Música • Tecnologia • IA • CS
              </motion.p>
            </motion.div>

            {/* Links Section */}
            <motion.div
              variants={itemVariants}
              className="space-y-1 sm:space-y-2"
            >
              {links.map((link, index) => (
                <motion.button
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(link.url, '_blank')}
                  className={`w-full glass-morphism rounded-xl p-2 sm:p-3 flex items-center space-x-2 sm:space-x-3 transition-all duration-300 group`}
                >
                  {/* Icon */}
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {typeof link.icon === 'string' ? (
                      <span className="text-sm sm:text-lg">{link.icon}</span>
                    ) : (
                      link.icon
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex-1 text-left">
                    <h3 className="text-white font-medium text-sm sm:text-base">{link.label}</h3>
                    <p className="text-gray-400 text-xs hidden sm:block">Clique para acessar</p>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="text-gray-400 group-hover:text-white transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                </motion.button>
              ))}
            </motion.div>

            {/* Footer */}
            <motion.div
              variants={itemVariants}
              className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-800 text-center"
            >
              <p className="text-xs text-gray-500">
                © 2026 • augrocky
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
