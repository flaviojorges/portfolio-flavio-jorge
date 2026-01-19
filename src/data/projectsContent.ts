import { Language } from '../contexts/LanguageContext';

// Estrutura de conteúdo multilíngue para os projetos
export interface ProjectContent {
  pt: ProjectContentData;
  en: ProjectContentData;
  es: ProjectContentData;
}

export interface ProjectContentData {
  heroTitle: string;
  heroDescription: string;
  area: string;
  brandDescription: string;
  roleDescription: string;
  companyNeedDescription: string;
  userNeedDescription: string;
  resultsDescription: string;
  metrics?: {
    title: string;
    description: string;
  }[];
}

// Helper function para obter o conteúdo no idioma correto
export function getProjectContent(content: ProjectContent, language: Language): ProjectContentData {
  return content[language] || content.pt;
}

// ========== RIOCARD / MAISMOBI ==========
export const riocardContent: ProjectContent = {
  pt: {
    heroTitle: 'MaisMobi / RioCard Mais',
    heroDescription: 'Com uma redução de em média de 30–60% de fraudes e até 40–45% de queda em chargebacks. No segmento de Mobilidade Urbana, com seu principal case a RioCard Mais.',
    area: 'Antifraude',
    brandDescription: 'Provemos soluções de pagamentos, produtos e serviços para a mobilidade urbana, em diversas cidades do Brasil.',
    roleDescription: `Como Head de Produto & Design, liderei a evolução de soluções digitais da MaisMobi voltadas ao setor de mobilidade urbana, com foco em prevenção de fraudes, monitoramento operacional e escalabilidade. Atuei desde Discovery até o Delivery, alinhando design, tecnologia e negócio para transformar uma ferramenta antifraude originalmente reativa em uma solução preventiva, orientada por dados e regras de negócio.

Guiados por princípios de design centrado no usuário e eficiência operacional, desenvolvendo uma plataforma capaz de antecipar riscos, ampliar a visibilidade das operações e fortalecer a segurança do ecossistema de bilhetagem, gerando impacto direto na confiabilidade e sustentabilidade do transporte público.`,
    companyNeedDescription: `A MaisMobi, responsável pela evolução tecnológica da RioCard Mais, enfrentava o desafio de modernizar a solução antifraude do ecossistema de bilhetagem no setor de mobilidade urbana. A ferramenta existente atuava de forma predominantemente reativa, identificando fraudes apenas após sua ocorrência, o que limitava a capacidade de prevenção e elevava riscos operacionais.

Para sustentar a escala do negócio e a expansão da operação, a MaisMobi precisava de uma solução que antecipasse comportamentos fraudulentos, oferecesse monitoramento contínuo em tempo real e fosse escalável para o mercado, capaz de lidar com alto volume de transações e diferentes regras de negócio, mantendo segurança, eficiência e confiabilidade.`,
    userNeedDescription: `Além de uma ferramenta antifraude preventiva, as equipes operacionais, analistas de fraude e gestores do ecossistema da RioCard Mais precisavam de uma solução centralizada e conectada, capaz de unificar dados, fluxos e decisões em um único ambiente. A ausência de integração entre sistemas dificultava a comunicação entre os times de operação, suporte e os consumidores finais, aumentando o tempo de resposta e a fricção na resolução de problemas.

Os usuários buscavam uma experiência integrada e contínua, que melhorasse a comunicação entre áreas, oferecesse visibilidade em tempo real e permitisse atuar de forma proativa na prevenção de fraudes, reduzindo impactos operacionais e elevando a confiança do sistema para todos os envolvidos.`,
    resultsDescription: `Prevenção de fraudes mais eficaz e eficiência operacional ampliada.

As melhorias implementadas na solução antifraude da RioCard Mais, conduzidas pela MaisMobi, tiveram impacto direto em um dos pontos mais críticos do ecossistema de mobilidade urbana: a antecipação de fraudes e a resposta operacional.

Ao transformar uma ferramenta reativa em uma plataforma preventiva, centralizada e conectada, a solução passou a oferecer maior visibilidade dos dados, monitoramento contínuo e melhor comunicação entre os times de operação, suporte e atendimento ao consumidor final. Isso reduziu o tempo de resposta a incidentes, aumentou a capacidade de antecipar comportamentos suspeitos e fortaleceu a confiança no sistema.

O que antes era um processo fragmentado e reativo tornou-se um fluxo mais rápido, rastreável e colaborativo, elevando a eficiência operacional e a confiabilidade do ecossistema de bilhetagem`,
    metrics: [
      {
        title: 'Redução\\nde Fraudes',
        description: 'Redução em média de 30–60% de fraudes de forma preventiva.'
      },
      {
        title: 'Redução de\\nChargeback',
        description: 'A MaisMobi reduziu em 40–45% de queda em chargebacks.'
      },
      {
        title: 'Monitoramento\\nem Tempo Real',
        description: 'Ampliando a visibilidade operacional e permitindo atuação preventiva sobre riscos e anomalias.'
      }
    ]
  },
  en: {
    heroTitle: 'MaisMobi / RioCard Mais',
    heroDescription: 'Achieving an average reduction of 30–60% in fraud and up to 40–45% drop in chargebacks in the Urban Mobility segment, with RioCard Mais as the main case.',
    area: 'Antifraud',
    brandDescription: 'We provide payment solutions, products and services for urban mobility in several cities across Brazil.',
    roleDescription: `As Head of Product & Design, I led the evolution of MaisMobi's digital solutions for the urban mobility sector, focusing on fraud prevention, operational monitoring and scalability. I worked from Discovery to Delivery, aligning design, technology and business to transform an originally reactive antifraud tool into a preventive solution, driven by data and business rules.

Guided by user-centered design principles and operational efficiency, developing a platform capable of anticipating risks, expanding operational visibility and strengthening the security of the ticketing ecosystem, generating direct impact on the reliability and sustainability of public transportation.`,
    companyNeedDescription: `MaisMobi, responsible for the technological evolution of RioCard Mais, faced the challenge of modernizing the antifraud solution for the ticketing ecosystem in the urban mobility sector. The existing tool operated predominantly reactively, identifying fraud only after it occurred, which limited prevention capacity and increased operational risks.

To sustain business scale and operational expansion, MaisMobi needed a solution that anticipated fraudulent behavior, offered continuous real-time monitoring and was scalable to the market, capable of handling high transaction volumes and different business rules, maintaining security, efficiency and reliability.`,
    userNeedDescription: `In addition to a preventive antifraud tool, operational teams, fraud analysts and managers of the RioCard Mais ecosystem needed a centralized and connected solution, capable of unifying data, flows and decisions in a single environment. The lack of integration between systems hindered communication between operations, support and end consumers, increasing response time and friction in problem resolution.

Users sought an integrated and continuous experience that improved communication between areas, offered real-time visibility and allowed proactive action in fraud prevention, reducing operational impacts and increasing system confidence for all involved.`,
    resultsDescription: `More effective fraud prevention and expanded operational efficiency.

The improvements implemented in the RioCard Mais antifraud solution, conducted by MaisMobi, had a direct impact on one of the most critical points of the urban mobility ecosystem: anticipating fraud and operational response.

By transforming a reactive tool into a preventive, centralized and connected platform, the solution began to offer greater data visibility, continuous monitoring and better communication between operations, support and end consumer service teams. This reduced incident response time, increased the ability to anticipate suspicious behavior and strengthened system confidence.

What was once a fragmented and reactive process became a faster, traceable and collaborative flow, elevating operational efficiency and the reliability of the ticketing ecosystem`,
    metrics: [
      {
        title: 'Fraud\\nReduction',
        description: 'Average reduction of 30–60% in fraud preventively.'
      },
      {
        title: 'Chargeback\\nReduction',
        description: 'MaisMobi reduced chargebacks by 40–45%.'
      },
      {
        title: 'Real-Time\\nMonitoring',
        description: 'Expanding operational visibility and enabling preventive action on risks and anomalies.'
      }
    ]
  },
  es: {
    heroTitle: 'MaisMobi / RioCard Mais',
    heroDescription: 'Con una redução promedio de 30–60% en fraudes y hasta 40–45% de caída en contracargos en el segmento de Movilidad Urbana, con RioCard Mais como caso principal.',
    area: 'Antifraude',
    brandDescription: 'Proveemos soluciones de pagos, productos y servicios para la movilidad urbana en varias ciudades de Brasil.',
    roleDescription: `Como Head de Producto & Diseño, lideré la evolución de soluciones digitales de MaisMobi para el sector de movilidad urbana, enfocándome en prevención de fraudes, monitoreo operacional y escalabilidad. Actué desde Discovery hasta Delivery, alineando diseño, tecnología y negocio para transformar una herramienta antifraude originalmente reactiva en una solución preventiva, orientada por datos y reglas de negocio.

Guiados por principios de diseño centrado en el usuario y eficiencia operacional, desarrollando una plataforma capaz de anticipar riesgos, ampliar la visibilidad de las operaciones y fortalecer la seguridad del ecosistema de ticketing, generando impacto directo en la confiabilidad y sostenibilidad del transporte público.`,
    companyNeedDescription: `MaisMobi, responsable de la evolución tecnológica de RioCard Mais, enfrentaba el desafío de modernizar la solución antifraude del ecosistema de ticketing en el sector de movilidad urbana. La herramienta existente operaba predominantemente de forma reactiva, identificando fraudes solo después de que ocurrieran, lo que limitaba la capacidad de prevención y elevaba los riesgos operacionales.

Para sostener la escala del negocio y la expansión operacional, MaisMobi necesitaba una solución que anticipara comportamientos fraudulentos, ofreciera monitoreo continuo en tiempo real y fuera escalable para el mercado, capaz de manejar alto volumen de transacciones y diferentes reglas de negocio, manteniendo seguridad, eficiencia y confiabilidad.`,
    userNeedDescription: `Además de una herramienta antifraude preventiva, los equipos operacionales, analistas de fraude y gestores del ecosistema de RioCard Mais necesitaban una solución centralizada y conectada, capaz de unificar datos, flujos y decisiones en un único ambiente. La ausencia de integración entre sistemas dificultaba la comunicación entre los equipos de operación, soporte y los consumidores finales, aumentando el tiempo de respuesta y la fricción en la resolución de problemas.

Los usuarios buscaban una experiencia integrada y continua que mejorara la comunicación entre áreas, ofreciera visibilidad en tiempo real y permitiera actuar de forma proactiva en la prevención de fraudes, reduciendo impactos operacionales y elevando la confianza del sistema para todos los involucrados.`,
    resultsDescription: `Prevención de fraudes más efectiva y eficiencia operacional ampliada.

Las mejoras implementadas en la solución antifraude de RioCard Mais, conducidas por MaisMobi, tuvieron impacto directo en uno de los puntos más críticos del ecosistema de movilidad urbana: la anticipación de fraudes y la respuesta operacional.

Al transformar una herramienta reactiva en una plataforma preventiva, centralizada y conectada, la solución pasó a ofrecer mayor visibilidad de datos, monitoreo continuo y mejor comunicación entre los equipos de operación, soporte y atención al consumidor final. Esto redujo el tiempo de respuesta a incidentes, aumentó la capacidad de anticipar comportamientos sospechosos y fortaleció la confianza en el sistema.

Lo que antes era un proceso fragmentado y reactivo se convirtió en un flujo más rápido, rastreable y colaborativo, elevando la eficiencia operacional y la confiabilidad del ecosistema de ticketing`,
    metrics: [
      {
        title: 'Reducción\\nde Fraudes',
        description: 'Reducción promedio de 30–60% de fraudes de forma preventiva.'
      },
      {
        title: 'Reducción de\\nContracargos',
        description: 'MaisMobi redujo en 40–45% los contracargos.'
      },
      {
        title: 'Monitoreo en\\nTiempo Real',
        description: 'Ampliando la visibilidad operacional y permitiendo actuación preventiva sobre riesgos y anomalías.'
      }
    ]
  }
};

