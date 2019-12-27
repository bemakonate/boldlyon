import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './stylesheets/loginBuilder.css';
import * as userActions from '../../store/actions';
import { createInputConfig, checkValidity } from '../../../shared/redux/utility';
import Input from '../../../UI/Input/Input';
import Modal from '../../../UI/Modal/Modal';
import Spinner from '../../../UI/Spinner/Spinner';;

class LoginBuilder extends Component {
    state = {
        loginForm: {
            email: createInputConfig({
                placeholder: 'Email',
                rules: {
                    required: true,
                    isEmail: true,
                }
            }),
            password: createInputConfig({
                placeholder: 'Password',
                type: "password",
                rules: {
                    required: true,
                }
            })
        },
        formIsValid: false,
    }
    inputChangedHandler = async (value, inputIdentifier) => {
        const checkValueValidity = checkValidity(value,
            this.state.loginForm[inputIdentifier].validation,
            this.state.loginForm,
        )
        await this.setState({
            loginForm: {
                ...this.state.loginForm,
                [inputIdentifier]: {
                    ...this.state.loginForm[inputIdentifier],
                    value: value,
                    touched: true,
                    errorMsg: checkValueValidity.validErrorMsgs[0],
                    valid: checkValueValidity.isValid,
                }
            }
        })
        let formIsValid = true;
        for (let identifier in this.state.loginForm) {
            formIsValid = this.state.loginForm[identifier].valid && formIsValid;
        }
        this.setState({ formIsValid: formIsValid })
    }
    submitFormHandler = (event) => {
        event.preventDefault();
        const email = this.state.loginForm.email.value;
        const login = this.state.loginForm.password.value;
        this.props.onAuth(false, email, login, null)
    }

    componentWillUnmount() {
        this.props.history.push('/todos');
    }
    render() {
        const loginForm = { ...this.state.loginForm };
        const formElementsArray = [];

        for (let key in loginForm) {
            formElementsArray.push({
                id: key,
                config: loginForm[key],
            })
        }
        let form = (
            <form onSubmit={this.submitFormHandler}>
                {formElementsArray.map(formElement => {
                    return <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        touched={formElement.config.touched}
                        shouldValidate={formElement.config.validation}
                        changed={(event) => this.inputChangedHandler(event.target.value, formElement.id)}
                        errorMsg={formElement.config.errorMsg} />
                })}
                <button className={classes.SignupButton} disabled={!this.state.formIsValid}>Submit</button>
                <p className={classes.SwitchAuth} onClick={() => this.props.onShowAuthModal('signup')}>Switch to signup</p>
            </form>
        )
        if (this.props.loading) {
            form = <Spinner />;
        }
        return (
            <Modal
                show
                title="login"
                click={this.props.onCloseAuthModal}
                onlyModalClick
                modalStyles={classes.Modal}>
                {this.props.error && this.props.error.message ?
                    <p className={classes.ErrorMsg}>{this.props.error.message}</p> : null}
                {form}
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token != null,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onCloseAuthModal: () => dispatch(userActions.closeAuthModal()),
        onShowAuthModal: (authType) => dispatch(userActions.showAuthModal(authType)),
        onAuth: (isSignup, email, password, confirmPassword) => dispatch(userActions.auth(isSignup, email, password, confirmPassword))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginBuilder));