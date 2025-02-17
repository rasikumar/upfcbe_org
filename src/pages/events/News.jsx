import { useState } from "react";
import Newcard from "../../components/Newcard";
import MotionSection from "../../components/MotionSection";
import { eventbg } from "@/assets";
import NewsHook from "@/hooks/NewsHook";
import PaginationComponent from "@/components/PaginationComponent";

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const Newss = NewsHook(currentPage, itemsPerPage, setCurrentPage);
  const { isNewsError, isNewsLoading, NewsLists, NewsError } = Newss;
  // console.log(NewsLists);

  const Lists = NewsLists?.news;

  const totalpages = Math.ceil((NewsLists?.totalNews || 0) / itemsPerPage);
  return (
    <div className="flex flex-col mb-4">
      <div style={{ backgroundImage: `url(${eventbg})` }}>
        <div className="w-full text-center  pt-10  h-10 flex justify-center items-center">
          <h1 className="text-4xl font-bold">Current News</h1>
        </div>
        <MotionSection>
          <div className="flex flex-col justify-center items-center gap-6 p-6">
            {isNewsError ? (
              <>No data{NewsError}</>
            ) : isNewsLoading ? (
              <>Loading</>
            ) : (
              Lists.map((list) => <Newcard key={list.id} {...list} />)
            )}
            {/* {news.map((event) => (
              <Newcard key={event.id} event={event} />
            ))} */}
          </div>
        </MotionSection>

        <PaginationComponent
          totalPages={totalpages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};
export default News;
