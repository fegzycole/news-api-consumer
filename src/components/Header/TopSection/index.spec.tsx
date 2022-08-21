import { render } from "@testing-library/react";

import TopSection from "./index";

describe("<TopSection />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should match the TopSection component snapshot", () => {
    const view = render(<TopSection />);
    expect(view.container).toMatchSnapshot();
  });
});
