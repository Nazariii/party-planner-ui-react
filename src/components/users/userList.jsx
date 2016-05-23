"use strict";

import React from 'react';
import  {Link} from 'react-router';
import  UserAction from '../../actions/userActions';
import  toastr from 'toastr';

class UserList extends React.Component {

    deleteUser(id, event) {
        event.preventDefault();
        UserAction.deleteUser(id);
        toastr.success('User deleted');
    }

    render() {
        let createUserRow = function (user) {
            return (
                <tr key={user.id}>
                    <td><Link to={`user/${user.id}`}>{user.id}</Link></td>
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
}

UserList.propTypes = {
    users: React.PropTypes.array.isRequired
};

module.exports = UserList;