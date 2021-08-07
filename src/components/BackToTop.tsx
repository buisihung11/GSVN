import { Fab, Box, Typography, Stack } from '@material-ui/core';
import { Icon } from '@iconify/react';
import arrowUp from '@iconify/icons-eva/arrow-upward-fill';
import { styled } from '@material-ui/styles';

const Wrapper = styled(Box)({
  position: 'absolute',
  bottom: 16,
  right: 64,
  textAlign: 'center'
});

const BackToTop = () => {
  return (
    <Wrapper>
      <Stack spacing={1} alignItems="center">
        <Fab size="medium" color="default" aria-label="add">
          <Icon icon={arrowUp} width={24} />
        </Fab>
        <Typography variant="subtitle2">BACK TO TOP</Typography>
      </Stack>
    </Wrapper>
  );
};

export default BackToTop;
