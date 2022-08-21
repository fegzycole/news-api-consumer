import axios from "axios";
import { mockStories } from "../../test-utils/story";
import { getStories } from "./actions";
import { SET_STORIES, StoryCategories } from "./types";

const mockPath = "/mockPath";

jest.mock("./helpers", () => ({
  getResponseError: jest.fn(),
  getRequestPath: jest.fn().mockImplementation(() => mockPath),
}));

const mockGet = axios.get as jest.Mock<any>;
const mockDispatch = jest.fn();

jest.mock("axios", () => ({
  get: jest.fn(),
}));

describe("getStories", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("when the API returns a success response", () => {
    beforeEach(() => {
      mockGet.mockImplementation(() => ({
        data: {
          articles: mockStories,
        },
      }));

      getStories(StoryCategories.Health, 1)(mockDispatch);
    });

    it("should set the fetched stories", () => {
      expect(mockDispatch).toHaveBeenCalledWith({
        type: SET_STORIES,
        payload: {
          clearStories: true,
          stories: mockStories,
        },
      });
    });
  });
});
