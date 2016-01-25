let initialState = [
	{
		id: 1,
		title: 'Title 1'
	},
	{
		id: 2,
		title: 'Title 2'
	}
]

export default function(state = initialState, action) {
	switch(action.type) {
		case 'BOOK_LOAD_MORE':
			const book = {
				id: action.id,
				title: `Title ${state.length + 1}`
			};
			return state.concat([book]);
		default:
			return state;
	}
}