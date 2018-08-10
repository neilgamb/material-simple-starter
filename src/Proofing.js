import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Button, Grid, Paper, Toolbar, Typography, withStyles } from '@material-ui/core';

const Proofing = props => (
  <Fragment>
    <AppBar className={props.classes.appBar} position="static">
      <Toolbar>
        <Typography className={props.classes.PageTitle} color="secondary" variant="title">
          {'>> Proofing'}
        </Typography>
      </Toolbar>
    </AppBar>

    <div className={props.classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Paper elevation={0} className={props.classes.paper}>
            <Typography align="left" paragraph variant="subheading">
              Instructions on how to access / view / order proofs via third party proofing
              application (ie Pixieset) will go here
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={0} className={props.classes.paper}>
            <Typography align="left" paragraph variant="subheading">
              Link to Pixieset will go here
            </Typography>
            <Button variant="contained">Launch Pixieset!</Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  </Fragment>
);

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  PageTitle: {
    marginLeft: 180,
  },
  appBar: {
    position: 'absolute',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    top: 0,
    zIndex: -1,
  },
  appBarHeader: {
    flexGrow: 1,
  },
});

export default withStyles(styles)(Proofing);

Proofing.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};
