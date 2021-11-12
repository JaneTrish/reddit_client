import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../myContext';

function Subreddit({ title, url, icon, active }) {
  const { subredditListing } = useContext(AppContext);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    subredditListing(`${url}.json`);
  };

  useEffect(() => {
    if (active === title) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  }, [active, title]);

  return (
    <li className={isClicked ? 'active' : null}>
      <button
        data-id={url}
        className='single-subreddit-btn'
        type='button'
        onClick={handleClick}
      >
        {icon ? (
          <img src={icon} alt={title} className='subreddit-icon' />
        ) : (
          <span className='subreddit-icon'></span>
        )}

        {title}
      </button>
    </li>
  );
}

export default Subreddit;
