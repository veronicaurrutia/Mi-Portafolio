import React, { useEffect, useRef, useState } from "react";
import react from "./img/React.png";
import Js from "./img/Js.png";
import Azure from "./img/Azure1.webp";
import GitHub from "./img/Github.png";
import Sql from "./img/Sql1.jpg";
import Tailwind from "./img/Tailwind.png";
import Trello from "./img/Trello.png";
import Css from "./img/Css.png";
import Html from "./img/Html.png";

const skills = [
  { name: "HTML 5", description: "Tengo una experiencia solida en el uso de HTML5 para el desarrollo y diseño de proyectos web, creando estructuras semánticas claras y eficientes.", image: Html },
  { name: "React", description: "He trabajado con el desarrollo de interfaces de usuario dinámicas funcionales, la definición, testeo y mejora de componentes reutilizables.", image: react },
  { name: "Sql", description: "He desempeñado tareas como la creación y optimización de consultas para manejar grandes volúmenes de información, gestión y modelado de bases de datos, extracción de datos.", image: Sql },
  { name: "Tailwind", description: "Utilizo su sistema de clases utilitarias para aplicar estilos de manera eficiente, lo que me permite crear diseños responsivos y mantener el código limpio y organizado.", image: Tailwind },
  { name: "JavaScript", description: "Me ha permitido implementar soluciones personalizadas para resolver problemas específicos, optimizando la lógica y que el código sea eficiente y mantenible para la manipulación del DOM como el desarrollo de aplicaciones.", image: Js },
  { name: "Css", description: "He creado diseños responsivos que se adaptan a diferentes dispositivos y pantallas, utilizando técnicas modernas como Flexbox y Grid para lograr estructuras dinámicas y flexibles.", image: Css },
  { name: "Trello", description: "He utilizado Trello como una herramienta clave para la gestión de proyectos y la organización de tareas, tanto de manera individual como en equipo.", image: Trello },
  { name: "Azure", description: "Tengo experiencia en el uso de Azure DevOps, incluyendo la configuración de organizaciones y proyectos, la implementación de la metodología Agile y la centralización de documentación.", image: Azure },
  { name: "GitHub", description: "Mi experiencia incluye la resolución de conflictos, revisión de código a través de pull requests y documentación detallada en los repositorios para facilitar la colaboración en equipo.", image: GitHub },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="relative min-h-screen bg-brownDrak text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 lg:px-24"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">
          Habilidades
        </h2>
        <div
          className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-12 justify-items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <img
                src={skill.image}
                alt={`Logo de ${skill.name}`}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs sm:text-sm font-bold">
                  {skill.name}
                </p>
                <p className="text-gray-300 text-[10px] sm:text-xs mt-1 px-2">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
