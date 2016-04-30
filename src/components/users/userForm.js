"use strict";

var React = require('react');

var UserForm = React.createClass({
    render: function () {
        return (
            <form >
                <h1> Manage user</h1>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" className="form-control" placeholder="First Name" ref="firstName"
                       onChange={this.props.onChange}
                       value={this.props.user.firstName}/>
                <br/>

                <label htmlFor="las tName">Last Name</label>
                <input type="text" name="lastName" className="form-control" placeholder="Last Name" ref="lastName"
                       onChange={this.props.onChange}
                       value={this.props.user.lastName}/>
                <br/>

                <input type="submit" value="Save" className="btn btn-default"/>
            </form>
        );
    }
});

module.exports = UserForm;