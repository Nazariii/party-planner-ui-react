"use strict";

import Dispatcher from '../dispatcher/appDispatcher';
import {default as ActionTypes} from '../constants/actionTypes';
import AuthService from '../services/authService.jsx';

export default {

    loginUser(username, password) {
        console.log('authAction => loginUser');
        let promise = AuthService.loginUser(username, password);
        Dispatcher.dispatchAsync(promise, {
            request: ActionTypes.REQUEST_LOGIN_USER,
            success: ActionTypes.REQUEST_LOGIN_USER_SUCCESS,
            failure: ActionTypes.REQUEST_LOGIN_USER_ERROR
        }, {username});
    },

    isUserLoggedIn() {
        let promise = AuthService.isLogedIn();
        Dispatcher.dispatchAsync(promise, {
            request: ActionTypes.REQUEST_IS_USER_LOGGED,
            success: ActionTypes.REQUEST_IS_USER_LOGGED_SUCCESS,
            failure: ActionTypes.REQUEST_IS_USER_LOGGED_ERROR
        });
    }
};

