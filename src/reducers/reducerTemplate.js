

let initialState = {
    counter: 0,
}

//purpose of reducer is to return a new global state
//reducer must be passed into store
const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "INCREMENT"://this name has to match action.type from actions
            return {
                ...state,
                counter: state.counter + action.data //data comes from (n) in templateAction action
            }
        
    
        default:
            return state;
    }

}

export default reducer