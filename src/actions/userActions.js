"use strict";

let AppDispatcher = require( '../dispatcher/AppDispatcher');

let UserApi = require('../api/userApi');
let ActionTypes = require( '../constants/actionTypes');

let UserAction = {
    createUser (user) {
        let newUser = UserApi.saveUser(user);

        //Dispatcher notifies all stores that user was created
        AppDispatcher.dispatch(ActionTypes.CREATE_USER,
            {
                user: newUser
            });
    },

    updateUser (user) {
        let updatedUser = UserApi.saveUser(user);

        AppDispatcher.dispatch(ActionTypes.UPDATE_USER,
            {
                user: updatedUser
            });
    },

    deleteUser (id) {
        UserApi.deleteUser(id);

        AppDispatcher.dispatch(ActionTypes.DELETE_USER,
            {
                id: id
            });
    }
};

module.exports = UserAction;