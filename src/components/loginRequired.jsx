"use strict";

let React = require( 'react');

let LoginAction = require( '../actions/authAction');
let AuthStore = require( '../stores/authStore');


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

module.exports =  LoginAction;

/*if (!AuthStore.isLoggedIn()) {
 LoginAction.loginUser("naz","1234");
 }*/


