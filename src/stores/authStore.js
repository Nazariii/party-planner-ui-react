import log from 'loglevel';
import BaseStore from './baseStore';
import {default as ActionTypes} from '../constants/actionTypes';
import AppDispatcher  from '../dispatcher/AppDispatcher';


class AuthStore extends BaseStore {
    constructor() {
        super();
        //this.subscribe(() => this._registerToActions.bind(this));
        //this.subscribe(this._registerToActions.bind(this));
        this._user = null;
        this._error = null;
        this._isLoggedIn = false;
    }

    get user() {
        return this._user;
    }

    get error() {
        return this._error;
    }

    isLoggedIn() {
        log.trace("AuthStore => isLoggedIn", this._isLoggedIn);
        return this._isLoggedIn;
    }

    getLoggedUser(){
        log.trace("AuthStore => getLoggedUser", this._user);
        return this._user;
    }
}

let authStoreInstance = new AuthStore();

authStoreInstance.dispatchToken = AppDispatcher.register((action) => {
    log.trace(`AuthStore dispatches `, action);
    switch (action.actionType) {
        case ActionTypes.REQUEST_IS_USER_LOGGED_SUCCESS:
        case ActionTypes.REQUEST_LOGIN_USER_SUCCESS:
            if (action.status === 200) {
                log.trace("AuthStore => REQUEST_LOGIN_USER_SUCCESS");
                authStoreInstance._user = action.body;
                authStoreInstance._isLoggedIn = true;
            } else {
                authStoreInstance._isLoggedIn = false;
            }
            authStoreInstance._error = null;
            authStoreInstance.emitChange();
            break;

        case ActionTypes.REQUEST_IS_USER_LOGGED_ERROR:
            authStoreInstance._error = action.error;
            authStoreInstance.emitChange();
            break;

        /*case ActionTypes.REQUEST_LOGIN_USER_SUCCESS:
         this._user = action.body;
         this._isLoggedIn = true;
         this.emitChange();
         break;*/

        case ActionTypes.REQUEST_LOGIN_USER_ERROR:
            authStoreInstance._error = action.error;
            authStoreInstance.emitChange();
            break;

        default:
            break;
    }
});

export default authStoreInstance;
