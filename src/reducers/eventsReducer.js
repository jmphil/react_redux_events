const initialState = {
    // events: [],
    city: ''
  };
  
  const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_EVENTS':
        return {
          ...state,
          events:action.data
        }
      case 'UPDATE_SEARCH':
        return {
          ...state,
          city:action.data
        }
      default:
        return state
    }
  }
  
  export default eventsReducer;