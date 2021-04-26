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

function App() {
  return (
  <Router>
      <Switch>
        <Route path="/">

        </Route>
      </Switch>
      <Switch>
        <Route path="/role">

        </Route>
      </Switch>
      <Switch>
        <Route path="/actions">

        </Route>
      </Switch>
      <Switch>
        <Route path="/pour-le-canton">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
