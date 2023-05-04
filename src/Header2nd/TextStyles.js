import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
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
  }
  const options = [
    '',
    <p onClick={() => format({ tagname: 'p' })}> NormalText</p> ,
    <title onClick={() => format({ tagname: 'b' })}>Title'</title>,
    <p> Subtitle</p>,
    <h1 onClick={() => format({ tagname: 'h1' })}>Heading 1</h1>,
    <h2 onClick={() => format({ tagname: 'h2' })}>Heading 2</h2>,
    <h3 onClick={() => format({ tagname: 'h3' })}> Heading 3</h3>,
  
  ];

  return (
    <div className= {styles.wrapper}>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'aliceblue'}}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{height:"1.8rem"}}
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
