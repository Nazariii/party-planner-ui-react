"use strict";

var React = require('react');
var UserApi = require('../../api/userApi');
var UserList = require('./userList');


var Users = React.createClass({
    getInitialState: function () {
        return {
            users: []
        };
    },

    componentDidMount: function () {
        if (this.isMounted()) {
            this.setState({users: UserApi.getAllUsers()});
        }
    },

    render: function () {
        return (
            <div >
                <h1>Users</h1>
                <UserList users={this.state.users}/>
            </div>
        );
    }
});

module.exports = Users;