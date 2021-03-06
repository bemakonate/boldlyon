import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './stylesheets/homeBuilder.css';
import * as userActions from '../../../user/store/actions';
import calendarSvg from '../../assets/calendar.svg';
import workoutSvg from '../../assets/workout.svg';
import booksSvg from '../../assets/books.svg';
import Feature from '../../components/Feature/Feature';
import Iframe from '../../../UI/Iframe/Iframe';
import Animation from '../../../UI/Animation/Animation';

class HomeBuilder extends Component {
    render() {
        return (
            <div className={classes.HomeBuilder}>
                <header className={classes.header}>
                    <div className={classes.HeaderContent}>
                        <h1>Bold Lyon</h1>
                        {!this.props.isAuth ?
                            <button onClick={() => this.props.onShowAuthModal('signup')}>Sign Up</button> : null}
                    </div>
                </header>

                <main>
                    {/* About Them */}
                    <section className={classes.AboutVideo}>
                        <div className={classes.Container}>
                            <h2>This is us</h2>
                            <div className={classes.AboutContent}>
                                <Iframe src="https://www.youtube.com/embed/v52Xt7ODNSY" />
                                <div className={classes.VideoDescripContainer}>
                                    <Animation type='slideLeft'>
                                        <p className={classes.VideoDescrip}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                                    </Animation>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className={[classes.FeatureGroup].join(' ')}>
                        <div className={classes.FeatureContainer}>
                            {/* Staying Organized */}
                            <Feature
                                sectionClass={classes.Organized}
                                imgSrc={calendarSvg}
                                contentAlign='left'
                                featureText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis nunc sed augue lacus. Morbi enim nunc faucibus a pellentesque sit amet porttitor. '
                                header={
                                    <React.Fragment>
                                        Stay <br /><span className={classes.Highlight}>Organized</span>
                                    </React.Fragment>
                                }
                                anim={{ delay: '.5s', type: 'slideUp' }} />

                            <Feature
                                sectionClass={classes.Workout}
                                imgSrc={workoutSvg}
                                iconClass={classes.WorkoutIcon}
                                featureText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies lacus sed. Leo integer malesuada nunc vel risus commodo viverra maecenas'
                                header={
                                    <React.Fragment>
                                        Train Like <br />a <span className={classes.Highlight}>Bold Lion</span>
                                    </React.Fragment>
                                }
                                anim={{ delay: '1s', type: 'slideUp' }} />

                            <Feature
                                sectionClass={classes.Stories}
                                imgSrc={booksSvg}
                                contentAlign='left'
                                featureText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies lacus sed. Leo integer malesuada nunc vel risus commodo viverra maecenas.'
                                header={
                                    <React.Fragment>
                                        Motivational <br /><span className={classes.Highlight}>Stories</span>
                                    </React.Fragment>
                                }
                                anim={{ type: 'slideUp' }} />

                        </div>
                    </div>
                </main >
            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onShowAuthModal: (authType) => dispatch(userActions.showAuthModal(authType))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeBuilder);