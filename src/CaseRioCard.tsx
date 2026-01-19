import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Breadcrumb } from './components/Breadcrumb';
import Component21ModeloDeCase from './imports/21ModeloDeCase';

export default function CaseRioCard() {
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
            { label: 'RioCard Mais' }
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

// Componente wrapper que esconde o header do Figma e ajusta estilos
function CaseContent() {
  useEffect(() => {
    // Scroll to top ao carregar a página
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="w-full case-content-wrapper">
      <style dangerouslySetInnerHTML={{ __html: `
        /* ========== HEADER FIX ========== */
        /* Esconde o header do Figma importado */
        [data-name="2.1 -  Modelo de case"] > [data-name="header"] {
          display: none !important;
        }
        
        /* ========== GRID ALIGNMENT FIX ========== */
        /* Garante que o container principal respeite a grid de 1440px */
        [data-name="2.1 -  Modelo de case"] {
          width: 100% !important;
          max-width: 1440px !important;
          margin: 0 auto !important;
        }
        
        /* ========== SMOOTH TRANSITIONS ========== */
        /* Transições suaves para links e botões */
        .case-content-wrapper a,
        .case-content-wrapper button {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        /* ========== HOVER EFFECTS - AZUL #1760FF ========== */
        /* Cards com hover azul e elevação */
        .case-content-wrapper [data-name="card"] {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          cursor: pointer !important;
        }
        
        .case-content-wrapper [data-name="card"]:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 24px rgba(23, 96, 255, 0.15) !important;
        }
        
        /* Links com hover azul */
        .case-content-wrapper a:hover {
          color: #1760ff !important;
        }
      `}} />
      <Component21ModeloDeCase />
    </div>
  );
}