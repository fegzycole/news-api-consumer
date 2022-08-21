import { getRequestPath, getResponseError, apiKey, apiUrl } from "./helpers";
import { StoryCategories } from "./types";

describe("getRequestPath", () => {
  let path = `${apiUrl}?apiKey=${apiKey}&pageSize=10&page=10&language=en&sortBy=publishedAt`;
  it("should return the correct path", () => {
    const mockPath = `${path}&category=entertainment`;
    const result = getRequestPath(StoryCategories.Entertainment, 10);
    expect(result).toEqual(mockPath);
  });
});

describe("getResponseError", () => {
  const mockErrorMessage = "mockErrorMessage";

  describe("when we have a response with data from the api", () => {
    const mockError = {
      response: {
        data: {
          message: mockErrorMessage,
        },
      },
    };

    it("should return the correct message", () => {
      const err = getResponseError(mockError);
      expect(err).toEqual(mockErrorMessage);
    });
  });

  describe("when some other error is thrown", () => {
    const mockError = {
      message: mockErrorMessage,
    };

    it("should return the correct message", () => {
      const err = getResponseError(mockError);
      expect(err).toEqual(mockErrorMessage);
    });
  });
});
