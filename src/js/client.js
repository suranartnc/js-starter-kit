import React from 'react'
import ReactDOM from 'react-dom';

import { Router }  from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import routes from './routes.js';
const history = createBrowserHistory();

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducers from './reducers';
ReactDOM.render(
	<Provider store={createStore(rootReducers)}>
		<Router children={routes} history={history} />
	</Provider>, document.getElementById('app'));