import EventEmitter from 'events';

const CHANGE_EVENT = 'change';

 class BaseStore extends EventEmitter {

    constructor() {
        super();
        console.log("BaseStore => constructor");
    }
    
    /*subscribe(actionSubscribe) {
        console.log(`BaseStore => subscribe `,actionSubscribe);
        this._dispatchToken = Dispatcher.register(actionSubscribe);
    }

    get dispatchToken() {
        console.log("BaseStore => get dispatchToken");

        return this._dispatchToken;
    }*/

    emitChange() {
        console.log("BaseStore => emitChange");

        this.emit(CHANGE_EVENT);
    }

    addChangeListener(cb) {
        console.log("BaseStore => addChangeListener");

        this.on(CHANGE_EVENT, cb);
    }

    removeChangeListener(cb) {
        console.log("BaseStore => removeChangeListener");
        this.removeListener(CHANGE_EVENT, cb);
    }
}

BaseStore.dispatchToken = null;
export default BaseStore;