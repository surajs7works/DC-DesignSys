import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';



export default {
  title: "Breadscrumb"
};



const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export function Breadscrumb() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
        The Silver River (2019)
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Community
        </Link>
        <Typography color="textPrimary">Reviews</Typography>
      </Breadcrumbs>     
    </div>
  );
}
