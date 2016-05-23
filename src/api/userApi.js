"use strict";

//This file is mocking a web API by hitting hard coded data.
import users from './userData';
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function (user) {
    return user.firstName.toLowerCase() + '-' + user.lastName.toLowerCase();
};

let _clone = function (item) {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

let UserApi = {
    getAllUsers: function () {
        return _clone(users);
    },

    getUserById: function (id) {
        let user = _.find(users, {id: id});
        return _clone(user);
    },

    saveUser: function (user) {
        //pretend an ajax call to web api is made here
        console.log('Pretend this just saved the user to the DB via AJAX call...');

        if (user.id) {
            let existingUserIndex = _.indexOf(users, _.find(users, {id: user.id}));
            users.splice(existingUserIndex, 1, user);
        } else {
            //Just simulating creation here.
            //The server would generate ids for new users in a real app.
            //Cloning so copy returned is passed by value rather than by reference.
            user.id = _generateId(user);
            users.push(user);
        }

        return _clone(user);
    },

    deleteUser: function (id) {
        console.log('Pretend this just deleted the user from the DB via an AJAX call...');
        _.remove(users, {id: id});
    }
};

export default UserApi;