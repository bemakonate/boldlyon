import React from 'react';
import classes from './stylesheets/todoMsg.css';

const closeIconClasses = ["material-icons", classes.CloseIcon].join(' ');

const todoMsg = props => {
    let todoMsgClasses = [classes.TodoMsg, props.styles]
    return (
        <div className={todoMsgClasses.join(' ')}>
            <p>{props.message} </p>
            <i onClick={props.close} className={closeIconClasses}>close</i>
        </div>
    )
}
export default todoMsg