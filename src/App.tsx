import React from 'react';
import './scss/App.scss';
import Header from './Components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Construction from './Pages/Construction';
import Canton from './Pages/Canton';
import Roles from './Pages/Roles';

function App() {
  return (
  <Router>

      <Switch>
        <Route exact path="/">
          <Construction/>
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/role">
          <Roles/>
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/actions">

        </Route>
      </Switch>

      <Switch>
        <Route exact path="/pour-le-canton/:canton" children={<Canton />}/>
      </Switch>
      
    </Router>
  );
}

export default App;
