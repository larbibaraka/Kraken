import React, { Component } from 'react';
import './Team.scss';

class Team extends Component {
    render() {
        return (
            <div className="kr-app-Sidebar-team">
                <div className="kr-app-Sidebar-team-header">
                    Team
                    <div className="kr-app-Sidebar-team-header-add">
                        <a>
                            <span uk-icon="plus"></span>
                        </a> 
                    </div>
                </div>
                <div className="kr-app-Sidebar-team-content">
                    <div className="search-users uk-inline">
                        <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: search"></span>
                        <input className="uk-input" placeholder="Filter" type="text"></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default Team;