import Enzyme, { shallow } from "enzyme";

import List from "../../components/TodoList";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

describe("getting displayed whole todo", () => {
  let props = {
    Content: {
      heading: "Pokemon App",
      label2: "Select Ability",
      label1: "Select Pokemon",
      label3: "EDIT",
      label4: "DELETE",
    },
    handleSubmit: (fn) => fn,
    deleteItem: (fn) => fn,
    editItem: (fn) => fn,
  };
  it("render the title", () => {
    const wrapper = shallow(<List />);
    const para = wrapper.find("todo");
    expect(wrapper.find("todo")).toEqual({});
  });
  it("renders input box and add button", () => {
    const value = {
      target: {
        elements:{
        msg: "",
        }
      },
    };
    const wrapper = shallow(<List />);
    const para = wrapper.find("Input");
    wrapper.instance().handleSubmit(value);
    expect(para.find("#input").exists()).toBe(true);
  });
  it("renders edit button ", () => {
    const value = {
      target: {
        requiredItem: "",
      },
    };
    const wrapper = shallow(<List {...props} />);
    expect(wrapper.instance().editItem()).toBeCalled;
  });
  it("should call Edit method", () => {
    const value = {
      target: {
        requiredItem: "",
      },
    };
    const wrapper = shallow(<List {...props} />);
    wrapper.instance().editItem(value);
    expect(wrapper.find("editItem")).toEqual({});
  });
  it("should call Delete method", () => {
    const value = {
      target: {
        requiredItem: "",
      },
    };
    const wrapper = shallow(<List {...props} />);
    wrapper.instance().deleteItem(value);
    expect(wrapper.find("deleteItem")).toEqual({});
  });
  it("should call Delete method", () => {
  //   {
  //         const value = {
  //             target:{
  //                 value:[]
  //             }}
  //         }
  // })
  {
    const value = {
        target:{
            value:[]
        }
    }
    const wrapper = shallow(<List {...props}/>);
    wrapper.setState({
        
       data:[{key:"blue"}]
   })
    wrapper.instance().deleteItem(value);
    expect(wrapper.state('data')).toEqual([{key:"blue"}]);
  }
});
  it("should call savedetails method", () => {
    const value = {
      target: {
        requiredItem: "",
      },
    };
    const wrapper = shallow(<List {...props} />);
    wrapper.instance().saveDetails(value);
    expect(wrapper.find("saveDetails")).toEqual({});
  });
});
