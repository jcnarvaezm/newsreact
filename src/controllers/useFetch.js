import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [dataNews, setDataNews] = useState([]);
  const [isFetching, setFetchin] = useState(true);

  useEffect(() => {
    setFetchin(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDataNews(data.articles);
        setFetchin(false);
      });
  }, [url]);

  return [dataNews, isFetching];
};

export default useFetch;
