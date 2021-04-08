import React from "react";
import { shallow } from "enzyme";
import FeedDetailsView from "../../../../components/views/FeedDetailsView";


describe("Feed Details View", () => {
  it("should render correctly", () => {
    const Component = shallow(<FeedDetailsView news={{}} />);
    expect(Component).toMatchSnapshot();
  });
});
