import EventEmitter from 'events';
import log from 'loglevel';

const CHANGE_EVENT = 'change';

class BaseStore extends EventEmitter {

    constructor() {
        super();
        log.trace("BaseStore => constructor");
    }

    /*subscribe(actionSubscribe) {
     log.trace(`BaseStore => subscribe `,actionSubscribe);
     this._dispatchToken = Dispatcher.register(actionSubscribe);
     }

     get dispatchToken() {
     log.trace("BaseStore => get dispatchToken");

     return this._dispatchToken;
     }*/

    emitChange() {
        log.trace("BaseStore => emitChange");

        this.emit(CHANGE_EVENT);
    }

    addChangeListener(cb) {
        log.trace("BaseStore => addChangeListener");

        this.on(CHANGE_EVENT, cb);
    }

    removeChangeListener(cb) {
        log.trace("BaseStore => removeChangeListener");
        this.removeListener(CHANGE_EVENT, cb);
    }
}

BaseStore.dispatchToken = null;
export default BaseStore;