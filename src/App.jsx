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

  const [searchName, setSearchName] = useState('');

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

  const handleSearch = event => {
    setSearchName(event.target.value.trim());
  };

  const handleDeleteBtn = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const searchContacts = searchName
    ? contacts.filter(contact => {
        return contact.name.toLowerCase().includes(searchName.toLowerCase());
      })
    : contacts;

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContactBtn} />
      <SearchBox inputValue={searchName} handleSearch={handleSearch} />
      <ContactList contacts={searchContacts} onDelete={handleDeleteBtn} />
    </div>
  );
}
