"use strict";

import Dispatcher from '../dispatcher/appDispatcher';
import {default as ActionTypes} from '../constants/actionTypes';
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _users = [];

var UserStore = assign({}, EventEmitter.prototype, {
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

Dispatcher.register(function (action) {
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
            var existingUser = _.find(_users, {id: action.user.id});
            var existingUserIndex = _.indexOf(_users, existingUser);
            _users.splice(existingUserIndex, 1, action.user);
            UserStore.emitChange();
            break;
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

module.exports = UserStore;