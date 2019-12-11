import React from 'react';
import classes from './stylesheets/Input.css';

const input = props => {
    let inputElement = null;
    let validationError = null;
    let inputClasses = [classes.Input]
    if (props.touched && props.invalid && props.shouldValidate) {
        inputClasses.push(classes.Invalid)
        validationError = <p className={classes.ValidationError}>{props.errorMsg}</p>
    }

    const baseInput = <input className={inputClasses.join(' ')} value={props.value} {...props.elementConfig} onChange={props.changed} />;
    switch (props.elementType) {
        case ("input"):
            inputElement = baseInput;
            break;
        case ('textarea'):
            inputElement = <textarea {...props} onChange={props.changed} />;
            break;
        default:
            inputElement = baseInput;

    }

    return (
        <div className={classes.InputField}>
            <div className={classes.InputGroup}>
                {inputElement}
                <label>{props.elementConfig.placeholder}</label>
            </div>
            {validationError}
        </div>

    )
}

export default input;