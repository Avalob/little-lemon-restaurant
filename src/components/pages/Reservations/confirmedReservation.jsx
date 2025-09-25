import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

const ConfirmedReservation = () => {
  const location = useLocation();
  const { name, mail, date, time, numberOfGuests, occasion } = location.state || {};

  return (
    <div className="container confirmed-reservation">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>¡Tu mesa ha sido reservada!</h2>
      <p>Recibirás un correo electrónico de confirmación con todos los detalles.</p>
      <div className="reservation-summary">
        <h3>Detalles de la Reservación</h3>
        <p><strong>Nombre:</strong> {name}</p>
        <p><strong>Correo electrónico:</strong> {mail}</p>
        <p><strong>Fecha:</strong> {date}</p>
        <p><strong>Hora:</strong> {time}</p>
        <p><strong>Número de Invitados:</strong> {numberOfGuests}</p>
        <p><strong>Ocasión:</strong> {occasion}</p>
      </div>
    </div>
  );
};

export default ConfirmedReservation;
