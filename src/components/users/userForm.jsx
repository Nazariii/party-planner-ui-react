"use strict";

let React = require('react');
let TextInput = require('../common/textInput.jsx');

const UserForm = (props) =>
    <form >
        <h1> Manage user</h1>
        <TextInput
            name="firstName"
            label="First Name"
            value={props.user.firstName}
            onChange={props.onChange}
            error={props.errors.firstName}
        />

        <TextInput
            name="lastName"
            label="Last Name"
            value={props.user.lastName}
            onChange={props.onChange}
            error={props.errors.lastName}
        />

        <input type="submit"
               value="Save"
               className="btn btn-default"
               onClick={props.onSave}/>
    </form>;

UserForm.propTypes = {
    user: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
};

module.exports = UserForm;