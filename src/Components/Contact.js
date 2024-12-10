import React from "react";

const Contact = () => {
  return (
    <section className="px-8 py-16  text-white">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      <p>Email: <a href="mailto:vero.urrutiaa@gmail.com" className="text-amber-500">vero.urrutiaa@gmail.com</a></p>
      <p>Teléfono: <span className="text-gray-400">942238116</span></p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/veronicaurrutia/"
          target="_blank"
          rel="noreferrer"
          className="text-amber-500"
        >
          Ver mi LinkedIn
        </a>
      </p>
    </section>
  );
};

export default Contact;
