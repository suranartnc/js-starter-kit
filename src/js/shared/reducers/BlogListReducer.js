export default function(state = [], action) {
	switch(action.type) {
		case 'GET_POSTS':
			return action.res.items;
		default:
			return state;
	}
}