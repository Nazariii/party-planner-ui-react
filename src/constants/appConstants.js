const BASE_URL = 'http://localhost:9000/';

module.exports =  {
    BASE_URL,
    LOGIN_URL: BASE_URL + 'login',
    XSRF_TOKEN_HEADER: 'X-CSRF-TOKEN',
    XSRF_TOKEN_COOKIE: 'CSRF-TOKEN'
};