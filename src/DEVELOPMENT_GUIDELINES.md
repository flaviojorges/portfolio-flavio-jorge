# Diretrizes de Desenvolvimento - Flavio Jorge Portfolio

## 🎯 Princípios de Navegação

### ✅ CORRETO - React Router Links
```tsx
import { Link } from 'react-router-dom';

// Navegação interna
<Link to="/projetos">Projetos</Link>
<Link to="/projetos/riocard">Ver Case</Link>

// Navegação externa
<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
  LinkedIn
</a>
```

### ❌ INCORRETO - Hash Links
```tsx
// NUNCA use # para navegação interna
<a href="#/projetos">Projetos</a>  // ❌ Errado
<a href="/#/projetos">Projetos</a> // ❌ Errado

// Use sempre <Link> para rotas internas
<Link to="/projetos">Projetos</Link> // ✅ Correto
```

## 📊 Arquitetura de Dados Centralizada

### Fonte Única de Verdade (`/data/projectsData.ts`)
Todo o conteúdo dos projetos está centralizado em um único arquivo:

```tsx
// /data/projectsData.ts
export interface Project {
  id: string;              // Slug da URL
  client: string;          // Nome do cliente
  description: string;     // Descrição curta
  tags: string[];          // Tags de categoria
  imageComponent: ComponentType;  // Componente de preview
  link: string;            // URL completa
  fullContent?: {          // Conteúdo completo do case
    heroTitle: string;
    heroDescription: string;
    // ... mais campos
  };
}

// Array exportado com todos os projetos
export const projectsData: Project[] = [...];

// Helper functions
export function getProjectById(id: string): Project | undefined;
export function getProjectBySlug(slug: string): Project | undefined;
```

### Vantagens desta Arquitetura
1. **Zero Hardcoding**: Adicionar projeto = adicionar objeto no array
2. **SEO Automático**: Slugs amigáveis gerados do `id`
3. **Type Safety**: TypeScript garante estrutura correta
4. **Single Source of Truth**: Um lugar para editar tudo

## 🔍 SEO & Acessibilidade

### Schema.org (Microdata)
Use microdata em componentes estruturais como Breadcrumbs:

```tsx
<nav aria-label="Breadcrumb">
  <ol itemScope itemType="https://schema.org/BreadcrumbList">
    <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
      <Link to="/" itemProp="item">
        <span itemProp="name">Home</span>
      </Link>
      <meta itemProp="position" content="1" />
    </li>
  </ol>
</nav>
```

### Tags Semânticas
```tsx
// ✅ Correto
<nav>
  <ul>
    <li><Link to="/">Home</Link></li>
  </ul>
</nav>

<main>
  <article>...</article>
</main>

// ❌ Incorreto
<div className="navigation">
  <div><a>Home</a></div>
</div>
```

### Aria Labels
Sempre adicione aria-labels em ícones e botões sem texto:

```tsx
<button aria-label="Abrir menu" onClick={handleOpen}>
  <Menu />
</button>

<a href="https://linkedin.com" aria-label="LinkedIn" target="_blank">
  <LinkedInIcon />
</a>
```

## 🖼️ Otimização de Imagens

### Lazy Loading
```tsx
// Hero (above the fold) - carregamento imediato
<img 
  src={heroImage} 
  alt="Descrição detalhada"
  loading="eager"
/>

// Imagens abaixo da dobra - lazy loading
<img 
  src={projectImage} 
  alt="Nome do Projeto - Screenshot 1"
  loading="lazy"
/>
```

### Alt Text Descritivo
```tsx
// ✅ Correto - Descritivo e específico
<img alt="RioCard - Redesign do app de mobilidade urbana" />
<img alt="Flavio Jorge - Product Designer & UX/UI Specialist" />

// ❌ Incorreto - Genérico ou vazio
<img alt="imagem" />
<img alt="" />
<img alt="Projeto" />
```

## 🚀 Performance

### Code Splitting
Para projetos grandes, use lazy loading de rotas:

```tsx
import { lazy, Suspense } from 'react';

const CaseRioCard = lazy(() => import('./CaseRioCard'));

function App() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/projetos/riocard" element={<CaseRioCard />} />
      </Routes>
    </Suspense>
  );
}
```