// ========== THE ONE LIFE ==========
export const theOneLifeContent: ProjectContent = {
  pt: {
    heroTitle: 'The One Life | João Apolinário',
    heroDescription: 'Redesign da experiência de compra da The One Life para unir design de alto nível e resultados de conversão.',
    area: 'Saúde e Bem-Estar',
    brandDescription: 'A The One Life é uma marca de suplementação premium que une ciência, alta performance e lifestyle saudável. Com foco em qualidade e exclusividade, a marca se destaca no mercado de saúde e bem-estar através de produtos inovadores e uma experiência de consumo diferenciada.',
    roleDescription: 'Como Head de Product & Design, liderei a reestruturação estratégica da plataforma de e-commerce da The One Life. Minha atuação focou em transformar a loja virtual em uma experiência de marca imersiva, alinhando a estética visual de alto padrão às melhores práticas de conversão (CRO).\\n\\nCoordenei o mapeamento da jornada de compra, desde o Discovery até o Checkout, garantindo que o design system fosse escalável para suportar o crescimento do catálogo e a internacionalização da marca.',
    companyNeedDescription: 'A The One Life possuía uma plataforma com limitações de usabilidade que refletiam em baixas taxas de conversão e abandono de carrinho. A empresa precisava de um redesign que permitisse:\\n\\n<strong>Fortalecimento de Marca:</strong> Elevar o posicionamento visual para transmitir a exclusividade e o lifestyle da marca.\\n\\n<strong>Otimização de Conversão:</strong> Estruturar fluxos de compra mais fluidos, eliminando fricções técnicas e cognitivas no processo de checkout.\\n\\n<strong>Escalabilidade Comercial:</strong> Uma arquitetura flexível que permitisse a gestão ágil de coleções, promoções e integração com canais de marketing.',
    userNeedDescription: 'Os clientes da marca buscavam uma experiência de compra rápida, segura e visualmente inspiradora. As necessidades principais eram:\\n\\n<strong>Navegação Intuitiva:</strong> Facilidade para encontrar produtos através de filtros inteligentes e uma busca otimizada.\\n\\n<strong>Confiança e Segurança:</strong> Uma interface que transmitisse credibilidade, com informações claras sobre produtos, tamanhos e políticas de troca.\\n\\n<strong>Experiência Mobile-First:</strong> Uma jornada de compra impecável em dispositivos móveis, considerando que a maior parte do tráfego provém de redes sociais.',
    resultsDescription: 'Redesenhei a experiência de compra da The One Life para unir design de alto nível e resultados de conversão.',
    metrics: [
      {
        title: 'Identidade\\nConsolidada',
        description: 'Criação de uma interface premium que reflete o posicionamento da marca e aumenta o valor percebido dos produtos.'
      },
      {
        title: 'Performance\\nMobile',
        description: 'Desenvolvimento de uma jornada mobile-first fluida, reduzindo drasticamente o tempo de carregamento e o abandono.'
      },
      {
        title: 'Conversão\\nAlavancada',
        description: 'Otimização do fluxo de checkout e navegação, resultando em um aumento direto na taxa de finalização de compras.'
      }
    ]
  },
  en: {
    heroTitle: 'The One Life | João Apolinário',
    heroDescription: 'Redesign of The One Life shopping experience to combine high-level design and conversion results.',
    area: 'Health and Wellness',
    brandDescription: 'The One Life is a premium supplementation brand that combines science, high performance and healthy lifestyle. Focusing on quality and exclusivity, the brand stands out in the health and wellness market through innovative products and a differentiated consumer experience.',
    roleDescription: 'As Head of Product & Design, I led the strategic restructuring of The One Life e-commerce platform. My work focused on transforming the online store into an immersive brand experience, aligning high-standard visual aesthetics with conversion optimization (CRO) best practices.\\n\\nI coordinated the shopping journey mapping, from Discovery to Checkout, ensuring the design system was scalable to support catalog growth and brand internationalization.',
    companyNeedDescription: 'The One Life had a platform with usability limitations that resulted in low conversion rates and cart abandonment. The company needed a redesign that would allow:\\n\\n<strong>Brand Strengthening:</strong> Elevate visual positioning to convey the brand\'s exclusivity and lifestyle.\\n\\n<strong>Conversion Optimization:</strong> Structure more fluid shopping flows, eliminating technical and cognitive frictions in the checkout process.\\n\\n<strong>Commercial Scalability:</strong> A flexible architecture that allowed agile management of collections, promotions and integration with marketing channels.',
    userNeedDescription: 'Brand customers sought a fast, secure and visually inspiring shopping experience. Main needs were:\\n\\n<strong>Intuitive Navigation:</strong> Ease of finding products through smart filters and optimized search.\\n\\n<strong>Trust and Security:</strong> An interface that conveyed credibility, with clear information about products, sizes and exchange policies.\\n\\n<strong>Mobile-First Experience:</strong> A flawless shopping journey on mobile devices, considering that most traffic comes from social networks.',
    resultsDescription: 'I redesigned The One Life shopping experience to combine high-level design and conversion results.',
    metrics: [
      {
        title: 'Consolidated\\nIdentity',
        description: 'Creation of a premium interface that reflects brand positioning and increases perceived product value.'
      },
      {
        title: 'Mobile\\nPerformance',
        description: 'Development of a fluid mobile-first journey, drastically reducing loading time and abandonment.'
      },
      {
        title: 'Leveraged\\nConversion',
        description: 'Optimization of checkout and navigation flow, resulting in a direct increase in purchase completion rate.'
      }
    ]
  },
  es: {
    heroTitle: 'The One Life | João Apolinário',
    heroDescription: 'Rediseño de la experiencia de compra de The One Life para unir diseño de alto nivel y resultados de conversión.',
    area: 'Salud y Bienestar',
    brandDescription: 'The One Life es una marca de suplementación premium que une ciencia, alto rendimiento y estilo de vida saludable. Con enfoque en calidad y exclusividad, la marca se destaca en el mercado de salud y bienestar a través de productos innovadores y una experiencia de consumo diferenciada.',
    roleDescription: 'Como Head de Producto & Diseño, lideré la reestructuración estratégica de la plataforma de e-commerce de The One Life. Mi actuación se enfocó en transformar la tienda virtual en una experiencia de marca inmersiva, alineando la estética visual de alto estándar con las mejores prácticas de optimización de conversión (CRO).\\n\\nCoordiné el mapeo de la jornada de compra, desde Discovery hasta Checkout, garantizando que el design system fuera escalable para soportar el crecimiento del catálogo y la internacionalización de la marca.',
    companyNeedDescription: 'The One Life poseía una plataforma con limitaciones de usabilidad que se reflejaban en bajas tasas de conversión y abandono de carrito. La empresa necesitaba un rediseño que permitiera:\\n\\n<strong>Fortalecimiento de Marca:</strong> Elevar el posicionamiento visual para transmitir la exclusividad y el lifestyle de la marca.\\n\\n<strong>Optimización de Conversión:</strong> Estructurar flujos de compra más fluidos, eliminando fricciones técnicas y cognitivas en el proceso de checkout.\\n\\n<strong>Escalabilidad Comercial:</strong> Una arquitectura flexible que permitiera la gestión ágil de colecciones, promociones e integración con canales de marketing.',
    userNeedDescription: 'Los clientes de la marca buscaban una experiencia de compra rápida, segura y visualmente inspiradora. Las necesidades principales eran:\\n\\n<strong>Navegación Intuitiva:</strong> Facilidad para encontrar productos a través de filtros inteligentes y búsqueda optimizada.\\n\\n<strong>Confianza y Seguridad:</strong> Una interfaz que transmitiera credibilidad, con información clara sobre productos, tamaños y políticas de cambio.\\n\\n<strong>Experiencia Mobile-First:</strong> Una jornada de compra impecable en dispositivos móviles, considerando que la mayor parte del tráfico proviene de redes sociales.',
    resultsDescription: 'Rediseñé la experiencia de compra de The One Life para unir diseño de alto nivel y resultados de conversión.',
    metrics: [
      {
        title: 'Identidad\\nConsolidada',
        description: 'Creación de una interfaz premium que refleja el posicionamiento de la marca y aumenta el valor percibido de los productos.'
      },
      {
        title: 'Performance\\nMobile',
        description: 'Desarrollo de una jornada mobile-first fluida, reduciendo drásticamente el tiempo de carga y el abandono.'
      },
      {
        title: 'Conversión\\nApalancada',
        description: 'Optimización del flujo de checkout y navegación, resultando en un aumento directo en la tasa de finalización de compras.'
      }
    ]
  }
};

