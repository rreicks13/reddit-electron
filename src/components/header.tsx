import * as React from "react";
import { Login } from '../containers/login';

import { Link } from 'react-router-dom';

export class Header extends React.Component {
    state = { showLogin: false };

    constructor(props: any) {
        super(props);
    }

    ToggleShowLogin() {
        
    }

    render() {
        return (
            <div className="header">
                <div className="subreddit-name">
                    A Subreddit Name
                    <span className="pull-right"><Link to="/Login" className="login-button">Login</Link></span>
                </div>
            </div>);
    }
}