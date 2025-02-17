import { NEWS } from "@/utils/api";
import Instance from "./Instance";

export const getAllNews = async (currentpage, itemPerPage) => {
  try {
    const response = await Instance.get(
      `${NEWS}/getAll_news/?page=${currentpage}&limit=${itemPerPage}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.message) || "Failed To Fetch News";
    throw new Error("Failed to fetch news");
  }
};

export const createNews = async (newsData) => {
  // console.log(newsData);
  try {
    const response = await Instance.post(`${NEWS}/create_news`, newsData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
    // console.log(response.data);
  } catch (error) {
    console.error(error.message) || "Failed To Create News";
    throw new Error("Failed to create news");
  }
};

export const deleteNews = async (newsId) => {
  try {
    const response = await Instance.delete(`${NEWS}/delete_news/${newsId}`);
    return response.data;
  } catch (error) {
    console.error(error.message) || "Failed To Delete News";
    throw new Error("Failed to delete news");
  }
};

export const getNewsById = async (newsId) => {
  try {
    const response = await Instance.get(`${NEWS}/get_news/${newsId}`);
    return response.data;
  } catch (error) {
    console.error(error.message) || "Failed To Get News by ID";
    throw new Error("Failed to get news by ID");
  }
};

export const updateNews = async (newsId, newsData) => {
  try {
    const response = await Instance.put(
      `${NEWS}/update_news/${newsId}`,
      newsData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
    // console.log(response.data);
  } catch (error) {
    console.error(error.message) || "Failed To Update News";
    throw new Error("Failed to update news");
  }
};
