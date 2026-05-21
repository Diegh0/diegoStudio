import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { Plus } from 'lucide-react';
import ImagenScroll from '@/assets/images/veteFriendlyProject.png';
import Logo from '@/assets/images/logo.png';

function HeroSplineBackground() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      pointerEvents: 'auto',
      overflow: 'hidden',
    }}>
      <Spline
        style={{
          width: '100%',
          height: '100vh',
          pointerEvents: 'auto',
        }}
        scene="https://prod.spline.design/dJqTIQ-tE3ULUPMi/scene.splinecode"
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent 30%, transparent 70%, rgba(0, 0, 0, 0.8)),
            linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.9))
          `,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

function ScreenshotSection({ screenshotRef }: { screenshotRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <section className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 mt-0">
      <div ref={screenshotRef} className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 w-full md:w-[80%] lg:w-[70%] mx-auto">
        <div>
          <img
            src={ImagenScroll}
            alt="App Screenshot"
            className="w-full h-auto block rounded-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <div className="text-white px-4 max-w-screen-xl mx-auto w-full flex flex-col lg:flex-row justify-between items-start lg:items-center py-16">
      <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight tracking-wide">
          Landing pages<br />que convierten.
        </h1>
        <div className="text-sm text-gray-300 opacity-90 mt-4 tracking-widest uppercase">
          Negocios · Autónomos · Marcas personales
        </div>
      </div>

      <div className="w-full lg:w-1/2 pl-0 lg:pl-8 flex flex-col items-start">
        <p className="text-base sm:text-lg opacity-80 mb-6 max-w-md">
          Tu página para publicitarte, darte a conocer y captar clientes. Diseño profesional, precio justo — pagas solo lo que necesitas.
        </p>
        <div className="flex pointer-events-auto flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-3">
          <a
            href="#contact"
            className="pointer-events-auto bg-white text-black font-semibold py-2.5 sm:py-3.5 px-6 sm:px-8 rounded-2xl transition duration-300 hover:scale-105 flex items-center justify-center w-full sm:w-auto"
          >
            <Plus className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-cyan-400" />
            Quiero mi landing
          </a>
          <a
            href="#work"
            className="border border-white text-white font-semibold py-2.5 sm:py-3.5 px-6 sm:px-8 rounded-2xl transition duration-300 w-full sm:w-auto hover:bg-white hover:text-black text-center pointer-events-auto"
          >
            Ver proyectos
          </a>
        </div>
      </div>
    </div>
  );
}

const NAV_LINKS = [
  { label: 'Inicio', href: '#' },
  { label: 'Proyectos', href: '#work' },
  { label: 'Contacto', href: '#contact' },
];

function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-20"
      style={{
        backgroundColor: 'rgba(8, 7, 6, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(201,168,76,0.08)',
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: '1280px', padding: '0.35rem clamp(1rem, 4vw, 3rem)' }}
      >
        {/* Marca */}
        <a href="#" style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <img src={Logo} alt="DiegoStudio" style={{ height: '110px', width: 'auto' }} />
        </a>

        {/* Nav links — oculto en móvil muy pequeño */}
        <div className="flex items-center" style={{ gap: 'clamp(1rem, 3vw, 3rem)' }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(242,237,228,0.55)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                fontWeight: 400,
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#F2EDE4')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(242,237,228,0.55)')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

const HeroSection = () => {
  const screenshotRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (screenshotRef.current && heroContentRef.current) {
        requestAnimationFrame(() => {
          const scrollPosition = window.pageYOffset;

          if (screenshotRef.current) {
            screenshotRef.current.style.transform = `translateY(-${scrollPosition * 0.5}px)`;
          }

          const maxScroll = 400;
          const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
          if (heroContentRef.current) {
            heroContentRef.current.style.opacity = opacity.toString();
          }
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navbar />

      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <HeroSplineBackground />
        </div>

        <div ref={heroContentRef} style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh',
          display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10, pointerEvents: 'none'
        }}>
          <HeroContent />
        </div>
      </div>

      <div className="bg-black relative z-10" style={{ marginTop: '-20vh' }}>
        <ScreenshotSection screenshotRef={screenshotRef} />
        <div className="container mx-auto px-4 pb-4 pt-2 text-white text-center">
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "0.5rem" }}>
            Trabajo real
          </p>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#F2EDE4", lineHeight: 1, margin: "0 0 0.75rem" }}>
            Proyectos que ya están funcionando.
          </h2>
          <p style={{ color: "#8C8680", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
            Arrastra · Click para ver detalle
          </p>
        </div>
      </div>
    </div>
  );
};

export { HeroSection };
