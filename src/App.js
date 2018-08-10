import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, withStyles } from '@material-ui/core';
import AppBarWrapper from './components/AppBarWrapper';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import theme from './styles/theme';
import './styles/App.css';

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
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Fragment>
            <AppBarWrapper menuToggle={this.menuToggle} />
            <Navigation open={menuOpen} menuToggle={this.menuToggle} />
            <Route
              exact
              path="/"
              render={props => <Home {...props} galleryColumns={galleryColumns} />}
            />
            <Route
              path="/gallery"
              render={props => <Gallery {...props} galleryColumns={galleryColumns} />}
            />
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
