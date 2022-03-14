import { useState, useEffect } from "react";
import "./styles.css";

import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Mehmet", phone_number: "123" },
    { fullname: "Ayşe", phone_number: "456" },
    { fullname: "Nazlı", phone_number: "789" },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
