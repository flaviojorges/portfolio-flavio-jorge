# Exemplos Práticos - Sistema de Dados e Rotas

## 📖 Índice

1. [Adicionar Novo Projeto](#1-adicionar-novo-projeto)
2. [Editar Projeto Existente](#2-editar-projeto-existente)
3. [Criar Link para Projeto](#3-criar-link-para-projeto)
4. [Breadcrumb Personalizado](#4-breadcrumb-personalizado)
5. [Buscar Projeto Programaticamente](#5-buscar-projeto-programaticamente)
6. [Validar Dados do Projeto](#6-validar-dados-do-projeto)
7. [SEO para Novo Projeto](#7-seo-para-novo-projeto)

---

## 1. Adicionar Novo Projeto

### Cenário
Você acabou de finalizar um projeto para o cliente "Nubank" e quer adicionar ao portfólio.

### Código

```typescript
// /data/projectsData.ts

import NubankImage from '../components/NubankImage'; // Crie este componente

export const projectsData: Project[] = [
  // ... projetos existentes (RioCard, G2 Base, etc.)
  
  // NOVO PROJETO
  {
    id: 'nubank',  // ⚠️ Use kebab-case, sem espaços
    client: 'Nubank',
    description: 'Redesign da jornada de abertura de conta digital focada em conversão',
    tags: ['Mobile Design', 'Fintech', 'UX Research', 'A/B Testing'],
    imageComponent: NubankImage,
    link: '/projetos/nubank',
    
    fullContent: {
      heroTitle: 'Jornada de Abertura de Conta Digital',
      heroDescription: 'Redesign completo com aumento de 42% na taxa de conversão através de testes A/B e pesquisa comportamental.',
      heroImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop',
      
      aboutTitle: 'Sobre o projeto',
      aboutDescription: 'O Nubank tinha uma taxa de abandono de 68% na jornada de abertura de conta. Através de pesquisa quantitativa e qualitativa com 2.000+ usuários, identificamos os principais pontos de fricção e redesenhamos toda a experiência mobile.',
      
      companyProblemTitle: 'Desafio de negócio',
      companyProblemDescription: 'Com 70 milhões de clientes, cada 1% de melhora na conversão representa 700 mil novos clientes anuais. A empresa precisava reduzir churn sem comprometer compliance e segurança do processo de KYC (Know Your Customer).',
      
      userProblemTitle: 'Dores dos usuários',
      userProblemDescription: 'Usuários reportavam: formulário longo demais (12 telas), pedidos de documentos redundantes, falta de feedback sobre progresso, e medo de rejeição sem saber o motivo. 34% desistiam na etapa de selfie.',
      
      resultsTitle: 'Resultados Alcançados',
      resultsDescription: 'O novo fluxo foi testado com 50 mil usuários em experimento controlado (A/B test) durante 30 dias:',
      
      metrics: [
        {
          title: 'Conversão +42%',
          description: 'Taxa de conclusão subiu de 32% para 45,4%, representando +9,4mi clientes/ano'
        },
        {
          title: 'Tempo -65%',
          description: 'Tempo médio de abertura caiu de 8min12s para 2min52s através de smart defaults e OCR'
        },
        {
          title: 'NPS +28 pontos',
          description: 'Satisfação na jornada de onboarding passou de 52 para 80, eliminando principal ponto de atrito'
        }
      ],
      
      projectImages: [
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1551817958-11e0f7bbea9f?w=1200&h=800&fit=crop'
      ]
    }
  }
];
```

### Resultado
- ✅ Card aparece automaticamente em `/projetos`
- ✅ URL acessível em `/projetos/nubank`
- ✅ Breadcrumb mostra: Início > Projetos > Nubank
- ✅ SEO automaticamente configurado

---

## 2. Editar Projeto Existente

### Cenário
Você quer atualizar as métricas do projeto RioCard com novos dados.

### Código

```typescript
// /data/projectsData.ts

export const projectsData: Project[] = [
  {
    id: 'riocard',
    // ... outros campos
    fullContent: {
      // ... outros campos
      
      // ATUALIZAR MÉTRICAS
      metrics: [
        {
          title: '68% de redução no churn',  // ⬅️ Era 58%, agora é 68%
          description: 'Taxa de abandono caiu de 35% para 11,2% após 6 meses'  // ⬅️ Atualizado
        },
        {
          title: 'Aumento de 410% em recargas digitais',  // ⬅️ Era 340%, agora 410%
          description: 'Conversão para recarga digital atingiu 51%, gerando R$ 3,1mi em revenue adicional'
        },
        {
          title: '80% menos chamados ao SAC',  // ⬅️ Era 72%, agora 80%
          description: 'Redução de 15.000 para 3.000 tickets mensais, economizando R$ 240k/mês'
        }
      ]
    }
  },
  // ... outros projetos
];
```

### Resultado
- ✅ Métricas atualizadas instantaneamente
- ✅ Nenhuma mudança necessária em componentes
- ✅ Histórico preservado no Git

---

## 3. Criar Link para Projeto

### Cenário
Você quer linkar para um projeto específico em vários lugares do site.

### Opção 1: Link Direto (Simples)

```tsx
import { Link } from 'react-router-dom';

// Em qualquer componente
<Link 
  to="/projetos/riocard" 
  className="text-[#1760ff] hover:underline"
>
  Ver case RioCard
</Link>
```

### Opção 2: Link Dinâmico (Recomendado)

```tsx
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

function RelatedProjects() {
  const riocard = projectsData.find(p => p.id === 'riocard');
  
  if (!riocard) return null;
  
  return (
    <div>
      <h3>Projeto Relacionado</h3>
      <Link to={riocard.link}>
        <div>
          <h4>{riocard.client}</h4>
          <p>{riocard.description}</p>
        </div>
      </Link>
    </div>
  );
}
```

### Opção 3: Helper Function (Mais Robusto)

```tsx
import { Link } from 'react-router-dom';
import { getProjectById } from '../data/projectsData';

function FeaturedProject({ projectId }: { projectId: string }) {
  const project = getProjectById(projectId);
  
  if (!project) {
    console.warn(`Projeto "${projectId}" não encontrado`);
    return null;
  }
  
  return (
    <Link to={project.link}>
      <ProjectCard {...project} />
    </Link>
  );
}

// Uso
<FeaturedProject projectId="riocard" />
```

---

## 4. Breadcrumb Personalizado

### Cenário
Você quer criar um breadcrumb customizado para uma página especial.

### Código

```tsx
import { Breadcrumb } from './components/Breadcrumb';

// Página de Blog
function BlogPost() {
  return (
    <div>
      <Breadcrumb 
        items={[
          { label: 'Início', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Como criar um Design System' }  // Último sem href
        ]}
      />
      {/* Conteúdo do post */}
    </div>
  );
}

// Página de Case com Subcategoria
function CaseWithCategory() {
  return (
    <div>
      <Breadcrumb 
        items={[
          { label: 'Início', href: '/' },
          { label: 'Projetos', href: '/projetos' },
          { label: 'Mobile Apps', href: '/projetos/categoria/mobile' },
          { label: 'RioCard' }
        ]}
      />
      {/* Conteúdo do case */}
    </div>
  );
}
```

---

## 5. Buscar Projeto Programaticamente

### Cenário 1: Filtrar por Tag

```tsx
import { projectsData } from '../data/projectsData';

function MobileProjects() {
  const mobileProjects = projectsData.filter(project => 
    project.tags.includes('Mobile Design')
  );
  
  return (
    <div>
      <h2>Projetos Mobile ({mobileProjects.length})</h2>
      {mobileProjects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
```

### Cenário 2: Busca por Texto

```tsx
import { useState } from 'react';
import { projectsData } from '../data/projectsData';

function ProjectSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const results = projectsData.filter(project => {
    const searchLower = searchTerm.toLowerCase();
    return (
      project.client.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  });
  
  return (
    <div>
      <input 
        type="text"
        placeholder="Buscar projetos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <p>{results.length} resultados encontrados</p>
      
      {results.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
```

### Cenário 3: Projetos Relacionados

```tsx
import { projectsData } from '../data/projectsData';

function RelatedProjects({ currentProjectId }: { currentProjectId: string }) {
  const currentProject = projectsData.find(p => p.id === currentProjectId);
  
  if (!currentProject) return null;
  
  // Busca projetos com tags similares
  const related = projectsData
    .filter(p => p.id !== currentProjectId)  // Exclui projeto atual
    .filter(p => {
      // Tem pelo menos 1 tag em comum
      return p.tags.some(tag => currentProject.tags.includes(tag));
    })
    .slice(0, 3);  // Mostra apenas 3
  
  return (
    <section>
      <h3>Projetos Relacionados</h3>
      {related.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
}

// Uso
<RelatedProjects currentProjectId="riocard" />
```

---

## 6. Validar Dados do Projeto

### Cenário
Você quer garantir que todos os projetos têm dados completos antes de publicar.

### Código

```typescript
// /data/projectsData.ts (adicione no final)

/**
 * Valida se todos os projetos têm dados obrigatórios
 * Execute no console do navegador para debugar
 */
export function validateProjects(): void {
  const errors: string[] = [];
  
  projectsData.forEach((project, index) => {
    // Validações básicas
    if (!project.id) {
      errors.push(`Projeto #${index}: falta ID`);
    }
    
    if (!project.client) {
      errors.push(`Projeto "${project.id}": falta nome do cliente`);
    }
    
    if (!project.tags || project.tags.length === 0) {
      errors.push(`Projeto "${project.id}": falta tags`);
    }
    
    if (!project.link) {
      errors.push(`Projeto "${project.id}": falta link`);
    }
    
    // Validação do link
    if (project.link && !project.link.startsWith('/projetos/')) {
      errors.push(`Projeto "${project.id}": link deve começar com /projetos/`);
    }
    
    // Validação de fullContent
    if (project.fullContent) {
      const fc = project.fullContent;
      
      if (!fc.heroTitle) {
        errors.push(`Projeto "${project.id}": fullContent falta heroTitle`);
      }
      
      if (!fc.metrics || fc.metrics.length === 0) {
        console.warn(`⚠️ Projeto "${project.id}": sem métricas definidas`);
      }
      
      if (!fc.projectImages || fc.projectImages.length === 0) {
        console.warn(`⚠️ Projeto "${project.id}": sem imagens de projeto`);
      }
    }
  });
  
  if (errors.length > 0) {
    console.error('❌ ERROS DE VALIDAÇÃO:');
    errors.forEach(err => console.error(`  - ${err}`));
    throw new Error(`${errors.length} erros de validação encontrados`);
  } else {
    console.log('✅ Todos os projetos validados com sucesso!');
  }
}

// Execute no console do navegador:
// import { validateProjects } from './data/projectsData';
// validateProjects();
```

---

## 7. SEO para Novo Projeto

### Cenário
Você quer garantir que um novo projeto tem SEO otimizado.

### Checklist

```markdown
## Checklist de SEO para Novo Projeto

### ✅ Dados Básicos
- [ ] ID único e descritivo (kebab-case)
- [ ] Client name claro e sem abreviações
- [ ] Description entre 120-160 caracteres
- [ ] Tags relevantes (3-5 tags)

### ✅ Conteúdo Completo
- [ ] heroTitle otimizado com palavras-chave
- [ ] heroDescription entre 150-200 caracteres
- [ ] aboutDescription detalhada (500+ caracteres)
- [ ] Métricas específicas e quantificáveis
- [ ] Imagens com URLs válidas

### ✅ URLs Amigáveis
- [ ] Link segue padrão: /projetos/nome-do-projeto
- [ ] Sem caracteres especiais no slug
- [ ] Máximo 3-4 palavras no slug

### ✅ Imagens
- [ ] Alt text descritivo em todas as imagens
- [ ] URLs de imagens válidas (testadas)
- [ ] Imagens com resolução mínima 1200x800
- [ ] loading="lazy" configurado automaticamente

### ✅ Schema.org
- [ ] ProjectCard automaticamente adiciona microdata
- [ ] Breadcrumb mostra caminho correto
- [ ] ItemList posiciona projeto corretamente
```

### Exemplo de SEO Otimizado

```typescript
{
  id: 'redesign-banco-digital',  // ✅ Descritivo e conciso
  client: 'Banco Digital XYZ',   // ✅ Nome completo
  description: 'Redesign completo do app bancário focado em acessibilidade e inclusão financeira, aumentando retenção em 45%',  // ✅ 140 caracteres
  tags: ['Mobile Design', 'Fintech', 'Accessibility', 'UX Research'],  // ✅ Tags relevantes
  link: '/projetos/redesign-banco-digital',  // ✅ URL amigável
  
  fullContent: {
    heroTitle: 'Redesign de App Bancário com Foco em Acessibilidade',  // ✅ Palavra-chave "app bancário"
    heroDescription: 'Como transformamos a experiência de 2 milhões de usuários através de design inclusivo, pesquisa comportamental e testes com pessoas com deficiência visual.',  // ✅ 190 caracteres
    // ... resto do conteúdo
  }
}
```

---

## 🎯 Dicas Rápidas

### ✅ DO (Faça)

```tsx
// Use helper functions
const project = getProjectBySlug(id);

// Valide antes de renderizar
if (!project || !project.fullContent) return null;

// Links dinâmicos
<Link to={project.link}>{project.client}</Link>

// Breadcrumbs dinâmicos
<Breadcrumb items={[..., { label: project.client }]} />
```

### ❌ DON'T (Não Faça)

```tsx
// Hardcoded links
<a href="/projetos/riocard">RioCard</a>  // ❌

// IDs com espaços
id: 'Rio Card Mais'  // ❌ Use 'riocard' ou 'rio-card-mais'

// Links com hash
link: '#/projetos/riocard'  // ❌ Use '/projetos/riocard'

// Ignorar validação
// (sempre teste se projeto existe)
const project = projectsData[0];  // ❌ E se array estiver vazio?
```

---

## 📚 Recursos Adicionais

- Ver `/ARCHITECTURE.md` para entender a arquitetura completa
- Ver `/DEVELOPMENT_GUIDELINES.md` para padrões de código
- Ver `/data/projectsData.ts` para exemplos reais
