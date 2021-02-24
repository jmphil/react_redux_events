import React, { Component } from 'react'
import { connect } from "react-redux";
import { increment } from "../actions/templateActions";

class Classes extends Component {
    render() {
        return (
            <div>
                <h1>Locations</h1>
                <h2>{this.props.count}</h2>
                {/* <button onClick={()=>this.props.increment()}>Click Me</button>  */}
                <h3>Locations</h3>
            </div>
        )
    }
}
//maps global state to a prop
//count is our props: this.props.count
const mapStateToPorps = (state) => {
    return {
        count: state.counter
    }
}
//increment is now a porps: this.props.increment()
const mapDispatchToProps = (dispatch) => {
    return{
        //update functions for state
        increment: (n) =>dispatch(increment(n)) //callback accepts param and passes it to dispatch
    }
}
//connect takes 2 functions. First is for pulling down state (mapStateToPorps). Second is for updating state (dispatch)
export default connect(mapStateToPorps, mapDispatchToProps)(Classes)
