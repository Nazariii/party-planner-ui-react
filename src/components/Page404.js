"use strict";

var React = require('react');
var Link = require('react-router').Link;

var Page404 = React.createClass({
    render: function () {
        return (
            <div >
                <h1>Page not found =(</h1>
                <p>Oh No! You must have missed something</p>
                <Link to="app" className="btn btn-primary btn-lg">Back to the Start</Link>
            </div>
        );
    }
});

module.exports = Page404;