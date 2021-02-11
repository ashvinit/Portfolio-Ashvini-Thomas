import React from "react";
import "./navbar.css";

function NavBar() {

    return(
        <div className="navbar">
            <a className="pages" href="https://ashvinit.github.io/portfolio-ashvini-thomas/#/">home.</a>
            <a className="pages" href="https://ashvinit.github.io/portfolio-ashvini-thomas/#/portfolio">portfolio.</a>
            <a className="pages" href="https://ashvinit.github.io/portfolio-ashvini-thomas/#/contact">contact.</a>
            {/* <a className="pages" href="/aboutme">about me.</a> */}
        </div>
    )
}

export default NavBar;