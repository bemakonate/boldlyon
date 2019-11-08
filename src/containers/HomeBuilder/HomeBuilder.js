import React, { Component } from 'react';
import classes from './stylesheets/HomeBuilder.css';
import calendarSvg from '../../assets/calendar.svg';
import workoutSvg from '../../assets/workout.svg';
import booksSvg from '../../assets/books.svg';
import Feature from '../../components/Feature/Feature';
import sal from 'sal.js'

class HomeBuilder extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "./node_modules/sal.js/dist/sal.js";
        document.body.appendChild(script);
        script.async = true;
        sal();
    }
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
                    {/* About Them */}
                    <section className={[classes.AboutVideo].join(' ')}>
                        <div className={classes.Container} id="section">
                            <h2>This is us</h2>
                            <div className={classes.AboutContent}>
                                <div className={classes.IframeContainer}>
                                    <div className={classes.IframeBox}>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/b60xOKjrmPE" frameBorder="0" allowFullScreen title="videoFrame"></iframe>
                                    </div>
                                </div>
                                <div className={classes.VideoDescripContainer}>
                                    <p className={classes.VideoDescrip} data-sal="slide-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div data-sal="slide-down" className={[classes.FeatureGroup].join(' ')}>
                        <div className={classes.FeatureContainer}>
                            {/* Staying Organized */}
                            <Feature
                                sectionClass={classes.Organized}
                                imgSrc={calendarSvg}
                                contentAlign='right'
                                header={
                                    <React.Fragment>
                                        Stay <br /><span className={classes.Highlight}>Organized</span>
                                    </React.Fragment>
                                }
                                featureText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis nunc sed augue lacus. Morbi enim nunc faucibus a pellentesque sit amet porttitor. ' />

                            {/* Workout */}
                            <Feature
                                sectionClass={classes.Workout}
                                imgSrc={workoutSvg}
                                iconClass={classes.WorkoutIcon}
                                header={
                                    <React.Fragment>
                                        Train Like <br />a <span className={classes.Highlight}>Bold Lion</span>
                                    </React.Fragment>
                                }
                                featureText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies lacus sed. Leo integer malesuada nunc vel risus commodo viverra maecenas' />


                            {/* Stories */}
                            <Feature
                                sectionClass={classes.Stories}
                                imgSrc={booksSvg}
                                contentAlign='right'
                                header={
                                    <React.Fragment>
                                        Motivational <br /><span className={classes.Highlight}>Stories</span>
                                    </React.Fragment>
                                }
                                featureText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies lacus sed. Leo integer malesuada nunc vel risus commodo viverra maecenas.' />
                        </div>
                    </div>

                </main >
            </div >
        )
    }
}

export default HomeBuilder;