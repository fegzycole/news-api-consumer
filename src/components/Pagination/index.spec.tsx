import { render } from "@testing-library/react";

import Pagination, { PaginationBtnProps } from "./index";

const mockProps: PaginationBtnProps = {
  handleClick: jest.fn(),
};

describe("<Pagination />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should match the Pagination component snapshot", () => {
    const view = render(<Pagination {...mockProps} />);
    expect(view.container).toMatchSnapshot();
  });
});
