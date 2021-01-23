import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Forgot extends Component {
    render() {
        return (
            <div>
                <h1>Forgot</h1>
                <Link to="/login">Login</Link>
            </div>

        );
    }
}
