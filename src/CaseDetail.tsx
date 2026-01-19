import { useParams, Navigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getProjectBySlug } from './data/projectsData';
import { getLocalizedProjectContent } from './data/projectsDataHelper';
import { CaseTemplate } from './components/CaseTemplate';
import { Breadcrumb } from './components/Breadcrumb';
import { PageTransition } from './components/PageTransition';
import { useLanguage } from './contexts/LanguageContext';
import { t } from './data/translations';

export default function CaseDetail() {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  // Busca o projeto no array de dados usando o helper function
  const baseProject = id ? getProjectBySlug(id) : undefined;
  
  // Aplica a tradução se disponível
  const project = baseProject ? getLocalizedProjectContent(baseProject, language) : undefined;
  
  // Fallback: Projeto não encontrado
  if (!id || !project) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <h1 className="text-[64px] text-[#1760ff] mb-4">{t('notFound404', language)}</h1>
          <h2 className="text-[32px] text-[#18181b] mb-6">
            {t('projectNotFound', language)}
          </h2>
          <p className="text-[#71717a] text-lg mb-8">
            {t('projectNotFoundDescription', language)}
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              to="/projetos"
              className="bg-[#1760ff] text-white px-8 py-4 rounded-[10px] hover:bg-[#0d4fd1] transition-colors"
            >
              {t('seeAllProjects', language)}
            </Link>
            <Link 
              to="/"
              className="border border-[#1760ff] text-[#1760ff] px-8 py-4 rounded-[10px] hover:bg-[#1760ff] hover:text-white transition-colors"
            >
              {t('backToHome', language)}
            </Link>
          </div>
        </div>
      </main>
    );
  }
  
  // Se não tem conteúdo completo, redireciona para listagem
  if (!project.fullContent) {
    return <Navigate to="/projetos" replace />;
  }
  
  return (
    <PageTransition>
      <main>
        {/* Breadcrumb dinâmico */}
        <div className="pt-[85px]">
          <Breadcrumb 
            items={[
              { label: t('breadcrumbHome', language), href: '/' },
              { label: t('breadcrumbProjects', language), href: '/projetos' },
              { label: project.client }
            ]}
          />
        </div>
        
        {/* Renderiza o template com dados do projeto */}
        <CaseTemplate
          heroTags={project.tags}
          heroTitle={project.fullContent.heroTitle}
          heroDescription={project.fullContent.heroDescription}
          heroImage={project.fullContent.heroImage}
          clientName={project.fullContent.clientName}
          area={project.fullContent.area}
          year={project.fullContent.year}
          brandLogo={project.fullContent.brandLogo}
          brandDescription={project.fullContent.brandDescription}
          brandBannerImage={project.fullContent.brandBannerImage}
          brandBannerText={project.fullContent.brandBannerText}
          roleTitle={project.fullContent.roleTitle || t('aboutRole', language)}
          roleDescription={project.fullContent.roleDescription}
          companyNeedTitle={project.fullContent.companyNeedTitle || t('companyNeed', language)}
          companyNeedDescription={project.fullContent.companyNeedDescription}
          userNeedTitle={project.fullContent.userNeedTitle || t('userNeed', language)}
          userNeedDescription={project.fullContent.userNeedDescription}
          resultsTitle={project.fullContent.resultsTitle || t('results', language)}
          resultsDescription={project.fullContent.resultsDescription}
          metrics={project.fullContent.metrics}
          projectImages={project.fullContent.projectImages}
          showNDADisclaimer={project.fullContent.showNDADisclaimer}
        />
      </main>
    </PageTransition>
  );
}