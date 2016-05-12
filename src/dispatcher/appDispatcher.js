"use strict";

let FluxDispatcher = require('flux').Dispatcher;
let flux = new FluxDispatcher();
"use strict";

let Dispatcher = {

    dispatch(type, action = {}) {
        if (!type) {
            throw new Error('You forgot to specify type.');
        }
        console.log('**', type, action);

        flux.dispatch({actionType: type, ...action});
    },

    register(callback) {
        return flux.register(callback);
    },

    dispatchAsync(promise, types, action = {}) {
        const {request, success, failure} = types;

        this.dispatch(request, action);
        //NB: unable to use Promise.catch() syntax here
        promise.then(
            //dispatches the action for the async-promise-resolved
            //with a hash of the async-promise params and the response body
            (body) => this.dispatch(success, {...action, body}),
            (error) => this.dispatch(failure, {...action, error})
        );
    }
};
export default Dispatcher;