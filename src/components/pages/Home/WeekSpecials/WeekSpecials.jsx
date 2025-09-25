import { HashLink } from "react-router-hash-link";
import { useState, useRef, useEffect } from "react";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bruschettaImage from "../assets/bruschetta-gourmet.jpg";
import greekSaladImage from "../assets/ensalada-griega-gourmet.jpg";
import lemonDessertImage from "../assets/postre-de-limon-gourmet.jpg";
import risottoImage from "../assets/risotto-de-hongos-gourmet.jpg";
import polloImage from "../assets/pollo-a-la-parrilla-gourmet.jpg";
import pastaImage from "../assets/pasta-mediterranea-gourmet.jpg";
import humusImage from "../assets/humus-clasico-gourmet.jpg";
import salmonImage from "../assets/salmon-nediterraneo-gourmet.jpg";
import tiramisuImage from "../assets/tiramisú-tradicional-gourmet.jpg";
import pizzaImage from "../assets/pizza-margarita-gourmet.jpg";
import lasagnaImage from "../assets/lasagna-casera-gourmet.jpg";
import gelatoImage from "../assets/gelato-siciliano-gourmet.jpg";
import "./WeekSpecials.css";
import MealCard from "../MealCard/MealCard";

const meals = [
  {
    name: "Ensalada Griega",
    image: greekSaladImage,
    price: "12,50 €",
    description: `La famosa ensalada griega de lechuga crujiente, pimientos, aceitunas y
      nuestro queso feta estilo Nueva York, adornada con crujientes crutones de ajo y romero.`,
  },
  {
    name: "Bruschetta",
    image: bruschettaImage,
    price: "8,90 €",
    description: `Nuestra Bruschetta está hecha de pan a la parrilla que ha sido
      untado con ajo y sazonado con sal y aceite de oliva.`,
  },
  {
    name: "Postre de Limón",
    image: lemonDessertImage,
    price: "6,50 €",
    description: `Esto viene directamente del libro de recetas de la abuela, cada
      ingrediente ha sido cuidadosamente seleccionado y es tan auténtico como se puede imaginar.`,
  },
  {
    name: "Pasta Mediterránea",
    image: pastaImage,
    price: "16,90 €",
    description: `Deliciosa pasta con vegetales frescos, aceite de oliva extra virgen,
      tomates cherry y hierbas aromáticas del mediterráneo.`,
  },
  {
    name: "Pollo a la Parrilla",
    image: polloImage,
    price: "19,50 €",
    description: `Pechuga de pollo marinada con especias mediterráneas, servida con
      vegetales asados y salsa de yogurt con hierbas.`,
  },
  {
    name: "Hummus Clásico",
    image: humusImage,
    price: "7,90 €",
    description: `Cremoso hummus tradicional servido con pan pita caliente,
      aceite de oliva y paprika ahumada.`,
  },
  {
    name: "Risotto de Hongos",
    image: risottoImage,
    price: "18,50 €",
    description: `Cremoso risotto con una mezcla selecta de hongos frescos,
      parmesano añejado y hierbas aromáticas del jardín.`,
  },
  {
    name: "Salmón Mediterráneo",
    image: salmonImage,
    price: "24,90 €",
    description: `Filete de salmón fresco con costra de hierbas, servido con
      vegetales de temporada y salsa de limón.`,
  },
  {
    name: "Tiramisú Tradicional",
    image: tiramisuImage,
    price: "7,50 €",
    description: `El clásico postre italiano con capas de café, mascarpone
      y cacao, preparado según la receta tradicional.`,
  },
  {
    name: "Pizza Margherita",
    image: pizzaImage,
    price: "13,90 €",
    description: `Pizza artesanal con masa madre, salsa de tomate fresco,
      mozzarella di bufala y albahaca del jardín.`,
  },
  {
    name: "Lasagna Casera",
    image: lasagnaImage,
    price: "17,50 €",
    description: `Tradicional lasagna con capas de pasta, carne, bechamel
      y quesos, horneada hasta la perfección dorada.`,
  },
  {
    name: "Gelato Siciliano",
    image: gelatoImage,
    price: "5,90 €",
    description: `Auténtico gelato siciliano en variedad de sabores naturales,
      preparado diariamente con ingredientes frescos.`,
  },
];

const WeekSpecials = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const autoScrollRef = useRef(null);

  const handleClick = () => {
    alert("🔧 Menú completo en mantenimiento\n\nEstamos actualizando nuestro menú digital para ofrecerte una mejor experiencia. Por favor, consulta con nuestro personal para ver todas las opciones disponibles.\n\n¡Gracias por tu paciencia!");
  };

  useEffect(() => {
    // Inicializar botones de navegación al cargar el componente
    setTimeout(checkScrollButtons, 100);
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
        // Volver al inicio cuando llegamos al final
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

  useEffect(() => {
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, []);

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -340, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 340, behavior: 'smooth' });
      setTimeout(checkScrollButtons, 300);
    }
  };

  // Funcionalidad de arrastrar para desplazar
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
    <section className="container week-specials" id="menu">
      <div className="week-specials-header">
        <h2>¡Especiales de esta semana!</h2>
        <HashLink className="button-primary menu-outline-btn" to="/#menu" onClick={handleClick}>
          Menú en Línea
        </HashLink>
      </div>
      <div className="week-specials-scroll-container">
        {canScrollLeft && (
          <button className="scroll-btn scroll-btn-left" onClick={scrollLeft}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
        <div 
          className={`week-specials-cards ${isHovering ? 'auto-scrolling' : ''}`}
          ref={scrollContainerRef}
          onScroll={checkScrollButtons}
          onMouseDown={handleMouseDown}
          onMouseEnter={startAutoScroll}
          onMouseLeave={stopAutoScroll}
        >
          {meals.map((meal, index) => (
            <MealCard key={index} meal={meal} />
          ))}
        </div>
        {canScrollRight && (
          <button className="scroll-btn scroll-btn-right" onClick={scrollRight}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </div>
    </section>
  );
};

export default WeekSpecials;
