import React, { Component } from 'react';
import './Invite.scss';

class Invite extends Component {
    render() {
        return (
            <div className="kr-app-Sidebar-inviteFriends uk-position-bottom">
                <div className="kr-app-Sidebar-inviteFriends-image">
                    <img src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/2bc490560c88fa94960b2e4919b4e6d524245ce4/invite_peeps.png" alt="" srcset=""/>
                </div>
                <div className="kr-app-Sidebar-inviteFriends-text">
                    Invite your team and start <br></br> collaborating!
                </div>
                <div className="kr-app-Sidebar-inviteFriends-button">
                    <button className="uk-button uk-button-default uk-button-small uk-width-1-1 white">Invite To Kraken</button>
                </div>
            </div>
        )
    }
}

export default Invite;