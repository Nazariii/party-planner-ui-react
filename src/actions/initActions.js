"use strict";

let Dispatcher = require('../dispatcher/appDispatcher');
let UserApi = require('../api/userApi');
import {default as ActionTypes} from '../constants/actionTypes';

let InitActions = {
    initApp () {
        Dispatcher.dispatch(ActionTypes.INITIALIZE,
            {
                initialData: {
                    users: UserApi.getAllUsers()
                }
            });
    }

};

module.exports = InitActions;