import React from 'react';
import { Router } from 'react-router';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes';
import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
