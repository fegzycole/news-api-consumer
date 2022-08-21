import Stories, { StoriesProps } from "./index";
import { StoryCategories } from "../../store/stories/types";
import { mockStory } from "../../test-utils/story";
import { render } from "@testing-library/react";

const mockProps: StoriesProps = {
  stories: [mockStory],
  topStory: mockStory,
  selectedCategory: StoryCategories.Sports,
};

jest.mock("../../components/Story", () => ({
  default: () => <div className="Story" />,
  __esModule: true,
  Story: true,
}));

describe("<Stories />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should match the Stories component snapshot", () => {
    const view = render(<Stories {...mockProps} />);
    expect(view.container).toMatchSnapshot();
  });
});
