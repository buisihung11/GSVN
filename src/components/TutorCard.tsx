import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TTutor } from 'type/tutor';

type Props = {
  tutor: TTutor;
};

const TutorCard: React.FC<Props> = ({ tutor }) => {
  const { name, avatar } = tutor;

  return (
    <Card sx={{ borderRadius: '2px' }}>
      <CardMedia sx={{ height: 330 }} image={avatar} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">BOOK THIS TUTOR</Button>
        <Button variant="outlined" disabled>
          CONTACT
        </Button>
      </CardActions>
    </Card>
  );
};

export default TutorCard;
