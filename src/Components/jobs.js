import React, { useEffect, useRef, useState } from "react";
import rayen from "./img/Rayen.png";

const Jobs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
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
      className="relative min-h-screen bg-brownDrak text-white flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24"
    >
      {/* Bordes superior e inferior con degradado */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-customBrown to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-customBrown to-transparent"></div>

      {/* Contenedor general */}
      <div className="container mx-auto flex flex-col gap-8 md:flex-row items-center">
        {/* Contenido de texto */}
        <div
          className={`w-full md:w-1/2 text-left transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Trabajo
          </h2>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-brown-500">
            Rayensalud
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            En Rayen Salud, formé parte de un equipo especializado en la transformación y 
            optimización de experiencias digitales en el sector salud. Trabajé con tecnologías 
            como React, HTML, CSS, JavaScript, Aurelia y C#, gestionando el ciclo completo 
            de desarrollo desde la detección de errores hasta la implementación de soluciones.
            <br />
            <br />
            Mis responsabilidades incluyeron el desarrollo de interfaces de usuario, pruebas 
            exhaustivas de código y productos, garantizando la calidad y estabilidad de las 
            aplicaciones. Adquirí experiencia tanto en front-end como back-end, trabajando 
            con integración de bases de datos y desarrollando soluciones integrales.
            <br />
            <br />
            Durante este período, obtuve certificaciones en SQL y UX/UI, complementando mi 
            capacidad para diseñar experiencias de usuario eficientes y gestionar información 
            de manera estructurada. Esta experiencia fortaleció mi compromiso con el 
            aprendizaje continuo y la excelencia técnica.
          </p>
        </div>
        <div
          className={`w-full md:w-1/2 flex justify-center items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <a
            href="https://www.rayensalud.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 overflow-hidden group">
              <img
                src={rayen}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                alt="Logo de Rayen Salud - Empresa de tecnología en salud"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
