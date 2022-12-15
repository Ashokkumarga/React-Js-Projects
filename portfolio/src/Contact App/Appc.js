import React from "react";
import Header from "./Components/Header";
import ContactCard from "./Components/ContactCard";
import ContactList from "./Components/ContactList";
import AddContact from "./Components/AddContact";
const Appc = () => {
    const contacts =[
        {
            id:1,
            "name": "Ashok",
            "email" : "sunnyleonefans@association.com"
        }
    ]
  return (
    <div className="ui container">
      <Header />
      <ContactCard />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Appc;
