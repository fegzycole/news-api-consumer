import { render } from "@testing-library/react";

import Divider from "./index";

describe("<Divider />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should match the Divider component snapshot", () => {
    const view = render(<Divider />);
    expect(view.container).toMatchSnapshot();
  });
});
