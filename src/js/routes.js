import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import BlogList from './components/Blog/BlogList';
import BlogDetail from './components/Blog/BlogDetail';

export default (
  <Route component={App} path="/">
    <Route component={BlogList} path="blog" />
    <Route component={BlogDetail} path="blog/:slug" />
  </Route>
);