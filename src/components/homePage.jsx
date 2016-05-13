"use strict";

let React = require('react');
let ReactRouter = require('react-router');
let Link = ReactRouter.Link;

const Home = () =>
    <div className="jumbotron">
        <h1>Party planner</h1>
        <p>Welcome page</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
        <Link to="login" className="btn btn-primary btn-lg">Log In</Link>
    </div>;

module.exports = Home;