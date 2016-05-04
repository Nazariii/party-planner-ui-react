"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./route');
var InitAction = require('./actions/initActions');

InitAction.initApp();

Router.run(routes, /*Router.HistoryLocation,*/ function (Handler) {

    React.render(<Handler/>, document.getElementById("app"));

});