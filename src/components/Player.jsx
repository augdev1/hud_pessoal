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
        <source src="/audio/ambient-music.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      {/* Volume Control Panel */}
      <div className="fixed bottom-3 sm:bottom-6 left-1/2 sm:left-auto sm:right-6 -translate-x-1/2 sm:translate-x-0 z-50 glass-morphism rounded-2xl p-2.5 sm:p-3.5 flex flex-col gap-1.5 sm:gap-2 transition-all duration-300 w-[calc(100%-24px)] max-w-[340px] sm:max-w-none sm:w-auto shadow-2xl border border-white/10">
        {/* Now Playing Text */}
        <div className="text-[10px] sm:text-xs text-zinc-400 text-center font-mono font-medium tracking-wider uppercase">
          Tocando agora: AUG MIDNIGHT
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center transition-all duration-200"
            title={isPlaying ? "Pausar" : "Tocar"}
          >
            {isPlaying ? (
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center transition-all duration-200"
            title={isMuted ? "Ativar som" : "Mutar"}
          >
            {isMuted ? (
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <span className="text-white/60 text-[11px] sm:text-xs w-7 text-right font-mono">
              {Math.round(volume * 100)}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
