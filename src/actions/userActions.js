"use strict";

let Dispatcher = require('../dispatcher/appDispatcher');
let UserApi = require('../api/userApi');
import {default as ActionTypes} from '../constants/actionTypes';

let UserAction = {
    createUser (user) {
        let newUser = UserApi.saveUser(user);

        //Dispatcher notifies all stores that user was created
        Dispatcher.dispatch(ActionTypes.CREATE_USER,
            {
                user: newUser
            });
    },

    updateUser (user) {
        let updatedUser = UserApi.saveUser(user);

        Dispatcher.dispatch(ActionTypes.UPDATE_USER,
            {
                user: updatedUser
            });
    },

    deleteUser (id) {
        UserApi.deleteUser(id);

        Dispatcher.dispatch(ActionTypes.DELETE_USER,
            {
                id: id
            });
    }
};

module.exports = UserAction;