import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
import Button from '../../components/Button';

    describe("passing props", () => {
        let props = {
          Content: {
            heading: "Select Ability based on Pokemon",
            label2: "Select Ability",
            label1: "Select Pokemon",
            label4: 'DELETE',
          },
          buttonItem: (fn) => fn,
          ButtonItem: (fn) => fn,
        };
        it("should call ButtonItem method", () => {
          const wrapper = shallow(<Button {...props} />);
          wrapper.find('button').simulate('click');
          expect(wrapper.find("buttonItem")).toEqual({});
        });
      
})
