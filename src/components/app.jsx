/*eslint-disable strict */ //Disable check because we can't run strict mode. Need global vars

import React from 'react';
import $ from 'jquery';
import jQuery from 'jquery';

import Header from './common/header';
import LoginAction from '../actions/authAction';
import AuthStore from '../stores/authStore';

// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

class App extends React.Component {
    constructor() {
        super();
        console.log("App constructor");
        this._updateAuth = this._updateAuth.bind(this);
        this.state = {
            isLoggedIn: this.setAuth()
        };
    }

    componentWillMount() {
        AuthStore.addChangeListener(this._updateAuth);
    }

    componentWillUnmount() {
        AuthStore.removeChangeListener(this._updateAuth);
    }

    setAuth() {
        let loggedIn = AuthStore.isLoggedIn();
        if (!loggedIn) {
            LoginAction.isUserLoggedIn();
        }
        return loggedIn;
    }

    //todo simplify
    _updateAuth(loggedIn) {
        console.log(`App => _updateAuth ${loggedIn}`);

        this.setState({
            isLoggedIn: loggedIn
        });
    }

    render() {
        return (
            <div>
                <Header loggedIn={this.state.isLoggedIn}/>
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.element
};

export default App;