import React from 'react';
import './sass.scss';
import {
    gsap,
    TweenMax,
    Expo
} from "gsap";
import { CSSPlugin } from 'gsap/CSSPlugin';

class PortfolioBtn extends React.Component {

    componentDidMount() {
        gsap.registerPlugin(CSSPlugin);
        const button = this.button;
        button.addEventListener('mouseover', animation, false);
        // button.addEventListener('click', goToPage, false);
        
        function animation () {
            var duration = 0.3, delay = 0.08;
            TweenMax.to(button, duration, {scaleY: 1.6, ease: Expo.easeOut});
            TweenMax.to(button, duration, {scaleX: 1.2, scaleY: 1, ease: "back", delay: delay});
            TweenMax.to(button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: "back", delay: delay * 3});
        }

        // function goToPage (event) {
        //     event.preventDefault();
        //     constructor(props) {
        //         super(props);
        //         if (this.props.button === "Portfolio") {
        //             window.location.href = "/portfolio";
        //         } else if (this.props.button === "Contact") {
        //             window.location.href = "/contact";
        //         } else if (this.props.button === "About Me") {
        //             window.location.href = "/aboutme";
        //         }
                
        //     }

        // }
    }

    

    render() {
        return (
            <div className="button" ref={(ref) => this.button = ref} name={this.props.button}>
                <p>{this.props.button}</p>
            </div>
        )
    }

}

export default PortfolioBtn;

