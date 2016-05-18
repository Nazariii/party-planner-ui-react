"use strict";

import React from 'react';

import LoginAction from '../actions/authAction';
import AuthStore from '../stores/authStore';


LoginAction.isUserLoggedIn();
console.log('*********' + AuthStore.isLoggedIn());

class LoginRequired extends React.Component {

/*    constructor() {
        this.state = {
            isLoggedIn: AuthStore.isLoggedIn()
        }
    }*/
}

LoginRequired.propTypes = {};

export default LoginAction;

/*if (!AuthStore.isLoggedIn()) {
 LoginAction.loginUser("naz","1234");
 }*/


