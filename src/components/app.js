/*eslint-disable strict */ //Disable check because we can't run strict mode. Need global vars

let React = require('react');
let Header = require('./common/header');
$ = jQuery = require('jquery');

const App = (props) =>
    <div>
        <Header />
        <div className="container-fluid">
            {props.children}
        </div>
    </div>;

App.propTypes = {
    children: React.PropTypes.element
};

module.exports = App;