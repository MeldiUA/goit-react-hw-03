import Contact from './Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  console.log(contacts);
  return (
    <div>
      {contacts.length ? (
        <ul className={css.contactsList}>
          {contacts.map(contact => (
            <Contact
              key={contact.id}
              contact={contact}
              onDelete={onDelete}
            ></Contact>
          ))}
        </ul>
      ) : (
        <span>Contacts not found</span>
      )}
    </div>
  );
}
