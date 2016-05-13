/*eslint-disable strict */ //Disable check because we can't run strict mode. Need global vars

let React = require('react');
let Header = require('./common/header.jsx');
//$ = jQuery = require('jquery');

import $ from 'jquery';
import jQuery from 'jquery';
// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;
//import $ from "jquery";

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

export default App;