"use strict";

import React from 'react';
import {withRouter} from 'react-router';

import LoginForm from './loginForm';
import AuthAction from '../../actions/authAction';
import AuthStore from '../../stores/authStore';

class LoginPage extends React.Component {
    constructor() {
        super();
        this.setLoginState = this.setLoginState.bind(this);
        this.login = this.login.bind(this);
        this._onLogin = this._onLogin.bind(this);
        this.state = {
            user: {email: "", password: ""},
            errors: {},
            dirty: false
        };
    }

    componentWillMount() {
        AuthStore.addChangeListener(this._onLogin);
    }

    componentWillUnmount() {
        AuthStore.removeChangeListener(this._onLogin);
    }


    setLoginState(event) {
        this.setState({dirty: true});
        let field = event.target.name;
        let value = event.target.value;
        let localUser = Object.assign({}, this.state.user);
        localUser[field] = value;
        return this.setState({user: localUser});
    }

    /**
     *
     * @private
     */
    //todo error toastr
    _onLogin() {
        console.log("LoginPage => _onLogin ");
        if (AuthStore.isLoggedIn()) {
            console.log("is logged");
            this.props.router.push("/");
        } else {
            let newErrors = {};
            newErrors.credentionals='Email or password was incorrect';
            this.setState({errors: newErrors});
        }
    }

    loginFormIsValid() {
        console.log("LoginPage => loginFormIsValid ");
        let formIsValid = true;
        let newErrors = {};

        if (this.state.user.email.length < 2) {
            newErrors.email = 'Email must be at least 2 characters';
            formIsValid = false;
        }
        if (this.state.user.password.length < 2) {
            newErrors.password = 'Password name must be at least 4 characters';
            formIsValid = false;
        }

        this.setState({errors: newErrors});
        return formIsValid;
    }

    login(event) {
        event.preventDefault();
        console.log("LoginPage => login ");
        if (!this.loginFormIsValid()) {
            return;
        }
        this.setState({dirty: false}, function () {
            AuthAction.loginUser(this.state.user.email, this.state.user.password);
        });
    }

    render() {
        return <LoginForm
            user={this.state.user}
            onChange={this.setLoginState}
            onSubmit={this.login}
            errors={this.state.errors}
        />;
    }
}

LoginPage.propTypes = {
    router: React.PropTypes.object.isRequired
};

export default withRouter(LoginPage);