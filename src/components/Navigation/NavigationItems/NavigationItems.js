import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = props => (
    <ul onClick={props.click} className={props.containerStyles}>
        <NavigationItem link='/' styles={props.brandStyles}>Todo List App</NavigationItem>
        <NavigationItem link='/' styles={props.linkStyles}>Home</NavigationItem>
    </ul>
);

export default navigationItems;