import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import SignIn from './pages/SignIn/SignIn';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
    const [login, setLogin] = useState(false);
  return (
    <Router>
        <Switch>
            <Route path="/signIn">
                <SignIn />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/">
                {login ? <Redirect to={'/dashboard'} /> : <Redirect to={'/signIn'} />}
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
