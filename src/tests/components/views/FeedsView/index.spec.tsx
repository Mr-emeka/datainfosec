import React from "react";
import { shallow } from "enzyme";
import FeedsView from "../../../../components/views/FeedsView";

describe("Feeds View", () => {
  it("should render correctly", () => {
    const Component = shallow(<FeedsView feeds={[]} topFeeds={[]} />);
    expect(Component).toMatchSnapshot();
  });
});
