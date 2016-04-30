"use strict";

var React = require('react');
var UserForm = require('./userForm');

var ManageUserPage = React.createClass({

    getInitialState: function () {
        return {
            user: {id: '', firstName: '', lastName: ''}
        };
    },

    setUserState: function (event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.user[field] = value;
        return this.setState({user: this.state.user});
    },

    render: function () {
        return (
            <UserForm user={this.state.user} onChange={this.setUserState}/>
        );
    }
});

module.exports = ManageUserPage;