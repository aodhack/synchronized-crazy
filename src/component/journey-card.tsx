import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 160,
  },
  media: {
  },
};

function JoureyCardView(props: {}) {
  return (
    <div>
      <Card className="journal-card-name">
        <CardMedia
          className="journal-card-media"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            桃太郎が岡山県に旅したい
          </Typography>
          <Typography component="p">
            2018-08-11 ~ 2018-08-15
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export const JourneyCard = withStyles(styles)(JoureyCardView);
