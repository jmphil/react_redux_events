import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector,} from 'react-redux';
import { connect } from 'react-redux';
import Header from './Header';
import EventList from './EventList';
import {updateEvents, updateSearch } from '../actions';


const Events = () => {
    const event = useSelector(state => state.event);
    //recieve dispatch function
    // const dispatch = useDispatch();
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        const fetchEvents = async () => {
            let result = await fetch(`https://www.eventbriteapi.com/v3/events/search/?token=${process.env.REACT_APP_EVENTRBITE}`)
            let data = await result.json();
            
            console.log(data)
        }
        fetchEvents()
    }, [])
    

    // dispatch(events);
    
    return (<>
    <div className="App">
        <Header title="Eventurley" subtitle="Find Events in Your Area" /> 
        {/* {this.state.eventsLoaded ? <EventList events={events} /> : null}  */}
        <div className="App__footer">
        </div> 
        events post here
    </div>
    </>
        );
        
    }


function mapStateToProps (state) {
const {data} = state;
    return {data};
}

export default connect(mapStateToProps, {updateSearch})(Events);