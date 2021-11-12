import React, { useContext } from 'react';
import { AppContext } from '../myContext';
import Loading from './Loading';
import Post from './Post';

function Listing() {
  const { listing, loading } = useContext(AppContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className='listing'>
      {listing.length === 0 ? (
        <h2>Sorry, nothing found</h2>
      ) : (
        listing.map((item) => {
          return <Post key={item.id} {...item} />;
        })
      )}
    </section>
  );
}

export default Listing;
