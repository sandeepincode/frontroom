import React, { Component } from 'react';
import { Col } from 'reactstrap';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionInfo from 'material-ui/svg-icons/action/info';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ConnectionsIcon from 'material-ui/svg-icons/social/people';
import SearchIcon from 'material-ui/svg-icons/action/search';


export default class RightNav extends Component {
  render() {
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
            <ListItem
              className="CustomerColMainListItem"
              leftAvatar={<Avatar icon={<FileFolder />} />}
              rightIcon={<ActionInfo />}
              primaryText="Photos"
              secondaryText="Jan 9, 2014"
            />
            <ListItem
              className="CustomerColMainListItem"
              leftAvatar={<Avatar icon={<FileFolder />} />}
              rightIcon={<ActionInfo />}
              primaryText="Photos"
              secondaryText="Jan 9, 2014"
            />
            <ListItem
              className="CustomerColMainListItem"
              leftAvatar={<Avatar icon={<FileFolder />} />}
              rightIcon={<ActionInfo />}
              primaryText="Photos"
              secondaryText="Jan 9, 2014"
            />
            <ListItem
              className="CustomerColMainListItem"
              leftAvatar={<Avatar icon={<FileFolder />} />}
              rightIcon={<ActionInfo />}
              primaryText="Photos"
              secondaryText="Jan 9, 2014"
            />
            <ListItem
              className="CustomerColMainListItem"
              leftAvatar={<Avatar icon={<FileFolder />} />}
              rightIcon={<ActionInfo />}
              primaryText="Photos"
              secondaryText="Jan 9, 2014"
            />
            <ListItem
              className="CustomerColMainListItem"
              leftAvatar={<Avatar icon={<FileFolder />} />}
              rightIcon={<ActionInfo />}
              primaryText="Photos"
              secondaryText="Jan 9, 2014"
            />
            <ListItem
              className="CustomerColMainListItem"
              leftAvatar={<Avatar icon={<FileFolder />} />}
              rightIcon={<ActionInfo />}
              secondaryText="Jan 9, 2014"
            />
            <ListItem
              className="CustomerColMainListItem"
              leftAvatar={<Avatar icon={<FileFolder />} />}
              rightIcon={<ActionInfo />}
              primaryText="Photos"
              secondaryText="Jan 9, 2014"
            />
            <ListItem
              className="CustomerColMainListItem"
              leftAvatar={<Avatar icon={<FileFolder />} />}
              rightIcon={<ActionInfo />}
              primaryText="Photos"
              secondaryText="Jan 9, 2014"
            />
            <ListItem
              className="CustomerColMainListItem"
              leftAvatar={<Avatar icon={<FileFolder />} />}
              rightIcon={<ActionInfo />}
              primaryText="Photos"
              secondaryText="Jan 9, 2014"
            />
            <ListItem
              className="CustomerColMainListItem"
              leftAvatar={<Avatar icon={<FileFolder />} />}
              rightIcon={<ActionInfo />}
              primaryText="Photos"
              secondaryText="Jan 9, 2014"
            />
            <ListItem
              className="CustomerColMainListItem"
              leftAvatar={<Avatar icon={<FileFolder />} />}
              rightIcon={<ActionInfo />}
              primaryText="Photos"
              secondaryText="Jan 9, 2014"
            />
            <ListItem
              className="CustomerColMainListItem"
              leftAvatar={<Avatar icon={<FileFolder />} />}
              rightIcon={<ActionInfo />}
              primaryText="Photos"
              secondaryText="Jan 9, 2014"
            />
          </List>
        </div>
        <div className="CustomerColLower">
          <div className="CustomerColLowerContainer">
            <div className="SpreadWidth">
              <SearchIcon class="left Icon"/>
              <input className="right"
                     type="text"
                     onChange={(e)=> {this.props.handleInput(e, 'searchQuery')}}
                     placeholder="Search..."/>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}