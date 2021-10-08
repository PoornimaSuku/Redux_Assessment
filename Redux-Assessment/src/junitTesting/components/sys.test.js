import Enzyme, { shallow } from "enzyme";
import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Sys from "../../components/sys";
Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
  test("renders learn react link", () => {
    const wrapper = shallow(<Sys />);
    expect(wrapper.exists()).toBe(true);
  });
});