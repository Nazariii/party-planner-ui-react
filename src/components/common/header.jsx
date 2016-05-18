"use strict";

let React = require('react');
let Link = require('react-router').Link;
let IndexLink = require('react-router').IndexLink;

const Header = (props) =>
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <IndexLink to="/" className="navbar-brand">
                <img src="images/plan.png"/>
            </IndexLink >
            <ul className="nav navbar-nav">
                <li><IndexLink to="/">Home</IndexLink ></li>
                {props.loggedIn ?
                    (<li><Link to="users">Users</Link></li>) : (null)
                }
                <li><Link to="about">About</Link></li>
            </ul>
        </div>
    </nav>;

Header.propTypes = {
    loggedIn: React.PropTypes.bool.isRequired
};

module.exports = Header;