const initial_state = {
    result: [], 
    error:null
}
const pokemonReducer = (state = initial_state, action) => {
    switch (action.type ) {
        case "FETCH_ABILITIES":
        return {
            ...state,
            result: action.payload
        }
        case "INVALID_REQST":
            return {
                ...state,
                error: action.payload
            }
            default:
                return state;
    } 
    
}

export default pokemonReducer;