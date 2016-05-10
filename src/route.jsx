"use strict";

let React = require('react');
let ReactRouter = require('react-router');

let Route = ReactRouter.Route;
let Redirect = ReactRouter.Redirect;
let IndexRoute = ReactRouter.IndexRoute;

let HomePage = require('./components/homePage.jsx');

const routes = (
    <Route path="/" component={require('./components/app.jsx')}>

        <IndexRoute component={HomePage}/>

        <Route path="users" component={require('./components/users/userPage.jsx')}/>
        <Route path="user" component={require('./components/users/manageUserPage.jsx')}/>
        <Route path="user/:id" component={require('./components/users/manageUserPage.jsx')}/>
        <Route path="about" component={require('./components/about/aboutPage.jsx')}/>

        <Redirect from="about/!*" to="about"/> //wildcard redirection
        <Redirect from="index" to="/"/>
        <Redirect from="usr" to="users"/> //typo redirection
        // NotFoundRoute
        <Route path="*" component={require('./components/page404.jsx')}/>
    </Route>
);

module.exports = routes;