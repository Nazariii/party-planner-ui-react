"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var routes = require('./route');
var InitAction = require('./actions/initActions');

InitAction.initApp();

ReactDOM.render(<Router>{routes}</Router>, document.getElementById("app"));

/*
 Router.run(routes, /!*Router.HistoryLocation,*!/ function (Handler) {

 ReactDOM.render(<Handler/>, document.getElementById("app"));

 });*/
