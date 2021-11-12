import React, { useContext } from 'react';
import Searchbar from './Searchbar';
import { FaReddit } from 'react-icons/fa';
import { BsMoonStars, BsSunFill } from 'react-icons/bs';
import { AppContext } from '../myContext';

function Navbar() {
  const { isDark, setIsDark } = useContext(AppContext);

  return (
    <nav className={isDark ? 'navbar dark-main' : 'navbar'}>
      <div className='logo-container'>
        <span className={isDark ? 'logo dark-red' : 'logo'}>
          <FaReddit />
        </span>
        <p>
          Mini
          <span className={isDark ? 'dark-red' : 'reddit'}>Reddit</span>
        </p>
      </div>
      <Searchbar />
      <button
        type='button'
        className='dark-mode-toggle'
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? <BsSunFill /> : <BsMoonStars />}
      </button>
    </nav>
  );
}

export default Navbar;
