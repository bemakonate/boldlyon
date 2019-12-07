import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = props => (
    <ul onClick={props.click} className={props.containerStyles}>
        <NavigationItem
            exact
            link='/'
            styles={[props.linkStyles, props.brandStyles].join(' ')}
            activeClass={props.activeClass}>Home</NavigationItem>
        <NavigationItem
            link='/todos'
            styles={props.linkStyles}
            activeClass={props.activeClass}>Todo List</NavigationItem>
    </ul>
);

export default navigationItems;