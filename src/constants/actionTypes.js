"use strict";

const INITIALIZE = "INITIALIZE";
const CREATE_USER = "CREATE_USER";
const UPDATE_USER = "UPDATE_USER";
const DELETE_USER = "DELETE_USER";

class ActionTypes {

    static get INITIALIZE() {
        return INITIALIZE;
    }
    static get CREATE_USER() {
        return CREATE_USER;
    }
    static get UPDATE_USER() {
        return UPDATE_USER;
    }
    static get DELETE_USER() {
        return DELETE_USER;
    }
}

module.exports = ActionTypes;