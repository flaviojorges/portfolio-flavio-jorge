import { ComponentType } from 'react';
import RioCardImage from '../imports/ImgRiocardmais';
import G2BaseImage from '../imports/ImgG2Base';
import AnjoDeBolsoImage from '../imports/ImgAnjodebolso';
import SescImage from '../imports/ImgSesc';
import ExercitoImage from '../imports/ImgExercitobrasileiro';

// Imagens do banner e projeto MaisMobi (usadas no componente MaisMobiBanner)
import maismoiLogo from 'figma:asset/61c2384124655978473d2f8e47665b3c7aeda159.png';
import maismobiBanner from 'figma:asset/56386e5f0b08d310560f9c758e256ebc417fe2b5.png';
import maismobiDashboard from 'figma:asset/46d0055dbfb972a53971b3fc9d92766813adab65.png';
import maismobiDashboard2 from 'figma:asset/2c584c71dc52fa8306c86a552d4760ae35c50e3b.png';

// Imagens do projeto Anjo de Bolso (para a galeria de imagens do case)
import anjoImage1 from 'figma:asset/18e59e0ad8fe0cfb00753c29cc5fffd5a993596c.png';
import anjoImage2 from 'figma:asset/043ca475aacc280a0ebe0fad3a8befeceb44fdd2.png';
import anjoImage3 from 'figma:asset/daa437cc60fa2155ccc2829c4761c76bbec990a7.png';
import anjoImage4 from 'figma:asset/71ad43902c75e8d241f78bc3d5e9e42b42b204b9.png';

// Imagens do projeto SESC
import sescImage1 from 'figma:asset/c540a74a2d88b19dc57be1817674db3a013cf3b8.png';
import sescImage2 from 'figma:asset/005a2bdff312a4a741f1a237f07481ba9cc9c7a7.png';
import sescImage3 from 'figma:asset/0abd7c8675a0dda48235b3cf930909c3d6bb03d2.png';

// Imagens do projeto Exército Brasileiro
import exercitoImage1 from 'figma:asset/a08d451f3da5a9a7c3ea914f6f99c6056a300bbd.png';
import exercitoImage2 from 'figma:asset/400c9d0e90fc4af3f9f187b5b1d028539db5074b.png';

// Imagens do projeto The One Life
import theOneLifeLogo from 'figma:asset/d2d61f854ddc0d1bf4cb61a278d28b5b7af90b8e.png';
import theOneLifeBanner from 'figma:asset/cb764cac095e5a2b994d3eae309ce7678393ef89.png';
import theOneLifeImage1 from 'figma:asset/e2713d218abacd30d6c6caa3b3afeb9964f866a4.png';
import theOneLifeImage2 from 'figma:asset/7d2cd3f5aa62b7ccbc3f7642960fd4ad723100b5.png';

export interface Project {
  id: string;
  client: string;
  description: string;
  tags: string[];
  imageComponent: ComponentType;
  link: string;
  
  // Case Detail Content
  fullContent?: {
    heroTitle: string;
    heroDescription: string;
    heroImage?: string;
    clientName: string;
    area: string;
    year: string;
    brandLogo?: string;
    brandDescription: string;
    brandBannerImage?: string;
    brandBannerText?: string;
    roleTitle?: string;
    roleDescription: string;
    companyNeedTitle?: string;
    companyNeedDescription: string;
    userNeedTitle?: string;
    userNeedDescription: string;
    resultsTitle?: string;
    resultsDescription: string;
    metrics?: {
      title: string;
      description: string;
    }[];
    projectImages?: {
      src: string;
      caption?: string;
    }[];
    showNDADisclaimer?: boolean;
  };
}

