"use strict";

var React = require('react');
var Toastr = require('toastr');
var UserForm = require('./userForm');
var UserAction = require('../../actions/userActions');
var UserStore = require('../../stores/userStore');
var History = require('react-router').History;


var ManageUserPage = React.createClass({
    mixins: [
        History
    ],

    propTypes: {
        params: React.PropTypes.object
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

    /*componentDidMount() {
        this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
    },

    routerWillLeave: function (nextLocation) {
        if (this.state.dirty && !confirm('leave without saving')) {
            transition.abort();
        }
    },*/

    setUserState: function (event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        var localUser = Object.assign({}, this.state.user);
        localUser[field] = value;
        return this.setState({user: localUser});
    },

    userFormIsValid: function () {
        var formIsValid = true;
        var newErrors = {};
        //this.state.errors = {}; // clear any previous errors

        if (this.state.user.firstName.length < 2) {
            newErrors.firstName = 'First name must be at least 2 characters';
            formIsValid = false;
        }
        if (this.state.user.lastName.length < 2) {
            newErrors.lastName = 'Last name must be at least 2 characters';
            formIsValid = false;
        }

        this.setState({errors: newErrors});
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
        this.history.pushState(null, 'users');
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