"use strict";

var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var Redirect = Router.Redirect;

var DefaultRouter = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRouter handler={require('./components/homePage')}/>
        <NotFoundRoute handler={require('./components/page404')}/>

        <Route name="users" handler={require('./components/users/userPage')}/>
        <Route name="about" handler={require('./components/about/aboutPage')}/>

        <Redirect from="index" to="app"/>
        <Redirect from="user" to="users"/>    //typo redirection
        <Redirect from="about/*" to="about"/> //wildcard redirection
    </Route>
);

module.exports = routes;