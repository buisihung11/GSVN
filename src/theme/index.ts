import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import foundations from './foundations';

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  cssVarPrefix: 'chakra'
};

export const theme = {
  ...foundations,
  config
};

export default extendTheme(theme);
