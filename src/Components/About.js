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
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Contenido de texto */}
        <div
          className={`lg:w-1/2 text-left transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">Sobre mí</h2>
          <p className="text-gray-300 mb-6 leading-relaxed text-base sm:text-lg">
            Soy una desarrolladora web frontend con sólida experiencia en diseño y desarrollo 
            de aplicaciones web modernas. Me especializo en React, HTML, CSS, JavaScript, 
            Tailwind CSS y SQL. Durante mi experiencia en Rayensalud, diseñé y desarrollé 
            proyectos web completos, desde la identificación de problemas hasta la 
            implementación de soluciones efectivas.
          </p>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            Mi background en enfermería me ha proporcionado habilidades excepcionales en 
            trabajo en equipo, atención al detalle y comunicación efectiva. Soy una persona 
            empática, autodidacta y entusiasta, con un enfoque proactivo hacia la resolución 
            de problemas y el aprendizaje continuo. Me apasiona crear experiencias digitales 
            intuitivas y estéticamente atractivas que brinden la mejor experiencia al usuario.
          </p>
        </div>

        {/* Imagen al lado derecho */}
        <div
          className={`lg:w-1/2 flex justify-center items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg">
            <img 
              src={Mi} 
              className="w-full h-full object-cover" 
              alt="Verónica Urrutia - Desarrolladora Frontend"
            />
            <div className="absolute rounded-lg border-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
