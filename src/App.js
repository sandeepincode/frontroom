import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; // add
import {Card} from 'material-ui/Card';
import io from "socket.io-client";
import {Container, Row} from 'reactstrap';

import State from './mockState.json';
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
    this.state = State;
    console.log(State);
    // this.state = {
    //   auth: false,
    //   username: `MuffinFluff${Math.floor(Math.random() * 60)}`,
    //   connections: [],
    //   chat: [],
    //   messageQuery: '',
    //   searchQuery: '',
    // };

    this.socket = io('http://10.0.5.77:8080');
    this.socket.on('RECEIVE_MESSAGE', function (data) {
      console.log(data);
      addMessage(data);
    });

    const addMessage = data => {

      const chat = this.state.chat;
      chat.push(data);

      this.setState({
        ...this.state,
        chat,
      });

    };
  }

  handleSelect = (event, user) => {

    console.log(event.target.innerHTML);
    console.log(event.target.name);
    console.log(event.target.value);

    const chatting = user;
    this.setState({
      ...this.state,
      chatting,
    });
  };

  handleInput = (event, field) => {
    const str = event.target.value;
    this.setState({
      ...this.state,
      [field]: str,
    });
  };

  sendMessage = ev => {
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
                    chatting={this.state.chatting}
                    chatLog={this.state.chat}
                    messageQuery={this.state.messageQuery}
                    sendMessage={this.sendMessage}
                    handleInput={this.handleInput}
                  />

                  <RightNav
                    handleSelect={this.handleSelect}
                    searchQuery={this.state.searchQuery}
                    connections={this.state.connections}
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