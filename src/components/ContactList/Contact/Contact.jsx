import { FaUser } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <li className={css.contactItem}>
      <div>
        <FaUser className={css.contactIcon}></FaUser>
        <span>{name}</span>
      </div>
      <div>
        <BsTelephoneFill className={css.contactIcon} />
        <span>{number}</span>
      </div>
      <button className={css.deleteContactBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
