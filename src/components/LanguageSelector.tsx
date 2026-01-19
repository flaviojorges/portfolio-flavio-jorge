import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import svgPaths from "../imports/svg-it05m3k0sq";
import { useLanguage, Language as LangCode } from '../contexts/LanguageContext';

type Language = {
  code: LangCode;
  label: string;
  flag: () => JSX.Element;
};

function BrazilFlag() {
  return (
    <div className="w-5 h-3 relative overflow-hidden">
      <svg className="block w-full h-full" viewBox="0 0 20 12" fill="none">
        <rect width="20" height="12" fill="#009B3A"/>
        <path d="M10 1L18 6L10 11L2 6L10 1Z" fill="#FEDF00"/>
        <circle cx="10" cy="6" r="2" fill="#002776"/>
      </svg>
    </div>
  );
}

function USAFlag() {
  return (
    <div className="w-5 h-3 relative overflow-hidden bg-white">
      <svg className="block w-full h-full" viewBox="0 0 20 12" fill="none">
        <rect width="20" height="12" fill="white"/>
        <rect y="0" width="20" height="0.923" fill="#B22234"/>
        <rect y="1.846" width="20" height="0.923" fill="#B22234"/>
        <rect y="3.692" width="20" height="0.923" fill="#B22234"/>
        <rect y="5.538" width="20" height="0.923" fill="#B22234"/>
        <rect y="7.384" width="20" height="0.923" fill="#B22234"/>
        <rect y="9.23" width="20" height="0.923" fill="#B22234"/>
        <rect y="11.076" width="20" height="0.924" fill="#B22234"/>
        <rect width="8" height="6.462" fill="#3C3B6E"/>
      </svg>
    </div>
  );
}

function SpainFlag() {
  return (
    <div className="w-5 h-3 relative overflow-hidden">
      <svg className="block w-full h-full" viewBox="0 0 20 12" fill="none">
        <rect width="20" height="12" fill="#AA151B"/>
        <rect y="3" width="20" height="6" fill="#F1BF00"/>
        <rect y="0" width="20" height="3" fill="#AA151B"/>
        <rect y="9" width="20" height="3" fill="#AA151B"/>
      </svg>
    </div>
  );
}

const languages: Language[] = [
  { code: 'pt', label: 'Português', flag: BrazilFlag },
  { code: 'en', label: 'English', flag: USAFlag },
  { code: 'es', label: 'Español', flag: SpainFlag },
];

type LanguageSelectorProps = {
  variant?: 'dark' | 'light';
};

export function LanguageSelector({ variant = 'dark' }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const selectedLanguage = languages.find(lang => lang.code === language) || languages[0];
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-white' : 'text-[#18181b]';
  const hoverColor = isDark ? 'hover:text-white/80' : 'hover:text-[#18181b]/80';

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang: Language) => {
    setLanguage(lang.code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2.5 ${textColor} ${hoverColor} transition-colors`}
      >
        <span className="uppercase">{selectedLanguage.code}</span>
        <selectedLanguage.flag />
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg overflow-hidden min-w-[160px] border border-gray-200 z-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                selectedLanguage.code === lang.code ? 'bg-gray-100' : ''
              }`}
            >
              <lang.flag />
              <span className="text-gray-900 text-sm">{lang.label}</span>
              <span className="text-gray-500 text-xs ml-auto uppercase">{lang.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}