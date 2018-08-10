import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Button,
  ButtonBase,
  Grid,
  Paper,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Phone, Email } from '@material-ui/icons';

function Contact(props) {
  const { classes } = props;
  return (
    <Fragment>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography className={classes.PageTitle} color="secondary" variant="title">
            {'>> Contact'}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} className={classes.paper}>
              <Typography align="left" variant="subheading">
                <div className={classes.contactItem}>
                  <div className={classes.contactItemType}>Email</div>
                  <a href="mailto:neilgamb@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div className={classes.contactItemValue}>
                      <Email className={classes.contactItemIcon} />neilgamb@gmail.com
                    </div>
                  </a>
                </div>
              </Typography>
              <Typography align="left" variant="subheading">
                <div className={classes.contactItem}>
                  <div className={classes.contactItemType}>Phone</div>
                  <a href="tel:1-704-576-3165">
                    <div className={classes.contactItemValue}>
                      <Phone className={classes.contactItemIcon} />704.576.3165
                    </div>
                  </a>
                </div>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paperContactForm}>
              <form method="POST" action="https://formspree.io/neilgamb@gmail.com">
                <TextField
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="your@email.com"
                  margin="normal"
                />
                <br />
                <TextField
                  placeholder="Type your message here"
                  label="Message"
                  name="message"
                  multiline
                  rows="4"
                  margin="normal"
                />
                <br />
                <Button>
                  <ButtonBase type="submit">Send</ButtonBase>
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paperContactForm: {
    color: theme.palette.text.secondary,
  },
  contactItem: {
    display: 'flex',
  },
  contactItemType: {
    width: 75,
    color: theme.palette.text.secondary,
  },
  contactItemValue: {
    display: 'flex',
    alignItems: 'center',
  },
  contactItemIcon: {
    fontSize: 18,
    marginRight: 10,
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

export default withStyles(styles)(Contact);

Contact.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};
