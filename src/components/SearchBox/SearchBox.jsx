import { useId } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox({ handleSerch }) {
  const searchInputId = useId();
  return (
    <div className={css.serchBoxContainer}>
      <label htmlFor={searchInputId}>Find contacts by name</label>
      <input
        className={css.searchInput}
        name="searchName"
        type="text"
        id={searchInputId}
        onChange={() => handleSerch(event.target.value)}
      ></input>
    </div>
  );
}
