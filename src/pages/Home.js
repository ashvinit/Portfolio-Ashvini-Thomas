import React from "react";
import "./home.css";
import me from "../assets/images/me.jpg";
import Button from "../components/Button";


function Home() {

    return(
        <div>
            <p className="title">ashvini thomas.</p>
            <img className="my-image" src={me} alt={""} />
            <p className="text">
                Hi there! <br />
                I'm a Full Stack Web Developer. <br />
            </p>
            <div className="inline">
                <Button id="portfolio" button="portfolio" />
                <Button id="contact" button="contact" />
                {/* <Button id="aboutme" button="aboutme" /> */}
            </div>
        </div>
    );
}

export default Home;
