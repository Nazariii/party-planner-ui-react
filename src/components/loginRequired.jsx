"use strict";

import LoginAction from '../actions/authAction';
import AuthStore from '../stores/authStore';


LoginAction.isUserLoggedIn();
console.log('*********' + AuthStore.isLoggedIn());

/*if (!AuthStore.isLoggedIn()) {
 LoginAction.loginUser("naz","1234");
 }*/


