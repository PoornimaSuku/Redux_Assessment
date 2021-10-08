import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Modal from '../../components/Modal';
import sinon from 'sinon';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ 
    adapter: new Adapter() ,
    disableLifecycleMethods: true,
});
describe('Modal component', () => {
    test("renders", () => {
        const wrapper = shallow(<Modal />);
        expect(wrapper.exists()).toBe(true);
    })
    let props = {
        MockData: {
            heading: "Todo App ",
            editTitle: "Edit",
            editButton: "Edit",
            delete: "Delete",
            add: "Submit",
            close: "Close",
            ok: "Save",
            
        } ,
        handleSave:fn=>fn,
        saveDetails:fn=>fn,   
        msgHandler:fn=>fn ,
        msg:'updated value',
        handleClose:fn=>fn, 
        dataDismiss:fn=>fn
    }
    it('should call handleOnChange method', () => {
        const value = {
          target: {
            msg: "make changes"
          }
        }
        const wrapper = shallow(<Modal {...props} />);
        wrapper.instance().msgHandler(value);
        expect(wrapper.exists()).toBe(true);
        
      });
    it('should  call handleSave',()=>{
        const ButtonItem = sinon.spy(); 
        const wrapper = shallow(<Modal {...props} onClick={ButtonItem}/>);
        wrapper.find(`[id="save"]`).simulate('click');
        expect(wrapper.find("handleSave")).toHaveBeenCalled;

    })
    it('should  call close button',()=>{
        const wrapper = shallow(<Modal {...props} />);
        wrapper.find(`[id="close"]`).simulate('click');
        expect(wrapper.find("dataDismiss")).toHaveBeenCalled;

    })
})