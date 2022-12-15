import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import Header from "./Components/Header";
import ContactList from "./Components/ContactList";
import AddContact from "./Components/AddContact";
const Appc = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setcontacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setcontacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setcontacts(newContactList);
  };
  useEffect(() => {
    const retirveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retirveContacts) setcontacts(retirveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
};

export default Appc;
