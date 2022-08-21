import { render } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";

import { StoryData } from "../../store/stories/types";
import { mockStory } from "../../test-utils/story";
import App from "./index";

const generateStories = () => {
  const mockStories: StoryData[] = [];

  let i = 0;

  while (i < 12) {
    mockStories.push(mockStory);

    i++;
  }

  return mockStories;
};

const mockUseDispatch = useDispatch as jest.Mock<any>;
const mockUseSelector = useSelector as jest.Mock<any>;

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("notiflix/build/notiflix-report-aio", () => ({
  Report: {
    failure: jest.fn(),
  },
}));

jest.mock("../../components/Loader", () => ({
  default: () => <div className="Loader" />,
  __esModule: true,
  Loader: true,
}));

jest.mock("../../components/Header", () => ({
  default: () => <div className="Header" />,
  __esModule: true,
  Header: true,
}));

jest.mock("../Stories", () => ({
  default: () => <div className="Stories" />,
  __esModule: true,
  Stories: true,
}));

jest.mock("../../components/Pagination", () => ({
  default: () => <div className="Pagination" />,
  __esModule: true,
  Pagination: true,
}));

jest.mock("../../store/stories/actions", () => ({
  getStories: jest.fn(),
}));

describe("<App />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    mockUseDispatch.mockImplementation(() => mockDispatch);
    mockUseSelector.mockImplementation((selectorFn: any) =>
      selectorFn({
        stories: {
          stories: generateStories(),
          topStory: mockStory,
          error: "Mock Error",
          fetchingStories: false,
        },
      })
    );
  });

  it("should match the App component snapshot", () => {
    const view = render(<App />);
    expect(view.container).toMatchSnapshot();
  });
});
