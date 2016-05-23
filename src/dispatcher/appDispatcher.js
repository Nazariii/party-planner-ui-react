"use strict";

let Dispatcher = require('flux').Dispatcher;
let flux = new Dispatcher();
import log from 'loglevel';

let AppDispatcher = {


    dispatch(type, action = {}) {
        if (!type) {
            throw new Error('You forgot to specify type.');
        }
        log.info('Dispatcher => dispatch', type, action);

        flux.dispatch(Object.assign({actionType: type}, action) /*{actionType: type, ...action}*/);
    },

    register(callback) {
        log.trace('Dispatcher => register', callback);
        return flux.register(callback);
    },

    dispatchAsync(promise, types, action = {}) {
        const {request, success, failure} = types;
        log.trace('Dispatcher => dispatchAsync');

        this.dispatch(request, action);
        //NB: unable to use Promise.catch() syntax here
        promise.then(
            //dispatches the action for the async-promise-resolved
            //with a hash of the async-promise params and the response body
            (body) => this.dispatch(success, Object.assign({}, action, body)/*{...action, body}*/),
            (error) => this.dispatch(failure, Object.assign({}, action, error) /*{...action, error}*/)
        );
    }
};

//let DispatcherInstance = new AppDispatcher();

export default AppDispatcher;
