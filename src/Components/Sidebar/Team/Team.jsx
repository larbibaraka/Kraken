import React, { Component } from "react";
import "./Team.scss";

class Team extends Component {
  render() {
    return (
      <div className="kr-app-Sidebar-team">
        <div className="kr-app-Sidebar-team-header">
          Team
          <div className="kr-app-Sidebar-team-header-add">
            <a href="/">
              <span uk-icon="plus" />
            </a>
          </div>
        </div>
        <div className="kr-app-Sidebar-team-content">
          <div className="search_wrapper">
            <div className="search-users uk-inline">
              <span
                className="uk-form-icon uk-form-icon-flip"
                uk-icon="icon: search"
              />
              <input className="uk-input" placeholder="Filter" type="text" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
