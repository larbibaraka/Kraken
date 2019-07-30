import React, { Component } from 'react';
import './Header.scss';
import logo from './logo.svg';
import { BrowserRouter as Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="kr-app-header-topMenu">
                    <div className="kr-app-header-topMenu-logo">
                        <Link to="/">
                            <img className="logo" src={logo} alt="Kraken" width="150" height="100"/>
                        </Link>
                    </div>
                        <div className="kr-app-header-topMenu-dashButtons">
                            <Link className="uk-button uk-button-default tabButton" to="/board">Board</Link>
                            <Link className="uk-button uk-button-default tabButton" to="/list">List</Link>
                            <Link className="uk-button uk-button-default tabButton" to="/calendar">Calendar</Link>
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
