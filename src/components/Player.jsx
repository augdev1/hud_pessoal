import React, { useState, useRef, useEffect } from 'react';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

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

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/audio/ambient-music.mp3" type="audio/mpeg" />
        <source src="/audio/ambient-music.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      {/* Volume Control Panel */}
      <div className="fixed bottom-8 sm:bottom-6 left-1/2 sm:left-auto sm:right-6 -translate-x-1/2 sm:translate-x-0 z-50 glass-morphism rounded-2xl p-3 sm:p-4 flex flex-col gap-2 transition-all duration-300 hover:scale-105 w-auto sm:w-auto max-w-[95%] sm:max-w-md pb-safe">
        {/* Now Playing Text */}
        <div className="text-xs sm:text-sm text-white/70 text-center font-semibold tracking-wider">
          Tocando agora: AUG MIDNIGHT
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
            title={isPlaying ? "Pausar" : "Tocar"}
          >
            {isPlaying ? (
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
            title={isMuted ? "Ativar som" : "Mutar"}
          >
            {isMuted ? (
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>

          {/* Volume Slider */}
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-20 sm:w-28 h-2 bg-gray-700/50 rounded-full appearance-none cursor-pointer hover:h-3 transition-all duration-300"
              style={{
                background: `linear-gradient(to right, #ffffff 0%, #ffffff ${volume * 100}%, #374151 ${volume * 100}%, #374151 100%)`
              }}
            />
            <span className="text-white/60 text-xs sm:text-sm w-8 text-right">
              {Math.round(volume * 100)}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
