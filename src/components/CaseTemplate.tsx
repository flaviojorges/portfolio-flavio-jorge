import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Globe, ShoppingBag, Calendar } from 'lucide-react';
import AnjoDeBolsoBanner from '../imports/Container-114-226';
import MaisMobiBanner from './MaisMobiBanner';
import SescBanner from './SescBanner';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../data/translations';

interface CaseTemplateProps {
  // Hero Section (Banner com imagem de fundo)
  heroTags: string[];
  heroTitle: string;
  heroDescription: string;
  heroImage?: string;
  
  // Cards de Info Básica
  clientName: string;
  area: string;
  year: string;
  
  // Banner da Marca (com logo + descrição)
  brandLogo?: string;
  brandDescription: string;
  brandBannerImage?: string;
  brandBannerText?: string;
  
  // Sobre o meu papel
  roleTitle?: string;
  roleDescription: string;
  
  // O que a empresa precisava
  companyNeedTitle?: string;
  companyNeedDescription: string;
  
  // O que os usuários precisavam
  userNeedTitle?: string;
  userNeedDescription: string;
  
  // Principais Resultados
  resultsTitle?: string;
  resultsDescription: string;
  
  // Métricas de Resultado (3 cards)
  metrics?: {
    title: string;
    description: string;
  }[];
  
  // Imagens do projeto
  projectImages?: string[] | { src: string, caption: string }[];
  
  // NDA disclaimer
  showNDADisclaimer?: boolean;
}

