import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Ryan Flynn | Full-Stack Engineer
          </Typography>
          <Button onClick={() => {window.open('https://github.com/ryanflynndev')}} color="inherit">Github</Button>
          <Button onClick={() => window.open('https://www.linkedin.com/in/ryanflynnofficial/')} color="inherit">Linkedin</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}