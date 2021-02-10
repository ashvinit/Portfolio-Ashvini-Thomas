import React from "react";
import "./navbar.css";

function NavBar() {
    return(
        <div className="navbar">
            <a className="pages" href="/">home.</a>
            <a className="pages" href="/portfolio">portfolio.</a>
            <a className="pages" href="/contact">contact.</a>
            {/* <a className="pages" href="/aboutme">about me.</a> */}
        </div>
    )
}

export default NavBar;