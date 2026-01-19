import imgContainer from "figma:asset/46b95f35169ed9b497832ea6408544db57f9f535.png";
import { useLanguage } from '../contexts/LanguageContext';

export function UIDesignSection() {
  const { language } = useLanguage();
  
  const tagline = {
    pt: 'AUTOR DO BOOK | PARA INICIANTES',
    en: 'BOOK AUTHOR | FOR BEGINNERS',
    es: 'AUTOR DEL LIBRO | PARA PRINCIPIANTES'
  };
  
  const title = {
    pt: 'UI Design Além da Superfície: Desenvolvendo seu craft e evoluindo no Design.',
    en: 'UI Design Beyond the Surface: Developing your craft and evolving in Design.',
    es: 'UI Design Más Allá de la Superficie: Desarrollando tu craft y evolucionando en el Diseño.'
  };
  
  const description = {
    pt: 'O e-book oferece um guia prático e completo para quem deseja aprimorar suas habilidades em interfaces do usuário, com foco na criação de experiências visuais impactantes e eficientes.',
    en: 'The e-book offers a practical and complete guide for those who want to improve their user interface skills, focusing on creating impactful and efficient visual experiences.',
    es: 'El e-book ofrece una guía práctica y completa para quienes desean mejorar sus habilidades en interfaces de usuario, con enfoque en la creación de experiencias visuais impactantes y eficientes.'
  };
  
  const cta = {
    pt: 'Explore agora',
    en: 'Explore now',
    es: 'Explorar ahora'
  };
  
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1440px] mx-auto px-6 min-[768px]:px-8 lg:px-[150px] py-12 min-[768px]:py-20 lg:py-[150px]">
        {/* flex-col no mobile, flex-row no tablet+ (flex-direction: row), items-center */}
        <div className="flex flex-col min-[768px]:flex-row items-center gap-8">
          {/* Texto - width: 50% no tablet */}
          <div className="w-full min-[768px]:w-[50%]">
            <p className="text-xs min-[768px]:text-sm text-[#1760ff] tracking-[0.2em] mb-3 min-[768px]:mb-4">
              {tagline[language]}
            </p>
            
            <h2 className="text-[28px] min-[768px]:text-[40px] lg:text-[48px] leading-[1.3] mb-6 min-[768px]:mb-8">
              {title[language]}
            </h2>
            
            <p className="text-base min-[768px]:text-lg text-[#71717a] leading-relaxed mb-6 min-[768px]:mb-8">
              {description[language]}
            </p>

            <a 
              href="https://www.amazon.com.br/dp/B0DPNNJKDC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#1760ff] text-white px-6 min-[768px]:px-8 py-3 min-[768px]:py-4 rounded-[10px] hover:bg-[#0d4fd1] transition-colors text-sm min-[768px]:text-base"
            >
              {cta[language]}
            </a>
          </div>

          {/* Imagem - width: 50% no tablet */}
          <div className="w-full min-[768px]:w-[50%] flex items-center justify-center">
            <div className="relative w-full max-w-[400px]">
              <img 
                src={imgContainer} 
                alt="UI Design Além da Superfície - Book Cover"
                loading="lazy"
                className="w-full h-auto rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}