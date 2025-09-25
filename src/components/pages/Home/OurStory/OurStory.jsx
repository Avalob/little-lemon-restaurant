import cocinaImg from "../assets/cocina.jpg";
import hermanosImg from "../assets/hermanos.jpg";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="container grid our-story" id="about">
      <div className="our-story-description">
        <h2>Nuestra Historia</h2>
        <p>
          Little Lemon nació en el <em>vibrante</em> corazón de Karachi, donde
          el aroma de las especias se mezcla con la brisa del mar, se encuentra{" "}
          <strong>Little Lemon</strong>. Un pequeño restaurante familiar que
          trajo un sabor del Mediterráneo a la vibrante escena gastronómica de la ciudad.
        </p>

        <p>
          <strong>Mario</strong>, con su cálida sonrisa, recibía a todos como
          familia. Su socio, <strong>Adrian</strong>, trabajaba su magia en la
          cocina, mezclando sabores mediterráneos tradicionales con un toque de especias de Karachi.
        </p>

        <p>
          ¿La especialidad de <strong>Little Lemon</strong>? Su{" "}
          <em>pescado a la parrilla infusionado con limón</em>, una fusión perfecta de
          cocinas costeras. Su pita recién horneada, tibia y esponjosa, era una
          favorita local. Cada plato, desde el cremoso hummus hasta el fragante pollo
          tagine, estaba hecho con amor.
        </p>

      </div>
      <div className="our-story-chefs">
        <img src={cocinaImg} alt="Cocina de Little Lemon" />
        <img src={hermanosImg} alt="Hermanos Mario y Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
