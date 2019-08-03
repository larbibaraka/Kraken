import React, { Component } from "react";
import "./Sidebar.scss";
import Menu from "./Menu/Menu";
import MenuIcons from './MenuIcons/MenuIcons';
import Team from "./Team/Team";
import Invite from "./Invite/Invite";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: true
    };
    this.collapse = this.collapse.bind(this);
  }

  collapse() {
    this.setState({
      sidebar: false
    });
  }

  render() {
    return (
     <div>
      <div className="kr-app-Sidebar"> 
          <div>
            <svg
              className="Sidebar-collapse-BurgerIcon uk-align-right"
              viewBox="0 0 50 32"
              data-uk-toggle="target: #offcanvas-nav-primary"
              type="button" 
            >
              <path d="M49,4H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,4,49,4z" />
              <path d="M49,16H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,16,49,16z" />
              <path d="M49,28H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,28,49,28z" />
              <path d="M8.1,22.8c-0.3,0-0.5-0.1-0.7-0.3L0.7,15l6.7-7.8c0.4-0.4,1-0.5,1.4-0.1c0.4,0.4,0.5,1,0.1,1.4L3.3,15l5.5,6.2   c0.4,0.4,0.3,1-0.1,1.4C8.6,22.7,8.4,22.8,8.1,22.8z" />
            </svg>
          </div>
            <MenuIcons/>

        </div>

    <div>
            <div id="offcanvas-nav-primary" data-uk-offcanvas="overlay: true">
                <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                    <ul className="uk-nav uk-nav-primary">
                      <Menu />
                      <hr />
                      <Team />
                      <Invite />
                    </ul>
                </div>
         </div>
    </div>
    </div> 
    
    );
  }
}

export default Sidebar;
