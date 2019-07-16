import React, { Component } from 'react';
import './Sidebar.scss';
import Menu from './Menu/Menu';
import Team from './Team/Team';
import Invite from './Invite/Invite';


class Sidebar extends Component {
    render() {
        return (
            <div className="kr-app-Sidebar">
                123
                <Menu />
                <hr></hr>
                <Team />
                <Invite />
            </div>
        )
    }
}

export default Sidebar;