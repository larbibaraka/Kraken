import React, { Component } from "react";
import "./MenuIcons.scss";

class MenuIcons extends Component {
  render() {
    return (
      <div className="kr-app-Sidebar-menu">
        <div className="kr-app-Sidebar-menu-items">
          <a href="/" className="kr-app-Sidebar-menu-item">
            <span uk-icon="home" />
          </a>
          <a href="/" className="kr-app-Sidebar-menu-item">
            <span uk-icon="check" />
          </a>
          <a href="/" className="kr-app-Sidebar-menu-item">
            <span uk-icon="bell" />
          </a>
          <a href="/" className="kr-app-Sidebar-menu-item">
            <span uk-icon="table" />
          </a>
        </div>
      </div>
    );
  }
}

export default MenuIcons;
