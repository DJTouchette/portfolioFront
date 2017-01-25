import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

import './Menu.css';

const MenuItems = (props) => {
  const { list, handleClick } = props;
  const items = list.map((item) => {
    return (
      <MenuItem onTouchTap={handleClick.bind(this)} key={item.route}>
        <Link className="atag" to={item.route}>
          <div className="icon">
            <span>{item.text}</span>
            <img alt={item.text} src={item.icon} />
          </div>
        </Link>
      </MenuItem>
    )
  });

  return(
    <div>
      {items}
    </div>
  )
}

export default MenuItems;
