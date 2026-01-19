import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Breadcrumb } from './components/Breadcrumb';
import Component21ModeloDeCase from './imports/21ModeloDeCase';

export default function CaseExercitoBrasileiro() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header funcional sobreposto - variant light para fundo branco */}
      <Header variant="light" />
      
      {/* Breadcrumb */}
      <div className="pt-[85px]">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Projetos', href: '/projetos' },
            { label: 'Exército Brasileiro' }
          ]}
        />
      </div>
      
      {/* Conteúdo do case do Figma */}
      <CaseContent />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

function CaseContent() {
  return (
    <Component21ModeloDeCase
      heroTags={['PORTAL', 'LIFERAY', 'UX UI DESIGN']}
      heroTitle="Exército Brasileiro"
      heroDescription="Ampliação da transparência e divulgação das ações realizadas, com aumento médio de 60%."
      heroImage={imgExercitobrasileiro}
      
      aboutTitle="Sobre o projeto"
      aboutDescription="O projeto do portal do Exército Brasileiro focou em aumentar a transparência institucional e melhorar a comunicação com a sociedade civil. Desenvolvemos uma plataforma digital moderna que facilita o acesso a informações sobre ações, programas e serviços do Exército, promovendo accountability e aproximação com a população através de uma experiência digital acessível e profissional."
      
      companyProblemDescription="O Exército Brasileiro precisava modernizar sua presença digital e tornar mais acessível a divulgação de suas ações, programas sociais, processos seletivos e informações institucionais. Era necessário criar uma arquitetura de informação clara que organizasse o vasto volume de conteúdo, garantisse acessibilidade conforme padrões governamentais e transmitisse credibilidade e profissionalismo da instituição."
      
      userProblemDescription="Cidadãos e interessados em processos seletivos precisavam de uma plataforma onde pudessem facilmente encontrar informações oficiais, acompanhar editais, conhecer programas sociais e entender melhor as atividades do Exército. Buscavam navegação clara, busca eficiente e acesso móvel para acompanhar atualizações e notícias relevantes."
      
      resultsDescription="O novo portal resultou em um aumento de 60% na divulgação e alcance das ações realizadas pelo Exército Brasileiro. A transparência aprimorada fortaleceu a confiança da população na instituição, enquanto a facilidade de acesso às informações aumentou significativamente o engajamento com programas sociais e processos seletivos. A plataforma se consolidou como o principal canal oficial de comunicação com a sociedade."
      
      metrics={[
        {
          title: "Aumento de 60%",
          description: "Ampliação da divulgação e alcance das ações institucionais realizadas."
        },
        {
          title: "Transparência",
          description: "Maior visibilidade de programas, ações e informações institucionais."
        },
        {
          title: "Acesso otimizado",
          description: "Arquitetura de informação clara e navegação intuitiva para diferentes públicos."
        }
      ]}
      
      projectImages={[imgExercitobrasileiro]}
    />
  );
}