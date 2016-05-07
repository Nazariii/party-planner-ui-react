"use strict";

let React = require('react');
let ReactRouter = require('react-router');
let Link = ReactRouter.Link;

/*const Home = React.createClass({
    render() {
        return (
            <div className="jumbotron">
                <h1>Party planner</h1>
                <p>Welcome page</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
});*/


class Home extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Party planner</h1>
                <p>Welcome page</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}
module.exports = Home;