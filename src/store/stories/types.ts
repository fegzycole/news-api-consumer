export const SET_STORIES = "SET_STORIES";
export const SET_ERROR = "SET_ERROR";
export const SET_FETCHING_STORIES = "SET_FETCHING_STORIES";

export enum StoryCategories {
  TopHeadlines = "Top Headlines",
  Business = "Business",
  Entertainment = "Entertainment",
  General = "General",
  Health = "Health",
  Science = "Science",
  Sports = "Sports",
  Technology = "Technology",
}

export interface StoryData {
  source: {
    id: null | number;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date | string;
  content: string;
}

export interface StoriesState {
  stories: StoryData[];
  fetchingStories: boolean;
  error?: string;
}

export interface AddStories {
  stories: StoryData[];
  clearStories: boolean;
}

export interface SetStories {
  type: typeof SET_STORIES;
  payload: AddStories;
}

export interface SetError {
  type: typeof SET_ERROR;
  payload: string;
}

export interface SetFetchingStories {
  type: typeof SET_FETCHING_STORIES;
  payload: boolean;
}

export type MoviesActionTypes =
  | SetStories
  | SetError
  | SetFetchingStories;
