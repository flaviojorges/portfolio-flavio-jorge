import { PageTransition } from './components/PageTransition';
import { useLanguage } from './contexts/LanguageContext';
import { t, translateTag } from './data/translations';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import imgCaseDestaque from "figma:asset/1dd0edce46dfcb5e442750b16ce3e4a26916aa55.png";
import imgTheOneLife from "figma:asset/7b827668320a40c0d18c4c7750d1b31a9236f746.png";
import imgAnjodebolso from "figma:asset/e73330e2c1b943a0654616e85855b5c398fc5851.png";
import imgSesc from "figma:asset/c9faf9ffd44bf549cd6aa7c224eada676eedd745.png";
import imgExercitobrasileiro from "figma:asset/fdec08813c594ce31e15a3f6db6fa7aad50902ee.png";

export default function Projetos() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProject = {
    tags: ['SISTEMA', 'ANTIFRAUDE', 'CIBERSEGURANÇA'].map(tag => translateTag(tag, language)),
    title: language === 'pt'
      ? 'Redução média de 30-60% <br />de fraudes e até 40-45% de <br />queda em chargebacks.'
      : language === 'en'
      ? 'Average reduction of 30-60% <br />in fraud and up to 40-45% <br />drop in chargebacks.'
      : 'Reducción promedio de 30-60% <br />en fraudes y hasta 40-45% de <br />caída en chargebacks.',
    client: 'RIOCARD MAIS / MAIS MOBI',
    image: imgCaseDestaque,
    link: '/projetos/riocard'
  };

  const impactProjects = [
    {
      tags: ['E-COMMERCE', 'REDESIGN', 'CONVERSÃO'].map(tag => translateTag(tag, language)),
      description: language === 'pt'
        ? 'Redesign da experiência de compra da The One Life para unir design de alto nível e resultados de conversão.'
        : language === 'en'
        ? 'Redesign of The One Life shopping experience to combine high-level design and conversion results.'
        : 'Rediseño de la experiencia de compra de The One Life para unir diseño de alto nivel y resultados de conversión.',
      client: 'THE ONE LIFE | JOÃO APOLINÁRIO',
      image: imgTheOneLife,
      link: '/projetos/g2-base'
    },
    {
      tags: ['APP', 'PLG', 'ONBOARDING', 'GAMIFICAÇÃO'].map(tag => translateTag(tag, language)),
      description: language === 'pt'
        ? 'Projetando redução de 25-35% no churn e aumento de 40-60% no engajamento.'
        : language === 'en'
        ? 'Designing 25-35% churn reduction and 40-60% engagement increase.'
        : 'Diseñando reducción de 25-35% en churn y aumento de 40-60% en engagement.',
      client: 'ANJO DE BOLSO',
      image: imgAnjodebolso,
      link: '/projetos/anjo-de-bolso'
    },
    {
      tags: ['PORTAL', 'DESIGN', 'UX'].map(tag => translateTag(tag, language)),
      description: language === 'pt'
        ? 'Facilitação à credencial e o acesso aos serviços do SESC através de portal online.'
        : language === 'en'
        ? 'Facilitation of credential and access to SESC services through online portal.'
        : 'Facilitación de credencial y acceso a los servicios del SESC a través de portal online.',
      client: 'SESC',
      image: imgSesc,
      link: '/projetos/sesc'
    },
    {
      tags: ['PORTAL', 'DESIGN', 'UX'].map(tag => translateTag(tag, language)),
      description: language === 'pt'
        ? 'Ampliação da transparência e divulgação das ações realizadas, com aumento médio de 60%.'
        : language === 'en'
        ? 'Expansion of transparency and disclosure of actions taken, with an average increase of 60%.'
        : 'Ampliación de la transparencia y divulgación de las acciones realizadas, con aumento promedio de 60%.',
      client: language === 'pt' ? 'EXÉRCITO BRASILEIRO' : language === 'en' ? 'BRAZILIAN ARMY' : 'EJÉRCITO BRASILEÑO',
      image: imgExercitobrasileiro,
      link: '/projetos/exercito-brasileiro'
    }
  ];

  return (
    <PageTransition>
      <main className="bg-white pt-[85px]">
        {/* SEÇÃO: PROJETO EM DESTAQUE */}
        <section className="pt-12 md:pt-20 lg:pt-[120px] pb-8 md:pb-12 lg:pb-[80px]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-[150px]">
            {/* Header com Título e Métricas - Empilhamento vertical no mobile */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-0 mb-8 md:mb-10 lg:mb-12">
              <h1 className="text-[28px] md:text-[32px] text-[#18181b] leading-[1.2]">
                {language === 'pt' ? 'Projeto' : language === 'en' ? 'Featured' : 'Proyecto'}<br />
                {language === 'pt' ? 'em Destaque' : language === 'en' ? 'Project' : 'Destacado'}
              </h1>
              
              {/* Métricas - Horizontal no mobile com tamanhos reduzidos */}
              <div className="flex flex-row justify-between gap-3 md:justify-start md:gap-8 lg:gap-12">
                <div className="flex-1 md:flex-none">
                  <div className="text-[10px] md:text-xs text-[#a1a1aa] uppercase tracking-wider mb-1">{t('journey', language)}</div>
                  <div className="text-[24px] md:text-[32px] text-[#18181b] mb-1">+60</div>
                  <p 
                    className="text-[9px] md:text-xs text-[#a1a1aa] uppercase tracking-wider leading-tight"
                    dangerouslySetInnerHTML={{ __html: t('projectsCount', language) }}
                  />
                </div>
                <div className="flex-1 md:flex-none">
                  <div className="text-[10px] md:text-xs text-[#a1a1aa] uppercase tracking-wider mb-1">{t('discovery', language)}</div>
                  <div className="text-[24px] md:text-[32px] text-[#18181b] mb-1">+15</div>
                  <p 
                    className="text-[9px] md:text-xs text-[#a1a1aa] uppercase tracking-wider leading-tight"
                    dangerouslySetInnerHTML={{ __html: t('uxDesignResearch', language) }}
                  />
                </div>
                <div className="flex-1 md:flex-none">
                  <div className="text-[10px] md:text-xs text-[#a1a1aa] uppercase tracking-wider mb-1">{t('delivery', language)}</div>
                  <div className="text-[24px] md:text-[32px] text-[#18181b] mb-1">+60</div>
                  <p 
                    className="text-[9px] md:text-xs text-[#a1a1aa] uppercase tracking-wider leading-tight"
                    dangerouslySetInnerHTML={{ __html: t('yearsOfExperience', language) }}
                  />
                </div>
              </div>
            </div>

            {/* Card Destaque - Banner Grande */}
            <Link to={featuredProject.link} className="block group">
              <div className="relative h-[320px] md:h-[350px] lg:h-[380px] rounded-[20px] md:rounded-[32px] overflow-hidden bg-gradient-to-br from-[#1a0c3e] via-[#2a1854] to-[#0f0528]">
                {/* Imagem de fundo */}
                <div 
                  className="absolute inset-0 opacity-90"
                  style={{
                    backgroundImage: `url(${featuredProject.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center right'
                  }}
                />
                
                {/* Gradiente de proteção */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, rgba(26, 12, 62, 0.95) 0%, rgba(26, 12, 62, 0.8) 50%, rgba(0, 0, 0, 0) 90%)'
                  }}
                />

                {/* Conteúdo - Centralizado verticalmente */}
                <div className="relative z-10 h-full flex items-center p-6 md:p-10 lg:p-12">
                  <div className="max-w-[280px] md:max-w-[450px] lg:max-w-[600px]">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                      {featuredProject.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 md:px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] md:text-xs text-white uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Texto Principal em Bold */}
                    <p className="text-white text-[18px] md:text-[24px] lg:text-[28px] leading-[1.4] mb-3 md:mb-4">
                      {featuredProject.title}
                    </p>
                    
                    {/* Client */}
                    <p className="text-[#1760ff] text-xs md:text-sm uppercase tracking-wider group-hover:underline">
                      {featuredProject.client}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* SEÇÃO: PROJETOS DE ALTO IMPACTO */}
        <section className="py-8 md:py-12 lg:py-[80px] bg-[#fafafa]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-[150px]">
            <h2 className="text-[24px] md:text-[28px] text-[#18181b] mb-8 md:mb-10 lg:mb-12">{t('highImpactProjects', language)}</h2>
            
            {/* Lista de Projetos com Stagger */}
            <motion.div 
              className="space-y-6 md:space-y-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {impactProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <Link 
                    to={project.link}
                    className="block group"
                  >
                    <div className="bg-white rounded-[20px] md:rounded-[24px] p-5 md:p-8 transition-all hover:-translate-y-1" style={{ boxShadow: '0px 10px 10px 0px rgba(197, 202, 206, 0.05)' }}>
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                        {/* Conteúdo - Full width no mobile, 8 colunas no desktop */}
                        <div className="lg:col-span-8 flex flex-col justify-center">
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 md:px-3 py-1 border border-[#e4e4e7] rounded-full text-[10px] md:text-xs text-[#71717a] uppercase tracking-wider"
                              >
                                {translateTag(tag, language)}
                              </span>
                            ))}
                          </div>

                          {/* Descrição em Semi-Bold */}
                          <p className="text-[#18181b] text-[16px] md:text-[18px] leading-[1.5] mb-3 font-semibold">
                            {project.description}
                          </p>

                          {/* Client */}
                          <p className="text-[#1760ff] text-xs md:text-sm uppercase tracking-wider group-hover:underline">
                            {project.client}
                          </p>
                        </div>

                        {/* Imagem - Full width no mobile, 4 colunas no desktop */}
                        <div className="lg:col-span-4">
                          <div className="relative h-[180px] md:h-[200px] lg:h-[220px] rounded-[12px] md:rounded-[16px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                            <img 
                              src={project.image}
                              alt={`${project.client} - ${project.description}`}
                              loading="lazy"
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}