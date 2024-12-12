import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Importa la flecha (react-icons)

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling hacia arriba
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 flex items-center justify-center w-12 h-12 bg-customBrown text-white rounded-full shadow-lg hover:bg-customBrown transition-transform duration-300 hover:scale-110"
      >
        <FaArrowUp className="w-6 h-6" /> {/* Flecha hacia arriba */}
      </button>
    )
  );
};

export default ScrollToTopButton;
