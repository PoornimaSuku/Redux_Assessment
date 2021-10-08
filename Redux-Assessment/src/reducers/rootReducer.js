import { combineReducers } from 'redux';

import countryReducer from './pokemonReducer';
export default combineReducers({
    event: countryReducer,
   
})