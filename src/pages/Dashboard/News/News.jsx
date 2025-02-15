import NewsCard from "@/components/Dashboard/NewsCard";
import NewsHook from "@/hooks/NewsHook";
import React from "react";

const News = () => {
  // const News = NewsHook(currentpage, itemPerPage);
  const News = NewsHook();
  const { isNewsError, isNewsLoading, NewsError, NewsLists } = News;
  console.log(NewsLists);
  const newsLists = NewsLists?.news;
  return (
    <div>
      {isNewsError ? (
        <>{`newsLis${NewsError}`}</>
      ) : isNewsLoading ? (
        <>Loading</>
      ) : (
        <div>
          {newsLists.map((newsList) => (
            <NewsCard key={newsList.id} {...newsList} />
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
