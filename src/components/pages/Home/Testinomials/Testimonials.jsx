import "./Testimonials.css";
import TestimonialCard from "../TestinomialsCard/TestimonialCard";
import { useState, useRef, useEffect } from "react";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Diego from "../assets/Diego.jpg";
import Carmen from "../assets/Carmen.jpg";
import Alejandro from "../assets/Alejandro.jpg";
import Isabel from "../assets/Isabel.jpg";
import Maria from "../assets/Maria.jpg";
import Carlos from "../assets/Carlos.jpg";
import Ana from "../assets/Ana.jpg";
import Roberto from "../assets/Roberto.jpg";

const customers = [
  {
    fullName: "Diego Martínez",
    image: Diego,
    rating: [1, 1, 1, 1, 0.5],
    says: "Todo sabía fresco y sabroso. Lo recomiendo mucho."
  },
  {
    fullName: "Carmen López",
    image: Carmen,
    rating: [1, 1, 1, 1, 0],
    says: "El personal fue muy amable y servicial. Excelente servicio.",
  },
  {
    fullName: "Alejandro Ruiz",
    image: Alejandro,
    rating: [1, 1, 1, 1, 0.5],
    says: "Tuve una gran experiencia. Volveré pronto.",
  },
  {
    fullName: "Isabel García",
    image: Isabel,
    rating: [1, 1, 1, 1, 1],
    says: "El personal es maravilloso. Muy amables y serviciales.",
  },
  {
    fullName: "María Fernández",
    image: Maria,
    rating: [1, 1, 1, 1, 1],
    says: "La pasta mediterránea estaba deliciosa. Ambiente perfecto para una cena romántica.",
  },
  {
    fullName: "Carlos Rodríguez",
    image: Carlos,
    rating: [1, 1, 1, 1, 0.5],
    says: "Increíble ensalada griega y el postre de limón fue espectacular. Muy recomendado.",
  },
  {
    fullName: "Ana Jiménez",
    image: Ana,
    rating: [1, 1, 1, 1, 1],
    says: "El mejor restaurante mediterráneo de la ciudad. La bruschetta es auténtica.",
  },
  {
    fullName: "Roberto Morales",
    image: Roberto,
    rating: [1, 1, 1, 1, 0],
    says: "Precios justos y porciones generosas. El salmón estaba perfectamente cocido.",
  },
];

const Testimonials = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    // Inicializar botones de navegación
    setTimeout(checkScrollButtons, 100);
  }, []);

  useEffect(() => {
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, []);

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  const startAutoScroll = () => {
    setIsHovering(true);
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    
    autoScrollRef.current = setInterval(() => {
      const container = scrollContainerRef.current;
      if (container && canScrollRight) {
        container.scrollBy({ left: 1, behavior: 'auto' });
        checkScrollButtons();
      } else if (container && !canScrollRight) {
        // Volver al inicio al llegar al final
        container.scrollTo({ left: 0, behavior: 'smooth' });
        setTimeout(checkScrollButtons, 500);
      }
    }, 30);
  };

  const stopAutoScroll = () => {
    setIsHovering(false);
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -270, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 270, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  // Funcionalidad de arrastrar
  const handleMouseDown = (e) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isDown = true;
    let startX = e.pageX - container.offsetLeft;
    let scrollLeftStart = container.scrollLeft;

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeftStart - walk;
    };

    const handleMouseUp = () => {
      isDown = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      checkScrollButtons();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2>Testimonios</h2>
        </div>
        <div className="testimonials-scroll-container">
          {canScrollLeft && (
            <button className="testimonials-scroll-btn testimonials-scroll-btn-left" onClick={scrollLeft}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          )}
          <div 
            className={`testimonials-cards ${isHovering ? 'auto-scrolling' : ''}`}
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            onMouseDown={handleMouseDown}
            onMouseEnter={startAutoScroll}
            onMouseLeave={stopAutoScroll}
          >
            {customers.map((customer, index) => (
              <TestimonialCard key={index} customer={customer} />
            ))}
          </div>
          {canScrollRight && (
            <button className="testimonials-scroll-btn testimonials-scroll-btn-right" onClick={scrollRight}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
