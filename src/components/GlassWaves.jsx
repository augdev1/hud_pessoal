import React, { useEffect, useRef } from 'react';

const GlassWaves = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0;
    let height = 0;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Definindo as camadas de ondas com gradientes escuros e estilo glassmorphism
    const waves = [
      {
        baseY: 0.32,
        speed: 0.007,
        amplitude: 55,
        frequency: 0.0016,
        phase: 0,
        fillGradient: [
          { stop: 0, color: 'rgba(28, 28, 36, 0.42)' },
          { stop: 0.45, color: 'rgba(14, 14, 20, 0.65)' },
          { stop: 1, color: 'rgba(5, 5, 8, 0.95)' }
        ],
        strokeColor: 'rgba(255, 255, 255, 0.08)',
        strokeWidth: 1.2,
        secondaryFreq: 0.0032,
        secondaryAmp: 22
      },
      {
        baseY: 0.46,
        speed: 0.011,
        amplitude: 75,
        frequency: 0.0013,
        phase: 2.1,
        fillGradient: [
          { stop: 0, color: 'rgba(38, 38, 48, 0.38)' },
          { stop: 0.55, color: 'rgba(18, 18, 26, 0.68)' },
          { stop: 1, color: 'rgba(6, 6, 9, 0.96)' }
        ],
        strokeColor: 'rgba(255, 255, 255, 0.14)',
        strokeWidth: 1.6,
        secondaryFreq: 0.0026,
        secondaryAmp: 30
      },
      {
        baseY: 0.60,
        speed: 0.008,
        amplitude: 88,
        frequency: 0.0011,
        phase: 3.9,
        fillGradient: [
          { stop: 0, color: 'rgba(24, 24, 34, 0.52)' },
          { stop: 0.5, color: 'rgba(12, 12, 17, 0.78)' },
          { stop: 1, color: 'rgba(5, 5, 8, 0.98)' }
        ],
        strokeColor: 'rgba(255, 255, 255, 0.10)',
        strokeWidth: 1.4,
        secondaryFreq: 0.0021,
        secondaryAmp: 36
      },
      {
        baseY: 0.74,
        speed: 0.014,
        amplitude: 68,
        frequency: 0.0018,
        phase: 1.4,
        fillGradient: [
          { stop: 0, color: 'rgba(34, 34, 46, 0.45)' },
          { stop: 0.45, color: 'rgba(16, 16, 22, 0.72)' },
          { stop: 1, color: 'rgba(4, 4, 6, 0.98)' }
        ],
        strokeColor: 'rgba(255, 255, 255, 0.18)',
        strokeWidth: 1.8,
        secondaryFreq: 0.0036,
        secondaryAmp: 26
      }
    ];

    let time = 0;

    const render = () => {
      // Interpolação suave do mouse
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Fundo preto base
      ctx.fillStyle = '#060608';
      ctx.fillRect(0, 0, width, height);

      time += 1;

      const mouseFactorX = (mouseX / width - 0.5) * 35;
      const mouseFactorY = (mouseY / height - 0.5) * 25;

      const step = 8;

      waves.forEach((wave, index) => {
        const currentBaseY = height * wave.baseY + mouseFactorY * (index % 2 === 0 ? 1 : -0.7);

        // Caminho do preenchimento com gradiente de vidro preto
        ctx.beginPath();
        ctx.moveTo(0, height);
        ctx.lineTo(0, currentBaseY);

        for (let x = 0; x <= width + step; x += step) {
          const wavePhase = time * wave.speed + wave.phase + mouseFactorX * 0.01;
          const primary = Math.sin(x * wave.frequency + wavePhase) * wave.amplitude;
          const secondary = Math.cos(x * wave.secondaryFreq + wavePhase * 1.25) * wave.secondaryAmp;
          const tertiary = Math.sin(x * 0.0006 - wavePhase * 0.7) * 12;

          const y = currentBaseY + primary + secondary + tertiary;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Gradiente vertical simulando translucidez de vidro escuro
        const grad = ctx.createLinearGradient(0, currentBaseY - wave.amplitude, 0, height);
        wave.fillGradient.forEach((stop) => {
          grad.addColorStop(stop.stop, stop.color);
        });

        ctx.fillStyle = grad;
        ctx.fill();

        // Destaque luminoso sutil na crista da onda (borda de vidro)
        ctx.beginPath();
        for (let x = 0; x <= width + step; x += step) {
          const wavePhase = time * wave.speed + wave.phase + mouseFactorX * 0.01;
          const primary = Math.sin(x * wave.frequency + wavePhase) * wave.amplitude;
          const secondary = Math.cos(x * wave.secondaryFreq + wavePhase * 1.25) * wave.secondaryAmp;
          const tertiary = Math.sin(x * 0.0006 - wavePhase * 0.7) * 12;

          const y = currentBaseY + primary + secondary + tertiary;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = wave.strokeColor;
        ctx.lineWidth = wave.strokeWidth;
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Canvas com as ondas dinâmicas de vidro preto */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Camada sutil de desfoque estilo glassmorphism fosco */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-black/20" />

      {/* Vinheta radial para foco central elegante */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(6,6,8,0.7)_100%)]" />
    </div>
  );
};

export default GlassWaves;
