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
  { name: "HTML 5",description: "Servicios en la nube", image: Html },
  { name: "React",description: "Servicios en la nube", image: react },
  { name: "JavaScript",description: "Servicios en la nube", image: Js},
  { name: "Sql",description: "Servicios en la nube", image: Sql },
  { name: "Tailwind",description: "Servicios en la nube", image: Tailwind },
  { name: "GitHub",description: "Servicios en la nube", image: GitHub },
  { name: "Css",description: "Servicios en la nube", image: Css},
  { name: "Trello",description: "Servicios en la nube", image: Trello },
  { name: "Azure",description: "Servicios en la nube", image: Azure },
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
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-customBrown to-transparent"></div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
          Habilidades
        </h2>
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className= "relative group p-4 sm:p-6 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Imagen */}
              <img
                src={skill.image}
                alt={`Logo de ${skill.name}`}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto"
              />
              {/* Texto oculto, visible solo en hover */}
              <div className="font-medium inset-0 flex flex-col items-center justify-center bg-translate bg-opacity-50 text-center p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm sm:text-base font-bold">
                  {skill.name}
                </p>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">
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
