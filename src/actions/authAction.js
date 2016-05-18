"use strict";

let AppDispatcher = require( '../dispatcher/appDispatcher');
let ActionTypes = require( '../constants/actionTypes');
let AuthService = require( '../services/authService');

module.exports =  {

    loginUser(username, password) {
        console.log('authAction => loginUser');
        let promise = AuthService.loginUser(username, password);
        AppDispatcher.dispatchAsync(promise, {
            request: ActionTypes.REQUEST_LOGIN_USER,
            success: ActionTypes.REQUEST_LOGIN_USER_SUCCESS,
            failure: ActionTypes.REQUEST_LOGIN_USER_ERROR
        }, {username});
    },

    isUserLoggedIn() {
        console.log('authAction => isUserLoggedIn');
        let promise = AuthService.isLogedIn();
        AppDispatcher.dispatchAsync(promise, {
            request: ActionTypes.REQUEST_IS_USER_LOGGED,
            success: ActionTypes.REQUEST_IS_USER_LOGGED_SUCCESS,
            failure: ActionTypes.REQUEST_IS_USER_LOGGED_ERROR
        });
    }
};
