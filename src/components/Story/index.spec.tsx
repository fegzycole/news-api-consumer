import { render } from "@testing-library/react";
import { StoryCategories } from "../../store/stories/types";
import { mockStory } from "../../test-utils/story";
import Story, { TopStoryProps } from "./index";

const mockProps: TopStoryProps = {
  story: mockStory,
  selectedCategory: StoryCategories.Science,
};

jest.mock("moment", () => () => ({
  format: jest.fn().mockImplementation(() => "Aug 21 2022"),
  fromNow: jest.fn().mockImplementation(() => "1 min ago"),
}));

jest.mock("../Divider", () => ({
  __esModule: true,
  default: () => {
    return <div className="Divider" />;
  },
  Divider: true,
}));

describe("<Story />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should match the Story component snapshot", () => {
    const view = render(<Story {...mockProps} />);
    expect(view.container).toMatchSnapshot();
  });

  describe("when the story is a top story", () => {
    it("should match the Story component snapshot for when it is a top story", () => {
      const view = render(<Story {...mockProps} topStory />);
      expect(view.container).toMatchSnapshot();
    });
  });

  describe("when the flex orientation should be reversed", () => {
    it("should match the Story component snapshot for when the flex orientation should be reversed", () => {
      const view = render(<Story {...mockProps} reverse />);
      expect(view.container).toMatchSnapshot();
    });
  });
});
