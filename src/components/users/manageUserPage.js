"use strict";

var React = require('react');
var Router = require('react-router');
var Toastr = require('toastr');
var UserForm = require('./userForm');
var UserAction = require('../../actions/userActions');
var UserStore = require('../../stores/userStore');

var ManageUserPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    propTypes: {
        params: React.PropTypes.object
    },

    statics: {
        willTransitionFrom: function (transition, component) {
            if (component.state.dirty && !confirm('leave without saving')) {
                transition.abort();
            }

        }
    },

    getInitialState: function () {
        return {
            user: {id: '', firstName: '', lastName: ''},
            errors: {},
            dirty: false
        };
    },

    //call setState in this function wouldn't cause rerender
    componentWillMount: function () {
        var userId = this.props.params.id;

        if (userId) {
            this.setState({user: UserStore.getUserById(userId)});
        }
    },

    setUserState: function (event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.user[field] = value;
        return this.setState({user: this.state.user});
    },

    userFormIsValid: function () {
        var formIsValid = true;
        this.state.errors = {}; // clear any previous errors

        if (this.state.user.firstName.length < 2) {
            this.state.errors.firstName = 'First name must be at least 2 characters';
            formIsValid = false;
        }
        if (this.state.user.lastName.length < 2) {
            this.state.errors.lastName = 'Last name must be at least 2 characters';
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    saveUser: function (event) {
        event.preventDefault();
        if (!this.userFormIsValid()) {
            return;
        }

        if (this.state.user.id) {
            UserAction.updateUser(this.state.user);
        } else {
            UserAction.createUser(this.state.user);
        }

        this.setState({dirty: false});
        Toastr.success('User saved');
        this.transitionTo('users');
    },

    render: function () {
        return (
            <UserForm user={this.state.user}
                      onChange={this.setUserState}
                      onSave={this.saveUser}
                      errors={this.state.errors}
            />
        );
    }
});

module.exports = ManageUserPage;