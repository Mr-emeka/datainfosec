import React from "react";
import { shallow } from "enzyme";
import FeedDetailsView from "../../../../components/views/FeedDetailsView";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("Feed Details View", () => {
  it("should render correctly", () => {
    const Component = shallow(<FeedDetailsView news={{}} />);
    expect(Component).toMatchSnapshot();
  });
});
