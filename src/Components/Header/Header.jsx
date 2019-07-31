import React, { Component } from 'react';
import './Header.scss';
import logo from './logo.svg';

class Header extends Component {
    render() {
        return (
            <header uk-sticky="bottom: #top">
                <nav className="kr-app-header-topMenu">
                    <div className="kr-app-header-topMenu-logo">
                        <a href="/">
                            <img className="logo" src={logo} alt="Kraken" width="150" height="100"/>
                        </a>
                    </div>
                        <div className="kr-app-header-topMenu-dashButtons">
                            <a href="/" className="uk-button uk-button-default tabButton" to="/board">Board</a>
                            <a href="/" className="uk-button uk-button-default tabButton" to="/list">List</a>
                            <a href="/" className="uk-button uk-button-default tabButton" to="/calendar">Calendar</a>
                        </div>
                    <button className="uk-button uk-button-danger uk-text-bold">
                        <span uk-icon="plus"></span>
                        <span> New Task </span>
                    </button>
                </nav>
            </header>
        )
    }
}

export default Header;
