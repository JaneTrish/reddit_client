import React from 'react';
import Comment from './Comment';

function Comments({ comments, hideComments, commentsIsLoading }) {
  if (commentsIsLoading) {
    return (
      <section className='loading'>
        <div class='loading-container-comments'>
          <div class='loading-spinner-comments'>
            <div></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <article
      className='comments-container'
      style={hideComments ? { display: 'none' } : { display: 'block' }}
    >
      {comments &&
        comments.map((comment) => {
          return <Comment key={comment.id} {...comment} />;
        })}
    </article>
  );
}

export default Comments;
