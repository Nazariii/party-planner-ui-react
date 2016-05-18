"use strict";

let  React =require('react');
let {Route, Redirect, IndexRoute} = require( 'react-router');

let App = require( './components/app');
let HomePage = require( './components/homePage');
let LoginPage = require( './components/login/loginPage');
//let LoginRequired = require( './components/loginRequired');
let UsersPage = require( './components/users/userPage');
let ManageUser = require( './components/users/manageUserPage');
let AboutPage = require( './components/about/aboutPage');
let Page404 = require( './components/page404');

const routes = (
    <Route path="/" component={App}>

        <IndexRoute component={HomePage}/>
            <Route path="users" component={UsersPage}/>
            <Route path="user" component={ManageUser}/>
            <Route path="user/:id" component={ManageUser}/>
        <Route path="login" component={LoginPage}/>
        <Route path="about" component={AboutPage}/>

        <Redirect from="about/!*" to="about"/> //wildcard redirection
        <Redirect from="index" to="/"/>
        <Redirect from="usr" to="users"/> //typo redirection
        // NotFoundRoute
        <Route path="*" component={Page404}/>
    </Route>
);

module.exports = routes;