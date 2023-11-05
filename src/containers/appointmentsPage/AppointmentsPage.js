import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

const AppointmentsPage = ({ appointments, addAppointment, contacts }) => {
  // Local state for the form inputs
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState(
    contacts.length > 0 ? contacts[0].name : "",
  );
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time); // Add the appointment
    setTitle(""); // Clear the form
    setContact(contacts.length > 0 ? contacts[0].name : ""); // Reset to the first contact or empty string
    setDate(""); // Clear the form
    setTime(""); // Clear the form
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          contacts={contacts} // Pass the contacts for selection in the form
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
          tiles={appointments.map((appointment) => ({ ...appointment }))}
        />
      </section>
    </div>
  );
};

export default AppointmentsPage;
