import React from "react";
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";
// import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";


function App () {

  return (
    <div>
        <HashRouter basename="/">
          <Switch>
            <Route 
              exact path="/" 
              component={Home} 
            />       
            <Route 
              path="/portfolio" 
              component={Portfolio} 
              /> 
            <Route 
            path="/contact" 
            component={Contact} />
            {/* <Route exact path="/aboutme" component={AboutMe} /> */}
          </Switch>
        </HashRouter>
      </div>
  );
}

export default App;