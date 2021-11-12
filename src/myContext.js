import React, { useState, useEffect, useCallback } from 'react';

//url to fetch popular posts
export const urlListing = 'https://www.reddit.com/';

//url to fetch subreddits
const urlSubreddits = 'https://www.reddit.com/subreddits.json';

//search url
const urlSearch = 'https://www.reddit.com/search.json?q=';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [subredLoading, setSubredLoading] = useState(false);
  const [listing, setListing] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [subreddits, setSubreddits] = useState([]);
  const [isDark, setIsDark] = useState(false);

  // change body background on dark mode
  useEffect(() => {
    if (isDark) {
      document.body.style.backgroundColor = '#212529';
    } else {
      document.body.style.backgroundColor = '#e9ecef';
    }
  }, [isDark]);

  // function that fetches data from API

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //  create an array of objects with properties, needed to render the posts

  const getListing = (fetchedData) => {
    const { children: newListing } = fetchedData.data;
    if (newListing) {
      const posts = newListing.map((item) => {
        const {
          author,
          subreddit,
          title,
          selftext,
          thumbnail,
          url_overridden_by_dest,
          id,
          permalink,
          is_video,
          ups,
          created,
        } = item.data;

        if (is_video) {
          const { fallback_url } = item.data.media.reddit_video;

          return {
            author,
            subreddit,
            title,
            id,
            selftext,
            thumbnail,
            url: url_overridden_by_dest,
            comments_link: permalink,
            is_video,
            ups,
            created,
            video: fallback_url,
          };
        }

        return {
          author,
          subreddit,
          title,
          id,
          selftext,
          thumbnail,
          url: url_overridden_by_dest,
          comments_link: permalink,
          is_video,
          ups,
          created,
        };
      });

      setListing(posts);
    } else {
      setListing([]);
    }
  };

  //create list of subreddits

  const getSubreddits = (fetchedData) => {
    const { children: listSubreddits } = fetchedData.data;
    if (listSubreddits) {
      const newSubreddits = listSubreddits.map((item) => {
        const {
          id,
          display_name: title,
          display_name_prefixed: url,
          icon_img: icon,
        } = item.data;

        return { id, title, url, icon };
      });

      setSubreddits(newSubreddits);
    } else {
      setSubreddits([]);
    }
  };

  //display a listing of certain subreddits

  const subredditListing = async (subreddit) => {
    try {
      setLoading(true);
      const data = await fetchData(`${urlListing}${subreddit}`);
      getListing(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //enable search bar

  const searchReddit = useCallback(async () => {
    if (searchTerm.length > 0) {
      setLoading(true);
      const searchResults = await fetchData(`${urlSearch}${searchTerm}`);
      getListing(searchResults);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    searchReddit(searchTerm);
  }, [searchReddit, searchTerm]);

  //display posts on first render

  useEffect(() => {
    const firstRender = async () => {
      try {
        setLoading(true);
        setSubredLoading(true);
        const dataListing = await fetchData(`${urlListing}r/popular.json`);
        getListing(dataListing);
        setLoading(false);
        const dataSubreddits = await fetchData(urlSubreddits);
        getSubreddits(dataSubreddits);
        setSubredLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setSubredLoading(false);
      }
    };
    firstRender();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        listing,
        subreddits,
        getListing,
        fetchData,
        subredditListing,
        setSearchTerm,
        subredLoading,
        isDark,
        setIsDark,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
