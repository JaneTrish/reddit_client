import React, { useCallback, useState, useContext } from 'react';
import { intToString, timeSince } from '../utils';
import { AppContext, urlListing } from '../myContext';
import Comments from './Comments';
import { FaRegComment } from 'react-icons/fa';
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';

function Post({
  subreddit,
  title,
  author,
  selftext,
  url,
  video,
  is_video,
  comments_link,
  ups,
  created,
}) {
  const [hideComments, setHideComments] = useState(true);
  const [comments, setComments] = useState([]);
  const [commentsNum, setCommentsNum] = useState(undefined);
  const [commentsIsLoading, setCommentsIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { isDark } = useContext(AppContext);

  // fetch post's comments

  const getComments = useCallback(async () => {
    try {
      setCommentsIsLoading(true);

      const response = await fetch(`${urlListing}${comments_link}.json`);
      const commentsData = await response.json();
      const comments = commentsData[1].data.children;

      const newComments = comments.map((comment) => {
        const { body, author, created, id } = comment.data;
        return { author, body, created, id };
      });

      setComments(newComments);
      setCommentsNum(newComments.length);
      setCommentsIsLoading(false);
    } catch (error) {
      console.log(error);
      setCommentsIsLoading(false);
    }
  }, [comments_link]);

  const handleClick = () => {
    if (hideComments) {
      getComments();
      setHideComments(!hideComments);
      setIsActive(!isActive);
    }
    setHideComments(!hideComments);
    setIsActive(!isActive);
  };

  return (
    <article className={isDark ? 'post-container dark-sec' : 'post-container'}>
      <div className='post-center'>
        <h4>{title}</h4>
        <div className='likes-container'>
          <div className='likes-icon up'>
            <BiUpArrow />
          </div>
          <div className={isDark ? 'dark-highlight' : null}>
            {intToString(ups)}
          </div>
          <div className='likes-icon down'>
            <BiDownArrow />
          </div>
        </div>
      </div>
      <div className='post'>
        {selftext && <p>{selftext}</p>}

        {url &&
          (url.endsWith('.jpg') ||
            url.endsWith('.jpeg') ||
            url.endsWith('.png') ||
            url.endsWith('.gif')) && (
            <img src={url} alt={title} className='post-img' />
          )}

        {url &&
          !url.endsWith('.jpg') &&
          !url.endsWith('.jpeg') &&
          !url.endsWith('.png') &&
          !url.endsWith('.gif') &&
          !url.includes('v.redd') && (
            <p>
              See more:{' '}
              <a
                href={url}
                target='_blank'
                rel='noreferrer noopener'
                className={isDark ? 'dark-highlight' : null}
              >
                {url.includes('reddit') ? 'www.reddit.com' : `${url}`}
              </a>
            </p>
          )}

        {is_video && (
          <video controls className='post-video'>
            <source src={video} />
          </video>
        )}
      </div>
      <div className='underline' />
      <div className='post-info' data-comments={comments_link}>
        <p className={isDark ? 'post-author dark-red' : 'post-author'}>
          {author}
        </p>

        <p className='post-time'>{`${timeSince(created)} ago`}</p>

        <button
          className={
            isActive ? 'btn-comments post-comments-active' : 'btn-comments'
          }
          onClick={handleClick}
        >
          <div className='comments-icon'>
            <FaRegComment />
          </div>
          <p>{commentsNum && commentsNum}</p>
        </button>
      </div>
      <Comments
        comments={comments}
        hideComments={hideComments}
        commentsIsLoading={commentsIsLoading}
      />
    </article>
  );
}

export default Post;
