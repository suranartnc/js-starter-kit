require('es6-promise').polyfill();
require('isomorphic-fetch');

const API_URL = 'https://api.stackexchange.com/';

export function getPosts() {
	return {
		type: 'GET_POSTS',
		promise: fetch(`${API_URL}2.2/questions?order=desc&sort=activity&site=stackoverflow`)
	}
} 

export function getThePost(params) {
	return {
		type: 'GET_THE_POST',
   		promise: fetch(`${API_URL}2.2/questions/${params.question_id}?order=desc&sort=activity&site=stackoverflow&filter=withbody`)
	}
}