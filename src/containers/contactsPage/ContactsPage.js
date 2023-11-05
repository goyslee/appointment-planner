import React, { useState, useEffect } from "react";
import { TileList } from "../../components/tileList/TileList";
import { ContactForm } from "../../components/contactForm/ContactForm";

function ContactsPage({ contacts, addContact }) {
  // State variables for the contact form inputs
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  // State for duplicate name check
  const [isDuplicate, setIsDuplicate] = useState(false);

  // Effect to check for name duplicates in the contacts
  useEffect(() => {
    setIsDuplicate(contacts.some((contact) => contact.name === name));
  }, [name, contacts]);

  // Reset form fields
  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDuplicate) {
      alert("Name already exists. Please use a different name.");
    } else {
      addContact(name, phone, email);
      resetForm();
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
        {isDuplicate && (
          <p className="error">
            Name already exists. Please use a different name.
          </p>
        )}
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
}

export default ContactsPage;
