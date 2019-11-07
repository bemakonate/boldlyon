import React from 'react';
const feature = props => (
    <section className={props.sectionClass}>
        {props.header}
        <p>{props.children}</p>
        <img src={props.imgSrc} alt="Icon" />
    </section>
)

export default feature;