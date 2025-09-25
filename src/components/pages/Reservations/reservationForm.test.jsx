import { fireEvent, render, screen } from "@testing-library/react";
import ReservationForm from "./reservationForm";

describe("Reservation form", () => {
  const availableTimes = ["17:00", "17:30"];
  const today = new Date().toISOString().split("T")[0];
  const dispatchOnDateChange = jest.fn();
  const submitData = jest.fn();

  test("should correctly render all fields and their default values", async () => {
    render(
      <ReservationForm
        availableTimes={availableTimes}
        submitData={submitData}
      />
    );

    const dateInput = screen.getByLabelText(/Fecha/);
    const timeSelect = screen.getByLabelText(/Hora/);
    const timeOptions = await screen.findAllByTestId("reservation-time-option");
    const numberOfGuestsInput = screen.getByLabelText(/Número de invitados/);
    const occasionSelect = screen.getByLabelText(/Ocasión/);
    const occasionOptions = await screen.findAllByTestId(
      `reservation-occasion-option`
    );
    const submitButton = screen.getByRole("button");

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("id", "reservation-date");
    expect(dateInput).toHaveValue(today);

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute("id", "reservation-time");
    expect(timeOptions.length).toBe(2);

    expect(numberOfGuestsInput).toBeInTheDocument();
    expect(numberOfGuestsInput).toHaveAttribute(
      "id",
      "reservation-number-guests"
    );
    expect(numberOfGuestsInput).toHaveAttribute("type", "number");
    expect(numberOfGuestsInput).toHaveValue(1);

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute("id", "reservation-occasion");
    expect(occasionOptions.length).toBe(4);

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
    expect(submitButton).toBeEnabled();
  });

  test("should successfully submit form with valid values", async () => {
    render(
      <ReservationForm
        availableTimes={availableTimes}
        submitData={submitData}
      />
    );

    // Llenar el formulario con valores válidos
    const nameInput = screen.getByLabelText(/Nombre/);
    const emailInput = screen.getByLabelText(/Correo electrónico/);
    const submitButton = screen.getByRole("button");

    fireEvent.change(nameInput, { target: { value: "Juan Pérez" } });
    fireEvent.change(emailInput, { target: { value: "juan@example.com" } });
    
    fireEvent.click(submitButton);

    // Esperar a que el formulario se procese
    await new Promise(resolve => setTimeout(resolve, 100));

    expect(submitData).toHaveBeenCalledWith({
      name: "Juan Pérez",
      mail: "juan@example.com",
      date: today,
      time: availableTimes[0],
      numberOfGuests: 1,
      occasion: "Cumpleaños",
    });
  });

  test(`should display an error message when date field's value is empty`, async () => {
    render(
      <ReservationForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    );

    const dateInput = screen.getByLabelText(/Fecha/);
    fireEvent.change(dateInput, { target: { value: "" } });
    fireEvent.blur(dateInput);
    
    // Esperar a que aparezca el mensaje de error
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const errorMessage = screen.getByTestId("error-message");

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent("Por favor elige una fecha válida");
  });

  test(`should display an error message when number of guests field's value is empty`, async () => {
    render(
      <ReservationForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    );

    const numberOfGuestsInput = screen.getByLabelText(/Número de invitados/);
    fireEvent.change(numberOfGuestsInput, { target: { value: "" } });
    fireEvent.blur(numberOfGuestsInput);
    
    // Esperar a que aparezca el mensaje de error
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const errorMessage = screen.getByTestId("error-message");

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(
      "Por favor ingresa un número entre 1 y 10"
    );
  });
});
