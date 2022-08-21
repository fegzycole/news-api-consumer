import { render } from "@testing-library/react";
import { StoryCategories } from "../../store/stories/types";
import Header, { HeaderProps } from "./index";

const mockProps: HeaderProps = {
  selectedCategory: StoryCategories.Entertainment,
  handleClick: jest.fn(),
};

jest.mock("./TopSection", () => ({
  __esModule: true,
  default: () => {
    return <div className="TopSection" />;
  },
  TopSection: true,
}));

jest.mock("./BottomSection", () => ({
  __esModule: true,
  default: () => {
    return <div className="BottomSection" />;
  },
  BottomSection: true,
}));

jest.mock("../Divider", () => ({
  __esModule: true,
  default: () => {
    return <div className="Divider" />;
  },
  Divider: true,
}));

describe("<Header />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should match the Header component snapshot", () => {
    const view = render(<Header {...mockProps} />);
    expect(view.container).toMatchSnapshot();
  });
});