### Otimização de Bundles
- Use importações específicas: `import { Link } from 'react-router-dom'`
- Evite importar bibliotecas inteiras: `import _ from 'lodash'` ❌
- Prefira: `import debounce from 'lodash/debounce'` ✅

## 📁 Estrutura de Arquivos

```
/
├── components/
│   ├── Header.tsx          # Navegação principal
│   ├── Footer.tsx          # Links e redes sociais
│   ├── Breadcrumb.tsx      # Navegação contextual
│   ├── ProjectCard.tsx     # Card de projeto
│   └── CaseTemplate.tsx    # Template reutilizável
├── data/
│   └── projectsData.ts     # Fonte única de dados
├── imports/                # Componentes do Figma
├── CaseDetail.tsx          # Roteador dinâmico
├── App.tsx                 # Página Home
├── Projetos.tsx            # Listagem de projetos
└── index.tsx               # Configuração de rotas
```

## 🔗 Sistema de Rotas

### Configuração (index.tsx)
```tsx
<HashRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/projetos" element={<Projetos />} />
    <Route path="/projetos/:id" element={<CaseDetail />} />
  </Routes>
</HashRouter>
```

### Rotas Dinâmicas (CaseDetail.tsx)
```tsx
import { useParams } from 'react-router-dom';

function CaseDetail() {
  const { id } = useParams();
  // Renderiza componente baseado no id
}
```

### Links Consistentes
Todos os links devem apontar para rotas sem hash:

```tsx
// ✅ Correto
<Link to="/">Home</Link>
<Link to="/projetos">Projetos</Link>
<Link to="/projetos/riocard">RioCard Case</Link>

// ❌ Incorreto
<a href="#/">Home</a>
<a href="#/projetos">Projetos</a>
```

## 🎨 Boas Práticas de UI

### Contraste de Cores
- Texto em fundo claro: `#18181b` (preto) ou `#71717a` (cinza)
- Texto em fundo escuro: `#ffffff` (branco)
- Links/CTAs: `#1760ff` (azul primário)
- Hover: `#0d4fd1` (azul escuro)

### Responsividade
- Desktop: `1440px` max-width
- Grid: 12 colunas com gap de `32px`
- Padding horizontal: `150px` (desktop)
- Espaçamento vertical entre seções: `150px`

### Tipografia
- Font family: Manrope
- Não adicione classes de tamanho/peso de fonte a menos que seja explicitamente solicitado
- As configurações globais estão em `/styles/globals.css`

## ✅ Checklist de Code Review

Antes de enviar código, verifique:

- [ ] Todos os links internos usam `<Link to="/path">`?
- [ ] Nenhum link interno tem `#` no href?
- [ ] Imagens têm alt text descritivo?
- [ ] Imagens abaixo da dobra têm `loading="lazy"`?
- [ ] Ícones e botões sem texto têm `aria-label`?
- [ ] Tags semânticas (`<nav>`, `<main>`, `<article>`) são usadas?
- [ ] Schema.org está presente em breadcrumbs e listas?
- [ ] Links externos têm `target="_blank"` e `rel="noopener noreferrer"`?
- [ ] Componentes estão dentro do contexto do Router?

## 🚫 Erros Comuns a Evitar

1. **Misturar hash com React Router**
   ```tsx
   // ❌ Errado
   <a href="#/projetos">
   
   // ✅ Correto
   <Link to="/projetos">
   ```

2. **Alt text vazio ou genérico**
   ```tsx
   // ❌ Errado
   <img alt="" />
   <img alt="imagem" />
   
   // ✅ Correto
   <img alt="RioCard - Interface do app de mobilidade" />
   ```

3. **Usar `<Link>` fora do Router**
   ```tsx
   // Certifique-se que o componente está dentro de <HashRouter>
   // no index.tsx
   ```

4. **Recarregar página com navegação**
   ```tsx
   // ❌ Errado - recarrega a página
   <a href="/projetos">
   
   // ✅ Correto - navegação SPA
   <Link to="/projetos">
   ```

## 📚 Recursos

- [React Router Docs](https://reactrouter.com/)
- [Schema.org Breadcrumbs](https://schema.org/BreadcrumbList)
- [Web Accessibility (A11y)](https://www.w3.org/WAI/WCAG21/quickref/)
- [Lazy Loading Images](https://web.dev/browser-level-image-lazy-loading/)