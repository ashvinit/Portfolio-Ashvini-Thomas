import React from "react";
import "./style.css";
import me from "../assets/images/me.jpg";
import PortfolioBtn from "../components/PortfolioBtn";
import AboutMeBtn from "../components/AboutMeBtn";
import ContactBtn from "../components/ContactBtn";


function Home() {

    return(
        <div>
            <div className="row">
                <div className="text col-6">
                    <h3>
                        Hey there, I'm Ashvini Thomas!
                    </h3>
                    <h4>
                        I am a Full Stack Web Developer <br />
                        with a background in Information Technology and Informatics.
                    </h4>
                </div>
                <div className="image col-6">
                    <img className="my-image" src={me} alt={""}/>
                </div>
            </div>
            <div className="row">
                <div className="image col-4"><PortfolioBtn /></div>
                <div className="image col-4"><ContactBtn /></div>
                <div className="image col-4"><AboutMeBtn /></div>
            </div>

        </div>
    );
}

export default Home;