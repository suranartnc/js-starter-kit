import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import BlogList from './containers/Blog/BlogList';
import BlogDetail from './containers/Blog/BlogDetail';

export default (
  <Route component={App} path="/">
    <Route component={BlogList} path="blog" />
    <Route component={BlogDetail} path="blog/:question_id" />
  </Route>
);