import React, { useContext, useState } from 'react';
import Subreddit from './Subreddit';
import { AppContext } from '../myContext';

function Subreddits() {
  const { subreddits, subredLoading, isDark } = useContext(AppContext);
  const [active, setActive] = useState('');

  const handleClick = (e) => {
    setActive(e.target.textContent);
  };

  return (
    <aside
      className={
        isDark ? 'subreddits-container dark-sec' : 'subreddits-container'
      }
    >
      <h3 className={isDark ? 'dark-highlight' : null}>Subreddits</h3>
      {subredLoading ? (
        <div className='loading-container-comments'>
          <div className='loading-spinner-comments'>
            <div></div>
          </div>
        </div>
      ) : (
        <ul onClick={handleClick}>
          {subreddits.map((item) => {
            return <Subreddit key={item.id} {...item} active={active} />;
          })}
        </ul>
      )}
    </aside>
  );
}

export default Subreddits;
