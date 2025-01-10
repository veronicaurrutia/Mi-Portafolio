import React, { useEffect, useRef, useState } from "react";
import rayen from "./img/Rayen.png";

const Jobs = () => {
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
      { threshold: 0.3 } // Cuando el 30% de la sección es visible
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
      id="jobs"
      ref={sectionRef}
      className="relative min-h-screen bg-brownDrak text-white flex flex-col items-center justify-center px-8 md:px-20 lg:px-32"
    >
      {/* Bordes superior e inferior con degradado */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-customBrown to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-customBrown to-transparent"></div>

      {/* Contenedor general */}
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Contenido de texto */}
        <div
          className={`md:w-1/2 text-left transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
        >
          <h2 className="text-5xl font-bold mb-6 text-white">Trabajo</h2>
          <h3 className="text-2xl font-semibold mb-4 text-brown-500">
            Rayensalud
          </h3>
          <a
            href="https://www.rayensalud.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rayensalud
          </a>
          <p className="text-gray-300 leading-relaxed text-lg">
            En mi tiempo en Rayen Salud, fui parte de un equipo que transformó y
            optimizó experiencias digitales, trabajando con tecnologías como
            React, HTML, CSS, y JavaScript. Allí aprendí a gestionar el ciclo
            completo de desarrollo, desde la detección de errores hasta la
            implementación de soluciones prácticas, y realicé pruebas
            exhaustivas de código y producto, garantizando la calidad y
            estabilidad de las aplicaciones.
            <br />
            <br />
            Además, adquirí experiencia utilizando Aurelia y C#, lo que amplió
            mi conocimiento en frameworks y lenguajes avanzados, y fortalecí mi
            capacidad para trabajar tanto en contextos de front-end como de
            back-end. También tuve la oportunidad de profundizar en la
            integración de bases de datos, permitiéndome abordar proyectos de
            manera integral. Mi compromiso con el aprendizaje continuo me llevó
            a obtener certificaciones en SQL y UX/UI, herramientas que
            complementan mi capacidad para diseñar experiencias de usuario
            eficientes y gestionar información de manera estructurada. Estas
            habilidades, junto con mi enfoque en la mejora continua y el
            trabajo en equipo, son fundamentales para mí. Estoy emocionada por
            la posibilidad de aplicar mi experiencia y conocimientos en un
            nuevo entorno donde pueda seguir desarrollándome, contribuir con
            ideas frescas y apoyar el crecimiento de su equipo.
          </p>
        </div>
        <div
          className={`md:w-1/2 flex justify-center items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <a
            href="https://www.rayensalud.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
          >
            <div className="relative w-64 h-64 overflow-hidden group">
              {/* Ajustar tamaño */}
              <img
                src={rayen}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                alt="Rayen Salud"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
