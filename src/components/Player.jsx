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
      <div className="w-full glass-morphism rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-center transition-all duration-300 shadow-2xl border border-white/10">
        <div className="w-fit max-w-full flex flex-col items-start gap-1.5">
          {/* Now Playing Header */}
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-zinc-400 font-mono tracking-wider uppercase select-none whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
            <span>Tocando agora: AUG MIDNIGHT</span>
          </div>

          {/* Unified Integrated Controls Bar - Perfectly Aligned from Left to T of MIDNIGHT */}
          <div className="flex items-center justify-between gap-2 w-full">
            {/* Action Buttons */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center transition-all duration-200"
                title={isPlaying ? "Pausar" : "Tocar"}
              >
                {isPlaying ? (
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>

              {/* Mute Button */}
              <button
                onClick={toggleMute}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center transition-all duration-200"
                title={isMuted ? "Ativar som" : "Mutar"}
              >
                {isMuted ? (
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Connected Volume Capsule - Extends cleanly up to the T of MIDNIGHT */}
            <div className="flex items-center gap-1.5 flex-1 min-w-0 bg-white/[0.05] rounded-full px-2 py-1 border border-white/[0.08]">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full flex-1 h-1.5 bg-zinc-700/60 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #ffffff 0%, #ffffff ${volume * 100}%, #3f3f46 ${volume * 100}%, #3f3f46 100%)`
                }}
              />
              <span className="text-zinc-400 text-[10px] sm:text-xs font-mono w-6 text-right flex-shrink-0">
                {Math.round(volume * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Player;
