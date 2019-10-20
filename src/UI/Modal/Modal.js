import React, { Fragment } from 'react';
import classes from './stylesheets/Modal.css'
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
    let modalClasses = [classes.Modal]
    let closeClasses = ["material-icons", classes.Close]
    if (props.show) {
        modalClasses.push(classes.ShowModal)
    }
    return (
        <Fragment>
            <Backdrop show={props.show} click={props.click} styles={classes.Backdrop}>
                <div className={modalClasses.join(' ')}>
                    <i onClick={props.click} className={closeClasses.join(' ')}>close</i>
                    <div className={classes.ModalHeader}>
                        <h3>The Header</h3>
                    </div>
                    {props.children}
                </div>
            </Backdrop>
        </Fragment>
    )
}

export default modal;