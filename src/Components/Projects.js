import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'Proyecto 1', description: 'Descripción del proyecto 1' },
    { name: 'Proyecto 2', description: 'Descripción del proyecto 2' },
    { name: 'Proyecto 3', description: 'Descripción del proyecto 3' },
  ];

  return (
    <section id="projects" className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 bg-white rounded shadow">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
