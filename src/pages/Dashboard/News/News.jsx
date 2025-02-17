import NewsCard from "@/components/Dashboard/NewsCard";
import NewsHook from "@/hooks/NewsHook";
import { CreateNews } from "./CreateNews";
import PaginationComponent from "@/components/PaginationComponent";
import { useState } from "react";

const News = () => {
  // const News = NewsHook(currentpage, itemPerPage);
  const [itemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const News = NewsHook(currentPage, itemsPerPage, setCurrentPage);
  const { isNewsError, isNewsLoading, NewsError, NewsLists, CreateNew } = News;
  // console.log(NewsLists);
  const newsLists = NewsLists?.news;

  const handleCreateNews = (newsData) => {
    // console.log(newsData);
    CreateNew.mutate(newsData);
  };

  const totalpages = Math.ceil((NewsLists?.totalNews || 0) / itemsPerPage);

  return (
    <div className="flex flex-col gap-4">
      <CreateNews onCreate={handleCreateNews} success={CreateNew.isSuccess} />
      {isNewsError ? (
        <>{`newsLis${NewsError}`}</>
      ) : isNewsLoading ? (
        <>Loading</>
      ) : (
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
          {newsLists.map((newsList) => (
            <NewsCard key={newsList.id} {...newsList} />
          ))}
        </div>
      )}

      <PaginationComponent
        totalPages={totalpages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default News;
