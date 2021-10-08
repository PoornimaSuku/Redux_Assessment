import {FETCH_SUCCESS, FETCH_FAIL} from '../../src/actions/index'
import pokemonReducer from '../../src/reducers/pokemonReducer'
const INITIAL_STATE = {
    result: [],
    error: null
}
describe(' reducers pokemonReducer', () => {
    
    it("should return default state", ()=>{
       const newstate = pokemonReducer(INITIAL_STATE,{});
       expect(newstate).toEqual(INITIAL_STATE);
    })

    it("Success",()=>{
        const newstate =pokemonReducer(INITIAL_STATE,{
            type:FETCH_SUCCESS,
            payload:['wartortle']
        });
        expect(newstate).toEqual({
            ...INITIAL_STATE , 
            res:['wartortle']
          }  )
    })

    it('failure', ()=>{
        const newstate =pokemonReducer(INITIAL_STATE,{
            type:FETCH_FAIL,
            payload:""
        });
        expect(newstate).toEqual({
            ...INITIAL_STATE , 
            error:""
          })
    })
})