import { useState } from 'react';
// import PropTypes from 'prop-types';
// import { ImSearch } from 'react-icons/im';
// import { ReactComponent as MyIcon } from ''

import css from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [searchImage, setSearchImage] = useState('');

  const handleChange = e => {
    const query = e.currentTarget.value.trim().toLowerCase();
    setSearchImage(query);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchImage === '') {
      return alert('Sorry. There are no images...');
    }
    onSubmit(searchImage);
    setSearchImage('');
  };
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchForm__button}>
          <span className={css.SearchForm__buttonLabel}>Search</span>
        </button>
        <input
          className={css.SearchForm__input}
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
          value={searchImage}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
