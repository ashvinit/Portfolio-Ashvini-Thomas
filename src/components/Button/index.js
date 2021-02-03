import React from 'react';
import './mysass.scss';
import {
    TweenMax,
    Expo,
    Back
} from "gsap";

class Button extends React.Component {

    componentDidMount() {
        const button = this.button;
        button.addEventListener('click', function() {
            var duration = 0.3, delay = 0.08;
            TweenMax.to(button, duration, {scaleY: 1.6, ease: Expo.easeOut});
            TweenMax.to(button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
            TweenMax.to(button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
        });
    }

    render() {
        return (
            <div className="button" ref={(ref) => this.button = ref}>
                <p>Click me</p>
            </div>
        )
    }

}

export default Button;

