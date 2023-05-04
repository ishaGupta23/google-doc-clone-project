import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



export default function FontSize() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const divRef = React.useRef();
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const createElement = (tagname, text) => {
    const node = document.createElement(tagname);
    node.innerText = text;
    return node;
  };

  const format = ({ tagname, action }: any, event) => {
    const selection = window.getSelection().toString();
    const range = window.getSelection().getRangeAt(0);

    const insertNode = (node) => {
      range.deleteContents();
      range.insertNode(node);
    };

    if (tagname) {
      insertNode(createElement(tagname, selection));
      return;
    }
    if (action == 'impact') {
        divRef.current.firstElementChild.style.fontFamily = 'Comic Sans MS';
      }
  }
  const options = [
    <h3>More fonts</h3>,
    <p style={{fontFamily:'arial'}}onClick={() => format({ tagname: 'arial' })}>Arial</p>,
    <p style={{fontFamily:'impact'}}onClick={() => format({ tagname: 'impact'})}>Impact</p>,
    <p style={{fontFamily:'lexend'}}> Lexend</p>,
    <p style={{fontFamily:'lobster'}}>Lobster</p>,
    <p style={{fontFamily:' Caveat'}}> Caveat</p>,
    <p style={{fontFamily:'merriweather'}}>Merriweather</p>,
    <p style={{fontFamily:'Comic Sans MS'}}> Comic Sans MS</p>,
    <p style={{fontFamily:'eb garmond'}}> EB Garmond</p>
  ];

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'aliceblue' }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{height:"1.8rem", }}
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