// ========== ANJO DE BOLSO ==========
export const anjoDeBolsoContent: ProjectContent = {
  pt: {
    heroTitle: 'Aplicativo Anjo de Bolso',
    heroDescription: 'Projetando redução de 25–35% no churn e aumento de 40–60% no engajamento.',
    area: 'Educação Financeira',
    brandDescription: 'Anjo de Bolso é um app de educação financeira voltado para jovens de 18-25 anos, que combina gamificação, desafios práticos e recompensas para ensinar conceitos de finanças pessoais de forma leve e engajadora.',
    roleDescription: `Liderei o desenvolvimento do Aplicativo Anjo de Bolso como Head de Produto & Design, conduzindo um processo full cycle desde a concepção inicial até a entrega final e otimizações pós-lançamento.

O foco foi criar uma solução estratégica que integrasse objetivos de negócios, necessidades dos usuários e práticas avançadas de design.`,
    companyNeedDescription: `O cliente identificou que, embora o mercado estivesse saturado de ferramentas de controle de gastos, os brasileiros ainda enfrentavam altos índices de ansiedade e descontrole financeiro. O desafio central era que as soluções existentes atuavam de forma passiva, o que resultava em baixo engajamento e no abandono precoce das ferramentas.

Para reverter esse cenário e consolidar o Anjo de Bolso como uma solução de mercado eficaz, a empresa precisava:

<strong>Superar o modelo reativo:</strong> Ir além do simples registro de despesas e atuar na educação financeira preventiva e prática.

<strong>Garantir o engajamento contínuo:</strong> Implementar estratégias que transformassem a gestão financeira em um hábito diário, combatendo o esquecimento e a desinformação.

<strong>Escalabilidade e Retenção:</strong> Uma estrutura robusta capaz de suportar um alto volume de usuários, com a meta estratégica de <strong>reduzir o churn entre 25–35%</strong> e alavancar o <strong>engajamento em 40–60%</strong> através de uma experiência centrada no usuário.`,
    userNeedDescription: `Embora jovens adultos e profissionais entendam a importância de cuidar do dinheiro, o abismo entre a intenção e a prática é enorme. Apps tradicionais são frequentemente vistos como intimidantes, repletos de jargões técnicos e focados apenas em registros burocráticos, o que não gera motivação.

Minhas pesquisas revelaram um padrão crítico: sem um incentivo imediato, a maioria dos usuários abandona as ferramentas após apenas 2 a 3 dias de uso. No contexto da Gen Z e jovens Millenials, a necessidade era clara:

<strong>Linguagem Acessível:</strong> Substituir a complexidade bancária por uma educação financeira clara e desmistificada.

<strong>Interatividade e Recompensa:</strong> Dados indicam que 78% dos usuários desse perfil preferem aprender por meio de conteúdos interativos. Eles precisam de um sistema de "recompensas imediatas" para transformar a gestão financeira em um hábito prazeroso, não em uma tarefa maçante.

<strong>Redução da Ansiedade:</strong> Mais do que planilhas, os usuários precisavam de uma ferramenta que trouxesse segurança e controle, eliminando o medo de olhar para as próprias contas.`,
    resultsDescription: `O app atingiu product-market fit em tempo recorde:`,
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
    ]
  },
  en: {
    heroTitle: 'Anjo de Bolso App',
    heroDescription: 'Designing 25–35% churn reduction and 40–60% engagement increase.',
    area: 'Financial Education',
    brandDescription: 'Anjo de Bolso is a financial education app for young people aged 18-25, combining gamification, practical challenges and rewards to teach personal finance concepts in a light and engaging way.',
    roleDescription: `I led the development of the Anjo de Bolso App as Head of Product & Design, conducting a full cycle process from initial conception to final delivery and post-launch optimizations.

The focus was to create a strategic solution that integrated business objectives, user needs and advanced design practices.`,
    companyNeedDescription: `The client identified that although the market was saturated with expense tracking tools, Brazilians still faced high rates of anxiety and financial loss of control. The central challenge was that existing solutions operated passively, resulting in low engagement and early abandonment of tools.

To reverse this scenario and consolidate Anjo de Bolso as an effective market solution, the company needed:

<strong>Overcome the reactive model:</strong> Go beyond simple expense tracking and act on preventive and practical financial education.

<strong>Ensure continuous engagement:</strong> Implement strategies that transformed financial management into a daily habit, combating forgetfulness and misinformation.

<strong>Scalability and Retention:</strong> A robust structure capable of supporting a high volume of users, with the strategic goal of <strong>reducing churn by 25–35%</strong> and leveraging <strong>engagement by 40–60%</strong> through a user-centered experience.`,
    userNeedDescription: `Although young adults and professionals understand the importance of taking care of money, the gap between intention and practice is enormous. Traditional apps are often seen as intimidating, full of technical jargon and focused only on bureaucratic records, which does not generate motivation.

My research revealed a critical pattern: without immediate incentive, most users abandon tools after just 2 to 3 days of use. In the context of Gen Z and young Millennials, the need was clear:

<strong>Accessible Language:</strong> Replace banking complexity with clear and demystified financial education.

<strong>Interactivity and Reward:</strong> Data indicates that 78% of users in this profile prefer to learn through interactive content. They need an "immediate rewards" system to transform financial management into a pleasurable habit, not a tedious task.

<strong>Anxiety Reduction:</strong> More than spreadsheets, users needed a tool that brought security and control, eliminating the fear of looking at their own accounts.`,
    resultsDescription: `The app achieved product-market fit in record time:`,
    metrics: [
      {
        title: 'Churn Reduction',
        description: 'We reduced early abandonment by 30% using Personalized and educational Onboarding. Our strategy directly attacks forgetfulness, transforming financial management into a daily habit, combating anxiety and keeping users active and organized.'
      },
      {
        title: 'Retention Increase',
        description: 'We increased loyalty by 40% through Gamification tracks that reward progress. By transforming complex tasks into real achievements, we ensure the user always returns, strengthening their financial health and stability.'
      },
      {
        title: 'Engagement',
        description: 'We maximized daily interaction by 50% offering Smart Reminders about recurring expenses. We created an intuitive interface that encourages constant control, making financial education a fluid, informative and very pleasurable part of the routine.'
      }
    ]
  },
  es: {
    heroTitle: 'App Anjo de Bolso',
    heroDescription: 'Diseñando reducción de 25–35% en churn y aumento de 40–60% en engagement.',
    area: 'Educación Financiera',
    brandDescription: 'Anjo de Bolso es una app de educación financiera para jóvenes de 18-25 años, que combina gamificación, desafíos prácticos y recompensas para enseñar conceptos de finanzas personales de forma ligera y atractiva.',
    roleDescription: `Lideré el desarrollo de la App Anjo de Bolso como Head de Producto & Diseño, conduciendo un proceso full cycle desde la concepción inicial hasta la entrega final y optimizaciones post-lanzamiento.

El enfoque fue crear una solución estratégica que integrara objetivos de negocio, necesidades de los usuarios y prácticas avanzadas de diseño.`,
    companyNeedDescription: `El cliente identificó que aunque el mercado estaba saturado de herramientas de control de gastos, los brasileños aún enfrentaban altos índices de ansiedad y descontrol financiero. El desafío central era que las soluciones existentes operaban de forma pasiva, lo que resultaba en bajo engagement y abandono precoz de las herramientas.

Para revertir este escenario y consolidar Anjo de Bolso como una solución de mercado eficaz, la empresa necesitaba:

<strong>Superar el modelo reactivo:</strong> Ir más allá del simple registro de gastos y actuar en la educación financiera preventiva y práctica.

<strong>Garantizar el engagement continuo:</strong> Implementar estrategias que transformaran la gestión financiera en un hábito diario, combatiendo el olvido y la desinformación.

<strong>Escalabilidad y Retención:</strong> Una estructura robusta capaz de soportar un alto volumen de usuarios, con la meta estratégica de <strong>reducir el churn entre 25–35%</strong> y apalancar el <strong>engagement en 40–60%</strong> a través de una experiencia centrada en el usuario.`,
    userNeedDescription: `Aunque jóvenes adultos y profesionales entienden la importancia de cuidar el dinero, el abismo entre la intención y la práctica es enorme. Las apps tradicionales son frecuentemente vistas como intimidantes, repletas de jerga técnica y enfocadas solo en registros burocráticos, lo que no genera motivación.

Mis investigaciones revelaron un patrón crítico: sin un incentivo inmediato, la mayoría de los usuarios abandona las herramientas después de solo 2 a 3 días de uso. En el contexto de la Gen Z y jóvenes Millennials, la necesidad era clara:

<strong>Lenguaje Accesible:</strong> Reemplazar la complejidad bancaria por una educación financiera clara y desmitificada.

<strong>Interactividad y Recompensa:</strong> Los datos indican que el 78% de los usuarios de este perfil prefieren aprender a través de contenidos interactivos. Necesitan un sistema de "recompensas inmediatas" para transformar la gestión financiera en un hábito placentero, no en una tarea tediosa.

<strong>Reducción de la Ansiedad:</strong> Más que planillas, los usuarios necesitaban una herramienta que trajera seguridad y control, eliminando el miedo de mirar sus propias cuentas.`,
    resultsDescription: `La app alcanzó product-market fit en tiempo récord:`,
    metrics: [
      {
        title: 'Reducción de Churn',
        description: 'Redujimos en 30% el abandono precoz utilizando Onboarding Personalizado y educativo. Nuestra estrategia ataca directamente el olvido, transformando la gestión financiera en un hábito diario, combatiendo la ansiedad y manteniendo usuarios activos y organizados.'
      },
      {
        title: 'Aumento de Retención',
        description: 'Elevamos en 40% la fidelidad a través de trilhas de Gamificación que recompensan el progreso. Al transformar tareas complejas en conquistas reales, garantizamos que el usuario retorne siempre, fortaleciendo su salud financiera y su estabilidad.'
      },
      {
        title: 'Engagement',
        description: 'Maximizamos en 50% la interacción diaria ofreciendo Recordatorios Inteligentes sobre gastos recurrentes. Creamos una interfaz intuitiva que incentiva el control constante, haciendo de la educación financiera una parte fluida, informativa y muy placentera de la rutina.'
      }
    ]
  }
};

