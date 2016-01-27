import React, { Component } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as BlogActions from '../../actions/BlogActions';

class BlogList extends Component {

	constructor(props) {
		super(props);
	}

	static prefetchData = [BlogActions.getPosts];

	componentDidMount() {
		// fetch API only if the content is not in the state yet
		if (this.props.blogs.length == 0) {
			this.props.getPosts();
		}
	}

	renderBlogs() {
		return this.props.blogs.map((blog) => {
			return (
				<li key={blog.question_id}>
					<Link to={`blog/${blog.question_id}/`}>{ blog.title }</Link>
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<ul>{ this.renderBlogs() }</ul>
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