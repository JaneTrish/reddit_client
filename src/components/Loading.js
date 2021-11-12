import React from 'react';

function Loading() {
  return (
    <section className='loading'>
      <h2>Loading...</h2>
      <div className='loading-container'>
        <div className='loading-spinner'>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Loading;
