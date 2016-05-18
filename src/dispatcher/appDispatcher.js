"use strict";

let Dispatcher = require('flux').Dispatcher;
let flux = new Dispatcher();
//const flux = new Dispatcher();

let AppDispatcher = {


    dispatch(type, action = {}) {
        if (!type) {
            throw new Error('You forgot to specify type.');
        }
        console.log('Dispatcher => dispatch', type, action);

        flux.dispatch(Object.assign({actionType: type}, action) /*{actionType: type, ...action}*/);
    },

    register(callback) {
        console.log('Dispatcher => register', callback);
        return flux.register(callback);
    },

    dispatchAsync(promise, types, action = {}) {
        const {request, success, failure} = types;
        console.log('Dispatcher => dispatchAsync');

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

module.exports = AppDispatcher;
