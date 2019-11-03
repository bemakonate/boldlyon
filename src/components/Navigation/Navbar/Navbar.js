import React from 'react';
import classes from './stylesheets/Navbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const navbar = props => (
    <nav className={classes.Navbar}>
        <NavigationItems brandStyles={classes.NavbarBrand} />
    </nav>
)
export default navbar;