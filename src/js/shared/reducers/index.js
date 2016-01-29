import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux'

import BlogListReducer from './BlogListReducer';
import BlogActiveReducer from './BlogActiveReducer';

const rootReducer = combineReducers({
	blogs: BlogListReducer,
	activeBlog: BlogActiveReducer,
	routing: routeReducer
});

export default rootReducer;