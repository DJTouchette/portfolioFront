import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MenuItems from './MenuItems';
import { menuItems } from './constants';
import Avatar from 'material-ui/Avatar';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: '99'}}>
          <AppBar
            title="Damien Touchette"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle}
          />
        </div>
        <div style={{ zIndex: '9999' }}>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Avatar
            src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-1/p320x320/14344242_10157397839770453_6370521732679464114_n.jpg?oh=b0e2c62c85f280e2fda9b9e7256006dd&oe=5907ED8F"
            style={{ width: '150px', height: '150px', marginLeft: '25px', marginTop: '10px'}}
          />
          <hr/>
          <MenuItems
            handleClick={this.handleClose.bind(this)}
            list={menuItems}
          />
          <hr/>
        </Drawer>
      </div>
      </div>
    );
  }
}

export default Menu;
