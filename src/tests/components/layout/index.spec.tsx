import React from "react";
import { shallow } from "enzyme";
import MainLayout from "../../../components/layout/mainLayout";
import { Helmet } from 'react-helmet';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("Feeds View", () => {
    it("should render correctly", () => {
        const Wrapper = shallow(<MainLayout title="render" description="page description"
            children={<div>here</div>} />);
        expect(Wrapper.find(Helmet).length).toBe(1);
        expect(Wrapper.find(Helmet).children.length).toBe(1);
        expect(Wrapper.find('title').html()).toContain('render');
        expect(Wrapper).toMatchSnapshot();
    });
});
