import "./NotFound.css";
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NotFound = () => {
  return (
    <div className="container page-not-found">
      <FontAwesomeIcon icon={faPersonDigging} size="3x"/>
      <h1>Página en construcción</h1>
      <h2>¡Estamos mejorando esta función! Vuelve pronto para descubrir la versión final.</h2>
      </div>
  );
};

export default NotFound;
