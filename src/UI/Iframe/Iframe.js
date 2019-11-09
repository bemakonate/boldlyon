import React from 'react';
import classes from './stylesheets/Iframe.css'

const iframe = props => (
    <div className={classes.IframeContainer}>
        <div className={classes.IframeBox}>
            <iframe width="560" height="315" src={props.src} frameBorder="0" allowFullScreen title="videoFrame"></iframe>
        </div>
    </div>
)

export default iframe;