import React from "react";
import { Formik } from "formik";
import FormField from "./formField";
import emailjs from '@emailjs/browser';

// Componente del formulario de reservas
const ReservationForm = ({ availableTimes, dispatchOnDateChange, submitData }) => {

  // Configuración inicial del formulario
  const today = new Date().toISOString().split("T")[0];
  const minGuests = 1;
  const maxGuests = 10;
  const occasionOptions = ["Cumpleaños", "Aniversario", "Compromiso", "Otro"];

  return (
    <Formik
      initialValues={{
        name: "",
        mail: "",
        date: today,
        time: availableTimes[0],
        numberOfGuests: minGuests,
        occasion: occasionOptions[0],
      }}

      // Función de validación de campos
      validate={(values) => {
        const errors = {};

        if (!values.name) errors.name = "Por favor ingresa tu nombre";
        if (!values.mail) errors.mail = "Por favor ingresa un correo electrónico";
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail))
          errors.mail = "Dirección de correo electrónico inválida";
        if (!values.date) errors.date = "Por favor elige una fecha válida";
        if (!values.time) errors.time = "Por favor elige una hora válida";
        if (!values.numberOfGuests || values.numberOfGuests < minGuests || values.numberOfGuests > maxGuests)
          errors.numberOfGuests = `Por favor ingresa un número entre ${minGuests} y ${maxGuests}`;
        if (!values.occasion) errors.occasion = "Por favor elige una ocasión válida";

        return errors;
      }}

      // Función que se ejecuta al enviar el formulario
      onSubmit={(values, { setSubmitting }) => {
        // Configuración de EmailJS para envío de emails
        const service_id = 'service_4ggfl6r';
        const template_id = 'template_a20yy09';
        const public_id = 'FxUWVTdKBWSYfkWEz';

        // Parámetros del email de confirmación
        const templateParams = {
          from_name: "Little Lemon",
          user_email: values.mail,
          to_name: values.name,
          message: `Tienes una reservación el ${values.date} a las ${values.time} para ${values.numberOfGuests} invitados.`,
        };

        // Enviar email de confirmación
        emailjs.send(service_id, template_id, templateParams, public_id)
          .then((response) => {
            console.log("Email enviado correctamente:", response);
          })
          .catch((error) => {
            console.error("Error al enviar email:", error);
          })
          .finally(() => setSubmitting(false));

        submitData(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>

          {/* Campo de nombre */}
          <FormField 
            label="Nombre" 
            htmlFor="reservation-name"
            hasError={errors.name && touched.name}
            errorMessage={errors.name}
          >
            <input
              type="text"
              name="name"
              id="reservation-name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          </FormField>

          {/* Campo de email */}
          <FormField 
            label="Correo electrónico" 
            htmlFor="reservation-mail"
            hasError={errors.mail && touched.mail}
            errorMessage={errors.mail}
          >
            <input
              type="email"
              name="mail"
              id="reservation-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.mail}
            />
          </FormField>

          {/* Campo de fecha */}
          <FormField 
            label="Fecha" 
            htmlFor="reservation-date"
            hasError={errors.date && touched.date}
            errorMessage={errors.date}
          >
            <input
              type="date"
              name="date"
              id="reservation-date"
              min={today}
              onChange={(e) => {
                handleChange(e);
                dispatchOnDateChange && dispatchOnDateChange(e.target.value);
              }}
              onBlur={handleBlur}
              value={values.date}
            />
          </FormField>

          {/* Campo de hora */}
          <FormField 
            label="Hora" 
            htmlFor="reservation-time"
            hasError={errors.time && touched.time}
            errorMessage={errors.time}
          >
            <select
              name="time"
              id="reservation-time"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.time}
            >
              {availableTimes.map((time) => (
                <option key={time} value={time} data-testid="reservation-time-option">
                  {time}
                </option>
              ))}
            </select>
          </FormField>

          {/* Campo de número de invitados */}
          <FormField 
            label="Número de invitados" 
            htmlFor="reservation-number-guests"
            hasError={errors.numberOfGuests && touched.numberOfGuests}
            errorMessage={errors.numberOfGuests}
          >
            <input
              type="number"
              name="numberOfGuests"
              id="reservation-number-guests"
              min={minGuests}
              max={maxGuests}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.numberOfGuests}
            />
          </FormField>

          {/* Campo de ocasión */}
          <FormField 
            label="Ocasión" 
            htmlFor="reservation-occasion"
            hasError={errors.occasion && touched.occasion}
            errorMessage={errors.occasion}
          >
            <select
              name="occasion"
              id="reservation-occasion"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.occasion}
            >
              {occasionOptions.map((occasion) => (
                <option key={occasion} value={occasion} data-testid="reservation-occasion-option">
                  {occasion}
                </option>
              ))}
            </select>
          </FormField>

          {/* Botón de envío */}
          <button
            aria-label="On Click"
            className="button-primary"
            type="submit"
            disabled={isSubmitting}
          >
            ¡Reservar ahora!
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ReservationForm;