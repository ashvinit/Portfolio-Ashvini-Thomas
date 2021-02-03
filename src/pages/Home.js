import React from "react";
import "./style.css"
import me from "../assets/images/me.jpg"

function Home() {
    return(
        <div>
            <h3>
                Hey there, I'm Ashvini Thomas!
            </h3>
            <h4>
                I am a Full Stack Web Developer <br />
                with a background in Information Technology and Informatics.
            </h4>
            <img className="my-image" src={me} />
        </div>

    );
}

export default Home;