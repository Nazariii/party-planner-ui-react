import BaseStore from './baseStore';
import {default as ActionTypes} from '../constants/actionTypes';

class AuthStore extends BaseStore {
    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this._user = null;
        this._error = null;
        this._isLoggedIn = false;
    }

    _registerToActions(action) {
        switch (action.type) {

            case ActionTypes.REQUEST_IS_USER_LOGGED_SUCCESS:
                if (action.status === 200) {
                    this._user = action.body;
                    this._isLoggedIn = true;
                } else {
                    this._isLoggedIn = false;
                }
                this._error = null;
                this.emitChange();
                break;

            case ActionTypes.REQUEST_IS_USER_LOGGED_ERROR:
                this._error = action.error;
                this.emitChange();
                break;

            case ActionTypes.REQUEST_LOGIN_USER_SUCCESS:
                this.emitChange();
                break;

            case ActionTypes.REQUEST_LOGIN_USER_ERROR:
                this._error = action.error;
                this.emitChange();
                break;

            default:
                break;
        }
    }

    get user() {
        return this._user;
    }

    get error() {
        return this._error;
    }

    isLoggedIn() {
        return this._isLoggedIn;
    }
}

export default new AuthStore();
