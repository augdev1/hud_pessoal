import React, { useEffect } from 'react';

const HeroCanvas = () => {
  useEffect(() => {
    let timeoutId = null;
    let retries = 0;
    const maxRetries = 50;

    const initUnicornStudio = () => {
      if (typeof window.UnicornStudio !== 'undefined') {
        window.UnicornStudio.addScene({
          elementId: 'hero',
          scale: 1,
          production: true,
          projectId: 'IkZIoEe2aBLlhFYYpj8W?update=1.01',
          interactivity: {
            mouse: {
              disableMobile: true,
              momentum: 3.0
            }
          }
        }).then(() => {
          const unicorn = document.getElementById('unicorn');
          if (unicorn) {
            unicorn.style.opacity = 1;
          }
          console.log('Unicorn Studio scene loaded successfully');
        }).catch((err) => {
          console.error('Unicorn Studio error:', err);
        });
      } else if (retries < maxRetries) {
        retries++;
        timeoutId = setTimeout(initUnicornStudio, 100);
      }
    };

    initUnicornStudio();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="intro-image" id="hero" data-scene-id="id-iq2h9qp9lhlmylwakh03ik">
        <canvas width="1059" height="1392" style={{ width: '706px', height: '928px' }} aria-label="Unicorn Studio Scene" role="img"></canvas>
      </div>
      <div className="iframe" id="unicorn" style={{ opacity: 0 }}></div>
    </>
  );
};

export default HeroCanvas;
