import React, { Component } from 'react';
import classes from './stylesheets/HomeBuilder.css'

class HomeBuilder extends Component {
    render() {
        return (
            <div className={classes.HomeBuilder}>
                <h1>This is the homepage</h1>
                <p>I want to see more</p>
            </div>
        )
    }
}

export default HomeBuilder;