import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';




export default function FontType() {
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

  const options = [ "",
                     <p onClick={() => document.execCommand( "fontName", false, "Arial" )}> Arial  </p>,
                     <p onClick={() => document.execCommand( "fontName", false, "lexend" )}>lexend</p>,
                     <p onClick={() => document.execCommand( "fontName", false, "impact" )}> Impact </p>,
                     <p onClick={() => document.execCommand( "fontName", false, "Lobster" )}>Lobster</p>,
                     <p onClick={() => document.execCommand( "fontName", false, "caveat" )}>Caveat</p>,
                     <p onClick={() => document.execCommand( "fontName", false, "merriweather" )}>Merriweather  </p>,
                     <p onClick={() => document.execCommand( "fontName", false, "Comic Sans MS" )}> Comic Sans MS </p>,
                     <p onClick={() => document.execCommand( "fontName", false, "EB Garmond" )}>EB Garmond  </p>,
            ];


  return (
    <div >
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
          sx={{height:"2.5rem" ,width:"7rem"}}
        >
          
          <ListItemText
            primary= {options[selectedIndex]}
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
