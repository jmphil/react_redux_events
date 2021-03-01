import React, {useEffect} from 'react'
import {useDispatch, useSelector,} from 'react-redux';
import { connect } from 'react-redux';
import Header from './Header';
import EventList from './EventList';
import {updateSearch, getEvents} from '../actions';


const Events = () => {
    const event = useSelector(state => state.event);
    //recieve dispatch function
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const getData = async () => {
    //         let result = await fetch('/api')
    //         let data = await result.json();
            
    //         console.log(data)
    //     }
    //     getData()
    // }, [])
    

    let {events} = getEvents();
    
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