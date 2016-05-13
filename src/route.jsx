"use strict";

import  React from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';

import App from './components/app.jsx';
import HomePage from './components/homePage.jsx';
import LoginPage from './components/login/loginPage.jsx';
import LoginRequired from './components/loginRequired.jsx';
import UsersPage from './components/users/userPage.jsx';
import ManageUser from './components/users/manageUserPage.jsx';
import AboutPage from './components/about/aboutPage.jsx';
import Page404 from './components/page404.jsx';

const routes = (
    <Route path="/" component={App}>

        <IndexRoute component={HomePage}/>
        <Route component={HomePage}>
            <Route path="users" component={UsersPage}/>
            <Route path="user" component={ManageUser}/>
            <Route path="user/:id" component={ManageUser}/>
        </Route>
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