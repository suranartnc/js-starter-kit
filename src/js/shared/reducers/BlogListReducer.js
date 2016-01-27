export default function(state = [], action) {
	switch(action.type) {
		case 'GET_POSTS':
			return action.res.items;
		case 'GET_POSTS_REQUEST':
			return [];
		default:
			return state;
	}
}