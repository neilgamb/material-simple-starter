import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, IconButton, Toolbar, Typography, withStyles, withTheme } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

function AppBarWrapper(props) {
  return (
    <AppBar
      // style={{ position: props.type === 'secondary' ? 'absolute' : 'static' }}
      style={
        props.type === 'secondary'
          ? {
              position: 'absolute',
              zIndex: -1,
            }
          : {
              position: 'static',
              zIndex: 0,
            }
      }
      className={props.classes.appBar}
      position="static"
    >
      <Toolbar>
        {props.type === 'primary' ? (
          <IconButton onClick={props.menuToggle} className={props.classes.menuButton}>
            <Menu />
          </IconButton>
        ) : null}
        <Typography
          style={
            props.type === 'secondary'
              ? {
                  marginLeft: 160,
                  color: props.theme.palette.text.secondary,
                }
              : {
                  marginLeft: 'auto',
                  zIndex: 0,
                  color: props.theme.palette.text.primary,
                }
          }
          variant="title"
          className={props.classes.appBarHeader}
        >
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

const styles = {
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    top: 0,
  },
  appBarHeader: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export default withTheme()(withStyles(styles)(AppBarWrapper));

AppBarWrapper.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  menuToggle: PropTypes.func,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  theme: PropTypes.instanceOf(Object).isRequired,
};

AppBarWrapper.defaultProps = {
  menuToggle: () => {},
};
