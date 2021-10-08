import Enzyme,{ shallow } from 'enzyme';
import { expectation } from 'sinon';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Header from '../../components/Header';
Enzyme.configure({ adapter: new Adapter() });

describe('to display footer',()=>{
    it("to display anchor element",()=>{
        const wrapper = shallow(<Header/>);
        const newstate = wrapper.find('a');
        expect(newstate).toEqual({})
    })
    it("to display anchor element",()=>{
        const wrapper = shallow(<Header/>);
        const newstate = wrapper.find('Link').at(0);
        expect(newstate).toEqual({})
    })
})