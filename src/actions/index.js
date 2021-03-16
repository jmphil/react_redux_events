
//this is an aciton creator and it returns an obj{}
import axios from 'axios';



export const updateEvents = events => {
    return{
        type: 'UPDATE_EVENTS',
        data: events
    };
};


export const updateSearch = text => {
    console.log(text)
    return {
        type: 'UPDATE_SEARCH',
        data: text,
    }
}

// export const fetchEvents = (city) => {
//     var eventArray = [];
//     return (dispatch) => {
//     axios.get('https://www.eventbriteapi.com/v3/events/search/', {
//         params: {
//             token: `${process.env.REACT_APP_EVENTBRITE}`,
//             categories: '103',
//             'location.address': city,
//             'location.within': '5mi'
//         }
// 	})
//     .then(response => {
//         const {events} = response.data;
//         events.forEach(event => {
//         let {venue_id} = event;
//         axios.get(`https://www.eventbriteapi.com/v3/venues/${venue_id}/`, {
//             params: {
//             token: `${process.env.REACT_APP_EVENTBRITE}`
//             },
//         })
//         .then(response => {
//             event.latitude = response.data.latitude;
//             event.longitude = response.data.longitude;
//             eventArray.push(event)
//         })
//         .then(() => {
//             setTimeout(() => updateEvents(dispatch, eventArray),0)
//         })
//         .catch(function (error) {
//             console.log("error")
//             console.log(error);
//         });
//         })   
//     })
//         .catch(function(error) {
//             console.log(error);
//         });
//   };
// };
