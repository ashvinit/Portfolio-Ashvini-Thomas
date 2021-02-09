import React from "react";
import "./style.css";
import NavBar from "../components/NavBar";
import MiniBrowser from "../components/MiniBrowser";
import project3 from "../assets/images/phone-eats-first.png";
import fitness from "../assets/images/fitness-tracker.png";
import burger from "../assets/images/burger.png";
import userDir from "../assets/images/userDirectory.png";
import noteTaker from "../assets/images/noteTaker.png";
import planner from "../assets/images/planner.png";


function Portfolio() {
    return(
        <div>
            <p className="title">ashvini thomas.</p>
            <NavBar />
            <div className="work">
                <MiniBrowser className="browser" value="https://phone-eats-first.herokuapp.com/" src={project3}/>
                <MiniBrowser className="browser" value="https://fitness-tracker-at.herokuapp.com/" src={fitness}/>
            </div>
            <div className="work">
                <MiniBrowser className="browser" value="https://burger-at.herokuapp.com/" src={burger}/>
                <MiniBrowser className="browser" value="https://ashvinit.github.io/userDirectory/" src={userDir}/>
            </div> 
            <div className="work">
                <MiniBrowser className="browser" value="https://note-taker-at.herokuapp.com/" src={noteTaker}/>
                <MiniBrowser className="browser" value="https://ashvinit.github.io/dayPlanner/" src={planner}/>
            </div> 
        </div>

    );
}

export default Portfolio;