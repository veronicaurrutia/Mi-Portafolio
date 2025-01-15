import React, { useEffect, useRef, useState } from "react";
import react from "./img/React.png";
import Js from "./img/Js.png";
import Aurelia from "./img/Aurelia1.jpg";
import Azure from "./img/Azure1.webp";
import GitHub from "./img/Github.png";
import Sql from "./img/Sql1.jpg";
import Tailwind from "./img/Tailwind.png";
import Trello from "./img/Trello.png";
import Css from "./img/Css.png";
import Html from "./img/Html.png";

const skills = [
  { name: "HTML 5", image: Html, color: "bg-orange-600" },
  { name: "React", image: react, color: "bg-blue-500" },
  { name: "JavaScript", image: Js, color: "bg-yellow-400" },
  { name: "Sql", image: Sql, color: "bg-black" },
  { name: "Tailwind", image: Tailwind, color: "bg-gray-500" },
  { name: "GitHub", image: GitHub, color: "bg-red-500" },
  { name: "Css", image: Css, color: "bg-gray-800" },
  { name: "Trello", image: Trello, color: "bg-blue-400" },
  { name: "Azure", image: Azure, color: "bg-blue-500" },
  { name: "Aurelia", image: Aurelia, color: "bg-blue-500" },
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
              className={`p-4 sm:p-6 rounded-lg ${skill.color} hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer`}
            >
              <img
                src={skill.image}
                alt={`Logo de ${skill.name}`}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto"
              />
              <p className="text-center mt-2 text-xs sm:text-sm md:text-base font-medium text-white">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
