import profileCircled from '@iconify/icons-iconoir/profile-circled';
import Icon from '@iconify/react';
import { AppBar, Box, Button, Container, IconButton, Stack, Toolbar } from '@material-ui/core';
// material
import { styled } from '@material-ui/core/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
// components
import Logo from '../../components/Logo';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 64;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `1328px`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export type MenuItemProps = {
  title: string;
  path: string;
  icon?: JSX.Element;
  href?: string;
  children?: {
    subheader: string;
    items: {
      title: string;
      path: string;
    }[];
  }[];
};

const LinkStyle = styled('a')(({ theme }) => ({
  ...theme.typography.subtitle2,
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: theme.palette.text.primary,
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none'
  }
}));

export type MenuProps = {
  isOffset: boolean;
  isHome: boolean;
  navConfig: MenuItemProps[];
};

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useRouter();
  const isHome = pathname === '/';

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 16 }
          })
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" spacing={2} alignItems="center">
            <Link prefetch passHref href="/">
              <LinkStyle>Tutor</LinkStyle>
            </Link>
            <Link prefetch passHref href="/">
              <LinkStyle>Academy</LinkStyle>
            </Link>
            <Link prefetch passHref href="/">
              <LinkStyle>Become a tutor</LinkStyle>
            </Link>
            <Button variant="outlined" disableElevation sx={{ textTransform: 'uppercase' }}>
              Find tutor
            </Button>
            <IconButton>
              <Icon icon={profileCircled} />
            </IconButton>
          </Stack>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
