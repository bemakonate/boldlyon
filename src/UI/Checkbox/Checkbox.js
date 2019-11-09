import React from 'react';
import classes from './stylesheets/Checkbox.css';

const checkbox = props => (
    <label>
        <input
            className={classes.Checkbox}
            type='checkbox'
            onChange={props.changed}
            checked={props.checked} />
    </label>
);

export default checkbox;