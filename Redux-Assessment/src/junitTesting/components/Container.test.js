import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import sinon from 'sinon';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });
import Container from '../../container/Container';
import configureStore from "redux-mock-store";
import  mapStateToProps from '../../container/Container'

import configureMockStore from 'redux-mock-store';
import Store from '../../Store/Store';
const mockStore = configureMockStore();
describe("testing for container", () => {
 
  it("mapstatetoprops", () => {
    const initialState = {
      event: {
        result: {},
        error: {},
      },
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Container store={store} />);
    expect(wrapper.props().result).toBe;
  });
  it("mapdispatch working", () => {
  const initialState = {
    event: {
      result: {
        abilities:{
          ability:{
            name:''
          }
        }
      },
      error: {},
    },
  };
  const store = mockStore(initialState);
  shallow(<Container store={store} content={[]}/>);
    const dispatch = function () {};
    mapDispatchProps(dispatch).getAbilities();
    expect(getAbilities).toEqual(undefined);
  });

});