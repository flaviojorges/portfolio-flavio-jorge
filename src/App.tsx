import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ContactModalProvider, useContactModal } from './contexts/ContactModalContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import Projetos from './Projetos';
import CaseDetail from './CaseDetail';
import { ConteudosPage } from './pages/ConteudosPage';
import { SobreMimPage } from './pages/SobreMimPage';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { isOpen, closeModal } = useContactModal();

  return (
    <div className="min-h-screen bg-white">
      <Header variant={isHomePage ? 'dark' : 'light'} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/:id" element={<CaseDetail />} />
          <Route path="/conteudos" element={<ConteudosPage />} />
          <Route path="/sobre" element={<SobreMimPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <ContactModalProvider>
          <AppContent />
        </ContactModalProvider>
      </LanguageProvider>
    </Router>
  );
}