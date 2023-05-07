import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "./NavLinks.module.css";
import html2pdf from "html2pdf.js";
const NavLinks = () => {
  const [fileAnchorEl, setFileAnchorEl] = useState(null);
  const [viewAnchorEl, setViewAnchorEl] = useState(null);
  const [editAnchorEl, setEditAnchorEl] = useState(null);
  const [formatAnchorEl, setFormatAnchorEl] = useState(null);
  const [toolsAnchorEl, setToolsAnchorEl] = useState(null);

  const handleFileClick = (event) => {
    setFileAnchorEl(event.currentTarget);
  };
  const handleViewClick = (event) => {
    setViewAnchorEl(event.currentTarget);
  };
  const handleEditClick = (event) => {
    setEditAnchorEl(event.currentTarget);
  };
  const handleFormatClick = (event) => {
    setFormatAnchorEl(event.currentTarget);
  };
  const handleToolsClick = (event) => {
    setToolsAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setFileAnchorEl(null);
    setViewAnchorEl(null);
    setEditAnchorEl(null);
    setFormatAnchorEl(null);
    setToolsAnchorEl(null);
  };

  const handleSave = () => {
    const element = document.querySelector(".content-box");
    const opt = {
      margin: 1,
      filename: "document.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
    handleClose();
  };

  const handleSaveAs = () => {
    const element = document.querySelector(".content-box");
    const customFileName = prompt("Enter File Name");
    const opt = {
      margin: 1,
      filename: `${customFileName}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
    handleClose();
  };

  return (
    <div className={styles.menuItemsContainer}>
      <Button style={{ fontSize: "12px" }} onClick={handleFileClick}>
        File
      </Button>
      <Menu
        anchorEl={fileAnchorEl}
        open={Boolean(fileAnchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleSave();
            // handleClose();
          }}
        >
          Save
        </MenuItem>
        <MenuItem onClick={handleSaveAs}>Save As</MenuItem>
        <MenuItem onClick={handleClose}>Rename</MenuItem>
      </Menu>

      <Button style={{ fontSize: "12px" }} onClick={handleViewClick}>
        View
      </Button>
      <Menu
        anchorEl={viewAnchorEl}
        open={Boolean(viewAnchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Show print layout</MenuItem>
        <MenuItem onClick={handleClose}>Show ruler</MenuItem>
        <MenuItem onClick={handleClose}>Show outline</MenuItem>
      </Menu>

      <Button style={{ fontSize: "12px" }} onClick={handleEditClick}>
        Edit
      </Button>
      <Menu
        anchorEl={editAnchorEl}
        open={Boolean(editAnchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>undo</MenuItem>
        <MenuItem onClick={handleClose}>redo</MenuItem>
        <MenuItem onClick={handleClose}>paste</MenuItem>
      </Menu>

      <Button style={{ fontSize: "12px" }} onClick={handleFormatClick}>
        Format
      </Button>
      <Menu
        anchorEl={formatAnchorEl}
        open={Boolean(formatAnchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Text</MenuItem>
        <MenuItem onClick={handleClose}>Paragraph styles</MenuItem>
        <MenuItem onClick={handleClose}>Align & indent</MenuItem>
      </Menu>

      <Button style={{ fontSize: "12px" }} onClick={handleToolsClick}>
        Tools
      </Button>
      <Menu
        anchorEl={toolsAnchorEl}
        open={Boolean(toolsAnchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Spelling and grammar</MenuItem>
        <MenuItem onClick={handleClose}>Word count</MenuItem>
        <MenuItem onClick={handleClose}>Review suggested edits</MenuItem>
      </Menu>
    </div>
  );
};

export default NavLinks;
