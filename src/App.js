import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";


function App () {

  return (
      <Router basename="/">
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
          component={Contact} />
          {/* <Route exact path="/aboutme" component={AboutMe} /> */}
        </Switch>
      </Router>
  );
}

export default App;