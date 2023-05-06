import * as React   from 'react';
import {useState}  from 'react'
import { styled } from '@mui/material/styles';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { MuiColorInput } from 'mui-color-input'



const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export default function CustomizedDividers() {
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);
  const [color, setColor] = React.useState('#ffffff')
  
  const handleChange = (color) => {
    setColor(color)
    document.execCommand('foreColor', false, color.toLocaleString())
  }


  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          flexWrap: 'wrap',
        }}
      >
         
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned" onClick={() => document.execCommand("justifyLeft")}>
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered" onClick={() => document.execCommand("justifyCenter")}>
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned" onClick={() => document.execCommand("justifyRight")}>
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" onClick={() => document.execCommand("justifyFull")}>
            <FormatAlignJustifyIcon />
          </ToggleButton>
          
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >

          <ToggleButton value="bold" aria-label="bold" onClick={() => document.execCommand('bold')}>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic" onClick={() => document.execCommand('italic')}>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined" onClick={() => document.execCommand('underline')}>
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value="color" aria-label="color" >
            <FormatColorFillIcon />
            
            <ArrowDropDownIcon />
                     
          </ToggleButton>
          
        </StyledToggleButtonGroup>
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
        <ToggleButton value="list" aria-label="list"  onClick={() => document.execCommand("insertUnorderedList")}>
            <FormatListBulletedIcon />
          </ToggleButton>
          <ToggleButton value="Numberedlist" aria-label="Numberedlist" onClick={() => document.execCommand('insertOrderedList')} >
            <FormatListNumberedIcon />
          </ToggleButton>
          </StyledToggleButtonGroup>
          <MuiColorInput value={color}  onChange={handleChange} id="outlined-size-normal" />
          
      </Paper>

      
    
 
    </div>
  );
}