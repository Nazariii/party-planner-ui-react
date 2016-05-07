"use strict";

var React = require('react');
var ReactRouter = require('react-router');

var Route = ReactRouter.Route;
var Redirect = ReactRouter.Redirect;
var IndexRoute = ReactRouter.IndexRoute;

var HomePage = require('./components/homePage');


var routes = (
    <Route path="/" component={require('./components/app')}>

        <IndexRoute component={HomePage}/>

        <Route path="users" component={require('./components/users/userPage')}/>
        <Route path="user" component={require('./components/users/manageUserPage')}/>
        <Route path="user/:id" component={require('./components/users/manageUserPage')}/>
        <Route path="about" component={require('./components/about/aboutPage')}/>

        <Redirect from="about/!*" to="about"/> //wildcard redirection
        <Redirect from="index" to="/"/>
        <Redirect from="usr" to="users"/> //typo redirection

        // NotFoundRoute
        <Route path="*" component={require('./components/page404')}/>
    </Route>
);

module.exports = routes;
/*


 */