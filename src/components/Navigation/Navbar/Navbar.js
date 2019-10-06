import React from 'react';
import classes from './stylesheets/Navbar.css';

const navbar = props => (
    <nav className={classes.Navbar}>
        <ul>
            <li><a href='/' className={classes.NavbarBrand}>Todo List App</a></li>
            <li><a href='/'>Home</a></li>
        </ul>
    </nav>
)
export default navbar;