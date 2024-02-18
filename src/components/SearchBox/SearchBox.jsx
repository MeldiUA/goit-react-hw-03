import { useId } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox({ inputValue, handleSearch }) {
  const searchInputId = useId();
  return (
    <div className={css.searchBoxContainer}>
      <label htmlFor={searchInputId}>Find contacts by name</label>
      <input
        className={css.searchInput}
        name="searchName"
        type="text"
        id={searchInputId}
        value={inputValue}
        onChange={handleSearch}
      ></input>
    </div>
  );
}
