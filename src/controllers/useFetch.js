import { useState, useEffect } from 'react';
import isoFetch from 'isomorphic-fetch';

const useFetch = (url) => {
  const [dataNews, setDataNews] = useState([]);
  const [isFetching, setFetchin] = useState(true);

  useEffect(() => {
    setFetchin(true);
    isoFetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDataNews(data.articles);
        setFetchin(false);
      });
  }, [url]);

  return [dataNews, isFetching];
};

export default useFetch;
