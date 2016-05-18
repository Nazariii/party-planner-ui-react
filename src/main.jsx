"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var hashHistory = require('react-router').hashHistory;

var routes = require('./route');
var InitAction = require('./actions/initActions');

InitAction();

ReactDOM.render(<Router history={hashHistory} routes={routes}/>, document.getElementById("app"));

/*
 Router.run(routes, /!*Router.HistoryLocation,*!/ function (Handler) {

 ReactDOM.render(<Handler/>, document.getElementById("app"));

 });*/
