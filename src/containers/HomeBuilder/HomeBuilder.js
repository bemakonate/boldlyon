import React, { Component } from 'react';
import classes from './stylesheets/HomeBuilder.css';
import calendarSvg from '../../assets/calendar.svg';
import workoutSvg from '../../assets/workout.svg';
import booksSvg from '../../assets/books.svg';


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
                    {/* About Them */}
                    <section className={[classes.AboutVideo].join(' ')}>
                        <div className={classes.Container}>
                            <h2>This is us</h2>
                            <div className={classes.AboutContent}>
                                <div className={classes.IframeContainer}>
                                    <div className={classes.IframeBox}>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/b60xOKjrmPE" frameBorder="0" allowFullScreen title="videoFrame"></iframe>
                                    </div>
                                </div>
                                <div className={classes.VideoDescripContainer}>
                                    <p className={classes.VideoDescrip}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className={[classes.FeatureGroup].join(' ')}>
                        <div className={classes.FeatureContainer}>
                            {/* Staying Organized */}
                            <section className={classes.Organized}>
                                <h2>Stay <br /><span className={classes.Highlight}>Organized</span></h2>
                                <p className={classes.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis nunc sed augue lacus. Morbi enim nunc faucibus a pellentesque sit amet porttitor. </p>
                                <img className={classes.CalendarIcon} src={calendarSvg} alt='Calander' />
                            </section>

                            {/* Workout */}
                            <section className={classes.Workout}>
                                <h2>Train Like <br />a<span className={classes.Highlight}> Bold Lion</span></h2>
                                <p className={classes.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies lacus sed. Leo integer malesuada nunc vel risus commodo viverra maecenas.</p>
                                <img className={classes.WorkoutIcon} src={workoutSvg} alt="Dumbell" />
                            </section>

                            <section className={classes.Stories}>
                                <h2>Motivational <br /><span className={classes.Highlight}>Stories</span></h2>
                                <p className={classes.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies lacus sed. Leo integer malesuada nunc vel risus commodo viverra maecenas.</p>
                                <img className={classes.BooksIcon} src={booksSvg} alt="Books" />
                            </section>
                        </div>
                    </div>

                </main >

            </div >
        )
    }
}

export default HomeBuilder;