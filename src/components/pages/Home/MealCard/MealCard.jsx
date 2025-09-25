import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import "./MealCard.css";

const MealCard = ({ meal }) => {
  return (
    <HashLink to="/orderOnline" className="meal-card-link">
      <article className="meal-card">
        <div className="meal-card-image">
          <img src={meal.image} alt={meal.name} />
        </div>
        <div className="meal-card-header">
          <h3>{meal.name}</h3>
          <span>{meal.price}</span>
        </div>
        <div className="meal-card-body-footer">
          <p>{meal.description}</p>
          <div className="meal-card-cta">
            Pedir a domicilio <FontAwesomeIcon icon={faMotorcycle} />
          </div>
        </div>
      </article>
    </HashLink>
  );
};

export default MealCard;
