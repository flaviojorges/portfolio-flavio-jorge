import { Language } from '../contexts/LanguageContext';
import { timelineTranslations } from './translations';

export interface TimelineItem {
  period: string;
  role: string;
  company?: string;
  type: 'work' | 'education';
  highlight?: boolean;
  evolution?: { year: string; title: string }[];
  description?: string;
  highlights?: string[];
  courses?: string[];
  sections?: {
    title: string;
    items: string[];
  }[];
}

// Helper function to get translated value
function tt(key: keyof typeof timelineTranslations, lang: Language): string {
  return timelineTranslations[key][lang] || timelineTranslations[key]['pt'];
}

export function getTimelineData(language: Language): TimelineItem[] {
  return [
    {
      period: '2010 - 2012',
      role: tt('role_designer_editor', language),
      company: 'DC Studio Produções',
      type: 'work',
      evolution: [
        { year: '2010', title: 'Editor & Design' },
        { year: '2012', title: 'Videomaker' }
      ]
    },
    {
      period: '2014 - 2021',
      role: tt('role_senior_visual', language),
      company: 'Modality Digital',
      type: 'work',
      evolution: [
        { year: '2014', title: 'Senior Visual Design' },
        { year: '2018', title: 'UX UI Designer' }
      ],
      description: language === 'pt' 
        ? 'Atuei em projetos internacionais para Portugal pelo Programa Ibermuseos, Japan Inochi Kotoba e Londres para o mercado Trader'
        : language === 'en'
        ? 'I worked on international projects for Portugal through the Ibermuseos Program, Japan Inochi Kotoba and London for the Trader market'
        : 'Actué en proyectos internacionales para Portugal por el Programa Ibermuseos, Japan Inochi Kotoba y Londres para el mercado Trader'
    },
    {
      period: '2018 - 2022',
      role: tt('role_ux_formation', language),
      type: 'education',
      courses: [
        'UX Design (Alura)',
        'UX Writing (ENAP)',
        'UI Design (uiBoost)',
        'Design System (Alura)'
      ]
    },
    {
      period: '2021 - 2023',
      role: tt('role_senior_ux', language),
      company: 'EVOSTRIDER',
      type: 'work',
      highlights: ['SESC', language === 'pt' ? 'Exército' : language === 'en' ? 'Army' : 'Ejército']
    },
    {
      period: '2023',
      role: tt('role_product_metrics', language),
      type: 'education',
      courses: [
        'Product Design 2.0 - PLG (Josias Oliveira)',
        language === 'pt' ? 'Métricas (PM3)' : language === 'en' ? 'Metrics (PM3)' : 'Métricas (PM3)',
        language === 'pt' ? 'Acessibilidade Digital' : language === 'en' ? 'Digital Accessibility' : 'Accesibilidad Digital'
      ]
    },
    {
      period: '2023 - 2024',
      role: tt('role_head_product', language),
      company: 'Engrenagem Virtual',
      type: 'work',
      highlights: [
        language === 'pt' ? 'Aplicativo Anjo de Bolso' : language === 'en' ? 'Anjo de Bolso App' : 'App Anjo de Bolso',
        'Grupo Equatorial',
        'Prevcom'
      ]
    },
    {
      period: '2024',
      role: tt('role_graduation', language),
      type: 'education',
      sections: [
        {
          title: tt('graduation', language),
          items: [
            language === 'pt' 
              ? 'Experiência do Usuário e Modelagem de Projetos Inovadores (UNINASSAU)'
              : language === 'en'
              ? 'User Experience and Innovative Project Modeling (UNINASSAU)'
              : 'Experiencia del Usuario y Modelado de Proyectos Innovadores (UNINASSAU)'
          ]
        },
        {
          title: tt('courses', language),
          items: [
            language === 'pt' ? 'Introdução ao Metaverso (Samsung Ocean)' : language === 'en' ? 'Introduction to Metaverse (Samsung Ocean)' : 'Introducción al Metaverso (Samsung Ocean)',
            language === 'pt' ? 'Introdução ao Game Design (Samsung Ocean)' : language === 'en' ? 'Introduction to Game Design (Samsung Ocean)' : 'Introducción al Game Design (Samsung Ocean)',
            language === 'pt' ? 'Imersão em Inteligência Artificial, Gemini (Google + Alura)' : language === 'en' ? 'Immersion in Artificial Intelligence, Gemini (Google + Alura)' : 'Inmersión en Inteligencia Artificial, Gemini (Google + Alura)'
          ]
        }
      ]
    },
    {
      period: '2025',
      role: tt('role_head_product', language),
      company: 'Locus Software',
      type: 'work',
      highlight: true,
      highlights: [
        language === 'pt' ? 'Projetos de IA' : language === 'en' ? 'AI Projects' : 'Proyectos de IA',
        language === 'pt' ? 'Cibersegurança' : language === 'en' ? 'Cybersecurity' : 'Ciberseguridad',
        language === 'pt' ? 'Aplicações Financeiras' : language === 'en' ? 'Financial Applications' : 'Aplicaciones Financieras'
      ]
    },
    {
      period: '2025',
      role: tt('role_extensions_certs', language),
      type: 'education',
      highlight: true,
      sections: [
        {
          title: tt('universityExtension', language),
          items: [
            language === 'pt' ? 'Design Centrado no Usuário (PUCRS)' : language === 'en' ? 'User-Centered Design (PUCRS)' : 'Diseño Centrado en el Usuario (PUCRS)',
            'Design Thinking (Cruzeiro do Sul)',
            language === 'pt' ? 'Métodos Ágeis (Faculdade Descomplica)' : language === 'en' ? 'Agile Methods (Faculdade Descomplica)' : 'Métodos Ágiles (Faculdade Descomplica)',
            language === 'pt' ? 'Kanban e Ferramentas Ágeis de Gestão de Projetos (FGV)' : language === 'en' ? 'Kanban and Agile Project Management Tools (FGV)' : 'Kanban y Herramientas Ágiles de Gestión de Proyectos (FGV)'
          ]
        },
        {
          title: tt('certifications', language),
          items: ['AWS Partner: Technical Accredited']
        }
      ]
    },
    {
      period: tt('period_ongoing', language),
      role: tt('role_ai_formation', language),
      type: 'education',
      highlight: true,
      sections: [
        {
          title: tt('secondGraduation', language),
          items: [
            language === 'pt' ? 'Inteligência Artificial (UNINOVE)' : language === 'en' ? 'Artificial Intelligence (UNINOVE)' : 'Inteligencia Artificial (UNINOVE)'
          ]
        },
        {
          title: tt('universityExtension', language),
          items: ['Ethics of AI (University of Helsinki)']
        },
        {
          title: tt('courses', language),
          items: ['Product Design 4.0 - Product Led Growth (Josias Oliveira)']
        },
        {
          title: tt('certifications', language),
          items: [
            'AWS Certified Developer',
            'AWS Certified AI Practitioner'
          ]
        }
      ]
    }
  ];
}
