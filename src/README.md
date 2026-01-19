# Portfolio Flavio Jorge - Documentação Técnica

> Sistema profissional de portfólio com React Router, dados centralizados, SEO otimizado e rotas dinâmicas.

## 🚀 Quick Start

### Ver Projetos
```
https://flaviojorge.com/#/projetos
```

### Ver Case Específico
```
https://flaviojorge.com/#/projetos/riocard
https://flaviojorge.com/#/projetos/g2-base
```

### Adicionar Novo Projeto
1. Edite `/data/projectsData.ts`
2. Adicione objeto no array `projectsData`
3. Pronto! O projeto aparece automaticamente

## 📁 Estrutura de Arquivos

```
/
├── 📄 README.md                    # Este arquivo
├── 📄 ARCHITECTURE.md              # Arquitetura técnica completa
├── 📄 DEVELOPMENT_GUIDELINES.md    # Diretrizes de desenvolvimento
├── 📄 EXAMPLES.md                  # Exemplos práticos de uso
│
├── components/
│   ├── Header.tsx                  # Navegação principal + menu drawer
│   ├── Footer.tsx                  # Links e redes sociais
│   ├── Breadcrumb.tsx              # Navegação contextual com Schema.org
│   ├── ProjectCard.tsx             # Card de projeto individual
│   ├── ProjectList.tsx             # Lista de projetos com SEO
│   └── CaseTemplate.tsx            # Template reutilizável para cases
│
├── data/
│   └── projectsData.ts             # ⭐ FONTE ÚNICA DE DADOS
│
├── App.tsx                         # Página inicial (Home)
├── Projetos.tsx                    # Listagem de projetos
├── CaseDetail.tsx                  # Renderizador dinâmico de cases
└── index.tsx                       # Configuração de rotas
```

## 🎯 Principais Funcionalidades

### ✅ Sistema de Dados Centralizado
- Todos os projetos em `/data/projectsData.ts`
- Type-safe com TypeScript
- Helper functions: `getProjectById()`, `getProjectBySlug()`

### ✅ Rotas Dinâmicas
- `/` → Home
- `/projetos` → Listagem de projetos
- `/projetos/:id` → Case específico (dinâmico)

### ✅ SEO Otimizado
- Schema.org ItemList para listagem
- Schema.org BreadcrumbList para navegação
- Slugs amigáveis (e.g., `/projetos/riocard`)
- Alt text descritivo em todas as imagens
- Lazy loading configurado automaticamente

### ✅ Performance
- Lazy loading de imagens below-the-fold
- Eager loading para hero images
- Navegação SPA sem recarregamento
- Código modular e escalável

### ✅ Sistema de Fallback
- 404 amigável para projetos não encontrados
- Redirecionamento automático para projetos incompletos
- Deep linking funciona perfeitamente

## 📊 Dados do Projeto

### Interface TypeScript

```typescript
export interface Project {
  id: string;                    // Slug: "riocard"
  client: string;                // "RioCard"
  description: string;           // Descrição curta
  tags: string[];                // ["Mobile Design", "UX"]
  imageComponent: ComponentType; // Preview component
  link: string;                  // "/projetos/riocard"
  
  fullContent?: {                // Conteúdo completo do case
    heroTitle: string;
    heroDescription: string;
    heroImage: string;
    aboutTitle: string;
    aboutDescription: string;
    companyProblemDescription: string;
    userProblemDescription: string;
    resultsDescription: string;
    metrics?: Array<{
      title: string;
      description: string;
    }>;
    projectImages?: string[];
  };
}
```

### Exemplo de Projeto

```typescript
{
  id: 'riocard',
  client: 'RioCard',
  description: 'Redesign completo do super app de mobilidade urbana',
  tags: ['Mobile Design', 'Design System', 'UX Research'],
  imageComponent: RioCardImage,
  link: '/projetos/riocard',
  
  fullContent: {
    heroTitle: 'Super App de Mobilidade Urbana',
    heroDescription: 'Redesign completo focado em acessibilidade...',
    // ... resto do conteúdo
    metrics: [
      {
        title: '58% de redução no churn',
        description: 'Taxa de abandono caiu de 35% para 14,7%'
      },
      // ... mais métricas
    ]
  }
}
```

## 🛠️ Como Usar

### 1. Adicionar Novo Projeto

Edite `/data/projectsData.ts`:

```typescript
export const projectsData: Project[] = [
  // ... projetos existentes
  
  // NOVO PROJETO
  {
    id: 'novo-projeto',
    client: 'Cliente ABC',
    description: 'Descrição do projeto',
    tags: ['Web Design', 'UX'],
    imageComponent: NovoProjetoImage,
    link: '/projetos/novo-projeto',
    fullContent: {
      // ... conteúdo completo
    }
  }
];
```

**Não é necessário**:
- ❌ Criar novo componente de página
- ❌ Adicionar rota no Router
- ❌ Modificar navegação
- ❌ Atualizar breadcrumbs

**Tudo acontece automaticamente!** 🎉

### 2. Linkar para Projeto

