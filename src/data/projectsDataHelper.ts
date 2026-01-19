import { Language } from '../contexts/LanguageContext';
import { Project } from './projectsData';
import { riocardContent, theOneLifeContent, anjoDeBolsoContent, sescContent, exercitoBrasileiroContent, getProjectContent } from './projectsContent';
import { translateCaseTitle } from './translations';

/**
 * Helper function que retorna o fullContent de um projeto no idioma correto
 * Se não houver tradução disponível, retorna o conteúdo em PT
 */
export function getLocalizedProjectContent(project: Project, language: Language): Project {
  // Verificar se o projeto tem tradução disponível
  const translationMap: { [key: string]: any } = {
    'riocard': riocardContent,
    'g2-base': theOneLifeContent,
    'anjo-de-bolso': anjoDeBolsoContent,
    'sesc': sescContent,
    'exercito-brasileiro': exercitoBrasileiroContent
  };

  const translation = translationMap[project.id];
  
  if (!translation || !project.fullContent) {
    return project; // Retorna o projeto original se não houver tradução
  }

  const localizedContent = getProjectContent(translation, language);

  // Retorna o projeto com o conteúdo traduzido
  return {
    ...project,
    fullContent: {
      ...project.fullContent,
      heroTitle: localizedContent.heroTitle,
      heroDescription: localizedContent.heroDescription,
      area: localizedContent.area,
      brandDescription: localizedContent.brandDescription,
      roleTitle: translateCaseTitle('roleTitle', language),
      roleDescription: localizedContent.roleDescription,
      companyNeedTitle: translateCaseTitle('companyNeedTitle', language),
      companyNeedDescription: localizedContent.companyNeedDescription,
      userNeedTitle: translateCaseTitle('userNeedTitle', language),
      userNeedDescription: localizedContent.userNeedDescription,
      resultsTitle: translateCaseTitle('resultsTitle', language),
      resultsDescription: localizedContent.resultsDescription,
      metrics: localizedContent.metrics
    }
  };
}