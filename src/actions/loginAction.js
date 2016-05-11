"use strict";

import Dispatcher from '../dispatcher/appDispatcher';
import {default as ActionTypes} from '../constants/actionTypes';
import AuthService from '../services/authService.jsx';

export default {

    loginUser(username, password) {
        let promise = AuthService.loginUser(username, password);
        Dispatcher.dispatchAsync(promise, ActionTypes.LOGIN_USER, {
            request: ActionTypes.REQUEST_LOGIN_USER,
            success: ActionTypes.REQUEST_LOGIN_USER_SUCCESS,
            failure: ActionTypes.REQUEST_LOGIN_USER_ERROR
        }, {username});
    }
};

