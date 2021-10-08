import React from "react";
import Enzyme, { shallow } from "enzyme";
import DisplayCard from "../../components/DisplayCard";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });


describe("EditData Component", () => {
  let props = {
    deleteItem: (fn) => fn,
    Bondel: (fn) => fn,
    editItem: (fn) => fn,
    Bonedit: (fn) => fn,
    saveDetails: (fn) => fn,
    BsaveDetails: (fn) => fn,
  };
  it("should call deleteItem method", () => {
    const value = {
      target: {
        requiredItem: "",
      },
    };
    const wrapper = shallow(<DisplayCard {...props} list={[]} />);
    wrapper.instance().deleteItem(value);
    expect(wrapper.find("deleteItem")).toEqual({});
  });

  it("should call EditItem method", () => {
    const value = {
      target: {
        requiredItem: "",
      },
    };
    const wrapper = shallow(<DisplayCard {...props} list={[]} />);
    wrapper.instance().editItem(value);
    // expect(wrapper.state('requiredItem')).toEqual();  //true
    expect(wrapper.find("editItem")).toEqual({});
  });
  it("should call saveDetails method", () => {
    const value = {
      target: {
        requiredItem: "",
      },
    };
    const wrapper = shallow(<DisplayCard {...props} list={[]} />);
    wrapper.instance().saveDetails(value);
    expect(wrapper.find("saveDetails")).toEqual({});
  });
});
