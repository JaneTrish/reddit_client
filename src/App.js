import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import Listing from './components/Listing';
import Subreddits from './components/Subreddits';
import Loading from './components/Loading';
import { AppContext } from './myContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { loading, isDark } = useContext(AppContext);
  return (
    <>
      <Navbar />
      <main className={isDark ? 'dark-main' : null}>
        {loading ? <Loading /> : <Listing />}
        <Subreddits />
        <ScrollToTop />
      </main>
    </>
  );
}

export default App;
