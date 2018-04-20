import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // add
import RaisedButton from 'material-ui/RaisedButton'; // add
import {Card} from 'material-ui/Card';
import io from "socket.io-client";
import {Container, Row, Col} from 'reactstrap';


import LeftCol from './Components/LeftNav';
import CenterCol from './Components/Center';
import RightNav from './Components/RightNav';

import './css/main.css';
import './css/left.css';
import './css/middle.css';
import './css/right.css';

//http://collectui.com/designers/czp/direct-messaging

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      username: `MuffinFluff${Math.floor(Math.random() * 60)}`,
      connections: [],
      chat: [],
      messageQuery: '',
      searchQuery: '',
    };

    this.socket = io('http://10.0.5.77:8080');

    this.socket.on('RECEIVE_MESSAGE', function (data) {
      console.log(data);
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);

      const chat = this.state.chat;
      chat.push(data);

      this.setState({
        ...this.state,
        chat,
      });

      console.log(this.state.chat);
    };
  }

  handleInput = (event, field) => {
    const str = event.target.value;
    this.setState({
      ...this.state,
      [field]: str,
    });
    console.log(this.state);
  };

  sendMessage = ev => {
    console.log('here');
    ev.preventDefault();
    this.socket.emit('SEND_MESSAGE', {
      username: this.state.username,
      messageQuery: this.state.messageQuery
    });
    this.setState({
      ...this.state,
      messageQuery: ''
    });
  };

  render() {
    return (

      <MuiThemeProvider>
        <div className="Background">
          <div className="Position">
            <Card className="Card">
              <Container className="m0 p0" style={{
                maxWidth: 'inherit',
              }}>
                <Row className="m0 p0">

                  <LeftCol/>

                  <CenterCol
                    username={this.state.username}
                    chatLog={this.state.chat}
                    messageQuery={this.state.messageQuery}
                    sendMessage={this.sendMessage}
                    handleInput={this.handleInput}
                  />

                  <RightNav
                    handleInput={this.handleInput}
                  />

                </Row>
              </Container>
            </Card>
          </div>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;