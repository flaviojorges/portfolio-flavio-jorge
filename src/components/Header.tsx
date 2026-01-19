import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import svgPaths from "../imports/svg-it05m3k0sq";
import { LanguageSelector } from './LanguageSelector';
import { useContactModal } from '../contexts/ContactModalContext';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../data/translations';

type HeaderProps = {
  variant?: 'dark' | 'light';
};

export function Header({ variant = 'dark' }: HeaderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useContactModal();
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = variant === 'dark';
  const headerBg = isScrolled 
    ? 'bg-white/95 backdrop-blur-md shadow-lg' 
    : isDark 
      ? 'bg-transparent' 
      : 'bg-white';
  const borderColor = isScrolled 
    ? 'border-[#e5e5e5]' 
    : isDark 
      ? 'border-transparent' 
      : 'border-[#e5e5e5]';
  const iconColor = (isScrolled || !isDark) ? 'text-[#18181b]' : 'text-white';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 ${headerBg} border-b ${borderColor} transition-all duration-300`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-[150px]">
          <div className="flex items-center justify-between h-[85px]">
            {/* Menu Button */}
            <button 
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center gap-3 md:gap-4 hover:opacity-80 transition-opacity"
              aria-label="Abrir menu"
            >
              <Menu className={`w-6 h-6 md:w-8 md:h-8 ${iconColor}`} />
            </button>

            {/* Center - Language Selector & CTA */}
            <div className="flex items-center gap-3 md:gap-6">
              <LanguageSelector variant={isScrolled ? 'light' : variant} />
              
              <button 
                className="bg-[#1760ff] px-4 py-2 md:px-8 md:py-4 rounded-[10px] text-white text-sm md:text-base hover:bg-[#0d4fd1] transition-colors"
                onClick={openModal}
              >
                {t('letsChat', language)}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[100] transition-opacity"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-[85%] md:w-[400px] bg-[#0a0a0a] z-[101] transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-12">
          {/* Header com Logo e Close Button */}
          <div className="flex items-center justify-between mb-16">
            {/* Logo */}
            <svg className="w-[42px] h-[39px]" fill="none" viewBox="0 0 42 39">
              <path 
                d={svgPaths.pb1a0c00} 
                fill="#1760FF"
              />
            </svg>

            {/* Close Button */}
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="text-white hover:text-[#1760ff] transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col gap-8">
            <Link
              to="/"
              onClick={() => setIsDrawerOpen(false)}
              className="text-white text-2xl hover:text-[#1760ff] transition-colors"
            >
              {t('home', language)}
            </Link>
            <Link
              to="/projetos"
              onClick={() => setIsDrawerOpen(false)}
              className="text-white text-2xl hover:text-[#1760ff] transition-colors"
            >
              {t('projects', language)}
            </Link>
            <Link
              to="/conteudos"
              onClick={() => setIsDrawerOpen(false)}
              className="text-white text-2xl hover:text-[#1760ff] transition-colors"
            >
              {t('contents', language)}
            </Link>
            <Link
              to="/sobre"
              onClick={() => setIsDrawerOpen(false)}
              className="text-white text-2xl hover:text-[#1760ff] transition-colors"
            >
              {t('aboutMe', language)}
            </Link>
          </nav>

          {/* Social Icons at bottom */}
          <div className="mt-auto flex gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/flaviojorges/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 p-2 border border-white rounded-[10px] hover:border-[#1760ff] hover:bg-[#1760ff]/10 transition-colors flex items-center justify-center group"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p183f18f0} stroke="white" className="group-hover:stroke-[#1760ff] transition-colors" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p479e400} stroke="white" className="group-hover:stroke-[#1760ff] transition-colors" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p35cb6200} stroke="white" className="group-hover:stroke-[#1760ff] transition-colors" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Medium/Blog */}
            <a
              href="https://www.linkedin.com/in/flaviojorges/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 p-2 border border-white rounded-[10px] hover:border-[#1760ff] hover:bg-[#1760ff]/10 transition-colors flex items-center justify-center group"
              aria-label="Blog"
            >
              <svg className="w-6 h-[14px]" fill="none" viewBox="0 0 24 14">
                <path d={svgPaths.pc959900} stroke="white" className="group-hover:stroke-[#1760ff] transition-colors" />
              </svg>
            </a>

            {/* Substack */}
            <a
              href="https://substack.com/@flaviojorge"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 p-2 border border-white rounded-[10px] hover:border-[#1760ff] hover:bg-[#1760ff]/10 transition-colors flex items-center justify-center group"
              aria-label="Substack"
            >
              <svg className="w-[17px] h-5" fill="none" viewBox="0 0 17 20">
                <g clipPath="url(#clip0_1_5225)">
                  <path d={svgPaths.p3ac19f00} stroke="white" className="group-hover:stroke-[#1760ff] transition-colors" strokeWidth="0.5" />
                </g>
                <defs>
                  <clipPath id="clip0_1_5225">
                    <rect fill="white" height="20" width="17" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}