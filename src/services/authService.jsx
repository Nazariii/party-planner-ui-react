"use strict";

let axios = require( 'axios');
//let Cookie = require( 'js-cookie');

let AppConst = require( '../constants/appConstants');
//axios.defaults.baseURL = 'https://api.example.com');
class AuthService {

    isLogedIn() {
        return axios.get(AppConst.LOGIN_URL,{
            withCredentials: true
        });
    }

    loginUser(username, password) {
        /*return axios({
         url: AppConst.LOGIN_URL,
         method: 'options'
         }).then((response) => {
         console.log(response);
         console.log(response.data);
         console.log(response.status);
         console.log(response.statusText);
         console.log(response.headers);
         console.log(response.config);*/
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
        //});
    }
}

module.exports =  new AuthService();

/*

 headers: {
 [AppConst.XSRF_TOKEN_HEADER]: Cookie.get(AppConst.XSRF_TOKEN_COOKIE)
 }*/