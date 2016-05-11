"use strict";

import axios from 'axios';
//import Cookie from 'js-cookie';

import AppConst from '../constants/appConstants';

class AuthService {

    loginUser(username, password) {
        return axios.option(AppConst.LOGIN_URL).then((response) => {
            console.log(response);
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            return axios.post(AppConst.LOGIN_URL, {username, password}, {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }
            );
        });
    }
}

export default new AuthService();

/*

 headers: {
 [AppConst.XSRF_TOKEN_HEADER]: Cookie.get(AppConst.XSRF_TOKEN_COOKIE)
 }*/
