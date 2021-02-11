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
              exact path="portfolio-ashvini-thomas/#/" 
              component={Home} 
            />       
            <Route 
              path="portfolio-ashvini-thomas/#/portfolio" 
              component={Portfolio} 
              /> 
            <Route 
            path="portfolio-ashvini-thomas/#/contact" 
            component={Contact} />
            {/* <Route path="/aboutme" component={AboutMe} /> */}
          </Switch>
        </Router>
      </div>
  );
}

export default App;