import React, { useEffect, useRef, useState } from "react";
import Ham from "./img/burger.png";
import Pet from "./img/pet.png";
import RedSocial from "./img/red social.png";
import Tenpo from "./img/Tenpo.png";

const projects = [
  {
    name: "Burger Queen",
    description:
      "La presente Aplicación fue pensada principalmente para ser la solucion para meseros y chefs que integran un restaurante, con el propósito que puedan compartir la información de cada solicitud de pedido logrando de esta manera una comunicación fluida y eficiente, mejorando así tanto la atención prestada cómo los tiempos de entrega.",
    link: "https://burg-d5429.web.app/",
    links: "https://github.com/veronicaurrutia/burger-queen",
    image: Ham,
  },
  {
    name: "Pet Places",
    description:
      "Pet places es una App mobile diseñada para dar solución en el contexto de la movilidad e inclusión en la ciudad de personas que presenten algún tipo de trastorno adaptativo y que necesiten estar acompañada constantemente de su mascota de contención emocional.",
    link: "https://here-61f73.web.app/",
    links: "https://github.com/veronicaurrutia/SCL012-here-app",
    image: Pet,
  },
  {
    name: "Red social",
    description:
      "Sparrow Player es una Red Social sobre Juegos de mesa, donde podras compartir tus opiniones con otros jugadores y enterarte de próximos eventos. Además los otros participantes podran dar puntuacion de tus publicaciones y para así ser el jugador con más experiencia.",
    link: "https://social-network-3c789.web.app/#/login",
    links: "https://github.com/veronicaurrutia/SCL012-Social-Network",
    image: RedSocial,
  },
  {
    name: "Tenpo",
    description:
      "Tenpo es una aplicación financiera que busca democratizar el acceso a productos financieros con transparencia, contenido y educación, aspirando a transformar las finanzas en la región. Certificada por la Comisión para el Mercado Financiero (CMF), ofrece una cuenta digital gratuita para recargas, pagos y transferencias, junto con una tarjeta Mastercard prepago para compras internacionales.",
    link: "https://tenpo-hackathon.web.app/",
    links: "https://github.com/veronicaurrutia/scl012-tenpo",
    image: Tenpo,
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
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
      className="min-h-screen bg-darkStill text-white py-10 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center"
    >
           
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-customBrown to-transparent"></div>
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-customBrown to-transparent"></div>
      <div
        className={`container mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
          Proyectos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {projects.map((project, index) => (
    <div
      key={index}
      className="group block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
    >
      <div className="relative">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-32 object-cover transition-all duration-300 group-hover:opacity-80"
        />
        <h3 className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-sm font-semibold px-2 py-1 rounded">
          {project.name}
        </h3>
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-400 mb-3 line-clamp-3">
          {project.description}
        </p>
        <div className="flex justify-between items-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="py-1 px-4 text-xs rounded-full font-semibold text-white bg-customBrown hover:bg-opacity-80 transition-all"
          >
            Ver Proyecto
          </a>
          <a
            href={project.links}
            target="_blank"
            rel="noopener noreferrer"
            className="py-1 px-4 text-xs rounded-full font-semibold text-white bg-customBrown hover:bg-opacity-80 transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Projects;
