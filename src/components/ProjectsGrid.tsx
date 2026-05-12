import React, { useState, useEffect } from 'react';
import { projectsData } from '../utils/constants';

const ProjectsGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [isVisible, setIsVisible] = useState(false);

  const categories = ['all', 'beauty', 'food', 'fashion', 'tech', 'jewellery', 'lifestyle'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const element = document.getElementById('projects');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleFilter = (category: string) => {
    setActiveFilter(category);
    setFilteredProjects(category === 'all' ? projectsData : projectsData.filter(p => p.category === category));
  };

  return (
    <section id="projects" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-display font-medium text-primary mb-4 tracking-tighter">
            Our <span className="font-semibold">Portfolio</span>
          </h2>
          <p className="text-xl font-body text-secondary max-w-2xl mx-auto">
            A selection of our favourite shots across beauty, food, fashion, tech, and more
          </p>
        </div>

        <div className={`flex flex-wrap justify-center mb-12 space-x-2 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`px-6 py-2 m-1 text-sm font-nav font-medium tracking-wide transition-all duration-500 hover:scale-105 transform rounded-lg ${
                activeFilter === category
                  ? 'bg-accent text-white shadow-lg scale-105'
                  : 'bg-white text-secondary hover:text-primary border border-gray-200 hover:border-accent hover:shadow-md'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-700 hover:scale-105 rounded-xl overflow-hidden ${
                index % 3 === 1 ? 'md:mt-12' : ''
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-700 group-hover:shadow-accent/10 rounded-xl">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-heading font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/90 font-body text-sm mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                      {project.description}
                    </p>
                    <span className="inline-block text-xs font-nav font-medium px-3 py-1 bg-accent/80 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300 tracking-wide uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-6 h-6 border-2 border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45 rounded-sm"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
