"use strict";

let React = require( 'react');
let {withRouter} = require( 'react-router');

let LoginForm = require( './loginForm');
let AuthAction = require( '../../actions/authAction');
let AuthStore = require( '../../stores/authStore');

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
        var field = event.target.name;
        var value = event.target.value;
        var localUser = Object.assign({}, this.state.user);
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
            var newErrors = {};
            newErrors.credentionals='Email or password was incorrect';
            this.setState({errors: newErrors});
        }
    }

    loginFormIsValid() {
        console.log("LoginPage => loginFormIsValid ");
        var formIsValid = true;
        var newErrors = {};

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

module.exports =  withRouter(LoginPage);