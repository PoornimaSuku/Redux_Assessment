import React from 'react';
import Enzyme, { shallow } from 'enzyme';
// import Form from '../../component/Form';
import Popup from '../../components/Popup';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });


describe("passing props", () => {
    let props = {
        handleClose:fn=>fn,
        Content:fn=>fn,
    }
    it("should call ButtonItem method", () => {
        // const ButtonItem = sinon.spy(); 
      const wrapper = shallow(<Popup {...props} />);
      wrapper.find('span').simulate('click');
      expect(wrapper.find("handleClose")).toEqual({});
    });
    it("Display content",()=>{
        const wrapper = shallow(<Popup {...props} />);
        const paragraph = wrapper.find(`[id='content']`)
        expect(paragraph).toHaveLength(1)
        expect(wrapper.find("Content")).toEqual({});
        
    })

})