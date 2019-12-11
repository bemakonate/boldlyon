import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../../../UI/Modal/Modal';
import * as userActions from '../../store/actions';
import classes from './stylesheets/signupBuilder.css';
import Input from '../../../UI/Input/Input';
import { createInputConfig, checkValidity } from '../../../shared/redux/utility';

class SignupBuilder extends Component {
    state = {
        signupForm: {
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
                    strongPassword: true,
                }
            }),
            confirmPassword: createInputConfig({
                placeholder: 'Confirm Password',
                type: "password",
                rules: {
                    required: true,
                    match: 'password',
                }
            })
        },
        formIsValid: false,
    }
    runInputChangedHandler = (inputIdentifier) => {
        return this.inputChangedHandler(this.state.signupForm[inputIdentifier].value, inputIdentifier)
    }
    submitFormHandler = (event) => {
        event.preventDefault();
    }
    async inputChangedHandler(value, inputIdentifier) {
        const checkValueValidity = checkValidity(value,
            this.state.signupForm[inputIdentifier].validation,
            this.state.signupForm,
        )

        await this.setState({
            signupForm: {
                ...this.state.signupForm,
                [inputIdentifier]: {
                    ...this.state.signupForm[inputIdentifier],
                    value: value,
                    touched: true,
                    errorMsg: checkValueValidity.validErrorMsgs[0],
                    valid: checkValueValidity.isValid,
                }
            }
        })
        let formIsValid = true;
        for (let identifier in this.state.signupForm) {
            formIsValid = this.state.signupForm[identifier].valid && formIsValid;
        }
        this.setState({ formIsValid: formIsValid })
        if (inputIdentifier === 'password' && this.state.signupForm.confirmPassword.touched) {
            this.runInputChangedHandler('confirmPassword')
        }
    }
    render() {
        const signupForm = { ...this.state.signupForm };
        const formElementsArray = [];

        for (let key in signupForm) {
            formElementsArray.push({
                id: key,
                config: signupForm[key],
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
                <p className={classes.SwitchAuth} onClick={() => this.props.onShowAuthModal('login')}>Switch to login</p>
            </form>
        )
        return (
            <Modal
                show
                title="signup"
                click={this.props.onCloseAuthModal}
                onlyModalClick
                modalStyles={classes.Modal}>
                {form}
            </Modal>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        onCloseAuthModal: () => dispatch(userActions.closeAuthModal()),
        onShowAuthModal: (authType) => dispatch(userActions.showAuthModal(authType)),
    }
}
export default connect(null, mapDispatchToProps)(SignupBuilder);