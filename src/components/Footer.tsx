import { Link } from 'react-router-dom';
import svgPaths from "../imports/svg-it05m3k0sq";
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../data/translations';

export function Footer() {
  const { language } = useLanguage();
  
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-[1440px] mx-auto px-6 min-[768px]:px-8 lg:px-[150px]">
        {/* Divider Line */}
        <div className="h-px w-full bg-white/15" />
        
        <div className="py-12 min-[768px]:py-16 lg:py-20">
          {/* display: grid com grid-template-columns: repeat(3, 1fr) no tablet */}
          <div className="grid grid-cols-1 min-[768px]:grid-cols-3 gap-12 min-[768px]:gap-8">
            {/* Column 1 - Sobre mim */}
            <div className="flex flex-col gap-4 min-[768px]:gap-6">
              <p className="text-xs min-[768px]:text-sm text-[#a1a1aa]">{t('aboutMe', language)}</p>
              <div className="flex flex-col gap-4 min-[768px]:gap-6">
                <Link
                  to="/projetos"
                  className="text-[#f9fafc] hover:text-[#1760ff] transition-colors text-sm min-[768px]:text-base"
                >
                  {t('projects', language)}
                </Link>
                <Link
                  to="/sobre"
                  className="text-[#f9fafc] hover:text-[#1760ff] transition-colors text-sm min-[768px]:text-base"
                >
                  {t('experience', language)}
                </Link>
                <Link
                  to="/conteudos"
                  className="text-[#f9fafc] hover:text-[#1760ff] transition-colors text-sm min-[768px]:text-base"
                >
                  {t('contents', language)}
                </Link>
              </div>
            </div>

            {/* Column 2 - Mais conteúdos */}
            <div className="flex flex-col gap-4 min-[768px]:gap-6">
              <p className="text-xs min-[768px]:text-sm text-[#a1a1aa]">{t('moreContents', language)}</p>
              <div className="flex flex-col gap-4 min-[768px]:gap-6">
                <a 
                  href="https://www.amazon.com.br/dp/B0DPNNJKDC" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#f9fafc] hover:text-[#1760ff] transition-colors text-sm min-[768px]:text-base"
                >
                  {t('bookTitle', language)}
                </a>
                <Link
                  to="/conteudos"
                  className="text-[#f9fafc] hover:text-[#1760ff] transition-colors text-sm min-[768px]:text-base"
                >
                  {t('contents', language)}
                </Link>
              </div>
            </div>

            {/* Column 3 - Contact */}
            <div className="flex flex-col gap-4 min-[768px]:gap-6">
              <p className="text-xs min-[768px]:text-sm text-[#a1a1aa]">{t('contact', language)}</p>
              
              {/* Email */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 min-[768px]:w-6 min-[768px]:h-6" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p353cbe00} stroke="#F9FAFC" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs min-[768px]:text-sm text-[#f9fafc]">hello@flaviojorge.com</span>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 min-[768px]:gap-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/flaviojorges/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 p-2 border border-[#f9fafc] rounded-[10px] hover:border-[#1760ff] hover:bg-[#1760ff]/10 transition-colors flex items-center justify-center group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p183f18f0} stroke="#F9FAFC" className="group-hover:stroke-[#1760ff] transition-colors" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p479e400} stroke="#F9FAFC" className="group-hover:stroke-[#1760ff] transition-colors" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p35cb6200} stroke="#F9FAFC" className="group-hover:stroke-[#1760ff] transition-colors" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                {/* Medium/Blog */}
                <a
                  href="https://www.linkedin.com/in/flaviojorges/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 p-2 border border-[#f9fafc] rounded-[10px] hover:border-[#1760ff] hover:bg-[#1760ff]/10 transition-colors flex items-center justify-center group"
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
                  className="w-10 h-10 p-2 border border-[#f9fafc] rounded-[10px] hover:border-[#1760ff] hover:bg-[#1760ff]/10 transition-colors flex items-center justify-center group"
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
        </div>
      </div>

      {/* Ribbon */}
      <div className="bg-black border-t border-[#e5e5e5]">
        <div className="max-w-[1440px] mx-auto px-6 min-[768px]:px-8 lg:px-[150px] py-4 min-[768px]:py-6">
          <p className="text-xs min-[768px]:text-sm text-white text-center">
            {t('copyright', language)}
          </p>
        </div>
      </div>
    </footer>
  );
}