# Arquitetura do Portfólio - Sistema de Dados e Rotas Dinâmicas

## 🏗️ Visão Geral

Este portfólio utiliza uma arquitetura moderna baseada em:
- **React Router** para navegação SPA (Single Page Application)
- **Dados Centralizados** em `/data/projectsData.ts`
- **Rotas Dinâmicas** com parâmetros de URL
- **SEO Otimizado** com Schema.org e Microdata
- **Fallback System** para rotas não encontradas

---

## 📊 Estrutura de Dados (`/data/projectsData.ts`)

### Interface TypeScript

```typescript
export interface Project {
  id: string;                    // Slug usado na URL: /projetos/riocard
  client: string;                // Nome do cliente: "RioCard"
  description: string;           // Descrição curta para cards
  tags: string[];                // ["Mobile Design", "UX Research"]
  imageComponent: ComponentType; // Componente React de preview
  link: string;                  // URL completa: "/projetos/riocard"
  
  fullContent?: {                // Conteúdo da página do case (opcional)
    heroTitle: string;
    heroDescription: string;
    heroImage: string;
    aboutTitle: string;
    aboutDescription: string;
    companyProblemTitle?: string;
    companyProblemDescription: string;
    userProblemTitle?: string;
    userProblemDescription: string;
    resultsTitle?: string;
    resultsDescription: string;
    metrics?: Array<{
      title: string;
      description: string;
    }>;
    projectImages?: string[];
  };
}
```

### Helper Functions

```typescript
// Busca projeto por ID exato
export function getProjectById(id: string): Project | undefined {
  return projectsData.find(project => project.id === id);
}

// Busca projeto por slug (case-insensitive, com trim)
export function getProjectBySlug(slug: string): Project | undefined {
  const normalizedSlug = slug.toLowerCase().trim();
  return projectsData.find(project => project.id.toLowerCase() === normalizedSlug);
}
```

---

## 🛣️ Sistema de Rotas

### Configuração Principal (`/index.tsx`)

```tsx
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Projetos from './Projetos';
import CaseDetail from './CaseDetail';

<HashRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/projetos" element={<Projetos />} />
    <Route path="/projetos/:id" element={<CaseDetail />} />
  </Routes>
</HashRouter>
```

### Fluxo de Navegação

```
1. Usuário clica em "Ver Projetos"
   → <Link to="/projetos">
   → Renderiza <Projetos />

2. Usuário clica em card "RioCard"
   → <Link to="/projetos/riocard">
   → Renderiza <CaseDetail />
   → useParams() captura id="riocard"
   → getProjectBySlug("riocard") busca dados
   → <CaseTemplate /> renderiza conteúdo
```

---

## 🔄 Componentes Dinâmicos

### 1. ProjectList (`/components/ProjectList.tsx`)

**Responsabilidade**: Renderizar lista de projetos com SEO

```tsx
export function ProjectList() {
  return (
    <section itemScope itemType="https://schema.org/ItemList">
      {projectsData.map((project, index) => (
        <div 
          key={project.id}
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <meta itemProp="position" content={index + 1} />
          <ProjectCard {...project} />
        </div>
      ))}
    </section>
  );
}
```

**SEO Benefits**:
- Google entende que é uma lista de itens
- Cada item tem posição definida
- Rich snippets podem aparecer nos resultados

---

### 2. CaseDetail (`/CaseDetail.tsx`)

**Responsabilidade**: Renderizar página de case dinamicamente

```tsx
export default function CaseDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectBySlug(id) : undefined;
  
  // Fallback 1: Projeto não encontrado
  if (!id || !project) {
    return <ProjetoNaoEncontrado404 />;
  }
  
  // Fallback 2: Projeto sem conteúdo completo
  if (!project.fullContent) {
    return <Navigate to="/projetos" replace />;
  }
  
  // Renderiza caso válido
  return (
    <>
      <Breadcrumb items={[...]} />
      <CaseTemplate {...project.fullContent} />
    </>
  );
}
```

**Features**:
- ✅ Captura ID da URL via `useParams()`
- ✅ Busca dados no array centralizado
- ✅ Renderiza página 404 amigável se não encontrar
- ✅ Breadcrumb dinâmico com nome do cliente
- ✅ Redireciona se projeto não tem conteúdo

---

### 3. Breadcrumb Dinâmico (`/components/Breadcrumb.tsx`)

**Responsabilidade**: Navegação contextual com Schema.org

```tsx
// Página de listagem
<Breadcrumb items={[
  { label: 'Início', href: '/' },
  { label: 'Projetos' }  // Último item sem href
]} />

// Página de case específico
<Breadcrumb items={[
  { label: 'Início', href: '/' },
  { label: 'Projetos', href: '/projetos' },
  { label: 'RioCard' }  // Nome dinâmico do cliente
]} />
```

**SEO Benefits**:
- Microdata Schema.org/BreadcrumbList
- Google mostra breadcrumb nos resultados
- Melhora UX em dispositivos móveis

---

## 🚀 Como Adicionar um Novo Projeto

### Passo 1: Adicionar ao Array de Dados

Edite `/data/projectsData.ts`:

```typescript
export const projectsData: Project[] = [
  // ... projetos existentes
  {
    id: 'novo-projeto',  // Slug da URL
    client: 'Cliente XYZ',
    description: 'Descrição curta do projeto',
    tags: ['Web Design', 'UX Research'],
    imageComponent: NovoProjetoImage,  // Importar componente
    link: '/projetos/novo-projeto',
    fullContent: {
      heroTitle: 'Título do Hero',
      heroDescription: 'Descrição detalhada...',
      // ... resto do conteúdo
    }
  }
];
```

### Passo 2: (Opcional) Criar Componente de Imagem

Se precisar de preview customizado:

