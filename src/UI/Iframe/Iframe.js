import React from 'react';
import classes from './stylesheets/Iframe.css'

const iframe = props => (
    <div className={classes.IframeContainer}>
        <div className={classes.IframeBox}>
            <iframe width="560" height="315" src={props.src} frameBorder="0" allowFullScreen title="videoFrame" sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"></iframe>
        </div>
    </div>
)

export default iframe;