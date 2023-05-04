import * as React from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonsMultiple() {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
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
  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="bold" aria-label="bold"  onClick={() => format({ tagname: 'b' })}  >
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic"  onClick={() => format({ tagname: 'i' })} >
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton value="underlined" aria-label="underlined"  onClick={() => format({ tagname: 'u' })}>
        <FormatUnderlinedIcon />
      </ToggleButton>
      <ToggleButton value="color" aria-label="color" disabled onChange={(event) =>
            format(
              {
                action: 'color',
              },
              event
            )
          }>
        <FormatColorFillIcon />
        <ArrowDropDownIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}