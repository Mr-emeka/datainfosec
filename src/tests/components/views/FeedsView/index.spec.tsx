import React from "react";
import { shallow } from "enzyme";
import FeedsView from "../../../../components/views/FeedsView";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("Feeds View", () => {
  it("should render correctly", () => {
    const Component = shallow(<FeedsView feeds={[]} topFeeds={[]} />);
    expect(Component).toMatchSnapshot();
  });
});
