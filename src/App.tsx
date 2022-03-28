import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Map from "./components/Map";

const App = () => {
  return (
  <Router>
  <Switch>
       <Route path="/">
            <Map />
       </Route>
  </Switch>
</Router>)
}

export default App;
