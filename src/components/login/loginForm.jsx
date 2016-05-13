"use strict";

import React from 'react';
import TextInput from '../common/textInput.jsx';
import PasswordInput from '../common/passwordInput.jsx';

const LoginForm = (props) =>
    <form >
        <h1> Login </h1>
        <TextInput
            name="email"
            label="Email"
            value={props.user.email}
            onChange={props.onChange}
            error={props.errors.email}
        />

        <PasswordInput
            name="password"
            label="Password"
            value={props.user.password}
            onChange={props.onChange}
            error={props.errors.password}
        />

        <input type="submit"
               value="Log In "
               className="btn btn-default"
               onClick={props.onSubmit}/>
    </form>;

LoginForm.propTypes = {
    user: React.PropTypes.object.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
};

export default LoginForm;