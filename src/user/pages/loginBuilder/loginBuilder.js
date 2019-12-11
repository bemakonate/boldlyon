import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../store/actions';
import { createInputConfig, checkValidity } from '../../../shared/redux/utility';
import Input from '../../../UI/Input/Input';
import classes from './stylesheets/loginBuilder.css';
import Modal from '../../../UI/Modal/Modal';

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
    }
    render() {
        const showModal = this.props.currentModal === 'login';
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
        return (
            <Modal
                show={showModal}
                title="login"
                click={this.props.onCloseAuthModal}
                onlyModalClick
                modalStyles={classes.Modal}>
                {form}
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentModal: state.auth.currentModal,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onCloseAuthModal: () => dispatch(userActions.closeAuthModal()),
        onShowAuthModal: (authType) => dispatch(userActions.showAuthModal(authType)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginBuilder);