import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import Baselayout from './components/layout/BaseLayout';
import Classes from './components/Locations';
import Hooks from './components/Events';
import {createStore} from 'redux';
import { Provider } from "react-redux";
import reducer from './reducers/reducerTemplate';
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
let store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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
            <Route exact path="/hooks" component={Hooks} />
            <Route exact path="/classes" component={Classes} />
          </Switch>
        </Baselayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


