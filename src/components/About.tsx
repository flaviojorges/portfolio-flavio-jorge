export function About() {
  return (
    <section id="about" className="pb-[150px]">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-5">
          <h2 className="text-5xl mb-6">About Me</h2>
        </div>
        
        <div className="col-span-7">
          <div className="space-y-6 text-xl text-gray-700">
            <p>
              I'm a product designer with over 8 years of experience creating digital products 
              that solve real problems. My approach combines user research, strategic thinking, 
              and visual design to deliver experiences that are both beautiful and functional.
            </p>
            
            <p>
              Throughout my career, I've worked with startups and established companies across 
              various industries including fintech, e-commerce, and healthcare. I believe great 
              design happens at the intersection of user needs, business goals, and technical constraints.
            </p>
            
            <p>
              When I'm not designing, you can find me exploring new design tools, mentoring 
              junior designers, or contributing to open-source design systems.
            </p>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Product Design',
                'UX Research',
                'Interface Design',
                'Prototyping',
                'Design Systems',
                'User Testing',
                'Information Architecture',
                'Interaction Design'
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-6 py-4 bg-gray-50 rounded-lg"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
