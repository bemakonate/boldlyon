import React from 'react';
import classes from './stylesheets/Feature.css';

const feature = props => {
    let paragraphClasses = [];
    let iconClasses = [classes.Icon, props.iconClass];
    let headerClasses = [];

    const contentLeftAlign = () => {
        paragraphClasses.push(classes.TextLeft);
        iconClasses.push(classes.FloatLeft);
        headerClasses.push(classes.TextAlignRight);
    }
    switch (props.contentAlign) {
        case 'left':
            contentLeftAlign();
            break;
        case 'right':
            paragraphClasses.push(classes.TextRight);
            iconClasses.push(classes.FloatRight)
            headerClasses.push(classes.TextAlignLeft);
            break;
        default:
            contentLeftAlign();
    }

    return (
        <section className={[props.sectionClass, classes.Feature].join(' ')}>
            <h2 className={headerClasses.join(' ')}>{props.header}</h2>
            <p className={paragraphClasses.join(' ')}>{props.featureText}</p>
            <img className={iconClasses.join(' ')} src={props.imgSrc} alt="Icon" />
        </section>
    )
}

export default feature;