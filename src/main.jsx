"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';

import routes from './route';
import InitAction from './actions/initActions';

InitAction();

ReactDOM.render(<Router history={hashHistory} routes={routes}/>, document.getElementById("app"));

/*
 Router.run(routes, /!*Router.HistoryLocation,*!/ function (Handler) {

 ReactDOM.render(<Handler/>, document.getElementById("app"));

 });*/
