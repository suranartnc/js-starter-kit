import { combineReducers } from 'redux';

import BlogListReducer from './BlogListReducer';
import BlogActiveReducer from './BlogActiveReducer';

const rootReducer = combineReducers({
	blogs: BlogListReducer,
	activeBlog: BlogActiveReducer
});

export default rootReducer;