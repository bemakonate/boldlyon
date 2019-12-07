import React, { Component } from 'react';
import classes from './stylesheets/Animation.css';

class Animation extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        const animationEl = this.myRef.current;
        animationEl.classList.add(classes.anim);
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const delayAnim = this.props.delay ? this.props.delay : '0s';
                const anim = this.props.type ? classes[this.props.type] : classes.slideDown;
                if (entry.intersectionRatio > 0) {
                    animationEl.style.animationDelay = delayAnim;
                    animationEl.classList.add(`${anim}`)
                }
                else {
                    animationEl.style.animationDelay = '';
                    animationEl.classList.remove(`${anim}`)
                }
            })
        })
        observer.observe(animationEl)
    }

    render() {
        return (
            <div className={this.props.className} ref={this.myRef}>
                {this.props.children}
            </div>
        )
    }
}

export default Animation;