```tsx
import { Link } from 'react-router-dom';

// Link direto
<Link to="/projetos/riocard">Ver RioCard</Link>

// Link dinâmico
import { projectsData } from './data/projectsData';
const project = projectsData.find(p => p.id === 'riocard');
<Link to={project.link}>{project.client}</Link>
```

### 3. Buscar Projetos

```tsx
import { getProjectBySlug, projectsData } from './data/projectsData';

// Buscar por ID
const project = getProjectBySlug('riocard');

// Filtrar por tag
const mobileProjects = projectsData.filter(p => 
  p.tags.includes('Mobile Design')
);

// Buscar por texto
const results = projectsData.filter(p =>
  p.client.includes(searchTerm) ||
  p.description.includes(searchTerm)
);
```

## 🔍 SEO Implementado

### ItemList (Listagem)
```html
<section itemscope itemtype="https://schema.org/ItemList">
  <div itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
    <meta itemprop="position" content="1" />
    <div itemprop="item" itemscope itemtype="https://schema.org/CreativeWork">
      <meta itemprop="name" content="RioCard - Redesign..." />
      <link itemprop="url" href="/projetos/riocard" />
    </div>
  </div>
</section>
```

### BreadcrumbList
```html
<nav aria-label="Breadcrumb">
  <ol itemscope itemtype="https://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="/">
        <span itemprop="name">Início</span>
      </a>
      <meta itemprop="position" content="1" />
    </li>
  </ol>
</nav>
```

## 🎨 Design System

### Cores
- **Primary**: `#1760ff` (azul)
- **Primary Hover**: `#0d4fd1`
- **Text Dark**: `#18181b`
- **Text Gray**: `#71717a`
- **Border**: `#e4e4e7`

### Tipografia
- **Font Family**: Manrope
- **Configurações**: `/styles/globals.css`
- **Não adicione** classes de font-size/weight a menos que solicitado

### Grid
- **Max Width**: 1440px
- **Columns**: 12
- **Gap**: 32px
- **Padding Horizontal**: 150px
- **Espaçamento Vertical**: 150px entre seções

## 📚 Documentação Completa

### 📖 Arquivos de Documentação

1. **ARCHITECTURE.md**
   - Arquitetura técnica completa
   - Fluxo de navegação
   - Sistema de rotas dinâmicas
   - Helper functions
   - Próximos passos recomendados

2. **DEVELOPMENT_GUIDELINES.md**
   - Princípios de navegação
   - SEO e acessibilidade
   - Otimização de imagens
   - Checklist de code review
   - Erros comuns a evitar

3. **EXAMPLES.md**
   - Adicionar novo projeto (passo a passo)
   - Editar projeto existente
   - Criar links dinâmicos
   - Buscar projetos
   - Validar dados
   - Checklist de SEO

## ✅ Checklist de Implementação

### Navegação
- [x] React Router configurado com HashRouter
- [x] Rotas dinâmicas: `/`, `/projetos`, `/projetos/:id`
- [x] Links sem hash (`<Link to="/path">`)
- [x] Navegação SPA sem recarregamento

### Dados
- [x] Array centralizado em `/data/projectsData.ts`
- [x] Interface TypeScript com type safety
- [x] Helper functions: `getProjectById()`, `getProjectBySlug()`
- [x] 5 projetos completos com conteúdo

### SEO
- [x] Schema.org ItemList na listagem
- [x] Schema.org BreadcrumbList
- [x] Slugs amigáveis (kebab-case)
- [x] Alt text descritivo em imagens
- [x] Tags semânticas (`<nav>`, `<main>`, `<section>`)

### Performance
- [x] Lazy loading em imagens below-the-fold
- [x] Eager loading em hero images
- [x] Código modular e componentes reutilizáveis

### UX
- [x] Breadcrumb dinâmico
- [x] Página 404 amigável
- [x] Hovers e transições suaves
- [x] Aria-labels em ícones

## 🚀 Próximos Passos

### Curto Prazo
- [ ] JSON-LD para SEO avançado
- [ ] Prefetch de rotas
- [ ] Analytics de navegação

### Médio Prazo
- [ ] Filtros dinâmicos por tag
- [ ] Busca de projetos
- [ ] Páginas de categoria

### Longo Prazo
- [ ] CMS Headless (opcional)
- [ ] Internacionalização (PT/EN/ES)
- [ ] PWA com cache offline

## 🤝 Contribuindo

Ao adicionar funcionalidades:
1. Atualize interface `Project` se necessário
2. Adicione helper functions em `projectsData.ts`
3. Mantenha SEO (Schema.org)
4. Teste fallbacks e rotas inválidas
5. Documente mudanças

## 📞 Suporte

Para dúvidas sobre:
- **Dados**: Ver `/data/projectsData.ts` e `EXAMPLES.md`
- **Arquitetura**: Ver `ARCHITECTURE.md`
- **Padrões de código**: Ver `DEVELOPMENT_GUIDELINES.md`
- **Exemplos práticos**: Ver `EXAMPLES.md`

---

**Última atualização**: Dezembro 2024  
**Versão**: 2.0  
**Stack**: React, TypeScript, React Router, Tailwind CSS
