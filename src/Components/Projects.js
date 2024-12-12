import React, { useEffect, useRef, useState } from "react";

const projects = [
  {
    name: "Portfolio Personal",
    description: "Un portafolio diseñado con React y TailwindCSS.",
    link: "https://example.com/portfolio",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Tienda Online",
    description: "E-commerce construido con React y Node.js.",
    link: "https://example.com/store",
    image: "https://via.placeholder.com/300x200",
  },
  {
    name: "Aplicación de Tareas",
    description: "Aplicación para gestión de tareas con React.",
    link: "https://example.com/todo",
    image: "https://via.placeholder.com/300x200",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Se activa cuando el 20% de la sección es visible
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="h-screen relative bg-darkStill text-white py-16 px-8 flex flex-col items-center justify-center"
    >
      {/* Bordes superior e inferior con degradado */}
      <div className="absolute top-0 left-0 w-full h-0 bg-gradient-to-r from-transparent via-customBrown to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-customBrown to-transparent"></div>

      {/* Efecto de Aparición */}
      <div
        className={`container mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-10">Proyectos</h2>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-lg shadow-lg bg-gray-800 hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover transition-all duration-300 group-hover:opacity-80"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
