import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Breadcrumb } from './components/Breadcrumb';
import Component21ModeloDeCase from './imports/21ModeloDeCase';

export default function CaseSesc() {
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
            { label: 'SESC' }
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
      heroTitle="SESC"
      heroDescription="Facilitação à credencial e o acesso aos serviços do SESC através de portal online."
      heroImage={imgSesc}
      
      aboutTitle="Sobre o projeto"
      aboutDescription="O projeto SESC focou em criar um portal online intuitivo e acessível que facilita a obtenção de credenciais e o acesso aos diversos serviços oferecidos pelo SESC. Utilizando a plataforma Liferay, desenvolvemos uma experiência digital que conecta milhões de usuários aos benefícios e programações culturais, esportivas e educacionais, simplificando processos burocráticos e democratizando o acesso."
      
      companyProblemDescription="O SESC enfrentava o desafio de digitalizar e centralizar o acesso aos seus serviços, que antes dependia de processos presenciais demorados. Era necessário criar uma plataforma robusta que suportasse alto volume de acessos simultâneos, integrasse diferentes sistemas legados e oferecesse uma jornada simplificada para usuários com diferentes níveis de familiaridade com tecnologia digital."
      
      userProblemDescription="Os usuários precisavam de uma forma simples e rápida de obter credenciais, consultar programações, fazer inscrições em atividades e acessar benefícios sem precisar se deslocar até uma unidade física. Buscavam uma plataforma que funcionasse bem em diferentes dispositivos, tivesse navegação intuitiva e processos de cadastro e autenticação descomplicados."
      
      resultsDescription="O lançamento do portal transformou a forma como os usuários interagem com os serviços do SESC. A digitalização dos processos reduziu significativamente filas e tempo de espera nas unidades físicas, enquanto a interface intuitiva aumentou a adesão aos programas e serviços oferecidos. A plataforma se tornou o principal canal de relacionamento entre o SESC e seus milhões de beneficiários."
      
      metrics={[
        {
          title: "Portal unificado",
          description: "Centralização de todos os serviços em uma única plataforma digital acessível."
        },
        {
          title: "Acesso facilitado",
          description: "Simplificação da obtenção de credenciais e inscrição em atividades."
        },
        {
          title: "Experiência otimizada",
          description: "Interface responsiva e intuitiva para diferentes perfis de usuários."
        }
      ]}
      
      projectImages={[imgSesc]}
    />
  );
}