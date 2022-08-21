import { StoryData } from "../store/stories/types";

const generateStories = () => {
  const mockStories: StoryData[] = [];

  let i = 0;

  while (i < 12) {
    mockStories.push(mockStory);

    i++;
  }

  return mockStories;
};

export const mockStory: StoryData = {
  publishedAt: "Mock Date",
  author: "Mock Author",
  urlToImage: "MockUrlToImage",
  description: "Mock Description",
  source: {
    name: "Mock Source Name",
    id: 1,
  },
  title: "Mock Title",
  url: "mockUrl",
  content: "MockContent",
};

export const mockStories: StoryData[] = generateStories();
