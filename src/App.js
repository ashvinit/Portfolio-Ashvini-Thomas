import React from "react";
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";
// import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App () {

  let hash = this.props.location.hash.replace('#', '');
if (hash) {
  let node = ReactDOM.findDOMNode(this.refs[hash]);
  if (node) {
    node.scrollIntoView();
  }
}

  return (
      <HashRouter basename="/">
        <Switch>
          <Route 
            exact path="/" 
            render={props => <Index {...props} />} 
            component={Home} 
          />       
          <Route 
            exact path="/portfolio" 
            render={props => <Portfolio {...props} />}
            component={Portfolio} 
            /> 
          <Route 
          exact path="/contact" 
          render={props => <Contact {...props} />}
          component={Contact} />
          {/* <Route exact path="/aboutme" component={AboutMe} /> */}
        </Switch>
      </HashRouter>
  );
}

export default App;