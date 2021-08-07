// material
import { useTheme } from '@material-ui/core/styles';
import { Box, BoxProps, Button } from '@material-ui/core';
import React from 'react';

// ----------------------------------------------------------------------

export default function Logo({ sx }: BoxProps) {
  return (
    <Box component={Button} bgcolor="palette.primary" variant="contained">
      GSVN
    </Box>
  );
}
