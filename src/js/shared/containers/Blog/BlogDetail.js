import React, { Component } from 'react';
import Helmet from 'react-helmet';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as BlogActions from '../../actions/BlogActions';

class BlogDetail extends Component {

	constructor(props) {
		super(props);
	}

	static prefetchData = [BlogActions.getThePost];

	componentDidMount() {
		// fetch API only if the content is not in the state yet
		if (this.props.params.question_id != this.props.blog.question_id) {
			this.props.getThePost(this.props.params);
		}
	}

	render() {
		const { blog } = this.props;
		return (
			<article>
				<Helmet
				    title={ blog.title }
				    meta={[
				        {"name": "description", "content": "add description here..."}
				    ]}
				/>
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