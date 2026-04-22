import React, { useEffect, useRef, useState } from "react";
import rayen from "./img/Rayen.png";

const jobsData = [
  {
    company: "DIT Chile",
    role: "Desarrolladora Full-Stack",
    period: "Actualidad",
    current: true,
    logo: null,
    initials: "DIT",
    color: "bg-customBrown",
    website: "https://www.dit.cl/",
    description:
      "Actualmente me desempeño como Desarrolladora Full-Stack en DIT Chile, donde participo en el diseño y desarrollo de soluciones digitales completas. Trabajo en el ciclo completo de los proyectos, desde la arquitectura hasta la implementación, aplicando mis conocimientos en frontend, backend y UX/UI para crear productos de alto impacto que aporten valor real a los usuarios y al negocio.",
  },
  {
    company: "Loginsa",
    role: "Desarrolladora Web",
    period: "Experiencia anterior",
    current: false,
    logo: null,
    initials: "LOG",
    color: "bg-gray-600",
    website: null,
    description:
      "En Loginsa participé en el desarrollo y mantenimiento de plataformas web, colaborando con equipos multidisciplinarios para entregar soluciones robustas y escalables. Apliqué mis habilidades en React, JavaScript y CSS para mejorar interfaces y optimizar flujos de trabajo, contribuyendo a la mejora continua de los productos digitales de la empresa.",
  },
  {
    company: "Rayensalud",
    role: "Desarrolladora Frontend",
    period: "Experiencia anterior",
    current: false,
    logo: rayen,
    initials: null,
    color: null,
    website: "https://www.rayensalud.com/",
    description:
      "En Rayen Salud fui parte de un equipo que transformó y optimizó experiencias digitales, trabajando con React, HTML, CSS, JavaScript, Aurelia y C#. Gestioné el ciclo completo de desarrollo, desde la detección de errores hasta la implementación de soluciones. Realicé pruebas exhaustivas de código y producto, y profundicé en integración de bases de datos. Obtuve certificaciones en SQL y UX/UI durante este período.",
  },
];

const JobCard = ({ job, isVisible, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"} items-center gap-8 mb-16 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="w-full md:w-1/2 flex justify-center">
        {job.logo ? (
          <a
            href={job.website}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-40 h-40 sm:w-52 sm:h-52 overflow-hidden group flex items-center justify-center"
          >
            <img
              src={job.logo}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              alt={job.company}
            />
          </a>
        ) : (
          <div
            className={`w-40 h-40 sm:w-52 sm:h-52 rounded-2xl ${job.color} flex items-center justify-center shadow-xl`}
          >
            <span className="text-4xl sm:text-5xl font-black text-white tracking-widest">
              {job.initials}
            </span>
          </div>
        )}
      </div>

      <div className="w-full md:w-1/2 text-left">
        <div className="flex items-center gap-3 mb-2">
          {job.current && (
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-customBrown text-white animate-pulse">
              Trabajo actual
            </span>
          )}
          <span className="text-sm text-gray-400">{job.period}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-1 text-white">
          {job.company}
        </h3>
        <p className="text-customBrown font-semibold text-lg mb-4">{job.role}</p>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          {job.description}
        </p>
        {job.website && (
          <a
            href={job.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 py-1.5 px-5 text-sm rounded-full font-semibold text-white border border-customBrown hover:bg-customBrown transition-all duration-300"
          >
            Ver empresa
          </a>
        )}
      </div>
    </div>
  );
};

const Jobs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
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
      className="relative bg-brownDrak text-white py-20 px-4 sm:px-8 md:px-16 lg:px-24"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-customBrown to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-customBrown to-transparent"></div>

      <div className="container mx-auto">
        <h2
          className={`text-4xl sm:text-5xl font-bold mb-16 text-center text-white transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Experiencia Laboral
        </h2>

        {jobsData.map((job, index) => (
          <JobCard key={job.company} job={job} isVisible={isVisible} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Jobs;
