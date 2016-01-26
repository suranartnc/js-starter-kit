import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as BlogActions from '../../actions/BlogActions';

class BlogDetail extends Component {

	constructor(props) {
		super(props);
	}

	static prefetchData = [BlogActions.getThePost];

	componentDidMount() {
		this.props.getThePost(this.props.params);
	}

	render() {
		const { blog } = this.props;
		return (
			<article>
				<h1>{blog.title}</h1>
				<div dangerouslySetInnerHTML={{__html: blog.body}} />
			</article>
		);
	}
}

function mapStateToProps({ activeBlog }) {
	return { blog: activeBlog };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(BlogActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);