import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import Baselayout from './components/layout/BaseLayout';
import Map from './components/Locations';
import Events from './components/Events';
import {createStore} from 'redux';
import { Provider } from "react-redux";
import rootReducer from './reducers/index.js';
import './index.css';


const saveToLocalStorage = (reduxGlobalState) => {

  //serialize = converting js object to a string
  try{
    const serializeState = JSON.stringify(reduxGlobalState);
    localStorage.setItem('state', serializeState)
  }
  catch(e){
    console.log(e);
  }
}

const loadFromLocalStorage = (params) => {
  const serializeState = localStorage.getItem('state')

  if(serializeState === null){
    return undefined;
  }
  else{
    return JSON.parse(serializeState)  //returns a javascript object representing state
  } 
}

const persistedState = loadFromLocalStorage();

//initializing redux store
//requires reducer. Second argument is for redux dev-tools extension.
let store = createStore(rootReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=> {
  //passing in a 
  saveToLocalStorage(store.getState())
})

//Provider hooks react to redux. Must pass redux instance to provider via "store" prop.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Baselayout>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/locations" component={Map} />
            <Route exact path="/events" component={Events} />
          </Switch>
        </Baselayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


