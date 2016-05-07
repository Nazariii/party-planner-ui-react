"use strict";

var React = require('react');
var Link = require('react-router').Link;
var UserAction = require('../../actions/userActions');
var toastr = require('toastr');

var UserList = React.createClass({
    propTypes: {
        users: React.PropTypes.array.isRequired
    },

    deleteUser: function (id, event) {
        event.preventDefault();
        UserAction.deleteUser(id);
        toastr.success('User deleted');
    },

    render: function () {
        var createUserRow = function (user) {
            return (
                <tr key={user.id}>
                    <td><Link to="manageUser" params={{id: user.id}}>{user.id}</Link></td>
                    <td>{user.firstName} {user.lastName}</td>
                    <td><a href="#" onClick={this.deleteUser.bind(this, user.id)}>Delete</a></td>
                </tr>
            );
        };

        return (
            <div >
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.users.map(createUserRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = UserList;