import { render } from "@testing-library/react";

import Loader from "./index";

describe("<Loader />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should match the Loader component snapshot", () => {
    const view = render(<Loader />);
    expect(view.container).toMatchSnapshot();
  });
});
