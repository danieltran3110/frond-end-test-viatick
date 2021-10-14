import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from './pages/SignIn/SignIn';

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/">
                <SignIn />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
