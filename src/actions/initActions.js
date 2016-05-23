"use strict";

import DispatcherInstance from '../dispatcher/AppDispatcher';
import UserApi from '../api/userApi';
import {default as ActionTypes} from '../constants/actionTypes';

export default function () {
    DispatcherInstance.dispatch(ActionTypes.INITIALIZE,
        {
            initialData: {
                users: UserApi.getAllUsers()
            }
        });
}
