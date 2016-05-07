/*eslint-disable strict */ //Disable check because we can't run strict mode. Need global vars

var React = require('react');
var Header = require('./common/header');
$ = jQuery = require('jquery');

var App = React.createClass({
    propTypes: {
      children: React.PropTypes.element
    },
    render: function () {
        return (
            <div>
                <Header />

                <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = App;