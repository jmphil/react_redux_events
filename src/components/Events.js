import React, {useEffect} from 'react'
import {useDispatch, useSelector,} from 'react-redux';
import {increment} from '../actions/templateActions';


const Hooks = () => {
    //getting global state
    const count = useSelector(state => state.counter);
    //recieve dispatch functoin
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            let result = await fetch('/api')
            let data = await result.json();
            
            console.log(data)
        }
        getData()
    }, [])
    return (
        <div>
            <h1>Events</h1>
            <h2>{count}</h2>
            {/* <button onClick={()=>dispatch(increment())}>Click Me</button> */}
        </div>
        
       
    )
}

export default Hooks
