"use strict";

var React = require('react');
var TextInput = require('../common/textInput');

var UserForm = React.createClass({
    prorTypes: {
        user: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function () {
        return (
            <form >
                <h1> Manage user</h1>
                <TextInput
                    name="firstName"
                    label="First Name"
                    value={this.props.user.firstName}
                    onChange={this.props.onChange}
                    error={this.props.errors.firstName}
                />

                <TextInput
                    name="lastName"
                    label="Last Name"
                    value={this.props.user.lastName}
                    onChange={this.props.onChange}
                    error={this.props.errors.lastName}
                />

                <input type="submit"
                       value="Save"
                       className="btn btn-default"
                       onClick={this.props.onSave}/>
            </form>
        );
    }
});

module.exports = UserForm;