import { useState, useEffect } from 'react';
import imgHero from "figma:asset/93f338ac7aa331c46d00ad75546b8fe1c6c7d096.png";
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { language } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const tagline = {
    pt: 'UX, INOVAÇÃO, PRODUTO & IA',
    en: 'UX, INNOVATION, PRODUCT & AI',
    es: 'UX, INNOVACIÓN, PRODUCTO & IA'
  };
  
  const title = {
    pt: <>Head de<br />Produto & Design.</>,
    en: <>Head of<br />Product & Design.</>,
    es: <>Head de<br />Producto & Diseño.</>
  };
  
  const description = {
    pt: 'Liderança e atuação em times e projetos de alto impacto que transformam a experiência do usuário, alinhando-os aos objetivos do negócio.',
    en: 'Leadership and performance in high-impact teams and projects that transform user experience, aligning them with business goals.',
    es: 'Liderazgo y actuación en equipos y proyectos de alto impacto que transforman la experiencia del usuario, alineándolos con los objetivos del negocio.'
  };
  
  const learnMore = {
    pt: 'Saiba mais',
    en: 'Learn more',
    es: 'Saber más'
  };

  // Mouse tracking - apenas para desktop
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 1024) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="relative bg-black h-[1080px] min-[768px]:h-[800px] lg:h-[1024px] w-full overflow-hidden">
      {/* MOBILE e TABLET: flex com items-end */}
      <div className="lg:hidden flex flex-col min-[768px]:flex-row items-end h-full">
        {/* Coluna Texto - Embaixo à esquerda - width: 50% no tablet */}
        <div className="w-full min-[768px]:w-[50%] px-6 min-[768px]:px-8 pb-12 min-[768px]:pb-[100px] pt-[149px] min-[768px]:pt-0 relative z-20 min-[768px]:bg-black">
          <div className="max-w-[280px] min-[768px]:max-w-[500px]">
            <p className="text-[#1760ff] text-xs min-[768px]:text-sm mb-3 min-[768px]:mb-4 tracking-[0.15em] min-[768px]:tracking-[0.2em] uppercase">
              {tagline[language]}
            </p>
            
            <h1 className="text-white text-[32px] min-[768px]:text-[52px] leading-[1.1] mb-4 min-[768px]:mb-6">
              {title[language]}
            </h1>
            
            <p className="text-white/70 text-[16px] min-[768px]:text-lg leading-relaxed mb-6 min-[768px]:mb-8 max-w-[280px] min-[768px]:max-w-[420px]">
              {description[language]}
            </p>
            
            <Link 
              to="/sobre"
              className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 min-[768px]:px-10 min-[768px]:py-4 text-sm min-[768px]:text-base rounded-[10px] hover:bg-[#1760ff] hover:border-[#1760ff] transition-all transform hover:scale-105"
            >
              {learnMore[language]}
            </Link>
          </div>
        </div>

        {/* Coluna Imagem - Direita - width: 50% no tablet */}
        <div className="absolute min-[768px]:relative bottom-0 min-[768px]:bottom-auto w-full min-[768px]:w-[50%] h-[65%] min-[768px]:h-full z-0">
          <img 
            src={imgHero} 
            alt="Hero background"
            className="w-full h-full object-cover object-[center_bottom] min-[768px]:object-[right_center]"
          />
        </div>

        {/* Gradiente Mobile */}
        <div 
          className="min-[768px]:hidden absolute inset-0 z-10"
          style={{ 
            background: `linear-gradient(180deg, #000000 0%, #000000 35%, rgba(0, 0, 0, 0.7) 55%, rgba(0, 0, 0, 0) 75%)` 
          }}
        />
      </div>

      {/* DESKTOP: Layout com efeito spotlight */}
      <div 
        className="hidden lg:flex items-end pb-[150px] relative h-full"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Layer 1: Imagem original (sempre visível através do spotlight) */}
        <div className="absolute top-0 right-0 w-auto h-full z-0">
          <img 
            src={imgHero} 
            alt="Hero background"
            className="w-full h-full object-cover object-[right_center]"
          />
        </div>

        {/* Layer 2: Overlay escuro com spotlight mask */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div 
            className="absolute inset-0 transition-opacity duration-300"
            style={{ 
              background: `linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.9) 40%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0) 90%)`,
              maskImage: isHovering 
                ? `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.5) 80%, black 100%)`
                : 'none',
              WebkitMaskImage: isHovering 
                ? `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.5) 80%, black 100%)`
                : 'none'
            }}
          />
        </div>

        {/* Conteúdo de texto */}
        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-[150px]">
          <div className="max-w-[700px]">
            <p className="text-[#1760ff] text-sm mb-4 tracking-[0.2em] uppercase">
              {tagline[language]}
            </p>
            
            <h1 className="text-white text-[80px] leading-[1.1] mb-6">
              {title[language]}
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-10 max-w-[520px]">
              {description[language]}
            </p>
            
            <Link 
              to="/sobre"
              className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 text-base rounded-[10px] hover:bg-[#1760ff] hover:border-[#1760ff] transition-all transform hover:scale-105"
            >
              {learnMore[language]}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}