// material
import { useTheme } from '@material-ui/core/styles';
import { Box, BoxProps, Button } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';

// ----------------------------------------------------------------------

export default function Logo({ sx }: BoxProps) {
  return (
    <Link href="/">
      <Button
        variant="contained"
        sx={{ fontWeight: '900', height: '40px', width: '140px', fontSize: '1.4rem' }}
        disableElevation
      >
        GSVN
      </Button>
    </Link>
  );
}
