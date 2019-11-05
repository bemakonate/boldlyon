import React, { Component } from 'react';
import classes from './stylesheets/HomeBuilder.css'

class HomeBuilder extends Component {
    render() {
        return (
            <div className={classes.HomeBuilder}>
                <header className={classes.header}>
                    <div className={classes.HeaderContent}>
                        <h1>Bold Lyon</h1>
                        <button>Sign Up</button>
                    </div>
                </header>

                <main>
                    <section className={classes.AboutVideo}>
                        <h2>This is us</h2>

                        <div className={classes.IframeContainer}>
                            <div className={classes.IframeBox}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ndpxuf-uJHE" frameborder="0" allowfullscreen title="videoFrame"></iframe>
                            </div>
                        </div>
                    </section>
                </main >

            </div >
        )
    }
}

export default HomeBuilder;