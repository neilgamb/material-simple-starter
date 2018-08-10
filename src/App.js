import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  AppBar,
  IconButton,
  MuiThemeProvider,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Navigation from './Navigation';
import Home from './Home';
import Family from './Family';
import Children from './Children';
import Events from './Events';
import Proofing from './Proofing';
import About from './About';
import Contact from './Contact';
import theme from './theme';
import './App.css';

class App extends Component {
  state = { menuOpen: false, galleryColumns: 2 };

  componentWillMount = () => {
    const screenWidth = window.screen.width;
    let galleryColumns;
    if (screenWidth > 1000) {
      galleryColumns = 3;
    } else if (screenWidth > 500 && screenWidth <= 1000) {
      galleryColumns = 2;
    } else {
      galleryColumns = 1;
    }
    this.setState({ galleryColumns });
  };

  menuToggle = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    const { menuOpen, galleryColumns } = this.state;
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Fragment>
            <AppBar className={classes.appBar} position="static">
              <Toolbar>
                <IconButton onClick={this.menuToggle} className={classes.menuButton}>
                  <Menu />
                </IconButton>
                <Typography variant="title" className={classes.appBarHeader}>
                  Lark Elliott
                </Typography>
              </Toolbar>
            </AppBar>

            <Navigation open={menuOpen} menuToggle={this.menuToggle} />

            <Route
              exact
              path="/"
              render={props => <Home {...props} galleryColumns={galleryColumns} />}
            />
            <Route
              path="/family"
              render={props => <Family {...props} galleryColumns={galleryColumns} />}
            />
            <Route
              path="/children"
              render={props => <Children {...props} galleryColumns={galleryColumns} />}
            />
            <Route
              path="/events"
              render={props => <Events {...props} galleryColumns={galleryColumns} />}
            />
            <Route path="/proofing" component={Proofing} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}

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

export default withStyles(styles)(App);

App.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};
