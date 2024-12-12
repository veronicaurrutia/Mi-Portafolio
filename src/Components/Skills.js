import React, { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML 5", image: "https://via.placeholder.com/80", color: "bg-orange-600" },
  { name: "CSS 3", image: "https://via.placeholder.com/80", color: "bg-blue-500" },
  { name: "JavaScript", image: "https://via.placeholder.com/80", color: "bg-yellow-400" },
  { name: "Notion", image: "https://via.placeholder.com/80", color: "bg-black" },
  { name: "Tailwind", image: "https://via.placeholder.com/80", color: "bg-teal-500" },
  { name: "Git", image: "https://via.placeholder.com/80", color: "bg-red-500" },
  { name: "GitHub", image: "https://via.placeholder.com/80", color: "bg-gray-800" },
  { name: "Trello", image: "https://via.placeholder.com/80", color: "bg-blue-400" },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger cuando el 10% de la sección es visible
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
      className="relative min-h-screen bg-brownDrak text-white flex items-center justify-center px-8 md:px-20 lg:px-32"
    >
      {/* Bordes superior e inferior con degradado */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-customBrown to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-customBrown to-transparent"></div>

      <div className="container mx-auto relative z-10 px-4">
        <h2 className="text-5xl font-bold text-center mb-12">Habilidades</h2>

        {/* Contenedor de habilidades */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-14 justify-items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${skill.color} hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer`}
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-20 h-20 mx-auto"
              />
              <p className="text-center mt-6 font-medium text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
