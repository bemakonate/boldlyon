import React from 'react';

const navigationItem = props => (
    <li><a href={props.link} className={props.styles}>{props.children}</a></li>
)

export default navigationItem;