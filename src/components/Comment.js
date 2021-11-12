import React, { useContext } from 'react';
import { timeSince } from '../utils';
import { AppContext } from '../myContext';

function Comment({ author, body, created }) {
  const { isDark } = useContext(AppContext);
  return (
    <>
      {author && created && body && (
        <div
          className={isDark ? 'single-comment dark-light' : 'single-comment'}
        >
          <div className='comment-info'>
            <h4 className={isDark ? 'dark-highlight' : null}>{author}</h4>
            <p className={isDark ? 'comment-time dark-grey' : 'comment-time'}>
              {timeSince(created)} ago
            </p>
          </div>
          <p>{body}</p>
        </div>
      )}
    </>
  );
}
export default Comment;
