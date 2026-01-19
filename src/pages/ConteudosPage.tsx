import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../data/translations';

// Importar imagens do Figma
import imgBannerDestaques from 'figma:asset/946e5ab1e6b2a13c3ac216329c91a364df1ddfb5.png';
import imgAvatar from 'figma:asset/627e28723f73251d5b4ec5f57f743d323d92d735.png';
import imgTempoRecursos from 'figma:asset/03021a7d115439aee07123d530dea0cec8aa60a4.png';
import imgUIDesignNew from 'figma:asset/d1038c6f83301b3a02e8b816405cfd221ee9c5b1.png';
import imgIA from 'figma:asset/acbbac5fe969578125c99686d46ece285cee7206.png';
import imgPLG from 'figma:asset/aa83dc0e67a73ffcfc1b64a870c565a62417bded.png';

export function ConteudosPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destaques.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destaques.length) % destaques.length);
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Dados dos destaques (carrossel)
  const destaques = [
    {
      id: 1,
      platform: t('substackPlatform', language),
      title: t('substackDescription', language),
      buttonText: t('subscribeNow', language),
      buttonLink: 'https://flaviojorgeux.substack.com/',
      backgroundImage: imgBannerDestaques
    }
    // Adicione mais destaques aqui no futuro
  ];

  // Dados dos artigos
  const artigos = [
    {
      id: 1,
      image: imgUIDesignNew,
      category: t('categoryUIDesign', language),
      title: t('articleTitle1', language),
      author: t('authorName', language),
      authorAvatar: imgAvatar,
      date: '04, JAN/2025',
      link: 'https://flaviojorgeux.substack.com/p/ui-design-alem-da-superficie-46c'
    },
    {
      id: 2,
      image: imgTempoRecursos,
      category: t('categoryMindset', language),
      title: t('articleTitle2', language),
      author: t('authorName', language),
      authorAvatar: imgAvatar,
      date: '15, FEV/2024',
      link: 'https://flaviojorgeux.substack.com/p/tempo-e-recursos'
    },
    {
      id: 3,
      image: imgIA,
      category: t('categoryAI', language),
      title: t('articleTitle3', language),
      author: t('authorName', language),
      authorAvatar: imgAvatar,
      date: '04, JAN/2025',
      link: 'https://flaviojorgeux.substack.com/p/agentes-inteligentes-e-chatbots'
    },
    {
      id: 4,
      image: imgPLG,
      category: t('categoryProduct', language),
      title: t('articleTitle4', language),
      author: t('authorName', language),
      authorAvatar: imgAvatar,
      date: '04, JAN/2025',
      link: 'https://flaviojorgeux.substack.com/p/plg-onboarding-e-gamificacao'
    }
  ];

  return (
    <PageTransition>
      <div className="w-full bg-white min-h-screen pt-[85px]">
        {/* SEÇÃO DESTAQUES */}
        <section className="w-full px-6 md:px-8 lg:px-[150px] py-8 md:py-12 lg:py-16">
          <div className="max-w-[1440px] mx-auto">
            {/* Header: Empilhamento vertical no mobile, horizontal no desktop */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-[#18181b] text-[24px] md:text-[32px] lg:text-[36px]">
                {t('highlights', language)}
              </h2>
              
              {/* Navegação do Carrossel */}
              {destaques.length > 1 && (
                <div className="flex gap-3 md:gap-4">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center hover:bg-[#f4f4f5] transition-colors"
                    aria-label={language === 'pt' ? 'Anterior' : language === 'en' ? 'Previous' : 'Anterior'}
                  >
                    <ChevronLeft className="w-6 h-6 text-[#18181b]" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full bg-[#18181b] flex items-center justify-center hover:bg-[#27272a] transition-colors"
                    aria-label={language === 'pt' ? 'Próximo' : language === 'en' ? 'Next' : 'Siguiente'}
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>
              )}
            </div>

            {/* Carrossel de Destaques - Altura ajustada para mobile */}
            <div className="relative h-[320px] md:h-[300px] lg:h-[300px] rounded-[10px] overflow-hidden">
              {destaques.map((destaque, index) => (
                <div
                  key={destaque.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  {/* Imagem de fundo */}
                  <img
                    src={destaque.backgroundImage}
                    alt={destaque.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Overlay escuro - Gradiente apenas em telas maiores */}
                  <div className="absolute inset-0 bg-black/70 md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-transparent" />

                  {/* Conteúdo - Padding reduzido no mobile */}
                  <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 max-w-full md:max-w-[700px] lg:max-w-[900px]">
                    <p className="text-[#1760ff] text-xs md:text-sm mb-3 md:mb-4 tracking-wider uppercase">
                      {destaque.platform}
                    </p>
                    <h3 className="text-white text-[20px] md:text-[26px] lg:text-[32px] leading-[1.3] mb-6 md:mb-8">
                      {destaque.title}
                    </h3>
                    <a
                      href={destaque.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full md:w-fit lg:w-fit px-6 py-3 md:px-8 md:py-4 border border-white rounded-[10px] text-white text-sm md:text-base hover:bg-white hover:text-[#18181b] transition-all duration-300"
                    >
                      {destaque.buttonText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO ARTIGOS */}
        <section className="w-full px-6 md:px-8 lg:px-[150px] py-8 md:py-12 lg:py-16">
          <div className="max-w-[1440px] mx-auto">
            {/* Header: Empilhamento vertical no mobile, horizontal no desktop */}
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-[#18181b] text-[24px] md:text-[32px] lg:text-[36px]">
                {t('articles', language)}
              </h2>
              <a
                href="https://flaviojorgeux.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1760ff] text-[14px] md:text-[16px] hover:underline transition-all w-fit"
              >
                {t('seeMore', language)}
              </a>
            </div>

            {/* Grid de Artigos: 1 coluna mobile, 2 tablet, 4 desktop */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              {artigos.map((artigo) => (
                <motion.a
                  key={artigo.id}
                  href={artigo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white flex flex-col rounded-[25px] border border-[#e5e5e5] shadow-[0_4px_12px_rgba(197,202,206,0.05)] hover:shadow-[0_8px_24px_rgba(197,202,206,0.12)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
                  variants={itemVariants}
                >
                  {/* Imagem do Card */}
                  <div className="relative h-[180px] md:h-[157px] overflow-hidden">
                    {artigo.id === 1 ? (
                      <ImageWithFallback
                        src={artigo.image}
                        alt={artigo.title}
                        className="w-full h-full object-cover object-[center_60%] group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <img
                        src={artigo.image}
                        alt={artigo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>

                  {/* Container de Conteúdo - Padding reduzido no mobile */}
                  <div className="flex flex-col gap-5 p-5 md:p-6 lg:px-8 lg:py-6">
                    {/* Container de Categoria e Título */}
                    <div className="flex flex-col gap-3">
                      {/* Categoria */}
                      <p className="text-[#1760ff] text-[12px] md:text-[14px] leading-[1.5] uppercase tracking-wide">
                        {artigo.category}
                      </p>

                      {/* Título */}
                      <h3 className="text-[#18181b] text-[18px] md:text-[18px] leading-[1.4] font-semibold group-hover:text-[#1760ff] transition-colors">
                        {artigo.title}
                      </h3>
                    </div>

                    {/* Footer do Card - Autor e Data empilhados no mobile */}
                    <div className="flex flex-col gap-3 pt-3 border-t border-[#f4f4f5] md:flex-row md:items-center md:justify-between md:gap-2">
                      {/* Container do Autor */}
                      <div className="flex gap-2 items-center">
                        {/* Avatar */}
                        <img
                          src={artigo.authorAvatar}
                          alt={artigo.author}
                          className="w-6 h-6 rounded-full object-cover flex-shrink-0"
                        />
                        
                        {/* Nome do Autor */}
                        <p className="text-[#71717a] text-[14px] leading-[1.5]">
                          {artigo.author}
                        </p>
                      </div>

                      {/* Data */}
                      <p className="text-[#71717a] text-[12px] leading-[1.5]">
                        {artigo.date}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}