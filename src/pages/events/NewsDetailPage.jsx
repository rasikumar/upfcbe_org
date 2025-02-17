import NewsHook from "@/hooks/NewsHook";
import { PHOTOS } from "@/utils/api";
import { useParams } from "react-router";

const NewsDetailPage = () => {
  const { id } = useParams();
  const { useNewsDetails } = NewsHook();
  const { data: selectedNews, isLoading, isError, error } = useNewsDetails(id);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error: {error?.message || "Something went wrong"}
      </div>
    );

  if (!selectedNews)
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        News not found
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <img
        src={`${PHOTOS}${selectedNews.image}`}
        alt={selectedNews.title}
        className="w-full h-80 object-cover rounded-lg shadow-lg"
      />
      <h1 className="text-3xl font-bold text-gray-900">{selectedNews.title}</h1>
      <div
        className="prose max-w-none text-gray-700"
        dangerouslySetInnerHTML={{
          __html:
            selectedNews.description || "<em>No description provided.</em>",
        }}
      />
      <p className="text-lg text-gray-600 leading-relaxed">
        {selectedNews.text}
      </p>
    </div>
  );
};

export default NewsDetailPage;
