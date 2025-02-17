import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import {
  createNews,
  deleteNews,
  getAllNews,
  getNewsById,
  updateNews,
} from "@/api/News";

const NewsHook = (currentpage, itemPerPage) => {
  const { toast } = useToast();
  const [selectedNews, setSelectedNews] = useState(null);

  const queryClient = useQueryClient();

  const {
    data: NewsLists,
    isLoading: isNewsLoading,
    isError: isNewsError,
    error: NewsError,
  } = useQuery({
    queryKey: ["news", currentpage, itemPerPage],
    queryFn: () => getAllNews(currentpage, itemPerPage),
    staleTime: 1000 * 60 * 5,
  });

  const useNewsDetails = (id) =>
    useQuery({
      queryKey: ["news", id],
      queryFn: () => getNewsById(id),
      enabled: !!id,
      staleTime: 1000 * 60 * 5,
    });

  const CreateNew = useMutation({
    mutationFn: (newNewsData) => createNews(newNewsData),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["news"]);
      toast({
        title: "Success!",
        description: data?.message || "News created successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error!",
        description: error.message,
      });
    },
  });

  const DeleteNews = useMutation({
    mutationFn: (newsId) => deleteNews(newsId),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["news"]);
      toast({
        title: "Success!",
        description: data?.message || "News deleted successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error!",
        description: error.message,
      });
    },
  });

  const UpdateNews = useMutation({
    mutationFn: (updatedNewsData) => updateNews(updatedNewsData),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["news"]);
      toast({
        title: "Success!",
        description: data?.message || "News updated successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error!",
        description: error.message,
      });
    },
  });

  const GetNewsById = useMutation({
    mutationFn: (newsId) => getNewsById(newsId),
    onSuccess: (data) => {
      const NewsResponseId = data;
      setSelectedNews(NewsResponseId);
    },
    onError: (error) => {
      console.error("Failed to get news by ID", error);
      toast({
        title: "Error!",
        description: error?.message || "Failed to get news by ID",
      });
    },
  });

  return {
    CreateNew,
    DeleteNews,
    UpdateNews,
    GetNewsById,
    selectedNews,
    NewsLists,
    useNewsDetails,
    isNewsLoading,
    isNewsError,
    NewsError,
  };
};

export default NewsHook;
