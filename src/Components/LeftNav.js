import React, { Component } from 'react';
import { Col } from 'reactstrap';
import ActionHome from 'material-ui/svg-icons/action/home';
import CommunicationChat from 'material-ui/svg-icons/communication/chat'
import ActionSettings from 'material-ui/svg-icons/action/settings';

export default class LeftNav extends Component {
  render() {
    return (
      <Col sm="3" className="ChatCol">
        <div className="ChatColUpper">
          <div className="ChatColElm">
            <ActionHome className="Change Icon"
            />
            <h3 className="Change">Home</h3>
          </div>
          <div className="ChatColElm">
            <ActionSettings
              className="Change Icon"
            />
            <h3 className="Change">Settings</h3>
          </div>
          <div className="ChatColElm">
            <CommunicationChat
              className="Change Icon"
            />
            <h3 className="Change">Messages</h3>
          </div>
        </div>
        <div className="ChatColLower">
          <div className="ChatColElm">
            <CommunicationChat
              className="Change Icon"
            />
            <h3 className="Change">Sign Out</h3>
          </div>
        </div>
      </Col>
    );
  }
}