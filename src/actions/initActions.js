"use strict";

let Dispatcher = require('../dispatcher/appDispatcher');
let UserApi = require('../api/userApi');
let ActionTypes = require('../constants/actionTypes');

let InitActions = {
    initApp () {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                users: UserApi.getAllUsers()
            }
        });
    }
};

module.exports = InitActions;