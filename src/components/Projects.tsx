import { ProjectCard } from './ProjectCard';
import imgRiocardmais from "figma:asset/d741621ca164e2ae2c567c95710e03b2b305bf03.png";
import imgTheOneLife from "figma:asset/7b827668320a40c0d18c4c7750d1b31a9236f746.png";
import imgAnjodebolso from "figma:asset/e73330e2c1b943a0654616e85855b5c398fc5851.png";
import imgSesc from "figma:asset/c9faf9ffd44bf549cd6aa7c224eada676eedd745.png";
import imgExercitobrasileiro from "figma:asset/fdec08813c594ce31e15a3f6db6fa7aad50902ee.png";
import { useLanguage } from '../contexts/LanguageContext';
import { translateTag } from '../data/translations';

export function Projects() {
  const { language } = useLanguage();
  
  const projectsData = {
    pt: [
      {
        tags: ['SISTEMA', 'ANTIFRAUDE', 'CIBERSEGURANÇA'],
        description: 'Redução média de 30–60% de fraudes e até 40–45% de queda em chargebacks.',
        client: 'RIOCARD MAIS / MAIS MOBI',
        image: imgRiocardmais,
        link: '/projetos/riocard'
      },
      {
        tags: ['E-COMMERCE', 'REDESIGN', 'CONVERSÃO'],
        description: 'Redesign da experiência de compra da The One Life para unir design de alto nível e resultados de conversão.',
        client: 'THE ONE LIFE | JOÃO APOLINÁRIO',
        image: imgTheOneLife,
        link: '/projetos/g2-base'
      },
      {
        tags: ['APP', 'PLG', 'ONBOARDING', 'GAMIFICAÇÃO'],
        description: 'Projetando redução de 25–35% no churn e aumento de 40–60% no engajamento.',
        client: 'ANJO DE BOLSO',
        image: imgAnjodebolso,
        link: '/projetos/anjo-de-bolso'
      },
      {
        tags: ['PORTAL', 'LIFERAY', 'UX UI DESIGN'],
        description: 'Facilitação à credencial e o acesso aos serviços do SESC através de portal online.',
        client: 'SESC',
        image: imgSesc,
        link: '/projetos/sesc'
      },
      {
        tags: ['PORTAL', 'LIFERAY', 'UX UI DESIGN'],
        description: 'Ampliação da transparência e divulgação das ações realizadas, com aumento médio de 60%.',
        client: 'EXERCITO BRASILEIRO',
        image: imgExercitobrasileiro,
        link: '/projetos/exercito-brasileiro'
      }
    ],
    en: [
      {
        tags: ['SYSTEM', 'ANTI-FRAUD', 'CYBERSECURITY'],
        description: 'Average reduction of 30–60% in fraud and up to 40–45% drop in chargebacks.',
        client: 'RIOCARD MAIS / MAIS MOBI',
        image: imgRiocardmais,
        link: '/projetos/riocard'
      },
      {
        tags: ['E-COMMERCE', 'REDESIGN', 'CONVERSION'],
        description: 'Redesign of The One Life shopping experience to unite high-level design and conversion results.',
        client: 'THE ONE LIFE | JOÃO APOLINÁRIO',
        image: imgTheOneLife,
        link: '/projetos/g2-base'
      },
      {
        tags: ['APP', 'PLG', 'ONBOARDING', 'GAMIFICATION'],
        description: 'Designing a 25–35% reduction in churn and a 40–60% increase in engagement.',
        client: 'ANJO DE BOLSO',
        image: imgAnjodebolso,
        link: '/projetos/anjo-de-bolso'
      },
      {
        tags: ['PORTAL', 'LIFERAY', 'UX UI DESIGN'],
        description: 'Facilitating credentials and access to SESC services through online portal.',
        client: 'SESC',
        image: imgSesc,
        link: '/projetos/sesc'
      },
      {
        tags: ['PORTAL', 'LIFERAY', 'UX UI DESIGN'],
        description: 'Expanding transparency and disclosure of actions performed, with an average increase of 60%.',
        client: 'BRAZILIAN ARMY',
        image: imgExercitobrasileiro,
        link: '/projetos/exercito-brasileiro'
      }
    ],
    es: [
      {
        tags: ['SISTEMA', 'ANTIFRAUDE', 'CIBERSEGURIDAD'],
        description: 'Reducción promedio del 30–60% en fraudes y hasta 40–45% de caída en contracargos.',
        client: 'RIOCARD MAIS / MAIS MOBI',
        image: imgRiocardmais,
        link: '/projetos/riocard'
      },
      {
        tags: ['E-COMMERCE', 'REDISEÑO', 'CONVERSIÓN'],
        description: 'Rediseño de la experiencia de compra de The One Life para unir diseño de alto nivel y resultados de conversión.',
        client: 'THE ONE LIFE | JOÃO APOLINÁRIO',
        image: imgTheOneLife,
        link: '/projetos/g2-base'
      },
      {
        tags: ['APP', 'PLG', 'ONBOARDING', 'GAMIFICACIÓN'],
        description: 'Diseñando una reducción del 25–35% en churn y un aumento del 40–60% en engagement.',
        client: 'ANJO DE BOLSO',
        image: imgAnjodebolso,
        link: '/projetos/anjo-de-bolso'
      },
      {
        tags: ['PORTAL', 'LIFERAY', 'UX UI DESIGN'],
        description: 'Facilitación de credenciales y acceso a los servicios de SESC a través de portal online.',
        client: 'SESC',
        image: imgSesc,
        link: '/projetos/sesc'
      },
      {
        tags: ['PORTAL', 'LIFERAY', 'UX UI DESIGN'],
        description: 'Ampliación de la transparencia y divulgación de las acciones realizadas, con un aumento promedio del 60%.',
        client: 'EJÉRCITO BRASILEÑO',
        image: imgExercitobrasileiro,
        link: '/projetos/exercito-brasileiro'
      }
    ]
  };
  
  const title = {
    pt: <>Projetos<br />mais recentes</>,
    en: <>Recent<br />Projects</>,
    es: <>Proyectos<br />recientes</>
  };
  
  const description1 = {
    pt: 'Estruturo e escalo práticas e processos de design de produto dentro das equipes.',
    en: 'I structure and scale product design practices and processes within teams.',
    es: 'Estructuro y escalo prácticas y procesos de diseño de producto dentro de los equipos.'
  };
  
  const description2 = {
    pt: 'Conduzo soluções desde a fase de Discovery, Delivery, Entrega e Evolução, sempre com foco em inovação e impacto real.',
    en: 'I lead solutions from Discovery, Delivery, Launch and Evolution phases, always focusing on innovation and real impact.',
    es: 'Conduzco soluciones desde la fase de Discovery, Delivery, Entrega y Evolución, siempre con foco en innovación e impacto real.'
  };

  const projects = projectsData[language];

  return (
    <section className="bg-[#f9fafc] w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-[150px] py-12 md:py-20 lg:py-[150px]">
        {/* Mobile: 1 coluna | Tablet/Desktop: 12 colunas (4 + 8) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 md:items-start">
          {/* Left Column - Info - Mobile: stack | Tablet/Desktop: 4 colunas */}
          <div className="md:col-span-4">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.3] mb-4 md:mb-6">
              {title[language]}
            </h2>
            
            <p className="text-[#71717a] text-base md:text-lg leading-relaxed mb-4 md:mb-8">
              {description1[language]}
            </p>
            
            <p className="text-[#71717a] text-base md:text-lg leading-relaxed mb-8 md:mb-12">
              {description2[language]}
            </p>

            {/* Statistics - 3 colunas em todas as versões */}
            <div className="flex flex-row justify-between gap-3 md:gap-8">
              <div className="flex-1 md:flex-none">
                <div className="text-[10px] md:text-sm text-[#a1a1aa] mb-1">JOURNEY</div>
                <div className="text-[24px] md:text-[40px] mb-1 md:mb-2">60</div>
                <p className="text-[9px] md:text-sm text-[#a1a1aa] leading-tight">
                  {language === 'pt' ? 'PROJETOS' : language === 'en' ? 'PROJECTS' : 'PROYECTOS'}
                </p>
              </div>
              <div className="flex-1 md:flex-none">
                <div className="text-[10px] md:text-sm text-[#a1a1aa] mb-1">DISCOVERY</div>
                <div className="text-[24px] md:text-[40px] mb-1 md:mb-2">15</div>
                <p className="text-[9px] md:text-sm text-[#a1a1aa] leading-tight">
                  <span className="md:hidden">UX DESIGN &<br /> RESEARCH</span>
                  <span className="hidden md:inline">UX DESIGN<br />& UX RESEARCH</span>
                </p>
              </div>
              <div className="flex-1 md:flex-none">
                <div className="text-[10px] md:text-sm text-[#a1a1aa] mb-1">DELIVERY</div>
                <div className="text-[24px] md:text-[40px] mb-1 md:mb-2">55</div>
                <p className="text-[9px] md:text-sm text-[#a1a1aa] leading-tight">
                  USER
                  <br className="md:hidden xl:block 2xl:hidden" />
                  {' '}INTERFACE
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Project Cards - Mobile: stack | Tablet/Desktop: 8 colunas */}
          <div className="md:col-span-8">
            <div className="flex flex-col gap-6 md:gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}