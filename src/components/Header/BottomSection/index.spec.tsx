import { render } from "@testing-library/react";
import { HeaderProps } from "..";
import { StoryCategories } from "../../../store/stories/types";

import BottomSection from "./index";

const mockProps: HeaderProps = {
  selectedCategory: StoryCategories.Health,
  handleClick: jest.fn(),
};

describe("<BottomSection />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should match the BottomSection component snapshot", () => {
    const view = render(<BottomSection {...mockProps} />);
    expect(view.container).toMatchSnapshot();
  });
});
