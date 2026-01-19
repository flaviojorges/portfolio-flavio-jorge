import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  tags: string[];
  description: string;
  client: string;
  image?: string;
  imageComponent?: React.ComponentType;
  link?: string;
}

export function ProjectCard({ tags, description, client, image, imageComponent, link }: ProjectCardProps) {
  const content = (
    <div className="bg-white rounded-[20px] min-[768px]:rounded-[24px] p-5 min-[768px]:p-8 transition-all hover:-translate-y-1" style={{ boxShadow: '0px 10px 10px 0px rgba(197, 202, 206, 0.05)' }}>
      {/* flex-col no mobile, flex-row no tablet+ (flex-direction: row) */}
      <div className="flex flex-col min-[768px]:flex-row gap-6 min-[768px]:gap-8">
        {/* Conteúdo - Mobile: full width | Desktop: proporção ajustada */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center gap-3 lg:gap-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 min-[768px]:px-3 py-1 border border-[#e4e4e7] rounded-full text-[10px] min-[768px]:text-xs text-[#71717a] uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-[#18181b] text-[16px] min-[768px]:text-[18px] leading-[1.5] font-semibold">
            {description}
          </p>
          
          {/* Client */}
          <p className="text-[#1760ff] text-xs min-[768px]:text-sm uppercase tracking-wider group-hover:underline">
            {client}
          </p>
        </div>

        {/* Imagem - Mobile: full width | Desktop: proporção ajustada */}
        <div className="w-full lg:w-[40%]">
          <div className="relative w-full h-[180px] min-[768px]:h-[200px] lg:h-[220px] rounded-[12px] min-[768px]:rounded-[16px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            {imageComponent ? (
              <div className="absolute inset-0 flex items-center justify-center scale-150">
                {React.createElement(imageComponent)}
              </div>
            ) : image ? (
              <img 
                src={image} 
                alt={`${client} - ${description}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <Link to={link} className="block group">
        {content}
      </Link>
    );
  }

  return content;
}