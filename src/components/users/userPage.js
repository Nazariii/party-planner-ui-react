"use strict";

let React = require('react');
let Link = require('react-router').Link;

let UserStore = require('../../stores/userStore');
let UserList = require('./userList');

class UserPage extends React.Component {

    constructor() {
        super();
        this._onChange = this._onChange.bind(this);
        this.state = {
            users: UserStore.getAllUsers()
        };
    }

    _onChange() {
        this.setState({users: UserStore.getAllUsers()});
    }

    componentWillMount () {
        UserStore.addChangeListener(this._onChange);
    }

    componentWillUnmount () {
        UserStore.removeChangeListener(this._onChange);
    }

    render () {
        return (
            <div >
                <h1>Users</h1>
                <Link to="user" className="btn btn-default">Add Users</Link>
                <UserList users={this.state.users}/>
            </div>
        );
    }
}

module.exports = UserPage;