"use strict";

let  React =require('react');
import {Route, Redirect, IndexRoute} from 'react-router';

import App from './components/app';
import HomePage from './components/homePage';
import LoginPage from './components/login/loginPage';
//import LoginRequired from './components/loginRequired';
import UsersPage from './components/users/userPage';
import ManageUser from './components/users/manageUserPage';
import AboutPage from './components/about/aboutPage';
import Page404 from './components/page404';

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