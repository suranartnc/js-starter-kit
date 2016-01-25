import React from 'react'
import ReactDOM from 'react-dom';

import { Router }  from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import routes from './routes.js';
const history = createBrowserHistory();

ReactDOM.render(<Router children={routes} history={history} />, document.getElementById('app'));