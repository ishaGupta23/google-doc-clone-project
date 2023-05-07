import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Age
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10} onClick={() => document.execCommand( "fontName", false, "Arial" )}>Arial</option>
          <option value={20} onClick={() => document.execCommand( "fontName", false, "impact" )}>Impact</option>
          <option value={30} onClick={() => document.execCommand( "fontName", false, "lexend" )}>lexend</option>
          <option value={30} onClick={() => document.execCommand( "fontName", false, "lobster" )}>Lobster</option>
          <option value={30} onClick={() => document.execCommand( "fontName", false, "Caveat" )}>Caveat</option>
          <option value={30} onClick={() => document.execCommand( "fontName", false, "merriweather" )}>Merriweather</option>
          <option value={30} onClick={() => document.execCommand( "fontName", false, "Comic Sans MS" )}>Comic Sans MS</option>
          <option value={30} onClick={() => document.execCommand( "fontName", false, "eb garmond" )}>EBGarmond</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}