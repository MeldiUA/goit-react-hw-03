import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const KEY_CONTACTS_LS = 'Contacts';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(KEY_CONTACTS_LS);
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [serchName, setSearchName] = useState('');

  useEffect(() => {
    localStorage.setItem(KEY_CONTACTS_LS, JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContactBtn = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.number,
    };
    setContacts([...contacts, newContact]);
    actions.resetForm();
  };

  const handleSerch = name => {
    setSearchName(name.trim().toLowerCase());
  };

  const handleDeleteBtn = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filterContact = serchName
    ? contacts.filter(contact => {
        console.log(serchName);
        return contact.name.toLowerCase().includes(serchName);
      })
    : contacts;

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContactBtn} />
      <SearchBox handleSerch={handleSerch} />
      <ContactList contacts={filterContact} onDelete={handleDeleteBtn} />
    </div>
  );
}
