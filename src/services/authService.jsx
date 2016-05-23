"use strict";

import axios from 'axios';

import AppConst from '../constants/appConstants';

class AuthService {

    isLoggedIn() {
        return axios.get(AppConst.LOGIN_URL,{
            withCredentials: true
        });
    }

    loginUser(username, password) {
        return axios({
                url: AppConst.LOGIN_URL,
                method: 'post',
                headers: {
                    "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
                },
                params: {
                    username, password
                },
                withCredentials: true
            }
        );
    }

    logout() {
        return axios.get(AppConst.LOGOUT_URL,{
            withCredentials: true
        });
    }
}

export default new AuthService();

/*

 headers: {
 [AppConst.XSRF_TOKEN_HEADER]: Cookie.get(AppConst.XSRF_TOKEN_COOKIE)
 }*/
