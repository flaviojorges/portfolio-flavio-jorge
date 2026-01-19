import { ProjectCard } from './ProjectCard';
import { projectsData } from '../data/projectsData';

export function ProjectList() {
  return (
    <section 
      className="py-[150px] bg-white" 
      aria-labelledby="projects-title"
      itemScope 
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-[1440px] mx-auto px-[150px]">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16">
          <h2 
            id="projects-title" 
            className="text-[#18181b]"
            itemProp="name"
          >
            Projetos Selecionados
          </h2>
          <p className="text-[#71717a] text-lg max-w-2xl">
            Uma seleção de trabalhos focados em UX/UI Design, resolvendo problemas complexos com soluções visuais elegantes e baseadas em dados.
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="flex flex-col gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              {/* Metadados SEO ocultos */}
              <meta itemProp="position" content={(index + 1).toString()} />
              
              {/* Card do Projeto */}
              <div itemProp="item" itemScope itemType="https://schema.org/CreativeWork">
                <meta itemProp="name" content={`${project.client} - ${project.description}`} />
                <meta itemProp="description" content={project.description} />
                <link itemProp="url" href={`https://flaviojorge.com${project.link}`} />
                
                <ProjectCard 
                  tags={project.tags}
                  description={project.description}
                  client={project.client}
                  imageComponent={project.imageComponent}
                  link={project.link}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Informação adicional para SEO */}
        <meta itemProp="numberOfItems" content={projectsData.length.toString()} />
      </div>
    </section>
  );
}
