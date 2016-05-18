"use strict";

let DispatcherInstance = require('../dispatcher/appDispatcher');
let UserApi = require('../api/userApi');
let ActionTypes = require( '../constants/actionTypes');

module.exports = function () {
    DispatcherInstance.dispatch(ActionTypes.INITIALIZE,
        {
            initialData: {
                users: UserApi.getAllUsers()
            }
        });
};
