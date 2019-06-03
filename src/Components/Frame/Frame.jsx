import React, { Component } from 'react';
import './Frame.scss';
const { remote } = window.require('electron');

class Frame extends Component {
  render() {
    return(
      <div className="kr-app-frame">
      <div className="kr-app-frame-appname">Kraken</div>
        <div className="kr-app-frame-buttons-block">
            <button onClick={() => {this.minimizeWindow()}} className="kr-app-frame-button">m</button>
            <button onClick={() => {this.maximizeWindow()}} className="kr-app-frame-button">M</button>
            <button onClick={() => {this.closeWindow()}} className="kr-app-frame-button-close">X</button>
        </div>
      </div>
    )
  }

  closeWindow() {
      var window = remote.getCurrentWindow();
      window.close();
  }
  minimizeWindow() {
    var window = remote.getCurrentWindow();
    window.minimize();
  }
  maximizeWindow() {
    var window = remote.getCurrentWindow();
    if (window.isMaximized()) {
      window.unmaximize();
    } else {
      window.maximize();
    }
  }
}

export default Frame;
