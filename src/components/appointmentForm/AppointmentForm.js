import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"; // Assuming you have a ContactPicker component

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="Appointment Title"
      />
      <ContactPicker
        name="contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        contacts={contacts}
        placeholder="Select a Contact"
      />
      <input
        type="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={getTodayString()}
        required
      />
      <input
        type="time"
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
