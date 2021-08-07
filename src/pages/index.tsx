import Icon from '@iconify/react';
import downArrowIcon from '@iconify/icons-eva/arrow-downward-fill';
import { Button, Container, Stack, TextField, Typography } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { Box } from '@material-ui/system';
import BackToTop from 'components/BackToTop';
import SupportBtn from 'components/SupportBtn';
import MainNavbar from 'layouts/main/MainNavbar';

const ScrollDownWrapper = styled(Box)({
  position: 'absolute',
  left: '50%',
  bottom: '5px',
  transform: 'translate(-50%,0)',
  textAlign: 'center'
});

const Index = () => {
  return (
    <>
      <BackToTop />
      <SupportBtn />
      <MainNavbar />
      <Container>
        <ScrollDownWrapper>
          <Typography variant="caption">If not, scroll down to discover</Typography>
          <Box>
            <Icon icon={downArrowIcon} />
          </Box>
        </ScrollDownWrapper>
        <Box
          width="880px"
          mx="auto"
          textAlign="center"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="cetnter"
          flexDirection="column"
        >
          <Box mb={4}>
            <Typography variant="h3" component="h1">
              GSVN tự hào là nền tảng đầu tiên cung cấp đội ngũ tutor chất lượng tại việt nam
            </Typography>
            <Typography variant="body1">
              Dù là online hay offline, đội ngũ tutors chất lượng được GSVN kiểm định sẽ giúp sự học
              của bạn được nâng lên một tầm cao mới. Chỉ với một vài thông tin bên dưới, chúng tôi
              sẽ gợi ý ngay cho bạn những lựa chọn tốt nhất!
            </Typography>
          </Box>
          <Stack mx="auto" spacing={2} sx={{ width: '100%' }}>
            <TextField fullWidth placeholder="Môn học bạn quan tâm" />
            <TextField fullWidth placeholder="Khu vực ưu tiên" />
            <Box>
              <Button size="large" variant="outlined">
                <Typography sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                  Find me a tutor now
                </Typography>
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Index;
