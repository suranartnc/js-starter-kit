export function loadMoreBooks() {
	return {
		type: 'BOOK_LOAD_MORE',
		id: (new Date()).getTime()
	}
} 