"use strict";

import React from 'react';
import {Link} from 'react-router';

const Home = () =>
    <div className="jumbotron">
        <h1>Party planner</h1>
        <p>Welcome page</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
        <Link to="login" className="btn btn-primary btn-lg">Log In</Link>
    </div>;

export default Home;