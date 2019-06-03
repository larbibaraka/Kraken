import React, { Component } from 'react';
import './Header.scss';
import logo from './logo.svg';


class Header extends Component {
    render() {
        return (
            <nav className="uk-navbar-container">
                <div className="uk-navbar-left">
                    <img src={logo} height="100px" width="100px" className="uk-navbar-item uk-logo"></img>
                </div>
                <div className="uk-navbar">
                    <a className="uk-button uk-button-default uk-button-small" href="#">Link</a>
                    <a className="uk-button uk-button-default uk-button-small" href="#">Link</a>
                    <a className="uk-button uk-button-default uk-button-small" href="#">Link</a>
                </div>
            </nav>
        )
    }
}

export default Header;
