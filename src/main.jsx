"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var hashHistory = require('react-router').hashHistory;

var routes = require('./route.jsx');
var InitAction = require('./actions/initActions');

import LoginAction from './actions/authAction';
import AuthStore from './stores/authStore';

InitAction.initApp();

LoginAction.isUserLoggedIn();
console.log('*********' + AuthStore.isLoggedIn());

/*if (!AuthStore.isLoggedIn()) {
    LoginAction.loginUser("naz","1234");
}*/

ReactDOM.render(<Router history={hashHistory} routes={routes}/>, document.getElementById("app"));

/*
 Router.run(routes, /!*Router.HistoryLocation,*!/ function (Handler) {

 ReactDOM.render(<Handler/>, document.getElementById("app"));

 });*/
