import React, { Component } from 'react';
import './Menu.scss';

class Menu extends Component {
    render () {
        return (
            <div className="kr-app-Sidebar-menu">
                <div className="kr-app-Sidebar-menu-items">
                    <a href="/" className="kr-app-Sidebar-menu-item">
                            <span uk-icon="home"></span>
                            <span className="kr-app-Sidebar-menu-item-text">Home</span>
                    </a>
                    <a href="/" className="kr-app-Sidebar-menu-item">
                        <span uk-icon="check"></span>
                        <span className="kr-app-Sidebar-menu-item-text">Taks</span>
                    </a>
                    <a href="/" className="kr-app-Sidebar-menu-item">
                        <span uk-icon="bell"></span>
                        <span className="kr-app-Sidebar-menu-item-text">Inbox</span>
                    </a>
                    <a href="/" className="kr-app-Sidebar-menu-item">
                        <span uk-icon="table"></span>
                        <span className="kr-app-Sidebar-menu-item-text">Portfolio</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Menu;