```tsx
// /components/NovoProjetoImage.tsx
export default function NovoProjetoImage() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img src="/assets/novo-projeto.png" alt="Cliente XYZ" />
    </div>
  );
}
```

### Passo 3: Testar

1. Navegue para `/projetos`
2. Veja o novo card aparecer automaticamente
3. Clique no card
4. Navegue para `/projetos/novo-projeto`
5. Veja a página do case renderizada

**Não é necessário**:
- ❌ Criar novo componente de página
- ❌ Adicionar nova rota no Router
- ❌ Modificar componentes de navegação
- ❌ Atualizar breadcrumbs manualmente

---

## 🔍 SEO - Schema.org Implementado

### ItemList (Listagem de Projetos)

```html
<section itemscope itemtype="https://schema.org/ItemList">
  <div itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
    <meta itemprop="position" content="1" />
    <div itemprop="item" itemscope itemtype="https://schema.org/CreativeWork">
      <meta itemprop="name" content="RioCard - Redesign..." />
      <meta itemprop="description" content="..." />
      <link itemprop="url" href="https://flaviojorge.com/projetos/riocard" />
    </div>
  </div>
</section>
```

**O que o Google vê**:
- Lista ordenada de trabalhos criativos
- Cada item tem nome, descrição e URL
- Posição de cada item na lista

### BreadcrumbList (Navegação Contextual)

```html
<nav aria-label="Breadcrumb">
  <ol itemscope itemtype="https://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="/">
        <span itemprop="name">Início</span>
      </a>
      <meta itemprop="position" content="1" />
    </li>
    <!-- ... mais itens -->
  </ol>
</nav>
```

**O que o Google vê**:
- Hierarquia de navegação do site
- Caminho completo até a página atual
- Estrutura lógica do conteúdo

---

## 🛡️ Sistema de Fallback

### Cenário 1: URL Inválida

```
Usuário acessa: /projetos/projeto-que-nao-existe

Resultado:
→ getProjectBySlug("projeto-que-nao-existe") retorna undefined
→ Renderiza página 404 amigável
→ Oferece botões "Ver todos os projetos" e "Voltar ao início"
```

### Cenário 2: Projeto Sem Conteúdo

```
Usuário acessa: /projetos/rascunho-incompleto

Resultado:
→ getProjectBySlug("rascunho-incompleto") encontra projeto
→ Mas project.fullContent === undefined
→ Redireciona para /projetos com <Navigate replace />
→ Usuário vê a listagem de projetos
```

### Cenário 3: Acesso Direto via URL

```
Usuário digita manualmente: flaviojorge.com/#/projetos/riocard

Resultado:
→ HashRouter reconhece a rota
→ Renderiza <CaseDetail />
→ useParams() captura id="riocard"
→ Busca dados e renderiza normalmente
→ ✅ Deep linking funciona perfeitamente
```

---

## 📈 Métricas e Performance

### Lazy Loading Implementado

```tsx
// Hero (above the fold)
<img loading="eager" />  // Carrega imediatamente

// Imagens de cases (below the fold)
<img loading="lazy" />   // Carrega sob demanda
```

**Economia estimada**:
- ~70% menos dados carregados no primeiro acesso
- ~2.5s mais rápido First Contentful Paint (FCP)

### Code Splitting Futuro

Para escalar ainda mais:

```tsx
// /index.tsx
const CaseDetail = lazy(() => import('./CaseDetail'));

<Suspense fallback={<LoadingSpinner />}>
  <Route path="/projetos/:id" element={<CaseDetail />} />
</Suspense>
```

---

## 🎯 Próximos Passos Recomendados

### Curto Prazo (1-2 semanas)

1. **JSON-LD para SEO Avançado**
   ```tsx
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "ItemList",
     "itemListElement": [...]
   }
   </script>
   ```

2. **Prefetch de Rotas**
   ```tsx
   <Link to="/projetos/riocard" prefetch="intent">
   ```

3. **Analytics de Navegação**
   - Rastrear cliques em cards
   - Medir tempo de permanência em cases
   - Identificar projetos mais visitados

### Médio Prazo (1 mês)

1. **Filtros Dinâmicos**
   ```tsx
   <FilterBar tags={["Mobile Design", "Web Design", ...]} />
   // Filtra projectsData sem recarregar
   ```

2. **Busca de Projetos**
   ```tsx
   const results = projectsData.filter(p => 
     p.client.includes(searchTerm) ||
     p.description.includes(searchTerm)
   );
   ```

3. **Páginas de Tag**
   ```
   /projetos/tag/mobile-design
   → Mostra todos os projetos com tag "Mobile Design"
   ```

### Longo Prazo (3 meses)

1. **CMS Headless (Opcional)**
   - Migrar `projectsData.ts` para Contentful/Sanity
   - Editar conteúdo sem tocar no código
   - Preview de mudanças antes de publicar

2. **Internacionalização (i18n)**
   ```tsx
   const projectsData_PT = [...]
   const projectsData_EN = [...]
   ```

3. **PWA (Progressive Web App)**
   - Cache de cases visitados
   - Funciona offline
   - Instalável no celular

---

## 📚 Referências Técnicas

- **React Router v6**: https://reactrouter.com/
- **Schema.org ItemList**: https://schema.org/ItemList
- **Schema.org BreadcrumbList**: https://schema.org/BreadcrumbList
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/
- **Web.dev Performance**: https://web.dev/vitals/

---

## 🤝 Contribuindo

Ao adicionar funcionalidades, sempre:
1. Atualize a interface `Project` se necessário
2. Adicione helper functions em `projectsData.ts`
3. Mantenha SEO (Schema.org) em novos componentes
4. Teste fallbacks e rotas inválidas
5. Documente mudanças neste arquivo
