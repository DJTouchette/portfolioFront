import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/index';
import './index.css';
import routes from './routes';
import { Router, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiTheme from './muiTheme';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const rootRoute = {
  component: App,
  childRoutes: routes,
};

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <Router
      history={hashHistory}
      routes={rootRoute}>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
