import Enzyme, { shallow } from "enzyme";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Dropdown from "../../components/Dropdown";
Enzyme.configure({ adapter: new Adapter() });


describe("Select Buttons for displaying Pokemon and abilities",()=>{
    let props = {
        Content: {
          heading: "Select Ability based on Pokemon",
          label2: "Select Ability",
          label1: "Select Pokemon",
          label3: 'EDIT',
          label4: 'DELETE',
        },
        pokemon:[ {
            "ability":
            {
            "name": "charmeleon",
          }
          }
        ],
        changePokemon:fn=>fn,
        fetchabilities:fn=>fn,
        handleClose:fn=>fn,
        error:true,
    }
    it( "render the title",()=>{
        const wrapper = shallow(<Dropdown {...props} content={[]}/>)
        const para = wrapper.find('h1')
        expect(para).toHaveLength(1)
        expect(wrapper.find('h1')).toEqual({})
    })
    it('should call 1st select method', () => {
        const value = {
          target: {
            requiredItem: ""
          }
        }
        const wrapper = shallow(<Dropdown {...props} content={[]}/>);
        wrapper.instance().changePokemon(value);
        expect(wrapper.find('changePokemon')).toEqual({})
      });
    
    
    it('renders common 2nd select Button ',()=>{
 
        const wrapper = shallow(<Dropdown {...props}  content={[]}/>)
        const para = wrapper.find(`Button`).at(1);
        expect(para.exists()).toEqual(true)
      
    })
    it("render the popup error",()=>{
        const wrapper = shallow(<Dropdown {...props} content={[]}/>)
        const para = wrapper.find('Popup')
        expect(wrapper.find('Popup')).toHaveBeenCalled
    })
})