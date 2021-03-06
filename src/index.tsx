import * as React from 'React';
import * as ReactDOM from "react-dom";
import { App } from './containers/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { History } from 'history';
import './index.css';
import { Redirect } from 'react-router';
import { BoardTypes } from './boardTypes';

ReactDOM.render(
  <Router>
      <Route path="/" component={App}/>
  </Router>,
  document.getElementById('root')
);
