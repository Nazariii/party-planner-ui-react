"use strict";

let DispatcherInstance = require('../dispatcher/AppDispatcher');
let UserApi = require('../api/userApi');
import {default as ActionTypes} from '../constants/actionTypes';

module.exports = function () {
    DispatcherInstance.dispatch(ActionTypes.INITIALIZE,
        {
            initialData: {
                users: UserApi.getAllUsers()
            }
        });
};
