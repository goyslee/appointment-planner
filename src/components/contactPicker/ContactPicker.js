// ContactPicker.js
import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  console.log(contacts); // Debug: Log the contacts array to see what it contains

  return (
    <select onChange={onChange} value={value} name={name}>
      <option value="">No Contact Selected</option>
      {contacts.map((contact, index) => (
        <option key={index} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};
