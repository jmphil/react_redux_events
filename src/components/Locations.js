import React, {useState} from 'react';
import MapGL, {NavigationControl} from 'react-map-gl';
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container'





function Map() {
    //HOOK
    const [viewport, setViewport] = useState({
        latitude: 37.785164,
        longitude: -100,
        zoom: 2.8,
        bearing: 0,
        pitch: 0,
        width: 800,
        height: 400,
    })


    return (<>
    {/* start of map */}
    <div className=" w-100 row justify-content-center">
        <MapGL className="col"
            {...viewport}
            mapStyle="mapbox://styles/mapbox/dark-v9"
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
            mapStyle="mapbox://styles/jmphil00/ckll1cxg60wsn17myqwid2azk"
            onViewportChange={viewport => {
                setViewport(viewport)
            }}>
           
        </MapGL>
    </div> 
    {/* end of map */}
    {/* start of selected location */}
    <div className="w-100 row justify-content-center">
        Card Placeholder
    </div>
    {/* end of selected location */}
    </>
    );
  }

//maps global state to a prop
//count is our props: this.props.count
const mapStateToPorps = (state) => {
    return {
        // count: state.counter
    }
}
//increment is now a porps: this.props.increment()
const mapDispatchToProps = (dispatch) => {
    return{
        //update functions for state
        // increment: (n) =>dispatch(increment(n)) //callback accepts param and passes it to dispatch
    }
}
//connect takes 2 functions. First is for pulling down state (mapStateToPorps). Second is for updating state (dispatch)
export default connect(mapStateToPorps, null)(Map)
