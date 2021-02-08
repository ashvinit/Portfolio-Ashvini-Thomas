import React from "react";
import "./style.css";
import NavBar from "../components/NavBar";
import MiniBrowser from "../components/MiniBrowser";
import project3 from "../assets/images/phone-eats-first.png";


function Portfolio() {
    return(
        <div>
            <p className="title">ashvini thomas.</p>
            <NavBar />
            <div className="work">
                <MiniBrowser value="https://phone-eats-first.herokuapp.com/" src={project3}/>
            </div>
            


            
        </div>

    );
}

export default Portfolio;