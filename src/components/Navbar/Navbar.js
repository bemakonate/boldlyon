import React from 'react';
import classes from './stylesheets/Navbar.css'

const navbar = props => {
    const menuIconClasses = ["material-icons", classes.Menu].join(' ');
    return (
        <nav className={classes.Navbar}>
            <i className={menuIconClasses}>menu</i>
        </nav>
    );
}
export default navbar;