// ========== SESC ==========
export const sescContent: ProjectContent = {
  pt: {
    heroTitle: 'Portal SESC',
    heroDescription: 'Facilitação à credencial e o acesso aos serviços do SESC através de portal online.',
    area: 'Comércio',
    brandDescription: 'Proporcionar bem-estar aos brasileiros, especialmente ao trabalhador do comércio, é a missão do SESC',
    roleDescription: `Como Head de Product & Design, liderei o ciclo completo do projeto (full cycle), desde a imersão estratégica até a entrega do protótipo de alta fidelidade. Minha atuação focou em coordenar a metodologia Double Diamond, garantindo que a visão de negócio do SESC estivesse alinhada a uma arquitetura de informação escalável.

Fui responsável por gerenciar a pesquisa qualitativa em 8 unidades, sintetizar os insights de múltiplos perfis de usuários (credenciados, não credenciados e funcionários) e supervisionar a criação de um sistema de design que unificou 105 sistemas integrados em uma experiência fluida e intuitiva.`,
    companyNeedDescription: `O SESC-DF enfrentava um gargalo operacional: processos críticos, como emissão de credenciais e agendamentos médicos, eram realizados apenas de forma presencial. O portal existente era um repositório fragmentado com 102 páginas e 105 sistemas integrados sem conexão visual ou funcional.

A instituição precisava de uma transformação digital que migrasse esses serviços para o ambiente virtual da plataforma Liferay, reduzindo a sobrecarga nas unidades físicas e modernizando a comunicação para sustentar o atendimento nas áreas de saúde, educação e lazer,`,
    userNeedDescription: `Os usuários enfrentavam dificuldades significativas com a fragmentação do portal existente. Credenciados, não credenciados e funcionários precisavam de uma experiência unificada que facilitasse o acesso aos serviços, reduzisse a necessidade de deslocamento até as unidades físicas e oferecesse autonomia na gestão de suas atividades.

A falta de integração entre os 105 sistemas gerava confusão e frustração, resultando em alto volume de atendimentos presenciais e baixa taxa de resolução digital. Os usuários buscavam uma plataforma intuitiva, acessível e que centralizasse todos os serviços do SESC em um único ambiente.`,
    resultsDescription: `Estes resultados foram fruto de um processo rigoroso de pesquisas, entrevistas, e entendimento do desafio do SESC e seus Clientes.`,
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
    ]
  },
  en: {
    heroTitle: 'SESC Portal',
    heroDescription: 'Facilitating credentials and access to SESC services through an online portal.',
    area: 'Commerce',
    brandDescription: 'Providing well-being to Brazilians, especially commerce workers, is SESC\'s mission',
    roleDescription: `As Head of Product & Design, I led the complete project cycle (full cycle), from strategic immersion to delivery of the high-fidelity prototype. My work focused on coordinating the Double Diamond methodology, ensuring that SESC's business vision was aligned with a scalable information architecture.

I was responsible for managing qualitative research in 8 units, synthesizing insights from multiple user profiles (credentialed, non-credentialed and employees) and supervising the creation of a design system that unified 105 integrated systems into a fluid and intuitive experience.`,
    companyNeedDescription: `SESC-DF faced an operational bottleneck: critical processes, such as credential issuance and medical appointments, were only carried out in person. The existing portal was a fragmented repository with 102 pages and 105 integrated systems without visual or functional connection.

The institution needed a digital transformation that migrated these services to the virtual environment of the Liferay platform, reducing the overload on physical units and modernizing communication to support services in health, education and leisure areas.`,
    userNeedDescription: `Users faced significant difficulties with the fragmentation of the existing portal. Credentialed, non-credentialed and employees needed a unified experience that facilitated access to services, reduced the need to travel to physical units and offered autonomy in managing their activities.

The lack of integration between the 105 systems generated confusion and frustration, resulting in high volume of in-person service and low digital resolution rate. Users sought an intuitive, accessible platform that centralized all SESC services in a single environment.`,
    resultsDescription: `These results were the fruit of a rigorous process of research, interviews, and understanding of SESC's challenge and its Customers.`,
    metrics: [
      {
        title: 'Digital Transformation',
        description: 'Migration of in-person processes to the virtual environment, optimizing scheduling and benefit utilization.'
      },
      {
        title: 'Unified Experience',
        description: 'Integration of 105 distinct systems into a cohesive interface, eliminating fragmentation and confusion in the journey.'
      },
      {
        title: 'Operational Efficiency',
        description: 'Drastic reduction in navigation and support time, allowing complete autonomy for users and employees.'
      }
    ]
  },
  es: {
    heroTitle: 'Portal SESC',
    heroDescription: 'Facilitación de la credencial y el acceso a los servicios de SESC a través de portal online.',
    area: 'Comercio',
    brandDescription: 'Proporcionar bienestar a los brasileños, especialmente al trabajador del comercio, es la misión de SESC',
    roleDescription: `Como Head de Producto & Diseño, lideré el ciclo completo del proyecto (full cycle), desde la inmersión estratégica hasta la entrega del prototipo de alta fidelidad. Mi actuación se enfocó en coordinar la metodología Double Diamond, garantizando que la visión de negocio de SESC estuviera alineada con una arquitectura de información escalable.

Fui responsable de gestionar la investigación cualitativa en 8 unidades, sintetizar los insights de múltiples perfiles de usuarios (acreditados, no acreditados y empleados) y supervisar la creación de un sistema de diseño que unificó 105 sistemas integrados en una experiencia fluida e intuitiva.`,
    companyNeedDescription: `SESC-DF enfrentaba un cuello de botella operacional: procesos críticos, como emisión de credenciales y agendamientos médicos, eran realizados solo de forma presencial. El portal existente era un repositorio fragmentado con 102 páginas y 105 sistemas integrados sin conexión visual o funcional.

La institución necesitaba una transformación digital que migrara esos servicios al ambiente virtual de la plataforma Liferay, reduciendo la sobrecarga en las unidades físicas y modernizando la comunicación para sostener la atención en las áreas de salud, educación y ocio.`,
    userNeedDescription: `Los usuarios enfrentaban dificultades significativas con la fragmentación del portal existente. Acreditados, no acreditados y empleados necesitaban una experiencia unificada que facilitara el acceso a los servicios, redujera la necesidad de desplazamiento hasta las unidades físicas y ofreciera autonomía en la gestión de sus actividades.

La falta de integración entre los 105 sistemas generaba confusión y frustración, resultando en alto volumen de atenciones presenciales y baja tasa de resolución digital. Los usuarios buscaban una plataforma intuitiva, accesible y que centralizara todos los servicios de SESC en un único ambiente.`,
    resultsDescription: `Estos resultados fueron fruto de un proceso riguroso de investigaciones, entrevistas y entendimiento del desafío de SESC y sus Clientes.`,
    metrics: [
      {
        title: 'Transformación Digital',
        description: 'Migración de procesos presenciales al ambiente virtual, optimizando el agendamiento y la utilización de los beneficios.'
      },
      {
        title: 'Experiencia Unificada',
        description: 'Integración de 105 sistemas distintos en una interfaz cohesiva, eliminando la fragmentación y la confusión en el recorrido.'
      },
      {
        title: 'Eficiencia Operacional',
        description: 'Reducción drástica del tiempo de navegación y soporte, permitiendo autonomía completa para el usuario y empleados.'
      }
    ]
  }
};

