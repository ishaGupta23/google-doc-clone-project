import * as React from 'react';
import Box from '@mui/material/Box';

import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function FontType() {
  return (
    <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth>
        <NativeSelect
          defaultValue={1}
          inputProps={{
            name: 'Font',
           
          }}
          enabled
        >
          <option value={1} onClick={() => document.execCommand( "fontName", false, "Arial" )}>Arial</option>
          <option value={2} onClick={() => document.execCommand( "fontName", false, "impact" )}>Impact</option>
          <option value={3} onClick={() => document.execCommand( "fontName", false, "lexend" )}>lexend</option>
          <option value={4} onClick={() => document.execCommand( "fontName", false, "lobster" )}>Lobster</option>
          <option value={5} onClick={() => document.execCommand( "fontName", false, "Caveat" )}>Caveat</option>
          <option value={6} onClick={() => document.execCommand( "fontName", false, "merriweather" )}>Merriweather</option>
          <option value={7} onClick={() => document.execCommand( "fontName", false, "Comic Sans MS" )}>Comic Sans MS</option>
          <option value={8} onClick={() => document.execCommand( "fontName", false, "eb garmond" )}>EBGarmond</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}