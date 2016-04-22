"use strict";

var React = require('react');

var About = React.createClass({
    render: function () {
        return (
            <div >
                <p>
                    This application uses the following technologies:
                    <ui>
                        <li>React</li>
                        <li>ReactRouter</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ui>
                </p>
            </div>
        );
    }
});

module.exports = About;