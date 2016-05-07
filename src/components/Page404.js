"use strict";

var React = require('react');
var IndexLink  = require('react-router').IndexLink;

var Page404 = React.createClass({
    render: function () {
        return (
            <div >
                <h1>Page not found =(</h1>
                <p>Oh No! You must have missed something</p>
                <IndexLink  to="/" className="btn btn-primary btn-lg">Back to the Start</IndexLink >
            </div>
        );
    }
});

module.exports = Page404;