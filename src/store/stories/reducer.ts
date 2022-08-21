import {
  MoviesActionTypes,
  StoriesState,
  SET_STORIES,
  SET_ERROR,
  SET_FETCHING_STORIES,
} from "./types";

const initialState: StoriesState = {
  stories: [],
  fetchingStories: false,
  error: undefined,
};

const storiesReducer = (
  state: StoriesState = initialState,
  action: MoviesActionTypes
) => {
  switch (action.type) {
    case SET_STORIES:
      return {
        ...state,
        stories: action.payload.clearStories
          ? action.payload.stories
          : state.stories.concat(action.payload.stories),
        fetchingStories: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        fetchingStories: false,
      };
    case SET_FETCHING_STORIES:
      return {
        ...state,
        fetchingStories: action.payload,
      };
    default:
      return state;
  }
};

export default storiesReducer;
