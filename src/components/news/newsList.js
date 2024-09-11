import { useEffect, useState } from "react";
import { getListNews } from "../../api/api";
import NewsItem from "./newsItem";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      const newsList = await getListNews();
      setNews(newsList);
    })();
  }, []);

  return (
    <>
      {news?.map((value, index) => {
        return (
          <>
            <NewsItem key={index} item={value} />
          </>
        );
      })}
    </>
  );
};

export default NewsList;
