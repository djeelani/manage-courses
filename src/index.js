import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './assets/styles.css';
import routes from './routes';
import App from './components/App';

ReactDOM.render(
  <Router>
    <App>{routes}</App>
  </Router>,
  document.getElementById('root')
);
