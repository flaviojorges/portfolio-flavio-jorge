import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Breadcrumb } from './components/Breadcrumb';
import Component21ModeloDeCase from './imports/21ModeloDeCase';

export default function CaseG2Base() {
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
            { label: 'G2 Base' }
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
      heroTags={['SAAS', 'AWS', 'INTELIGENCIA ARTIFICIAL']}
      heroTitle="G2 Base"
      heroDescription="Redução de até 90% do trabalho manual, com aceleração de até 80% no processamento de documentos através de IA."
      heroImage={imgG2Base}
      
      aboutTitle="Sobre o projeto"
      aboutDescription="A G2 Base é uma plataforma SaaS que revoluciona o processamento de documentos empresariais através de inteligência artificial. O projeto focou em automatizar tarefas manuais repetitivas, extrair dados de forma inteligente e integrar fluxos de trabalho complexos, proporcionando ganhos significativos de produtividade e redução de erros operacionais."
      
      companyProblemDescription="A G2 Base enfrentava o desafio de escalar suas operações de processamento de documentos sem aumentar proporcionalmente o time operacional. Os processos manuais eram lentos, propensos a erros e limitavam a capacidade de atender grandes volumes de documentos. Era necessária uma solução que automatizasse a extração de dados, validação de informações e integração com sistemas legados, mantendo alta precisão e confiabilidade."
      
      userProblemDescription="As equipes operacionais precisavam de uma ferramenta que reduzisse drasticamente o tempo gasto em tarefas repetitivas de digitação e validação de dados. Os usuários buscavam uma interface intuitiva que permitisse revisar e corrigir rapidamente os dados extraídos pela IA, com visibilidade clara do status de processamento e alertas inteligentes para casos que necessitassem atenção humana."
      
      resultsDescription="A implementação da solução de IA resultou em ganhos operacionais extraordinários. O processamento de documentos foi acelerado em até 80%, permitindo que a equipe focasse em tarefas de maior valor agregado. A redução de 90% no trabalho manual não apenas aumentou a produtividade, mas também melhorou significativamente a qualidade dos dados e a satisfação dos colaboradores, que puderam abandonar tarefas repetitivas e focar em análises e decisões estratégicas."
      
      metrics={[
        {
          title: "Redução de 90%",
          description: "Diminuição do trabalho manual repetitivo, liberando as equipes para atividades estratégicas."
        },
        {
          title: "80% mais rápido",
          description: "Aceleração no processamento de documentos através de IA, aumentando a capacidade operacional."
        },
        {
          title: "Precisão elevada",
          description: "Extração inteligente de dados com validação automática, reduzindo erros operacionais."
        }
      ]}
      
      projectImages={[imgG2Base]}
    />
  );
}