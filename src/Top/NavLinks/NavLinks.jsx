import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.menuItemsContainer}>
      <Button style={{ fontSize: "12px" }} onClick={(e) => handleClick(e)}>
        File
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Save</MenuItem>
        <MenuItem onClick={handleClose}>Save As</MenuItem>
        <MenuItem onClick={handleClose}>Rename</MenuItem>
      </Menu>
      <Button style={{ fontSize: "12px" }} onClick={(e) => handleClick(e)}>
        View
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Save</MenuItem>
        <MenuItem onClick={handleClose}>Save As</MenuItem>
        <MenuItem onClick={handleClose}>Rename</MenuItem>
      </Menu>
      <Button style={{ fontSize: "12px" }} onClick={(e) => handleClick(e)}>
        Edit
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Save</MenuItem>
        <MenuItem onClick={handleClose}>Save As</MenuItem>
        <MenuItem onClick={handleClose}>Rename</MenuItem>
      </Menu>
      <Button style={{ fontSize: "12px" }} onClick={(e) => handleClick(e)}>
        Format
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Save</MenuItem>
        <MenuItem onClick={handleClose}>Save As</MenuItem>
        <MenuItem onClick={handleClose}>Rename</MenuItem>
      </Menu>
      <Button style={{ fontSize: "12px" }} onClick={(e) => handleClick(e)}>
        Tools
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Save</MenuItem>
        <MenuItem onClick={handleClose}>Save As</MenuItem>
        <MenuItem onClick={handleClose}>Rename</MenuItem>
      </Menu>
    </div>
  );
};

export default NavLinks;
