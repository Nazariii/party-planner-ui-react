"use strict";

import React from 'react';
import Toastr from 'toastr';

import UserForm from './userForm';
import UserAction from '../../actions/userActions';
import UserStore from '../../stores/userStore';

import {withRouter} from 'react-router';

class ManageUserPage extends React.Component {

    constructor() {
        super();
        this.setUserState = this.setUserState.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.routerWillLeave = this.routerWillLeave.bind(this);
        this.state = {
            user: {id: '', firstName: '', lastName: ''},
            errors: {},
            dirty: false
        };
    }

    //call setState in this function wouldn't cause rerender
    componentWillMount() {
        let userId = this.props.params.id;

        if (userId) {
            this.setState({user: UserStore.getUserById(userId)});
        }
    }

    componentDidMount() {
        this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
    }

    routerWillLeave() {
        if (this.state.dirty) {
            return 'leave without saving??';
        }
    }

    setUserState(event) {
        this.setState({dirty: true});
        let field = event.target.name;
        let value = event.target.value;
        let localUser = Object.assign({}, this.state.user);
        localUser[field] = value;
        return this.setState({user: localUser});
    }

    userFormIsValid() {
        let formIsValid = true;
        let newErrors = {};

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
    }

    saveUser(event) {
        event.preventDefault();
        if (!this.userFormIsValid()) {
            return;
        }

        if (this.state.user.id) {
            UserAction.updateUser(this.state.user);
        } else {
            UserAction.createUser(this.state.user);
        }

        this.setState({dirty: false}, function () {
            Toastr.success('User saved');
            this.props.router.push('users');
        });
    }

    render() {
        return (
            <UserForm user={this.state.user}
                      onChange={this.setUserState}
                      onSave={this.saveUser}
                      errors={this.state.errors}
            />
        );
    }
}

ManageUserPage.propTypes = {
    params: React.PropTypes.object,
    router: React.PropTypes.object.isRequired,
    route: React.PropTypes.object.isRequired
};

export default withRouter(ManageUserPage);