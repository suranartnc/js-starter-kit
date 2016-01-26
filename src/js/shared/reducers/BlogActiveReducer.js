export default function(state = {}, action) {
	switch(action.type) {
		case 'GET_THE_POST':
			return action.res.items[0];
		default:
			return state;
	}
}