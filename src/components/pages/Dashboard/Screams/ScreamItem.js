import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default function SimpleItem({scream}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component={Link} to={`users/${scream.userHandle}`}>{scream.userHandle}</Typography>
        <Typography variant="body1" component="p">{scream.body}</Typography>
        <Typography variant="body2" component="p">{scream.createdAt}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    display:'flex',
    minWidth: 275,
    marginBottom:20
  },
  title: {
    fontSize: 14,
  }

});