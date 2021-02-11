import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";


function App () {

  return (
    <div>
        <Router>
          <Switch>
            <Route 
              exact path="/" 
              component={Home} 
            />       
            <Route 
              exact path="/portfolio" 
              component={Portfolio} 
            /> 
            <Route 
              exact path="/contact" 
              component={Contact}
            />
            {/* <Route path="/aboutme" component={AboutMe} /> */}
          </Switch>
        </Router>
      </div>
  );
}

export default App;