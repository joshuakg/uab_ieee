import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./js/components/Home/Home";
import TopNav from './js/components/Navigation/TopNav';
import About from "./js/components/About/About";
import Involvement from "./js/components/Involvement/Involvement";
import Contact from "./js/components/Contact/Contact";


class App extends Component {
  render() {
    return (
      <Router>      
        <div>
          <TopNav/>
          <Switch>
            <Route path="/Home" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Involvement" component={Involvement}/>
            <Route path="/Contact" component={Contact}/>
            <Redirect to="/Home"/>
          </Switch>          
        </div>
      </Router>
    );
  }
}

export default App;
