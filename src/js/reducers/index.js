import { combineReducers } from 'redux';

import BlogListReducer from './BlogListReducer';

const rootReducer = combineReducers({
	blogs: BlogListReducer
});

export default rootReducer;