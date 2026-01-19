import { ProjectCard } from './ProjectCard';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectGrid() {
  const [images, setImages] = useState<{ [key: string]: string }>({});

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Product Design',
      description: 'Redesigning the shopping experience for a modern retail brand',
      year: '2024',
      imageKey: 'ecommerce'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'UX/UI Design',
      description: 'Creating a seamless digital banking experience',
      year: '2024',
      imageKey: 'banking'
    },
    {
      id: 3,
      title: 'Fitness Dashboard',
      category: 'Product Design',
      description: 'Health tracking platform with personalized insights',
      year: '2023',
      imageKey: 'fitness'
    },
    {
      id: 4,
      title: 'Travel Booking System',
      category: 'UX Research',
      description: 'Streamlining the journey from search to booking',
      year: '2023',
      imageKey: 'travel'
    },
    {
      id: 5,
      title: 'Social Media Platform',
      category: 'Product Design',
      description: 'Building connections through thoughtful design',
      year: '2023',
      imageKey: 'social'
    },
    {
      id: 6,
      title: 'Project Management Tool',
      category: 'UX/UI Design',
      description: 'Helping teams collaborate more effectively',
      year: '2022',
      imageKey: 'project'
    }
  ];

  return (
    <section id="work" className="pb-[150px]">
      <div className="mb-12">
        <h2 className="text-5xl mb-4">Selected Work</h2>
        <p className="text-xl text-gray-600">
          A collection of projects showcasing my design process and impact
        </p>
      </div>
      
      <div className="grid grid-cols-12 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="col-span-6">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