export const projectsData: Project[] = [
  {
    id: 'riocard',
    client: 'MaisMobi',
    description: 'Solução antifraude preventiva para mobilidade urbana',
    tags: ['SISTEMA', 'IA', 'ANTIFRAUDE', 'CYBERSEGURANÇA'],
    imageComponent: RioCardImage,
    link: '/projetos/riocard',
    fullContent: {
      heroTitle: 'MaisMobi / RioCard Mais',
      heroDescription: 'Com uma redução de em média de 30–60% de fraudes e até 40–45% de queda em chargebacks. No segmento de Mobilidade Urbana, com seu principal case a RioCard Mais.',
      clientName: 'MaisMobi',
      area: 'Antifraude',
      year: '2025',
      brandLogo: maismoiLogo,
      brandDescription: 'Provemos soluções de pagamentos, produtos e serviços para a mobilidade urbana, em diversas cidades do Brasil.',
      brandBannerImage: maismobiBanner,
      roleTitle: 'Sobre o meu papel',
      roleDescription: `Como Head de Produto & Design, liderei a evolução de soluções digitais da MaisMobi voltadas ao setor de mobilidade urbana, com foco em prevenção de fraudes, monitoramento operacional e escalabilidade. Atuei desde Discovery até o Delivery, alinhando design, tecnologia e negócio para transformar uma ferramenta antifraude originalmente reativa em uma solução preventiva, orientada por dados e regras de negócio.

Guiados por princípios de design centrado no usuário e eficiência operacional, desenvolvendo uma plataforma capaz de antecipar riscos, ampliar a visibilidade das operações e fortalecer a segurança do ecossistema de bilhetagem, gerando impacto direto na confiabilidade e sustentabilidade do transporte público.`,
      companyNeedTitle: 'O que a empresa precisava?',
      companyNeedDescription: `A MaisMobi, responsável pela evolução tecnológica da RioCard Mais, enfrentava o desafio de modernizar a solução antifraude do ecossistema de bilhetagem no setor de mobilidade urbana. A ferramenta existente atuava de forma predominantemente reativa, identificando fraudes apenas após sua ocorrência, o que limitava a capacidade de prevenção e elevava riscos operacionais.

Para sustentar a escala do negócio e a expansão da operação, a MaisMobi precisava de uma solução que antecipasse comportamentos fraudulentos, oferecesse monitoramento contínuo em tempo real e fosse escalável para o mercado, capaz de lidar com alto volume de transações e diferentes regras de negócio, mantendo segurança, eficiência e confiabilidade.`,
      userNeedTitle: 'O que os usuários precisavam?',
      userNeedDescription: `Além de uma ferramenta antifraude preventiva, as equipes operacionais, analistas de fraude e gestores do ecossistema da RioCard Mais precisavam de uma solução centralizada e conectada, capaz de unificar dados, fluxos e decisões em um único ambiente. A ausência de integração entre sistemas dificultava a comunicação entre os times de operação, suporte e os consumidores finais, aumentando o tempo de resposta e a fricção na resolução de problemas.

Os usuários buscavam uma experiência integrada e contínua, que melhorasse a comunicação entre áreas, oferecesse visibilidade em tempo real e permitisse atuar de forma proativa na prevenção de fraudes, reduzindo impactos operacionais e elevando a confiança do sistema para todos os envolvidos.`,
      resultsTitle: 'Principais Resultados',
      resultsDescription: `Prevenção de fraudes mais eficaz e eficiência operacional ampliada.

As melhorias implementadas na solução antifraude da RioCard Mais, conduzidas pela MaisMobi, tiveram impacto direto em um dos pontos mais críticos do ecossistema de mobilidade urbana: a antecipação de fraudes e a resposta operacional.

Ao transformar uma ferramenta reativa em uma plataforma preventiva, centralizada e conectada, a solução passou a oferecer maior visibilidade dos dados, monitoramento contínuo e melhor comunicação entre os times de operação, suporte e atendimento ao consumidor final. Isso reduziu o tempo de resposta a incidentes, aumentou a capacidade de antecipar comportamentos suspeitos e fortaleceu a confiança no sistema.

O que antes era um processo fragmentado e reativo tornou-se um fluxo mais rápido, rastreável e colaborativo, elevando a eficiência operacional e a confiabilidade do ecossistema de bilhetagem`,
      metrics: [
        {
          title: 'Redução\nde Fraudes',
          description: 'Redução em média de 30–60% de fraudes de forma preventiva.'
        },
        {
          title: 'Redução de\nChargeback',
          description: 'A MaisMobi reduziu em 40–45% de queda em chargebacks.'
        },
        {
          title: 'Monitoramento\nem Tempo Real',
          description: 'Ampliando a visibilidade operacional e permitindo atuação preventiva sobre riscos e anomalias.'
        }
      ],
      projectImages: [
        {
          src: maismobiDashboard,
          caption: 'Dashboard principal da plataforma antifraude'
        },
        {
          src: maismobiDashboard2,
          caption: 'Visualização detalhada de transações'
        }
      ],
      showNDADisclaimer: true
    }
  },
  {
    id: 'g2-base',
    client: 'THE ONE LIFE | JOÃO APOLINÁRIO',
    description: 'Redesign da experiência de compra da The One Life para unir design de alto nível e resultados de conversão.',
    tags: ['E-COMMERCE', 'REDESIGN', 'BRANDING & CONVERSÃO'],
    imageComponent: G2BaseImage,
    link: '/projetos/g2-base',
    fullContent: {
      heroTitle: 'The One Life | João Apolinário',
      heroDescription: 'Redesign da experiência de compra da The One Life para unir design de alto nível e resultados de conversão.',
      clientName: 'The One Life',
      area: 'Saúde e Bem-Estar',
      year: '2024',
      brandLogo: theOneLifeLogo,
      brandDescription: 'A The One Life é uma marca de suplementação premium que une ciência, alta performance e lifestyle saudável. Com foco em qualidade e exclusividade, a marca se destaca no mercado de saúde e bem-estar através de produtos inovadores e uma experiência de consumo diferenciada.',
      brandBannerImage: theOneLifeBanner,
      roleTitle: 'Sobre o meu papel',
      roleDescription: 'Como Head de Product & Design, liderei a reestruturação estratégica da plataforma de e-commerce da The One Life. Minha atuação focou em transformar a loja virtual em uma experiência de marca imersiva, alinhando a estética visual de alto padrão às melhores práticas de conversão (CRO).\n\nCoordenei o mapeamento da jornada de compra, desde o Discovery até o Checkout, garantindo que o design system fosse escalável para suportar o crescimento do catálogo e a internacionalização da marca.',
      companyNeedDescription: 'A The One Life possuía uma plataforma com limitações de usabilidade que refletiam em baixas taxas de conversão e abandono de carrinho. A empresa precisava de um redesign que permitisse:\n\n<strong>Fortalecimento de Marca:</strong> Elevar o posicionamento visual para transmitir a exclusividade e o lifestyle da marca.\n\n<strong>Otimização de Conversão:</strong> Estruturar fluxos de compra mais fluidos, eliminando fricções técnicas e cognitivas no processo de checkout.\n\n<strong>Escalabilidade Comercial:</strong> Uma arquitetura flexível que permitisse a gestão ágil de coleções, promoções e integração com canais de marketing.',
      userNeedDescription: 'Os clientes da marca buscavam uma experiência de compra rápida, segura e visualmente inspiradora. As necessidades principais eram:\n\n<strong>Navegação Intuitiva:</strong> Facilidade para encontrar produtos através de filtros inteligentes e uma busca otimizada.\n\n<strong>Confiança e Segurança:</strong> Uma interface que transmitisse credibilidade, com informações claras sobre produtos, tamanhos e políticas de troca.\n\n<strong>Experiência Mobile-First:</strong> Uma jornada de compra impecável em dispositivos móveis, considerando que a maior parte do tráfego provém de redes sociais.',
      resultsDescription: 'Redesenhei a experiência de compra da The One Life para unir design de alto nível e resultados de conversão.',
      metrics: [
        {
          title: 'Identidade\nConsolidada',
          description: 'Criação de uma interface premium que reflete o posicionamento da marca e aumenta o valor percebido dos produtos.'
        },
        {
          title: 'Performance\nMobile',
          description: 'Desenvolvimento de uma jornada mobile-first fluida, reduzindo drasticamente o tempo de carregamento e o abandono.'
        },
        {
          title: 'Conversão\nAlavancada',
          description: 'Otimização do fluxo de checkout e navegação, resultando em um aumento direto na taxa de finalização de compras.'
        }
      ],
      projectImages: [
        {
          src: theOneLifeImage1,
          caption: 'Interface do e-commerce The One Life'
        },
        {
          src: theOneLifeImage2,
          caption: 'Visão geral da experiência redesenhada'
        }
      ]
    }
  },
  {
    id: 'anjo-de-bolso',
    client: 'Anjo de Bolso',
    description: 'App de educação financeira com gamificação',
    tags: ['APP', 'PLG', 'ONBOARDING', 'GAMIFICAÇÃO'],
    imageComponent: AnjoDeBolsoImage,
    link: '/projetos/anjo-de-bolso',
    fullContent: {
      heroTitle: 'Aplicativo Anjo de Bolso',
      heroDescription: 'Projetando redução de 25–35% no churn e aumento de 40–60% no engajamento.',
      heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=600&fit=crop',
      clientName: 'Anjo de Bolso',
      area: 'Educação Financeira',
      year: '2023',
      // Banner renderizado via componente AnjoDeBolsoBanner (/imports/Container-114-226.tsx)
      brandDescription: 'Anjo de Bolso é um app de educação financeira voltado para jovens de 18-25 anos, que combina gamificação, desafios práticos e recompensas para ensinar conceitos de finanças pessoais de forma leve e engajadora.',
      roleTitle: 'Sobre o meu papel',
      roleDescription: 'Liderei o desenvolvimento do Aplicativo Anjo de Bolso como Head de Produto & Design, conduzindo um processo full cycle desde a concepção inicial até a entrega final e otimizações pós-lançamento.\n\nO foco foi criar uma solução estratégica que integrasse objetivos de negócios, necessidades dos usuários e práticas avançadas de design.',
      companyNeedDescription: 'O cliente identificou que, embora o mercado estivesse saturado de ferramentas de controle de gastos, os brasileiros ainda enfrentavam altos índices de ansiedade e descontrole financeiro. O desafio central era que as soluções existentes atuavam de forma passiva, o que resultava em baixo engajamento e no abandono precoce das ferramentas.\n\nPara reverter esse cenário e consolidar o Anjo de Bolso como uma solução de mercado eficaz, a empresa precisava:\n\n<strong>Superar o modelo reativo:</strong> Ir além do simples registro de despesas e atuar na educação financeira preventiva e prática.\n\n<strong>Garantir o engajamento contínuo:</strong> Implementar estratégias que transformassem a gestão financeira em um hábito diário, combatendo o esquecimento e a desinformação.\n\n<strong>Escalabilidade e Retenção:</strong> Uma estrutura robusta capaz de suportar um alto volume de usuários, com a meta estratégica de <strong>reduzir o churn entre 25–35%</strong> e alavancar o <strong>engajamento em 40–60%</strong> através de uma experiência centrada no usuário.',
      userNeedDescription: 'Embora jovens adultos e profissionais entendam a importância de cuidar do dinheiro, o abismo entre a intenção e a prática é enorme. Apps tradicionais são frequentemente vistos como intimidantes, repletos de jargões técnicos e focados apenas em registros burocráticos, o que não gera motivação.\n\nMinhas pesquisas revelaram um padrão crítico: sem um incentivo imediato, a maioria dos usuários abandona as ferramentas após apenas 2 a 3 dias de uso. No contexto da Gen Z e jovens Millenials, a necessidade era clara:\n\n<strong>Linguagem Acessível:</strong> Substituir a complexidade bancária por uma educação financeira clara e desmistificada.\n\n<strong>Interatividade e Recompensa:</strong> Dados indicam que 78% dos usuários desse perfil preferem aprender por meio de conteúdos interativos. Eles precisam de um sistema de "recompensas imediatas" para transformar a gestão financeira em um hábito prazeroso, não em uma tarefa maçante.\n\n<strong>Redução da Ansiedade:</strong> Mais do que planilhas, os usuários precisavam de uma ferramenta que trouxesse segurança e controle, eliminando o medo de olhar para as próprias contas.',
      resultsDescription: 'O app atingiu product-market fit em tempo recorde:',
      metrics: [
        {
          title: 'Redução de Churn',
          description: 'Reduzimos em 30% o abandono precoce utilizando Onboarding Personalizado e educativo. Nossa estratégia ataca diretamente o esquecimento, transformando a gestão financeira em um hábito diário, combatendo a ansiedade e mantendo usuários ativos e organizados.'
        },
        {
          title: 'Aumento de Retenção',
          description: 'Elevamos em 40% a fidelidade através de trilhas de Gamificação que recompensam o progresso. Ao transformar tarefas complexas em conquistas reais, garantimos que o usuário retorne sempre, fortalecendo sua saúde financeira e sua estabilidade.'
        },
        {
          title: 'Engajamento',
          description: 'Maximizamos em 50% a interação diária oferecendo Lembretes Inteligentes sobre gastos recorrentes. Criamos uma interface intuitiva que incentiva o controle constante, tornando a educação financeira uma parte fluida, informativa e muito prazerosa da rotina.'
        }
      ],
      projectImages: [
        {
          src: anjoImage1,
          caption: '1 — Anotações; 2 — Ideias; 3 — Crazy 8\'s; 4 — Rabiscoframe'
        },
        {
          src: anjoImage2
        },
        {
          src: anjoImage3,
          caption: 'Wireframe de Media Fidelidade'
        },
        {
          src: anjoImage4,
          caption: 'Design do Aplicativo Anjo de Bolso'
        }
      ]
    }
  },
  {
    id: 'sesc',
    client: 'SESC',
    description: 'Facilitação à credencial e o acesso aos serviços do SESC através de portal online',
    tags: ['WEB', 'PORTAL', 'LIFERAY', 'UX/UI'],
    imageComponent: SescImage,
    link: '/projetos/sesc',
    fullContent: {
      heroTitle: 'Portal SESC',
      heroDescription: 'Facilitação à credencial e o acesso aos serviços do SESC através de portal online.',
      clientName: 'SESC',
      area: 'Comércio',
      year: '2024',
      // Banner renderizado via componente SescBanner (/components/SescBanner.tsx)
      brandDescription: 'Proporcionar bem-estar aos brasileiros, especialmente ao trabalhador do comércio, é a missão do SESC',
      roleTitle: 'Sobre o meu papel',
      roleDescription: 'Como Head de Product & Design, liderei o ciclo completo do projeto (full cycle), desde a imersão estratégica até a entrega do protótipo de alta fidelidade. Minha atuação focou em coordenar a metodologia Double Diamond, garantindo que a visão de negócio do SESC estivesse alinhada a uma arquitetura de informação escalável.\n\nFui responsável por gerenciar a pesquisa qualitativa em 8 unidades, sintetizar os insights de múltiplos perfis de usuários (credenciados, não credenciados e funcionários) e supervisionar a criação de um sistema de design que unificou 105 sistemas integrados em uma experiência fluida e intuitiva.',
      companyNeedDescription: 'O SESC-DF enfrentava um gargalo operacional: processos críticos, como emissão de credenciais e agendamentos médicos, eram realizados apenas de forma presencial. O portal existente era um repositório fragmentado com 102 páginas e 105 sistemas integrados sem conexão visual ou funcional.\n\nA instituição precisava de uma transformação digital que migrasse esses serviços para o ambiente virtual da plataforma Liferay, reduzindo a sobrecarga nas unidades físicas e modernizando a comunicação para sustentar o atendimento nas áreas de saúde, educação e lazer,',
      userNeedDescription: 'Os usuários enfrentavam dificuldades significativas com a fragmentação do portal existente. Credenciados, não credenciados e funcionários precisavam de uma experiência unificada que facilitasse o acesso aos serviços, reduzisse a necessidade de deslocamento até as unidades físicas e oferecesse autonomia na gestão de suas atividades.\n\nA falta de integração entre os 105 sistemas gerava confusão e frustração, resultando em alto volume de atendimentos presenciais e baixa taxa de resolução digital. Os usuários buscavam uma plataforma intuitiva, acessível e que centralizasse todos os serviços do SESC em um único ambiente.',
      resultsDescription: 'Estes resultados foram fruto de um processo rigoroso de pesquisas, entrevistas, e entendimento do desafio do SESC e seus Clientes.',
      metrics: [
        {
          title: 'Transformação Digital',
          description: 'Migração de processos presenciais para o ambiente virtual, otimizando o agendamento e a utilização dos benefícios.'
        },
        {
          title: 'Experiência Unificada',
          description: 'Integração de 105 sistemas distintos em uma interface coesa, eliminando a fragmentação e a confusão na jornada.'
        },
        {
          title: 'Eficiência Operacional',
          description: 'Redução drástica do tempo de navegação e suporte, permitindo autonomia completa para o usuário e funcionários.'
        }
      ],
      projectImages: [
        {
          src: sescImage1,
          caption: 'Portal SESC'
        },
        {
          src: sescImage2,
          caption: 'Portal SESC'
        },
        {
          src: sescImage3,
          caption: 'Portal SESC'
        }
      ]
    }
  },
  {
    id: 'exercito-brasileiro',
    client: 'Exército Brasileiro',
    description: 'Portal institucional e sistema de gestão interna',
    tags: ['WEB', 'PORTAL', 'LIFERAY', 'DESIGN SYSTEM'],
    imageComponent: ExercitoImage,
    link: '/projetos/exercito-brasileiro',
    fullContent: {
      heroTitle: 'Portal Exército Brasileiro',
      heroDescription: 'Redesign completo do portal público com foco em transparência, acessibilidade e divulgação de ações institucionais.',
      clientName: 'Exército Brasileiro',
      area: 'Defesa',
      year: '2025',
      brandDescription: 'O projeto envolveu o redesign do portal institucional do Exército Brasileiro, visitado por milhões de cidadãos, jornalistas e pesquisadores anualmente.',
      roleTitle: 'Sobre o meu papel',
      roleDescription: 'Como Head de Product & Design, liderei o redesign estratégico do portal institucional para o ecossistema Liferay. Minha atuação focou na governança de design para traduzir a autoridade e a presença da instituição em uma plataforma digital de alta performance.\n\nSintetizei o Design System e o sistema de componentes, garantindo que a tecnologia suportasse uma estratégia de comunicação integrada, capaz de unificar a presença digital da força em todo o território nacional.',
      companyNeedDescription: 'O Exército Brasileiro buscava modernizar sua presença digital para superar limitações de tecnologia legada. A instituição precisava de uma solução no ambiente Liferay que permitisse:\n\n<strong>Transparência Ativa:</strong> Potencializar a prestação de contas e a visibilidade das ações do Exército em todas as regiões do Brasil.\n\n<strong>Comunicação Unificada:</strong> Padronizar a voz e a imagem da instituição, garantindo que informações oficiais cheguem ao cidadão de forma clara e ágil.\n\n<strong>Governança Escalável:</strong> Uma plataforma segura e robusta para gerenciar o alto volume de conteúdos estratégicos com eficiência operacional.',
      userNeedDescription: 'Civis e militares enfrentavam dificuldades para acompanhar as atividades da instituição e acessar serviços em uma interface datada. A necessidade era por:\n\n<strong>Acesso à Informação:</strong> Uma estrutura que priorizasse a transparência, facilitando a visualização de ações sociais, operações e editais.\n\n<strong>Experiência Multidevice:</strong> Navegação fluida em dispositivos móveis, garantindo acesso em qualquer localidade do país.\n\n<strong>Clareza Institucional:</strong> Uma hierarquia visual que reduzisse a carga cognitiva, tornando a busca por informações oficiais mais rápida e intuitiva.',
      resultsDescription: 'Unificamos tecnologia e design para elevar o nível de transparência e comunicação do Exército Brasileiro.',
      metrics: [
        {
          title: 'Transparência Ampliada',
          description: 'Estruturação de áreas focadas na visibilidade das ações institucionais, fortalecendo a comunicação com a sociedade civil.'
        },
        {
          title: 'Migração Tecnológica',
          description: 'Redesign completo arquitetado para Liferay, garantindo consistência técnica e agilidade na gestão de conteúdos.'
        },
        {
          title: 'Comunicação e Acessibilidade',
          description: 'Interface adaptada aos padrões governamentais, garantindo que a informação chegue de forma clara a todos.'
        }
      ],
      projectImages: [
        {
          src: exercitoImage1,
          caption: 'Portal Exército Brasileiro'
        },
        {
          src: exercitoImage2,
          caption: 'Portal Exército Brasileiro'
        }
      ]
    }
  }
];

/**
 * Helper function para buscar projeto por ID
 * Retorna undefined se não encontrado
 */
export function getProjectById(id: string): Project | undefined {
  return projectsData.find(project => project.id === id);
}

/**
 * Helper function para buscar projeto por slug (normalizado)
 * Útil para URLs case-insensitive
 */
export function getProjectBySlug(slug: string): Project | undefined {
  const normalizedSlug = slug.toLowerCase().trim();
  return projectsData.find(project => project.id.toLowerCase() === normalizedSlug);
}