import React from 'react';
import classes from './stylesheets/Feature.css';
import Animation from '../../../UI/Animation/Animation';

const feature = props => {
    let paragraphClasses = [];
    let iconClasses = [classes.Icon, props.iconClass];
    let headerClasses = [];

    const headerRightAlign = () => {
        paragraphClasses.push(classes.TextLeft);
        iconClasses.push(classes.FloatLeft);
        headerClasses.push(classes.TextAlignRight);
    }
    switch (props.contentAlign) {
        case 'right':
            headerRightAlign();
            break;
        case 'left':
            paragraphClasses.push(classes.TextRight);
            iconClasses.push(classes.FloatRight)
            headerClasses.push(classes.TextAlignLeft);
            break;
        default:
            headerRightAlign();
    }
    const animProps = { ...props.anim };
    return (
        <section className={[props.sectionClass, classes.Feature].join(' ')}>
            <Animation className={animProps.class} delay={animProps.delay} type={animProps.type}>
                <h2 className={headerClasses.join(' ')}>{props.header}</h2>
                <p className={paragraphClasses.join(' ')}>{props.featureText}</p>
                <img className={iconClasses.join(' ')} src={props.imgSrc} alt="Icon" />
            </Animation>
        </section >
    )
}

export default feature;