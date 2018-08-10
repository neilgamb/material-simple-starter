import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const AppBarWrapper = props => (
  <AppBar className={props.classes.appBar} position="static">
    <Toolbar>
      <IconButton onClick={props.menuToggle} className={props.classes.menuButton}>
        <Menu />
      </IconButton>
      <Typography variant="title" className={props.classes.appBarHeader}>
        My Site
      </Typography>
    </Toolbar>
  </AppBar>
);

const styles = {
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  appBarHeader: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export default withStyles(styles)(AppBarWrapper);

AppBarWrapper.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  menuToggle: PropTypes.func,
};

AppBarWrapper.defaultProps = {
  menuToggle: () => {},
};
