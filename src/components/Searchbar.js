import React, { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { AppContext } from '../myContext';

function Searchbar() {
  const { searchTerm, setSearchTerm, isDark } = useContext(AppContext);

  return (
    <div className='search-container'>
      <form className='search-form' onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          id='search'
          className={isDark ? 'search-input dark-light' : 'search-input'}
          placeholder='Search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <label htmlFor='search' className='search-icon'>
          <FaSearch />
        </label>
      </form>
    </div>
  );
}

export default Searchbar;