export function CaseTemplate({
  heroTags,
  heroTitle,
  heroDescription,
  heroImage,
  clientName,
  area,
  year,
  brandLogo,
  brandDescription,
  brandBannerImage,
  brandBannerText,
  roleTitle,
  roleDescription,
  companyNeedTitle,
  companyNeedDescription,
  userNeedTitle,
  userNeedDescription,
  resultsTitle,
  resultsDescription,
  metrics = [],
  projectImages = [],
  showNDADisclaimer = false
}: CaseTemplateProps) {
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section com Banner */}
      <section className="w-full px-[150px] py-16">
        <div className="max-w-[1440px] mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {heroTags.map((tag, index) => (
              <div 
                key={index} 
                className="px-4 py-1 border border-[#484141] rounded-full"
              >
                <p className="text-[#18181b] text-sm">{tag}</p>
              </div>
            ))}
          </div>

          {/* Título */}
          <h1 className="text-[#1760ff] text-[36px] text-center mb-12">
            {heroTitle}
          </h1>

          {/* Descrição */}
          <p className="text-[#3f3f46] text-[24px] text-center leading-[1.5] max-w-[1000px] mx-auto mb-16">
            {heroDescription}
          </p>

          {/* Cards de Info Básica (Cliente, Área, Ano) */}
          <div className="flex items-center justify-between gap-8 mb-16">
            {/* Card Cliente */}
            <div className="flex gap-4 items-center backdrop-blur-sm shadow-[inset_-1.661px_-1.661px_3.322px_0px_rgba(255,255,255,0.1),inset_1.661px_1.661px_3.322px_0px_rgba(255,255,255,0.1)]">
              <div className="w-[60px] h-[60px] bg-[#1760ff] rounded-[10px] flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col items-start text-left pr-4">
                <p className="text-[#18181b] text-[24px] leading-[1.5]">{clientName}</p>
                <p className="text-[#3f3f46] text-sm leading-[1.5]">{t('client', language)}</p>
              </div>
            </div>

            {/* Card Área */}
            <div className="flex gap-4 items-center backdrop-blur-sm shadow-[inset_-1.661px_-1.661px_3.322px_0px_rgba(255,255,255,0.1),inset_1.661px_1.661px_3.322px_0px_rgba(255,255,255,0.1)]">
              <div className="w-[60px] h-[60px] bg-[#1760ff] rounded-[10px] flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col items-start text-left pr-4">
                <p className="text-[#18181b] text-[24px] leading-[1.5] whitespace-nowrap">{area}</p>
                <p className="text-[#3f3f46] text-sm leading-[1.5]">{t('area', language)}</p>
              </div>
            </div>

            {/* Card Ano */}
            <div className="flex gap-4 items-center backdrop-blur-sm shadow-[inset_-1.661px_-1.661px_3.322px_0px_rgba(255,255,255,0.1),inset_1.661px_1.661px_3.322px_0px_rgba(255,255,255,0.1)]">
              <div className="w-[60px] h-[60px] bg-[#1760ff] rounded-[10px] flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col items-start text-left pr-4">
                <p className="text-[#18181b] text-[24px] leading-[1.5]">{year}</p>
                <p className="text-[#3f3f46] text-sm leading-[1.5]">{t('year', language)}</p>
              </div>
            </div>
          </div>

          {/* Banner da Marca */}
          {clientName === 'Anjo de Bolso' ? (
            <div className="h-[300px]">
              <AnjoDeBolsoBanner />
            </div>
          ) : clientName === 'MaisMobi' ? (
            <div className="h-[300px]">
              <MaisMobiBanner />
            </div>
          ) : clientName === 'SESC' ? (
            <div className="h-[300px]">
              <SescBanner />
            </div>
          ) : brandBannerImage && (
            <div className="relative h-[300px] rounded-[10px] overflow-hidden">
              {/* Imagem de fundo do banner */}
              <img 
                src={brandBannerImage} 
                alt={clientName}
                className="w-full h-full object-cover object-center"
              />
              
              {/* Logo sobreposto à esquerda */}
              {brandLogo && (
                <div className="absolute top-1/2 left-[60px] transform -translate-y-1/2 z-10">
                  <img 
                    src={brandLogo} 
                    alt={`${clientName} Logo`}
                    className="h-[120px] w-auto object-contain"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Seções de Texto */}
      <section className="w-full px-[150px] py-16">
        <div className="max-w-[1440px] mx-auto space-y-12">
          {/* Sobre o meu papel */}
          <div className="space-y-6">
            <h2 className="text-[#18181b] text-[28px] leading-[1.5]">{roleTitle}</h2>
            <p className="text-[#3f3f46] text-[18px] leading-[1.5] whitespace-pre-line">
              {roleDescription}
            </p>
          </div>

          {/* O que a empresa precisava */}
          <div className="space-y-6">
            <h2 className="text-[#18181b] text-[28px] leading-[1.5]">{companyNeedTitle}</h2>
            <div 
              className="text-[#3f3f46] text-[18px] leading-[1.5] whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: companyNeedDescription }}
            />
          </div>

          {/* O que os usuários precisavam */}
          <div className="space-y-6">
            <h2 className="text-[#18181b] text-[28px] leading-[1.5]">{userNeedTitle}</h2>
            <div 
              className="text-[#3f3f46] text-[18px] leading-[1.5] whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: userNeedDescription }}
            />
          </div>

          {/* Principais Resultados */}
          <div className="space-y-6">
            <h2 className="text-[#18181b] text-[28px] leading-[1.5]">{resultsTitle}</h2>
            <p className="text-[#3f3f46] text-[18px] leading-[1.5] whitespace-pre-line">
              {resultsDescription}
            </p>
          </div>

          {/* Cards de Métricas de Resultado */}
          {metrics.length > 0 && (
            <motion.div 
              className="flex items-start justify-between gap-8 pt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              {metrics.map((metric, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col gap-6 items-center text-center w-[230px]"
                  variants={itemVariants}
                >
                  <p className="text-[#1760ff] text-[24px] leading-[1.5] whitespace-pre-line">
                    {metric.title}
                  </p>
                  <p className="text-[#3f3f46] text-[18px] leading-[1.5]">
                    {metric.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Galeria de Imagens */}
      {projectImages.length > 0 && (
        <section className="w-full">
          <motion.div
            className="space-y-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {projectImages.map((image, index) => {
              const imageSrc = typeof image === 'string' ? image : image.src;
              
              return (
                <motion.div 
                  key={index} 
                  className="w-full mb-0"
                  variants={itemVariants}
                >
                  <div className="h-[812px] w-full bg-[#f2faff] overflow-hidden">
                    <ImageWithFallback 
                      src={imageSrc} 
                      alt={`Projeto - Tela ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      )}

      {/* NDA Disclaimer */}
      {showNDADisclaimer && (
        <section className="w-full px-[150px] py-16">
          <div className="max-w-[1440px] mx-auto">
            <p className="text-[#3f3f46] text-[18px] leading-[1.5] whitespace-pre-line">
              {t('ndaDisclaimer', language)}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}