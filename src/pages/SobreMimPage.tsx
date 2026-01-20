import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { Award, Briefcase, GraduationCap, Sparkles, Target, Zap, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { useContactModal } from '../contexts/ContactModalContext';
import { useLanguage } from '../contexts/LanguageContext';
import { t, timelineTranslations } from '../data/translations';
import { getTimelineData } from '../data/timelineData';
import profileImage from 'figma:asset/627e28723f73251d5b4ec5f57f743d323d92d735.png';
import awsBadge from 'figma:asset/6c53271c4e2d703c303aa01b814c14aa62455023.png';
import ibmBadge from 'figma:asset/9d85e6990e325559eb288eb948e3b9b5e9ef4739.png';
import pmiBadge from 'figma:asset/51cd76052fca2bcd68adb1f40ea6b12b24d6f07a.png';
import pendoBadge from 'figma:asset/4b7555cab46c273ebab0edc6fbfabc68e6f43e97.png';
import scrumBadge from 'figma:asset/afd74af4611ecaaf9e5eb280d4a4dffbececa4c4.png';
import plgBadge from 'figma:asset/73891da703eaaff78521c7fa7598fa2285c0facc.png';
import quantumBadge from 'figma:asset/e901a75ab3c6a61e350893e1177a6d351665cbff.png';
import lottieBadge from 'figma:asset/5692223cfca0b921a06899308798efab3a9f2611.png';

export function SobreMimPage() {
  const [currentIASlide, setCurrentIASlide] = useState(0);
  const [currentCertSlide, setCurrentCertSlide] = useState(0);
  const timelineScrollRef = useRef<HTMLDivElement>(null);
  const certDragStart = useRef(0);
  const certDragStartX = useRef(0);
  const { openModal } = useContactModal();
  const { language } = useLanguage();
  const iaDragStartX = useRef(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Scroll timeline to the end (most recent) on mount
    if (timelineScrollRef.current) {
      timelineScrollRef.current.scrollLeft = timelineScrollRef.current.scrollWidth;
    }
  }, []);

  // Autoplay for IA Projects carousel (mobile & tablet only)
  useEffect(() => {
    if (window.innerWidth < 1024) { // Only mobile and tablet
      const intervalId = setInterval(() => {
        setCurrentIASlide((prev) => {
          if (prev >= projectsIA.length - 1) {
            return 0; // Loop back to start
          }
          return prev + 1;
        });
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(intervalId);
    }
  }, [currentIASlide]);

  // Autoplay for Certifications carousel (mobile & tablet only)
  useEffect(() => {
    if (window.innerWidth < 1024) { // Only mobile and tablet
      const intervalId = setInterval(() => {
        setCurrentCertSlide((prev) => {
          if (prev >= certifications.length - 1) {
            return 0; // Loop back to start
          }
          return prev + 1;
        });
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(intervalId);
    }
  }, [currentCertSlide]);

  // Handle IA Projects carousel drag/swipe
  const handleIADragStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    iaDragStartX.current = clientX;
  };

  const handleIADragEnd = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : ('clientX' in e ? e.clientX : iaDragStartX.current);
    const diff = iaDragStartX.current - clientX;
    const threshold = 50;

    if (diff > threshold && currentIASlide < projectsIA.length - 1) {
      setCurrentIASlide(currentIASlide + 1);
    } else if (diff < -threshold && currentIASlide > 0) {
      setCurrentIASlide(currentIASlide - 1);
    }
  };

  // Handle certification carousel drag/swipe
  const handleCertDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    certDragStartX.current = clientX;
    certDragStart.current = currentCertSlide;
  };

  const handleCertDragEnd = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : ('clientX' in e ? e.clientX : certDragStartX.current);
    const diff = certDragStartX.current - clientX;
    const threshold = 50;

    if (diff > threshold && currentCertSlide < certifications.length - 1) {
      setCurrentCertSlide(currentCertSlide + 1);
    } else if (diff < -threshold && currentCertSlide > 0) {
      setCurrentCertSlide(currentCertSlide - 1);
    }
  };

  const timelineData = getTimelineData(language);

  const projectsIA = [
    {
      title: 'Diagonal Social',
      description: t('diagonalSocialDesc', language),
      tags: ['IA', 'Automação', 'Analytics']
    },
    {
      title: 'Midea GenAI Invoices',
      description: t('mideaGenAIDesc', language),
      tags: ['GenAI', 'OCR', 'Validação']
    },
    {
      title: 'G2 Base (Gerdau)',
      description: t('g2BaseDesc', language),
      tags: ['Big Data', 'IA', 'Indústria']
    },
    {
      title: 'LCS | ChargeBack Safe',
      description: t('lcsChargebackDesc', language),
      tags: ['IA', 'Fintech', 'Segurança']
    }
  ];

  const areasAtuacao = [
    '#Finanças',
    '#Cibersegurança',
    '#Indústria',
    '#E-commerce',
    '#GovTech',
    '#Saúde'
  ];

  const valueProps = [
    {
      icon: Sparkles,
      title: t('aiProductDesignerTitle', language),
      description: t('aiProductDesignerDesc', language)
    },
    {
      icon: Briefcase,
      title: t('productManagementTitle', language),
      description: t('productManagementDesc', language)
    },
    {
      icon: Target,
      title: t('projectManagementTitle', language),
      description: t('projectManagementDesc', language)
    },
    {
      icon: Zap,
      title: t('featureDevelopmentTitle', language),
      description: t('featureDevelopmentDesc', language)
    }
  ];

  const certifications = [
    { 
      name: 'AWS Partner: Technical Accredited - Training Badge',
      organization: 'Amazon Web Services Training and Certification',
      date: 'Emitida 23 de nov. de 2025',
      image: awsBadge,
      link: 'https://www.credly.com/badges/47e736ea-899c-40b2-b011-377d0830cf1b/assets/_url'
    },
    { 
      name: 'Enterprise Design Thinking Practitioner',
      organization: 'IBM',
      date: 'Emitida 26 de mai. de 2025',
      image: ibmBadge,
      link: 'https://www.credly.com/badges/88e27827-b0bf-4e3e-a022-604e3371f098/assets/_url'
    },
    { 
      name: 'Fundamentals of Predictive Project Management',
      organization: 'Project Management Institute',
      date: 'Emitida 26 de mai. de 2025',
      image: pmiBadge,
      link: 'https://www.credly.com/badges/d782cd80-8e37-4543-83b4-07099e1f3d2d/assets/_url'
    },
    { 
      name: 'Product Discovery Certification',
      organization: 'Pendo',
      date: 'Emitida 3 de jun. de 2025',
      image: pendoBadge,
      link: 'https://www.credly.com/badges/eef6edc7-4c66-4d22-bef8-67d1a8ee9dc5/assets/_url'
    },
    { 
      name: 'Scrum Foundation Professional Certificate (SFPC)',
      organization: 'Certiprof',
      date: 'Emitida 10 de mai. de 2025',
      image: scrumBadge,
      link: 'https://www.credly.com/badges/your-scrum-badge-id/assets/_url'
    },
    { 
      name: 'Product Led Growth',
      organization: 'Wes Bush',
      date: 'Emitida 21 de jun. de 2025',
      image: plgBadge,
      link: 'https://drive.google.com/file/d/1aJfPhkpgvT-ZY2cP6HUa5FDUuS43qXFd/view'
    },
    { 
      name: 'Quantum Computing',
      organization: 'Q-CTRL',
      date: 'Emitida dez. de 2025',
      image: quantumBadge
    },
    { 
      name: 'LottieFiles for Figma Certification',
      organization: 'LottieFiles',
      date: 'Emitida jun. de 2025',
      image: lottieBadge,
      link: 'https://drive.google.com/file/d/1yFq5M4_RWTgFY83OYka7BdFwunCnQWbL/view'
    }
  ];

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

  return (
    <PageTransition>
      <div className="w-full bg-white min-h-screen pt-[85px]">
        {/* Hero Section */}
        <section className="w-full px-6 md:px-8 lg:px-[150px] py-12 md:py-16 lg:py-24">
          <div className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              {/* Main Title with Photo */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
                <h1 className="text-[36px] md:text-[52px] lg:text-[64px] leading-[1.2]">
                  {t('hello', language)}
                </h1>
                <img 
                  src={profileImage} 
                  alt="Flavio Jorge" 
                  className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] rounded-full object-cover border-4 border-white shadow-xl"
                />
                <h1 className="text-[36px] md:text-[52px] lg:text-[64px] leading-[1.2]">
                  Flavio Jorge!
                </h1>
              </div>

              {/* Subtitle */}
              <div className="mb-6 md:mb-8">
                <p className="text-[24px] md:text-[28px] lg:text-[32px] text-[#18181b] leading-[1.3]">
                  {t('headOfProductDesign', language)}
                </p>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col items-center gap-4 md:gap-6">
                <button 
                  onClick={openModal}
                  className="px-6 py-3 md:px-8 md:py-4 bg-[#18181b] text-white rounded-full hover:bg-[#1760ff] transition-all duration-300 text-[16px] md:text-[18px] shadow-lg hover:shadow-xl"
                >
                  {t('scheduleConversation', language)}
                </button>
                <p className="text-[16px] md:text-[18px] text-[#71717a] max-w-[300px] md:max-w-[500px]">
                  {t('aboutMeSubtitle', language)}
                </p>
              </div>

              {/* Divider */}
              <div className="mt-12 md:mt-16 h-[2px] bg-gradient-to-r from-transparent via-[#e5e5e5] to-transparent w-full" />
            </motion.div>
          </div>
        </section>

        {/* Timeline Section - Horizontal scroll mantido apenas em desktop */}
        <section className="w-full px-6 md:px-8 lg:px-[150px] py-12 md:py-16 lg:py-[75px]">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] mb-12 md:mb-16 lg:mb-24">{t('careerEvolution', language)}</h2>
            
            {/* Scrollable Timeline Container - Hidden no mobile */}
            <div className="hidden lg:block relative overflow-x-auto scrollbar-hide pb-8" dir="rtl">
              <div className="relative min-w-max py-20" dir="ltr">
                {/* Main Timeline Line */}
                <div className="absolute left-0 right-0 top-[60px] h-[3px] bg-gradient-to-r from-[#e5e5e5] via-[#71717a] to-[#1760ff]" />

                {/* Timeline Items Container */}
                <div className="relative flex items-start gap-32 px-12">
                  {timelineData.map((item, index) => {
                    const isHighlight = item.highlight;
                    
                    return (
                      <motion.div
                        key={index}
                        className="relative flex flex-col items-center flex-shrink-0"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.08, duration: 0.5 }}
                      >
                        {/* Timeline Dot */}
                        <div className={`relative z-10 w-5 h-5 rounded-full border-[5px] mb-3 ${
                          isHighlight 
                            ? 'bg-[#1760ff] border-white shadow-xl shadow-[#1760ff]/50 ring-4 ring-[#1760ff]/20' 
                            : item.type === 'work' 
                              ? 'bg-white border-[#1760ff] shadow-lg' 
                              : 'bg-white border-[#a1a1aa] shadow-lg'
                        } hover:scale-150 transition-all duration-300 cursor-pointer`} />
                        
                        {/* Year Label Below Dot */}
                        <div className={`mb-4 px-3 py-1 rounded-full text-xs whitespace-nowrap ${
                          isHighlight 
                            ? 'bg-[#1760ff] text-white shadow-lg shadow-[#1760ff]/30' 
                            : 'bg-[#f9fafc] text-[#71717a] border border-[#e5e5e5]'
                        }`}>
                          {item.period}
                        </div>

                        {/* Connecting Line */}
                        <div className={`w-[3px] h-8 ${
                          isHighlight ? 'bg-gradient-to-b from-[#1760ff] to-transparent' : 'bg-[#e5e5e5]'
                        }`} />

                        {/* Content Card */}
                        <div className="w-[320px] mt-4">
                          <div className={`bg-white rounded-[16px] p-8 border-2 ${
                            isHighlight ? 'border-[#1760ff] shadow-xl shadow-[#1760ff]/20' : 'border-[#e5e5e5]'
                          } hover:shadow-2xl hover:border-[#1760ff] hover:scale-105 transition-all duration-300 group`}>
                            
                            {/* Icon & Type */}
                            <div className="flex items-center gap-2 mb-4">
                              {item.type === 'work' ? (
                                <div className={`p-2 rounded-lg ${isHighlight ? 'bg-[#1760ff]/10' : 'bg-[#f9fafc]'}`}>
                                  <Briefcase className={`w-5 h-5 ${isHighlight ? 'text-[#1760ff]' : 'text-[#71717a]'}`} />
                                </div>
                              ) : (
                                <div className={`p-2 rounded-lg ${isHighlight ? 'bg-[#1760ff]/10' : 'bg-[#f9fafc]'}`}>
                                  <GraduationCap className={`w-5 h-5 ${isHighlight ? 'text-[#1760ff]' : 'text-[#71717a]'}`} />
                                </div>
                              )}
                              <span className="text-xs uppercase tracking-wider text-[#a1a1aa]">
                                {item.type === 'work' ? timelineTranslations.work[language] : timelineTranslations.education[language]}
                              </span>
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-[18px] leading-tight mb-3 group-hover:text-[#1760ff] transition-colors">
                              {item.role}
                            </h3>
                            
                            {/* Company */}
                            {item.company && (
                              <p className="text-sm text-[#71717a] leading-relaxed mb-4">
                                {item.company}
                              </p>
                            )}

                            {/* Evolution Timeline */}
                            {item.evolution && (
                              <div className="space-y-3 mb-4">
                                {item.evolution.map((evo, evoIndex) => (
                                  <div key={evoIndex} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#1760ff] flex-shrink-0" />
                                    <div className="flex items-baseline gap-2">
                                      <span className="text-xs text-[#1760ff]">{evo.year}</span>
                                      <span className="text-sm text-[#18181b]">{evo.title}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Description */}
                            {item.description && (
                              <p className="text-sm text-[#71717a] leading-relaxed mb-4 italic border-l-2 border-[#1760ff] pl-3">
                                {item.description}
                              </p>
                            )}

                            {/* Highlights/Projects */}
                            {item.highlights && (
                              <div className="space-y-2">
                                <h4 className="text-xs uppercase tracking-wider text-[#a1a1aa] mb-2">
                                  {timelineTranslations.featuredProjects[language]}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {item.highlights.map((highlight, highlightIndex) => (
                                    <span
                                      key={highlightIndex}
                                      className="px-3 py-1 bg-[#1760ff]/10 text-xs text-[#1760ff] rounded-full border border-[#1760ff]/20"
                                    >
                                      {highlight}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Sections (for education) */}
                            {item.sections && (
                              <div className="space-y-4">
                                {item.sections.map((section, sectionIndex) => (
                                  <div key={sectionIndex}>
                                    <h4 className="text-xs uppercase tracking-wider text-[#a1a1aa] mb-2">
                                      {section.title}
                                    </h4>
                                    <ul className="space-y-2">
                                      {section.items.map((sectionItem, itemIndex) => (
                                        <li key={itemIndex} className="text-sm text-[#71717a] leading-relaxed flex items-start gap-2">
                                          <span className="text-[#1760ff] mt-1">•</span>
                                          <span>{sectionItem}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Courses (for education) */}
                            {item.courses && (
                              <ul className="space-y-2">
                                {item.courses.map((course, courseIndex) => (
                                  <li key={courseIndex} className="text-sm text-[#71717a] leading-relaxed flex items-start gap-2">
                                    <span className="text-[#1760ff] mt-1">•</span>
                                    <span>{course}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Timeline - Horizontal Scroll no Mobile */}
            <div className="lg:hidden">
              {/* Mobile - Horizontal Scroll com Snap */}
              <div 
                ref={timelineScrollRef}
                className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6"
              >
                <div className="flex gap-4 px-6 py-4">
                  {timelineData.map((item, index) => {
                    const isHighlight = item.highlight;
                    
                    return (
                      <motion.div
                        key={index}
                        className="flex-shrink-0 w-[85vw] snap-center"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                      >
                        <div className={`bg-white rounded-[16px] p-5 border-2 h-full ${
                          isHighlight ? 'border-[#1760ff] shadow-lg' : 'border-[#e5e5e5]'
                        }`}>
                          {/* Period Badge */}
                          <div className={`inline-block mb-3 px-3 py-1 rounded-full text-xs ${
                            isHighlight 
                              ? 'bg-[#1760ff] text-white' 
                              : 'bg-[#f9fafc] text-[#71717a] border border-[#e5e5e5]'
                          }`}>
                            {item.period}
                          </div>

                          {/* Icon & Type */}
                          <div className="flex items-center gap-2 mb-3">
                            {item.type === 'work' ? (
                              <Briefcase className={`w-4 h-4 ${isHighlight ? 'text-[#1760ff]' : 'text-[#71717a]'}`} />
                            ) : (
                              <GraduationCap className={`w-4 h-4 ${isHighlight ? 'text-[#1760ff]' : 'text-[#71717a]'}`} />
                            )}
                            <span className="text-xs uppercase tracking-wider text-[#a1a1aa]">
                              {item.type === 'work' ? timelineTranslations.work[language] : timelineTranslations.education[language]}
                            </span>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-[16px] leading-tight mb-2">
                            {item.role}
                          </h3>
                          
                          {/* Company */}
                          {item.company && (
                            <p className="text-sm text-[#71717a] mb-3">
                              {item.company}
                            </p>
                          )}

                          {/* Evolution */}
                          {item.evolution && (
                            <div className="space-y-2 mb-3">
                              {item.evolution.map((evo, evoIndex) => (
                                <div key={evoIndex} className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-[#1760ff]" />
                                  <span className="text-xs text-[#1760ff]">{evo.year}</span>
                                  <span className="text-sm text-[#18181b]">{evo.title}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {item.description && (
                            <p className="text-sm text-[#71717a] mb-3 italic border-l-2 border-[#1760ff] pl-3">
                              {item.description}
                            </p>
                          )}

                          {item.highlights && (
                            <div className="space-y-2 mb-3">
                              <h4 className="text-xs uppercase tracking-wider text-[#a1a1aa]">
                                {timelineTranslations.featuredProjects[language]}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {item.highlights.map((highlight, hIndex) => (
                                  <span key={hIndex} className="px-2 py-1 bg-[#1760ff]/10 text-xs text-[#1760ff] rounded-full">
                                    {highlight}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {item.sections && (
                            <div className="space-y-3">
                              {item.sections.map((section, sIndex) => (
                                <div key={sIndex}>
                                  <h4 className="text-xs uppercase tracking-wider text-[#a1a1aa] mb-2">
                                    {section.title}
                                  </h4>
                                  <ul className="space-y-1">
                                    {section.items.map((sItem, iIndex) => (
                                      <li key={iIndex} className="text-sm text-[#71717a] flex items-start gap-2">
                                        <span className="text-[#1760ff]">•</span>
                                        <span>{sItem}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}

                          {item.courses && (
                            <ul className="space-y-1">
                              {item.courses.map((course, cIndex) => (
                                <li key={cIndex} className="text-sm text-[#71717a] flex items-start gap-2">
                                  <span className="text-[#1760ff]">•</span>
                                  <span>{course}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Scroll Hint - Mobile only */}
              <div className="md:hidden flex items-center justify-center gap-2 mt-6 text-[#a1a1aa] text-xs">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span>Deslize para a esquerda</span>
              </div>

              {/* Tablet - Vertical Stack */}
              <div className="hidden md:block space-y-8">
                {timelineData.map((item, index) => {
                  const isHighlight = item.highlight;
                  
                  return (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                    >
                      <div className={`bg-white rounded-[16px] p-5 md:p-6 border-2 ${
                        isHighlight ? 'border-[#1760ff] shadow-lg' : 'border-[#e5e5e5]'
                      }`}>
                        {/* Period Badge */}
                        <div className={`inline-block mb-3 px-3 py-1 rounded-full text-xs ${
                          isHighlight 
                            ? 'bg-[#1760ff] text-white' 
                            : 'bg-[#f9fafc] text-[#71717a] border border-[#e5e5e5]'
                        }`}>
                          {item.period}
                        </div>

                        {/* Icon & Type */}
                        <div className="flex items-center gap-2 mb-3">
                          {item.type === 'work' ? (
                            <Briefcase className={`w-4 h-4 ${isHighlight ? 'text-[#1760ff]' : 'text-[#71717a]'}`} />
                          ) : (
                            <GraduationCap className={`w-4 h-4 ${isHighlight ? 'text-[#1760ff]' : 'text-[#71717a]'}`} />
                          )}
                          <span className="text-xs uppercase tracking-wider text-[#a1a1aa]">
                            {item.type === 'work' ? timelineTranslations.work[language] : timelineTranslations.education[language]}
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-[16px] md:text-[18px] leading-tight mb-2">
                          {item.role}
                        </h3>
                        
                        {/* Company */}
                        {item.company && (
                          <p className="text-sm text-[#71717a] mb-3">
                            {item.company}
                          </p>
                        )}

                        {/* Evolution, Description, Highlights, Sections, Courses - Same as desktop */}
                        {item.evolution && (
                          <div className="space-y-2 mb-3">
                            {item.evolution.map((evo, evoIndex) => (
                              <div key={evoIndex} className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#1760ff]" />
                                <span className="text-xs text-[#1760ff]">{evo.year}</span>
                                <span className="text-sm text-[#18181b]">{evo.title}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {item.description && (
                          <p className="text-sm text-[#71717a] mb-3 italic border-l-2 border-[#1760ff] pl-3">
                            {item.description}
                          </p>
                        )}

                        {item.highlights && (
                          <div className="space-y-2">
                            <h4 className="text-xs uppercase tracking-wider text-[#a1a1aa]">
                              {timelineTranslations.featuredProjects[language]}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.highlights.map((highlight, hIndex) => (
                                <span key={hIndex} className="px-2 py-1 bg-[#1760ff]/10 text-xs text-[#1760ff] rounded-full">
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {item.sections && (
                          <div className="space-y-3">
                            {item.sections.map((section, sIndex) => (
                              <div key={sIndex}>
                                <h4 className="text-xs uppercase tracking-wider text-[#a1a1aa] mb-2">
                                  {section.title}
                                </h4>
                                <ul className="space-y-1">
                                  {section.items.map((sItem, iIndex) => (
                                    <li key={iIndex} className="text-sm text-[#71717a] flex items-start gap-2">
                                      <span className="text-[#1760ff]">•</span>
                                      <span>{sItem}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}

                        {item.courses && (
                          <ul className="space-y-1">
                            {item.courses.map((course, cIndex) => (
                              <li key={cIndex} className="text-sm text-[#71717a] flex items-start gap-2">
                                <span className="text-[#1760ff]">•</span>
                                <span>{course}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Scroll Hint - Desktop only */}
            <div className="hidden lg:flex items-center justify-center gap-2 mt-8 text-[#a1a1aa] text-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span>Arraste para a esquerda para ver o passado</span>
            </div>
          </div>
        </section>

        {/* Projects IA Section */}
        <section className="w-full px-6 md:px-8 lg:px-[150px] py-12 md:py-20 lg:py-[150px] bg-[#f9fafc]">
          <div className="max-w-[1440px] mx-auto">
            {/* Header */}
            <div className="mb-12 md:mb-16 lg:mb-24">
              <p className="text-xs md:text-sm uppercase tracking-wider text-[#71717a] mb-3 md:mb-4">{t('iaProjects', language).toUpperCase()}</p>
              <h2 className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] mb-4 md:mb-6">
                {t('aiArchitecture', language)}
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#71717a] max-w-[500px] md:max-w-[700px] leading-relaxed">
                {t('aiProjectsDescription', language)}
              </p>
            </div>

            {/* Cards Grid - Desktop/Tablet | Carousel - Mobile */}
            <div className="hidden md:block">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
              >
                {projectsIA.map((project, index) => (
                  <motion.div
                    key={index}
                    className={`h-full rounded-[16px] p-5 md:p-6 border-2 transition-all duration-300 group flex flex-col ${
                      index === 0 
                        ? 'bg-[#18181b] border-[#18181b] hover:scale-105' 
                        : 'bg-white border-[#e5e5e5] hover:border-[#1760ff] hover:shadow-xl'
                    }`}
                    variants={itemVariants}
                  >
                    {/* Icon */}
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-6 md:mb-8 ${
                      index === 0 ? 'bg-white/10' : 'bg-[#f9fafc]'
                    }`}>
                      <Sparkles className={`w-7 h-7 md:w-8 md:h-8 ${
                        index === 0 ? 'text-white' : 'text-[#1760ff]'
                      }`} />
                    </div>

                    {/* Title */}
                    <h3 className={`text-[24px] md:text-[28px] mb-3 md:mb-4 leading-tight ${
                      index === 0 
                        ? 'text-white' 
                        : 'text-[#18181b] group-hover:text-[#1760ff]'
                    } transition-colors`}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-[14px] md:text-[16px] mb-6 md:mb-8 leading-relaxed flex-grow ${
                      index === 0 ? 'text-white/70' : 'text-[#71717a]'
                    }`}>
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-2 md:px-3 py-1 md:py-1.5 text-xs rounded-full ${
                            index === 0
                              ? 'bg-white/10 text-white border border-white/20'
                              : 'bg-[#f9fafc] text-[#18181b] border border-[#e5e5e5]'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative">
              <div 
                className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
                onTouchStart={handleIADragStart}
                onTouchEnd={handleIADragEnd}
                onMouseDown={(e) => {
                  handleIADragStart(e);
                  e.currentTarget.style.cursor = 'grabbing';
                }}
                onMouseUp={(e) => {
                  handleIADragEnd(e);
                  e.currentTarget.style.cursor = 'grab';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.cursor = 'grab';
                }}
              >
                <motion.div
                  className="flex transition-transform duration-500 ease-out pointer-events-none"
                  animate={{ x: `-${currentIASlide * 100}%` }}
                >
                  {projectsIA.map((project, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2 pointer-events-auto"
                    >
                      <div className={`h-full rounded-[16px] p-5 border-2 transition-all duration-300 flex flex-col ${
                        index === 0 
                          ? 'bg-[#18181b] border-[#18181b]' 
                          : 'bg-white border-[#e5e5e5]'
                      }`}>
                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${
                          index === 0 ? 'bg-white/10' : 'bg-[#f9fafc]'
                        }`}>
                          <Sparkles className={`w-7 h-7 ${
                            index === 0 ? 'text-white' : 'text-[#1760ff]'
                          }`} />
                        </div>

                        {/* Title */}
                        <h3 className={`text-[24px] mb-3 leading-tight ${
                          index === 0 ? 'text-white' : 'text-[#18181b]'
                        }`}>
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className={`text-[14px] mb-6 leading-relaxed flex-grow ${
                          index === 0 ? 'text-white/70' : 'text-[#71717a]'
                        }`}>
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className={`px-2 py-1 text-xs rounded-full ${
                                index === 0
                                  ? 'bg-white/10 text-white border border-white/20'
                                  : 'bg-[#f9fafc] text-[#18181b] border border-[#e5e5e5]'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Dots Indicator Only - Mobile */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {projectsIA.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIASlide ? 'bg-[#1760ff] w-6' : 'bg-[#d4d4d8]'
                    }`}
                    onClick={() => setCurrentIASlide(index)}
                  />
                ))}
              </div>
            </div>


          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="w-full px-6 md:px-8 lg:px-[150px] py-12 md:py-20 lg:py-[150px]">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] mb-10 md:mb-12 lg:mb-16">{t('whatIDeliver', language)}</h2>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              {valueProps.map((prop, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white to-[#f9fafc] rounded-[16px] p-6 md:p-8 lg:p-10 border border-[#e5e5e5] hover:border-[#1760ff] hover:shadow-2xl transition-all duration-300 group"
                  variants={itemVariants}
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#1760ff]/10 rounded-[12px] flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#1760ff] transition-all">
                    <prop.icon className="w-7 h-7 md:w-8 md:h-8 text-[#1760ff] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-[24px] md:text-[28px] mb-3 md:mb-4 group-hover:text-[#1760ff] transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-[16px] md:text-[18px] text-[#71717a] leading-relaxed">
                    {prop.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Metodologia Section */}
        <section className="w-full px-6 md:px-8 lg:px-[150px] py-12 md:py-20 lg:py-[150px] bg-[#18181b]">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] text-white mb-10 md:mb-12 lg:mb-16">{t('methodologyProcess', language)}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {['Discovery', 'Define', 'Develop', 'Delivery'].map((phase, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-[16px] p-6 md:p-8 hover:bg-white/10 hover:border-[#1760ff] transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-[40px] md:text-[48px] text-[#1760ff] mb-3 md:mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-[20px] md:text-[24px] text-white mb-2 md:mb-3">{phase}</h3>
                  <p className="text-[14px] md:text-base text-[#a1a1aa] leading-relaxed">
                    {index === 0 && t('discoveryPhase', language)}
                    {index === 1 && t('definePhase', language)}
                    {index === 2 && t('developPhase', language)}
                    {index === 3 && t('deliveryPhase', language)}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 md:mt-12 bg-[#1760ff]/10 border border-[#1760ff]/20 rounded-[16px] p-6 md:p-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-white text-[16px] md:text-[18px] text-center leading-relaxed">
                {t('fullCycleDescription', language)}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="w-full px-6 md:px-8 lg:px-[150px] py-12 md:py-20 lg:py-[150px] bg-[#f4f4f5]">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] mb-10 md:mb-12 lg:mb-16">{t('certifications', language)} & Badges</h2>
            
            {/* Desktop/Tablet Grid - 2 colunas no tablet, 4 no desktop */}
            <motion.div
              className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              {certifications.map((cert, index) => {
                const CardContent = (
                  <>
                    {/* Badge Image */}
                    <div className="w-full aspect-square rounded-[12px] bg-[#f9fafc] mb-4 md:mb-6 flex items-center justify-center overflow-hidden p-2">
                      <img 
                        src={cert.image} 
                        alt={cert.name}
                        className={`w-full h-full group-hover:scale-110 transition-transform duration-300 ${
                          cert.name === 'Scrum Foundation Professional Certificate (SFPC)' 
                            ? 'object-contain' 
                            : cert.name === 'Quantum Computing' 
                              ? 'object-cover object-[center_60%]' 
                              : 'object-cover'
                        }`}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-[14px] md:text-[16px] mb-2 md:mb-3 leading-tight group-hover:text-[#1760ff] transition-colors min-h-[40px] md:min-h-[48px]">
                      {cert.name}
                    </h3>

                    {/* Organization */}
                    <p className="text-[12px] md:text-[14px] text-[#18181b] mb-2 md:mb-3">
                      {cert.organization}
                    </p>

                    {/* Date */}
                    <p className="text-[11px] md:text-[12px] text-[#71717a]">
                      {cert.date}
                    </p>
                  </>
                );

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                  >
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-[16px] p-4 md:p-6 border border-[#e5e5e5] hover:border-[#1760ff] hover:shadow-xl transition-all duration-300 group flex flex-col h-full cursor-pointer"
                      >
                        {CardContent}
                      </a>
                    ) : (
                      <div className="bg-white rounded-[16px] p-4 md:p-6 border border-[#e5e5e5] hover:border-[#1760ff] hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                        {CardContent}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative">
              <div 
                className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
                onTouchStart={handleCertDragStart}
                onTouchEnd={handleCertDragEnd}
                onMouseDown={(e) => {
                  handleCertDragStart(e);
                  e.currentTarget.style.cursor = 'grabbing';
                }}
                onMouseUp={(e) => {
                  handleCertDragEnd(e);
                  e.currentTarget.style.cursor = 'grab';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.cursor = 'grab';
                }}
              >
                <motion.div
                  className="flex transition-transform duration-500 ease-out pointer-events-none"
                  animate={{ x: `-${currentCertSlide * 100}%` }}
                >
                  {certifications.map((cert, index) => {
                    const CardContent = (
                      <>
                        {/* Badge Image */}
                        <div className="w-full aspect-square rounded-[12px] bg-[#f9fafc] mb-4 flex items-center justify-center overflow-hidden p-2">
                          <img 
                            src={cert.image} 
                            alt={cert.name}
                            className={`w-full h-full ${
                              cert.name === 'Scrum Foundation Professional Certificate (SFPC)' 
                                ? 'object-contain' 
                                : cert.name === 'Quantum Computing' 
                                  ? 'object-cover object-[center_60%]' 
                                  : 'object-cover'
                            }`}
                            draggable="false"
                          />
                        </div>

                        {/* Title */}
                        <h3 className="text-[14px] mb-2 leading-tight min-h-[40px]">
                          {cert.name}
                        </h3>

                        {/* Organization */}
                        <p className="text-[12px] text-[#18181b] mb-2">
                          {cert.organization}
                        </p>

                        {/* Date */}
                        <p className="text-[11px] text-[#71717a]">
                          {cert.date}
                        </p>
                      </>
                    );

                    return (
                      <div
                        key={index}
                        className="w-full flex-shrink-0 px-2 pointer-events-auto"
                      >
                        {cert.link ? (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-[16px] p-4 border border-[#e5e5e5] flex flex-col h-full cursor-pointer"
                          >
                            {CardContent}
                          </a>
                        ) : (
                          <div className="bg-white rounded-[16px] p-4 border border-[#e5e5e5] flex flex-col h-full">
                            {CardContent}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Dots Indicator Only - Mobile */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {certifications.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentCertSlide ? 'bg-[#1760ff] w-6' : 'bg-[#d4d4d8]'
                    }`}
                    onClick={() => setCurrentCertSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}