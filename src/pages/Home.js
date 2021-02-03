import React from "react";
import "./style.css";
import "./mysass.scss";
import me from "../assets/images/me.jpg"
// import {
//     TweenMax,
//     Expo,
//     Back
// } from "gsap";


function Home() {

//     var $button = document.querySelector('.button');
// $button.addEventListener('click', function() {
//   var duration = 0.3,
//       delay = 0.08;
//   TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
//   TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
//   TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
// });

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
                    <img className="my-image" src={me} />
                </div>
            </div>
            <div className="row">
                <div class="button">
                    <p>Click me</p>
                </div>
            </div>

        </div>
    );
}

export default Home;