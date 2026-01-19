import { ImageWithFallback } from './figma/ImageWithFallback';
import logoMaisMobi from 'figma:asset/9e671ec6bc5e33d160f5e7d311e2bcd2856d1c06.png';
import logoTheOneLife from 'figma:asset/73bee65e42f1f4b13bf0407e40810a3c1c55d1c7.png';
import logoAnjoDeBolso from 'figma:asset/96f352cb35aea166f72e951a3e0bf5723cb7f4a5.png';
import logoSesc from 'figma:asset/88a6a7e3af61cb76861484d5590e1c1a73d805cd.png';
import logoExercito from 'figma:asset/7be0c0ebe9738960d6e8c6ef85a461c4cc856d1b.png';
import logoDiagonal from 'figma:asset/e1bfd6ebd34d4e98cdab61eecf06ab8fb20fc254.png';
import logoMidea from 'figma:asset/ed1319f3f9b6e23f649ea122d1f1ac86edb453a0.png';

export function LogoCarousel() {
  // Array de logos com tamanhos customizados
  const logos = [
    { src: logoMaisMobi, alt: 'Mais Mobi', height: 100, useFallback: false },
    { src: logoTheOneLife, alt: 'The One Life', height: 70, useFallback: false },
    { src: logoAnjoDeBolso, alt: 'Anjo de Bolso', height: 55, useFallback: false },
    { src: logoSesc, alt: 'SESC Fecomércio Senac', height: 100, useFallback: false },
    { src: logoExercito, alt: 'Exército Brasileiro', height: 70, useFallback: false },
    { src: logoDiagonal, alt: 'Diagonal Social', height: 100, useFallback: false },
    { src: logoMidea, alt: 'Midea', height: 100, useFallback: false },
  ];

  // Duplicar os logos 3 vezes para criar buffer maior e evitar pulo
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="bg-white py-[80px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-[150px]">
        {/* Container do carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-mobile md:animate-scroll-tablet lg:animate-scroll-desktop">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-[140px] md:w-[150px] lg:w-[180px] mx-[20px] md:mx-[30px] lg:mx-[40px]"
              >
                <img
                  src={logo.src}
                  alt={`${logo.alt}-${index}`}
                  className="w-auto object-contain transition-opacity duration-300 hover:opacity-80"
                  style={{ height: `${logo.height}px` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        /* Mobile - velocidade mais rápida */
        .animate-scroll-mobile {
          animation: scroll 12s linear infinite;
        }
        
        /* Tablet */
        @media (min-width: 768px) {
          .animate-scroll-tablet {
            animation: scroll 15s linear infinite;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .animate-scroll-desktop {
            animation: scroll 18s linear infinite;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-mobile,
          .animate-scroll-tablet,
          .animate-scroll-desktop {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
