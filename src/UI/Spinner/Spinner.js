import React from 'react';
import classes from './stylesheets/Spinner.css';
import Backdrop from '../Backdrop/Backdrop';
const spinner = () => (
    <Backdrop show styles={classes.Backdrop}>
        <div className={classes.Loader}></div>
    </Backdrop>
)
export default spinner;