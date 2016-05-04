"use strict";

var React = require('react');
var UserActions = require('../../actions/userActions');
var UserStore = require('../../stores/userStore');

var UserList = require('./userList');
var Link = require('react-router').Link;

var UserPage = React.createClass({

    getInitialState: function () {
        return {
            users: UserStore.getAllUsers()
        };
    },

    _onChange: function () {
        this.setState({users: UserStore.getAllUsers()});
    },

    componentWillMount: function () {
        UserStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        UserStore.removeChangeListener(this._onChange);
    },

    render: function () {
        return (
            <div >
                <h1>Users</h1>
                <Link to="addUser" className="btn btn-default">Add Users</Link>
                <UserList users={this.state.users}/>
            </div>
        );
    }
});

module.exports = UserPage;