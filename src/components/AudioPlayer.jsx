import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(error => {
          console.log('Audio playback failed:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/audio/ambient-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Audio Control Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 glass rounded-full p-4 hover:glow-on-hover transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-white group-hover:text-gray-300 transition-colors" />
        ) : (
          <VolumeX className="w-6 h-6 text-white group-hover:text-gray-300 transition-colors" />
        )}
      </motion.button>

      {/* Volume Control (appears on hover) */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileHover={{ opacity: 1, width: '120px' }}
        className="fixed bottom-6 right-20 z-50 glass rounded-full p-2 overflow-hidden"
      >
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, #ffffff 0%, #ffffff ${volume * 100}%, #374151 ${volume * 100}%, #374151 100%)`
          }}
        />
      </motion.div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </>
  );
};

export default AudioPlayer;
