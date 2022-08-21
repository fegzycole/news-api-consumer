import { Dispatch } from "react";
import axios from "axios";

import {
  StoryData,
  SetStories,
  SET_STORIES,
  SetError,
  SET_ERROR,
  SetFetchingStories,
  SET_FETCHING_STORIES,
  StoryCategories,
  AddStories,
} from "./types";
import { getResponseError, getRequestPath } from "./helpers";

export const setStories = (payload: AddStories): SetStories => {
  return {
    type: SET_STORIES,
    payload,
  };
};

export const setError = (payload: string): SetError => {
  return {
    type: SET_ERROR,
    payload,
  };
};

export const setFetchingStories = (payload: boolean): SetFetchingStories => {
  return {
    type: SET_FETCHING_STORIES,
    payload,
  };
};

export const getStories = (
  category: StoryCategories,
  pageNumber: number
): ((
  dispatch: Dispatch<{ type: string; payload?: unknown }>
) => Promise<void>) => {
  return async (dispatch) => {
    dispatch(setError(""));
    dispatch(setFetchingStories(true));

    const requestPath = getRequestPath(category, pageNumber);

    try {
      const request = await axios.get(requestPath);

      const responseData = request.data.articles as StoryData[];

      const stories: StoryData[] = responseData as StoryData[];

      const payload: AddStories = {
        stories,
        clearStories: pageNumber === 1,
      };

      return dispatch(setStories(payload));
    } catch (error: any) {
      const renderedError = getResponseError(error);
      return dispatch(setError(renderedError));
    }
  };
};
