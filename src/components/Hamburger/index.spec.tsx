import { render } from "@testing-library/react";

import Hamburger from "./index";

describe("<Hamburger />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should match the Hamburger component snapshot", () => {
    const view = render(<Hamburger />);
    expect(view.container).toMatchSnapshot();
  });
});
