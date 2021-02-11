import React from 'react';
import './button.scss';
import {
    TweenMax,
    Expo
} from "gsap";

class PortfolioBtn extends React.Component {

    componentDidMount() {
        const button = this.button;
        button.addEventListener('mouseover', animation, false);
        button.addEventListener('click', goToPage, false);
        
        function animation () {
            var duration = 0.3, delay = 0.08;
            TweenMax.to(button, duration, {scaleY: 1.6, ease: Expo.easeOut});
            TweenMax.to(button, duration, {scaleX: 1.2, scaleY: 1, ease: "back", delay: delay});
            TweenMax.to(button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: "back", delay: delay * 3});
        }

        var page = this.props.button.split(" ").join("");
        let loginPath = (process.env.NODE_ENV === 'production') ? "https://ashvinit.github.io/portfolio-ashvini-thomas/#" : "http://localhost:3000";

        function goToPage (event) {
            event.preventDefault();
            window.location.href = loginPath + page;
        }
    }

    render() {
        return (
            <div className="button" ref={(ref) => this.button = ref}>
                <p>{this.props.button}</p>
            </div>
        )
    }

}

export default PortfolioBtn;

