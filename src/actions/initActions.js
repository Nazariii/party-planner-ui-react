"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var UserApi = require('../api/userApi');
var ActionTypes = require('../constants/actionTypes');

var InitActions = {
    initApp: function () {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                users: UserApi.getAllUsers()
            }
        });
    }
};
module.exports = InitActions;