"use strict";

var React = require('react');
var UserApi = require('../../api/userApi');

var Users = React.createClass({
    getInitialState: function () {
        return {
            users: []
        };
    },

    componentWillMount: function () {
        this.setState({users: UserApi.getAllUsers()});
    },
    render: function () {
        var createUserRow = function (user) {
            return (
                <tr key={user.id}>
                    <td><a href={"/#users/" + user.id}>{user.id}</a></td>
                    <td>{user.firstName} {user.lastName}</td>
                </tr>
            );
        };

        return (
            <div >
                <h1>Users</h1>

                <table className="table">
                    <thead>
                    <th>ID</th>
                    <th>Name</th>
                    </thead>
                    <tbody>
                    {this.state.users.map(createUserRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Users;