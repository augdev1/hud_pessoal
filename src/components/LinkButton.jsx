import React from 'react';
import { motion } from 'framer-motion';

const LinkButton = ({ icon, label, url, color, index }) => {
  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: "easeOut"
      }
    }
  };

  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={handleClick}
      className={`w-full glass rounded-xl p-4 flex items-center space-x-4 hover:glow-on-hover transition-all duration-300 group`}
    >
      {/* Icon container */}
      <motion.div
        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </motion.div>

      {/* Text */}
      <div className="flex-1 text-left">
        <h3 className="text-white font-medium text-lg">{label}</h3>
        <p className="text-gray-400 text-sm">Clique para acessar</p>
      </div>

      {/* Arrow indicator */}
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
  );
};

export default LinkButton;
