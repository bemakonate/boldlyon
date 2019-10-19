import React from 'react';
import classes from './stylesheets/Backdrop.css';
const backdrop = props => {
    let backdrop = null;
    if (props.show) {
        backdrop = <div onClick={props.click} className={classes.Backdrop}>
        </div>
    }
    return backdrop;

}
export default backdrop;