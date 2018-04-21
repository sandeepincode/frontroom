import React, {Component} from 'react';
import {Col} from 'reactstrap';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import _ from 'lodash';
import ActionInfo from 'material-ui/svg-icons/action/info';
import StatusCircle from 'material-ui/svg-icons/action/check-circle';
import ConnectionsIcon from 'material-ui/svg-icons/social/people';
import SearchIcon from 'material-ui/svg-icons/action/search';


export default class RightNav extends Component {

  render() {
    const components = [];
    if (!_.isEmpty(this.props.connections)) {
      this.props.connections.map((c) => {
        if ((c.name.toLowerCase()).includes(this.props.searchQuery.toLowerCase())
          && !_.isEmpty(this.props.searchQuery)) {
          components.push((
            <ListItem
              value={c.name}
              onClick={this.props.handleSelect}
              className="CustomerColMainListItem"
              leftAvatar={<Avatar src={c.img}/>}
              rightIcon={<StatusCircle color={c.status ? 'springgreen' : 'red'}/>}
              primaryText={c.name}
              secondaryText={c.date}
            />
          ));
        } else if (_.isEmpty(this.props.searchQuery)) {
          components.push((
            <ListItem
              className="CustomerColMainListItem"
              value={c.name}
              onClick={this.props.handleSelect}
              leftAvatar={<Avatar src={c.img}/>}
              rightIcon={<StatusCircle color={c.status ? 'springgreen' : 'red'}/>}
              primaryText={c.name}
              secondaryText={c.date}
            />
          ));
        }
      });
    }

    return (
      <Col sm="3" className="CustomerCol">
        <div className="CustomerColUpper">
          <div className="CustomerColUpperRight">
            <h3>Connections</h3>
          </div>
          <div className="CustomerColUpperLeft">
            <ConnectionsIcon className="Icon"/>
          </div>
        </div>
        <div className="CustomerColMain p0 m0 ScrollY">
          <List className="p0 m0">
            {components}
          </List>
        </div>
        <div className="CustomerColLower">
          <div className="CustomerColLowerContainer">
            <div className="SpreadWidth">
              <SearchIcon class="left Icon"/>
              <input className="right"
                     type="text"
                     onChange={(e) => {
                       this.props.handleInput(e, 'searchQuery')
                     }}
                     placeholder="Search..."/>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}