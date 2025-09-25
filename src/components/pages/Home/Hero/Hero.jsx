import { HashLink } from "react-router-hash-link";
import restaurantFoodImage from "../assets/entrantes.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Karachi</h2>
          <p>
            Somos un restaurante mediterráneo familiar, enfocado en
            recetas tradicionales servidas con un toque moderno.
          </p>
          <HashLink className="button-primary" to="/reservations">
            Reservar una mesa
          </HashLink>
        </div>
        <img
          className="hero-image"
          src={restaurantFoodImage}
          alt="Comida del restaurante"
        />
      </div>
    </section>
  );
};

export default Hero;
