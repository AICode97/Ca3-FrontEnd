
import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './App.css';
import LoginForm from './login/LoginForm';
import URLSettings from './settings'


function App() {
  return (
    <div className="App">
      <h2>Suh dude</h2>
      <Router>
        <Header />
        <Switch>
          <Route path={URLSettings.getURL("Login")}> <LoginForm /> </Route>
        
        </Switch>
        
      </Router>
    </div>
  );
}
const Header = () => {
  return (
    <ul className="header">
     
      <li><NavLink activeClassName="active" to={URLSettings.getURL("Login")}>Login</NavLink></li>

    
    </ul>
  )
}


export default App;
