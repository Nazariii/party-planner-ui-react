"use strict";

import EventEmitter from 'events';
import _ from 'lodash';

import AppDispatcher  from '../dispatcher/AppDispatcher';
import {default as ActionTypes} from '../constants/actionTypes';

let CHANGE_EVENT = 'change';
let _users = [];

let UserStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getAllUsers: function () {
        return _users;
    },

    getUserById: function (id) {
        return _.find(_users, {id: id});
    }
});

AppDispatcher.register((action) => {
    console.log(`UserStore Dispatches ${action.actionType}`);
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            _users = action.initialData.users;
            UserStore.emitChange();
            break;

        case ActionTypes.CREATE_USER:
            _users.push(action.user);
            UserStore.emitChange();
            break;

        case ActionTypes.UPDATE_USER:
        {
            let existingUser = _.find(_users, {id: action.user.id});
            let existingUserIndex = _.indexOf(_users, existingUser);
            _users.splice(existingUserIndex, 1, action.user);
            UserStore.emitChange();
            break;
        }
        case ActionTypes.DELETE_USER:
            _.remove(_users, function (user) {
                return action.id === user.id;
            });
            UserStore.emitChange();
            break;

        default:
        //no op
    }
});

export default UserStore;