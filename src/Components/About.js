import React, { useEffect, useRef, useState } from "react";
import Mi from "./img/mi.jpeg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Activa el efecto cuando la sección es visible
        } else {
          setIsVisible(false); // Desactiva el efecto cuando la sección deja de ser visible
        }
      },
      { threshold: 0.3} // Cuando el 30% de la sección es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-darkFond text-white flex items-center justify-center px-8 md:px-20 lg:px-32"
    >
      {/* Bordes superior e inferior con degradado */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-customBrown to-transparent"></div>

      {/* Contenedor general */}
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Contenido de texto */}
        <div
          className={`md:w-1/2 text-left transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
        >
          <h2 className="text-5xl font-bold mb-6 text-white">Sobre mí</h2>
          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            Soy autodidacta de Desarrollo Web enfocado en programación Frontend.
            Aspiro a conseguir empleo en el mundo del Desarrollo Web, adquirir
            experiencia, nuevos conocimientos y fortalecer mi vida profesional.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Soy una persona empática y entusiasta, con competencias enfocadas en
            el trabajo en equipo, comunicación asertiva, resolución de
            problemas, responsable y proactiva. Me gusta aprender de los demás y
            superarme continuamente.
          </p>
        </div>

        {/* Imagen al lado derecho */}
        <div
          className={`md:w-1/2 flex justify-center items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-lg">
            <img src={Mi} className="w-full h-full object-cover" />
            <div className="absolute rounded-lg border-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
