"use strict";

var React = require('react');
var Link = require('react-router').Link;

var UserList = React.createClass({
    propTypes: {
        users: React.PropTypes.array.isRequired
    },
    render: function () {

        var createUserRow = function (user) {
            return (
                <tr key={user.id}>
                    <td><Link to="manageUser" params={{id: user.id}}>{user.id}</Link></td>
                    <td>{user.firstName} {user.lastName}</td>
                </tr>
            );
        };

        return (
            <div >
                <table className="table">
                    <thead>
                    <th>ID</th>
                    <th>Name</th>
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