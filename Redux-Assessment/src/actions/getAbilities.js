import { FETCH_SUCCESS, FETCH_FAIL} from "./index.js";
import axios from "axios";


export const getabilities = (pokemon) => async (dispatch) => {
 await
  axios.get("https://pokeapi.co/api/v2/pokemon/"+ pokemon)
    .then((result) => {
      dispatch(get(result.data));
    })
    .catch((error) => {
     dispatch(fetchError(error));
    });
};
const get = (result) => {
  return {
    type: FETCH_SUCCESS,
    payload: result.abilities,
    
  };
};
const fetchError = (error) => {
  return {
    type: FETCH_FAIL,
    payload: true
  };
};
