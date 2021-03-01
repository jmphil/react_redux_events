
//this is an aciton creator and it return an obj{}
const updateEvents = (dispatch, events) => {
    dispatch({
        type: 'UPDATE_EVENTS',
        events: events
    });
};

function eventsFetchDataSuccess(events) {
    return {
        type: 'EVENTS_FETCH_DATA_SUCCESS',
        events: events
    };
}
export const updateSearch = (text) => {
    console.log(text)
    return {
        type: 'UPDATE_SEARCH',
        data: text,
    }
}
function eventsAreLoading(bool) {
    return {
        type: 'EVENTS_ARE_LOADING',
        isLoading: bool
    };
}
export const getEvents = (searchTerm, geoLocation) => {
    return dispatch => {
        dispatch(eventsAreLoading(true))
        const anonymousAccessOAuthToken = "77ZSPVIUQPRNZ7ZLZN5O";
        let eventbriteUrlSearch = `https://www.eventbriteapi.com/v3/events/search?q=${searchTerm}`;
         //Check if user's location has coordinates.
        if(Object.entries(geoLocation).length !== 0 && geoLocation.constructor === Object){
            const locationString = `location.latitude=${geoLocation.latitude}&location.longitude=${geoLocation.longitude}`
            eventbriteUrlSearch = `https://www.eventbriteapi.com/v3/events/search?q=${searchTerm}&${locationString}&expand=venue`;
        }
        
        
        const CORSProxyServerUrl = "https://cors-anywhere.herokuapp.com/";

        return fetch(CORSProxyServerUrl + eventbriteUrlSearch, {
            method: "GET",
            headers: {
                    "Authorization": `Bearer ${process.env.REACT_APP_EVENTBRITE}`,
                    
                }
            }
        )
        .then(resp => resp.json())
        .then( eventsData => {
            // Create copy of events response data and add request url to hit the same endpoint for pagination e.g. pagination url/endpoint =  // https://www.initialRequestUrl/?continuation=dGhpcyBpcyBwYWdlIDE
            const events = { ...eventsData, 
                pagination: {
                    ...eventsData.pagination, initialRequestUrl: CORSProxyServerUrl +     eventbriteUrlSearch
                }
            }
                dispatch(eventsFetchDataSuccess(events))
            }
        ) 
    }
}
