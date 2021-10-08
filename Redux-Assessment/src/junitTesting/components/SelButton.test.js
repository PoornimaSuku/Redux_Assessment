import Enzyme, { shallow } from "enzyme";

import SelButton from "../../../src/components/SelButtons";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });


describe("passing props", () => {
  let props = {
    Content: {
      heading: "Select Ability based on Pokemon",
      label2: "Select Ability",
      label1: "Select Pokemon",
      
    },
    Rchange: (fn) => fn,
    hanonChange: (fn) => fn,
    data: [{ name: "pokemon values" }],
  };
  it("should call hanonChange method", () => {
    const wrapper = shallow(<SelButton {...props} data={[]}/>);
    const para = wrapper.find('select').at(0);
    para.simulate('change');
    expect(wrapper.find("Rchange")).toHaveBeenCalled;
  });
});
