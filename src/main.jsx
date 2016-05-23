"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory} from 'react-router';
import log from 'loglevel';

import routes from './route';
import InitAction from './actions/initActions';

log.setLevel("info");
InitAction();

ReactDOM.render(<Router history={hashHistory} routes={routes}/>, document.getElementById("app"));
