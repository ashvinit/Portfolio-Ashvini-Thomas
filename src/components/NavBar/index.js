import React from "react";
import "./style.css";
import "./mysass/scss";

function NavBar(props) {
  return (
  <nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" href="#">
      <h1>Ashvini Thomas</h1>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto">
        <a className="nav-item nav-link" href="#">Portfolio</a>
        <a className="nav-item nav-link" href="#">Contact</a>
        <a className="nav-item nav-link" href="#">About Me</a>
      </div>
    </div>
  </nav>

  );
}

export default NavBar;