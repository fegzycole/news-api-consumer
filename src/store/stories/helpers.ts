import { StoryCategories } from "./types";

export const apiKey = process.env.REACT_APP_API_KEY;
export const apiUrl = "https://newsapi.org/v2/top-headlines";

export const getRequestPath = (
  category: StoryCategories,
  pageNumber: number
): string => {
  let path = `${apiUrl}?apiKey=${apiKey}&pageSize=10&page=${pageNumber}&language=en&sortBy=publishedAt`;

  if (category !== StoryCategories.TopHeadlines) {
    path = `${path}&category=${category.toLowerCase()}`;
  }

  return path;
};

export const getResponseError = (error: any): string => {
  let serverErrResponse = error?.response?.data?.message;

  if (!serverErrResponse) {
    serverErrResponse = error.message;
  }

  return serverErrResponse;
};
