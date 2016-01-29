import React from 'react'
import { render } from 'react-dom';

import { Router }  from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { syncHistory } from 'react-router-redux'

import routes from './shared/routes.js';
const history = createBrowserHistory();

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './shared/reducers';

const reduxRouterMiddleware = syncHistory(history)
import promiseMiddleware from './shared/middlewares/promiseMiddleware';

const initialState = window.__INITIAL_STATE__;
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware, promiseMiddleware)(createStore);

render(
	<Provider store={createStoreWithMiddleware(rootReducer, initialState)}>
		<Router children={routes} history={history} />
	</Provider>, document.getElementById('app'));