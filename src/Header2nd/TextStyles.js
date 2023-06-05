import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import styles from './buttonwrap.module.css'

export default function TextStyles() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
   "   ",
    <p  onClick={() => document.execCommand("fontSize", false, "16px")}> NormalText</p> ,
    <p onClick={() => document.execCommand("fontSize", false, "50px")} >Title'</p>,
    <p onClick={() =>document.execCommand('formatBlock', false, 'h1')}>Heading 1</p>,
    <p onClick={() => document.execCommand('formatBlock', false, 'h2')} >Heading 2</p>,
    <p onClick={() => document.execCommand('formatBlock', false, 'h3')}> Heading 3</p>,
  
  ];

  return (
    <div className= {styles.wrapper}>
      <List
        component="nav"
        aria-label="Device settings"
       
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{height:"2.5rem",width:"7rem" }}
        >
          <ListItemText
          primary=  {options[selectedIndex]}
           
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