// ========== EXÉRCITO BRASILEIRO ==========
export const exercitoBrasileiroContent: ProjectContent = {
  pt: {
    heroTitle: 'Portal Exército Brasileiro',
    heroDescription: 'Redesign completo do portal público com foco em transparência, acessibilidade e divulgação de ações institucionais.',
    area: 'Defesa',
    brandDescription: 'O projeto envolveu o redesign do portal institucional do Exército Brasileiro, visitado por milhões de cidadãos, jornalistas e pesquisadores anualmente.',
    roleDescription: `Como Head de Product & Design, liderei o redesign estratégico do portal institucional para o ecossistema Liferay. Minha atuação focou na governança de design para traduzir a autoridade e a presença da instituição em uma plataforma digital de alta performance.

Sintetizei o Design System e o sistema de componentes, garantindo que a tecnologia suportasse uma estratégia de comunicação integrada, capaz de unificar a presença digital da força em todo o território nacional.`,
    companyNeedDescription: `O Exército Brasileiro buscava modernizar sua presença digital para superar limitações de tecnologia legada. A instituição precisava de uma solução no ambiente Liferay que permitisse:

<strong>Transparência Ativa:</strong> Potencializar a prestação de contas e a visibilidade das ações do Exército em todas as regiões do Brasil.

<strong>Comunicação Unificada:</strong> Padronizar a voz e a imagem da instituição, garantindo que informações oficiais cheguem ao cidadão de forma clara e ágil.

<strong>Governança Escalável:</strong> Uma plataforma segura e robusta para gerenciar o alto volume de conteúdos estratégicos com eficiência operacional.`,
    userNeedDescription: `Civis e militares enfrentavam dificuldades para acompanhar as atividades da instituição e acessar serviços em uma interface datada. A necessidade era por:

<strong>Acesso à Informação:</strong> Uma estrutura que priorizasse a transparência, facilitando a visualização de ações sociais, operações e editais.

<strong>Experiência Multidevice:</strong> Navegação fluida em dispositivos móveis, garantindo acesso em qualquer localidade do país.

<strong>Clareza Institucional:</strong> Uma hierarquia visual que reduzisse a carga cognitiva, tornando a busca por informações oficiais mais rápida e intuitiva.`,
    resultsDescription: `Unificamos tecnologia e design para elevar o nível de transparência e comunicação do Exército Brasileiro.`,
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
    ]
  },
  en: {
    heroTitle: 'Brazilian Army Portal',
    heroDescription: 'Complete redesign of the public portal focusing on transparency, accessibility and dissemination of institutional actions.',
    area: 'Defense',
    brandDescription: 'The project involved the redesign of the Brazilian Army institutional portal, visited by millions of citizens, journalists and researchers annually.',
    roleDescription: `As Head of Product & Design, I led the strategic redesign of the institutional portal for the Liferay ecosystem. My work focused on design governance to translate the institution's authority and presence into a high-performance digital platform.

I synthesized the Design System and component system, ensuring that the technology supported an integrated communication strategy, capable of unifying the force's digital presence throughout the national territory.`,
    companyNeedDescription: `The Brazilian Army sought to modernize its digital presence to overcome legacy technology limitations. The institution needed a solution in the Liferay environment that allowed:

<strong>Active Transparency:</strong> Enhance accountability and visibility of Army actions in all regions of Brazil.

<strong>Unified Communication:</strong> Standardize the institution's voice and image, ensuring that official information reaches citizens clearly and promptly.

<strong>Scalable Governance:</strong> A secure and robust platform to manage the high volume of strategic content with operational efficiency.`,
    userNeedDescription: `Civilians and military personnel faced difficulties in following the institution's activities and accessing services on an outdated interface. The need was for:

<strong>Access to Information:</strong> A structure that prioritized transparency, facilitating the visualization of social actions, operations and public notices.

<strong>Multidevice Experience:</strong> Fluid navigation on mobile devices, ensuring access from any location in the country.

<strong>Institutional Clarity:</strong> A visual hierarchy that reduced cognitive load, making the search for official information faster and more intuitive.`,
    resultsDescription: `We unified technology and design to elevate the level of transparency and communication of the Brazilian Army.`,
    metrics: [
      {
        title: 'Enhanced Transparency',
        description: 'Structuring of areas focused on the visibility of institutional actions, strengthening communication with civil society.'
      },
      {
        title: 'Technology Migration',
        description: 'Complete redesign architected for Liferay, ensuring technical consistency and agility in content management.'
      },
      {
        title: 'Communication and Accessibility',
        description: 'Interface adapted to government standards, ensuring that information reaches everyone clearly.'
      }
    ]
  },
  es: {
    heroTitle: 'Portal Ejército Brasileño',
    heroDescription: 'Rediseño completo del portal público con enfoque en transparencia, accesibilidad y divulgación de acciones institucionales.',
    area: 'Defensa',
    brandDescription: 'El proyecto involucró el rediseño del portal institucional del Ejército Brasileño, visitado por millones de ciudadanos, periodistas e investigadores anualmente.',
    roleDescription: `Como Head de Producto & Diseño, lideré el rediseño estratégico del portal institucional para el ecosistema Liferay. Mi actuación se enfocó en la gobernanza de diseño para traducir la autoridad y la presencia de la institución en una plataforma digital de alto rendimiento.

Sinteticé el Design System y el sistema de componentes, garantizando que la tecnología soportara una estrategia de comunicación integrada, capaz de unificar la presencia digital de la fuerza en todo el territorio nacional.`,
    companyNeedDescription: `El Ejército Brasileño buscaba modernizar su presencia digital para superar limitaciones de tecnología legacy. La institución necesitaba una solución en el ambiente Liferay que permitiera:

<strong>Transparencia Activa:</strong> Potencializar la rendición de cuentas y la visibilidad de las acciones del Ejército en todas las regiones de Brasil.

<strong>Comunicación Unificada:</strong> Estandarizar la voz y la imagen de la institución, garantizando que informaciones oficiales lleguen al ciudadano de forma clara y ágil.

<strong>Gobernanza Escalable:</strong> Una plataforma segura y robusta para gestionar el alto volumen de contenidos estratégicos con eficiencia operacional.`,
    userNeedDescription: `Civiles y militares enfrentaban dificultades para acompañar las actividades de la institución y acceder servicios en una interfaz desactualizada. La necesidad era por:

<strong>Acceso a la Información:</strong> Una estructura que priorizara la transparencia, facilitando la visualización de acciones sociales, operaciones y licitaciones.

<strong>Experiencia Multidispositivo:</strong> Navegación fluida en dispositivos móviles, garantizando acceso en cualquier localidad del país.

<strong>Claridad Institucional:</strong> Una jerarquía visual que redujera la carga cognitiva, haciendo la búsqueda de informaciones oficiales más rápida e intuitiva.`,
    resultsDescription: `Unificamos tecnología y diseño para elevar el nivel de transparencia y comunicación del Ejército Brasileño.`,
    metrics: [
      {
        title: 'Transparencia Ampliada',
        description: 'Estructuración de áreas enfocadas en la visibilidad de las acciones institucionales, fortaleciendo la comunicación con la sociedad civil.'
      },
      {
        title: 'Migración Tecnológica',
        description: 'Rediseño completo arquitectado para Liferay, garantizando consistencia técnica y agilidad en la gestión de contenidos.'
      },
      {
        title: 'Comunicación y Accesibilidad',
        description: 'Interfaz adaptada a los estándares gubernamentales, garantizando que la información llegue de forma clara a todos.'
      }
    ]
  }
};