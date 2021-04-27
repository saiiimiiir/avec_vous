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
          
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/actions">

        </Route>
      </Switch>
      <Switch>
        <Route exact path="/pour-le-canton">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
