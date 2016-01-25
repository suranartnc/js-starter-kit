import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as BlogActions from '../../actions/BlogActions';

class BlogList extends Component {

	constructor(props) {
		super(props);
		this.handleLoadMoreButton = this.handleLoadMoreButton.bind(this);
	}

	handleLoadMoreButton() {
		this.props.loadMoreBooks(2);
	}

	renderBlogs() {
		return this.props.blogs.map((blog) => {
			return (
				<li key={blog.title}>{ blog.title }</li>
			);
		});
	}

	render() {
		return (
			<div>
				<ul>{ this.renderBlogs() }</ul>
				<button onClick={ this.handleLoadMoreButton }>Load more</button>
			</div>
		);
	}
}

function mapStateToProps({ blogs }) {
	return { blogs };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(BlogActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);