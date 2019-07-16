import React, { Component } from 'react';
import './Sidebar.scss';
import Menu from './Menu/Menu';
import Invite from './Invite/Invite';


class Sidebar extends Component {
    render() {
        return (
            <div className="kr-app-Sidebar">
                123
                <Menu />
                <Invite />
            </div>
        )
    }
}

export default Sidebar;