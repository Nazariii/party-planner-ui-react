"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var UserApi = require('../api/userApi');
var ActionTypes = require('../constants/actionTypes');

var UserAction = {
    createUser: function (user) {
        var newUser = UserApi.saveUser(user);

        //Dispatcher notifies all stores that user was created
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_USER,
            user: newUser
        });
    },
    
    updateUser: function (user) {
        var updatedUser = UserApi.saveUser(user);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_USER,
            user: updatedUser
        });
    }
};

module.exports = UserAction;