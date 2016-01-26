export default function(state = {}, action) {
	console.log(`Action received: ${action.type}`);
	switch(action.type) {
		case 'GET_THE_POST':
			return action.res.items[0];
		case 'GET_THE_POST_REQUEST':
			return {};
		default:
			return state;
	}
}