import React, { useEffect, useState } from 'react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  //show button when page is scrolled up to a given place
  const toggleVisibility = () => {
    if (window.pageYOffset > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  //set the top coordinate to 0, make scrolling smooth

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <button
        className={isVisible ? 'scroll-to-top' : 'scroll-to-top invisible'}
        type='btn'
        onClick={scrollUp}
      >
        Back To Top
      </button>
    </>
  );
}

export default ScrollToTop;
