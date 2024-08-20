import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Login.css';
import Login from './Login';
import Home from './Home';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        {}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);