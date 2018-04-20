import React, { Component } from 'react';
import { Col } from 'reactstrap';
import _ from 'lodash'
import SendIcon from 'material-ui/svg-icons/content/send';

export default class Center extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const chatComponents = [];
    if (!_.isEmpty(this.props.chatLog)) {
      this.props.chatLog.map((c) => {
        if( c.username === this.props.username ) {
          chatComponents.push((
            <div>
              <div className="rightBubble">
                <h3>
                  <p>Me:</p>
                  {c.messageQuery}
                </h3>
                <img className="ChatIcon" src="https://static.designmynight.com/uploads/2017/08/drephoto-optimised.jpg"/>
              </div>
            </div>
          ));
        } else {
          chatComponents.push((
            <div>
              <div className="leftBubble">
                <img className="ChatIcon" src="https://images-na.ssl-images-amazon.com/images/I/41ZjPtcaBBL.jpg"/>
                <h3>
                  <p>{c.username}:</p>
                  {c.messageQuery}
                </h3>
              </div>
            </div>
          ));
        }
      })
    }

    return (
      <Col sm="6" className="CenterCol">
        <div className="CenterColContent">

          <div className="CenterColHeader">
            <input value={this.props.username}
                   disabled="true"
                   onChange={(e)=> {this.props.handleInput(e, 'username')}}
                   type="text"/>
            {/*<h3>{this.props.username}</h3>*/}
          </div>

          <div className="MainChat SpreadWidth">
            {chatComponents}
          </div>

          <div className="CenterColInput">
            <div className="CenterColInputContainer">
                        <textarea
                          onKeyPress={(e) => e.key === "Enter" ? this.props.sendMessage(e) : null}
                          onChange={(e)=> {this.props.handleInput(e, 'messageQuery')}}
                          rows="6"
                          cols="50"
                          value={this.props.messageQuery}
                          placeholder="Please Enter Chat Message Here"
                        >
                        </textarea>
              <button onClick={this.props.sendMessage}><SendIcon className="SendIcon"/></button>
            </div>
          </div>
        </div>
      </Col>

    );
  }
}