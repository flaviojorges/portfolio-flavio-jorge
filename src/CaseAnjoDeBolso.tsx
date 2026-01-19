import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Breadcrumb } from './components/Breadcrumb';
import Component21ModeloDeCase from './imports/21ModeloDeCase';
import imgAnjodebolso from 'figma:asset/d66b0d3dd8ee0f8e8a54a7b6ef1cc6a2b1d21adc.png';

export default function CaseAnjoDeBolso() {
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
            { label: 'Anjo de Bolso' }
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
      heroTags={['APP', 'PLG', 'ONBOARDING', 'GAMIFICAÇÃO']}
      heroTitle="Aplicativo Anjo de Bolso"
      heroDescription="Projetando redução de 25–35% no churn e aumento de 40–60% no engajamento."
      heroImage={imgAnjodebolso}
      
      aboutTitle="Sobre o projeto"
      aboutDescription="Anjo de Bolso é um aplicativo de educação financeira que transforma o aprendizado sobre finanças pessoais em uma experiência envolvente e divertida. Através de técnicas de gamificação e um onboarding intuitivo baseado em Product-Led Growth (PLG), o projeto focou em criar jornadas personalizadas que aumentam o engajamento dos usuários e reduzem significativamente a taxa de abandono."
      
      companyProblemDescription="A Anjo de Bolso enfrentava altas taxas de churn logo nos primeiros dias após o cadastro. Muitos usuários baixavam o app, mas não completavam o onboarding ou abandonavam após poucos usos. Era necessário criar uma experiência que demonstrasse valor imediato, educasse de forma progressiva e mantivesse os usuários motivados a continuar sua jornada de educação financeira, transformando o aprendizado em um hábito consistente."
      
      userProblemDescription="Os usuários precisavam de uma forma simples e não intimidadora de aprender sobre finanças pessoais. Muitos tinham pouco conhecimento financeiro e se sentiam sobrecarregados com informações complexas. Buscavam uma experiência que os guiasse passo a passo, celebrasse pequenas conquistas, oferecesse feedback constante e tornasse o aprendizado sobre dinheiro algo prazeroso ao invés de estressante."
      
      resultsDescription="A implementação de estratégias de gamificação e um onboarding redesenhado resultou em melhorias significativas nas métricas de produto. A redução projetada de 25-35% no churn demonstra que os usuários estão encontrando valor e permanecendo no aplicativo. O aumento de 40-60% no engajamento mostra que as mecânicas de gamificação estão funcionando, transformando o aprendizado financeiro em uma experiência habitual e recompensadora."
      
      metrics={[
        {
          title: "Redução de 25-35%",
          description: "Diminuição projetada no churn através de onboarding otimizado e jornadas personalizadas."
        },
        {
          title: "Aumento de 40-60%",
          description: "Crescimento no engajamento dos usuários com mecânicas de gamificação e feedback contínuo."
        },
        {
          title: "Experiência PLG",
          description: "Estratégia Product-Led Growth que demonstra valor desde o primeiro uso."
        }
      ]}
      
      projectImages={[imgAnjodebolso]}
    />
  );
}