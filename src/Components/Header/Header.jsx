import React, { Component } from 'react';
import './Header.scss';
import logo from './logo.svg';


class Header extends Component {
    render() {
        return (
            <header>
                <nav className="kr-app-header-topMenu">
                    <div className="kr-app-header-topMenu-logo">
                        <img className="logo" src={logo} alt="Kraken" width="150" height="100"/>
                    </div>
                    <div className="kr-app-header-topMenu-dashButtons">
                        <a className="uk-button uk-button-default tabButton" href="#">Board</a>
                        <a className="uk-button uk-button-default tabButton" href="#">List</a>
                        <a className="uk-button uk-button-default tabButton" href="#">Calendar</a>
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
