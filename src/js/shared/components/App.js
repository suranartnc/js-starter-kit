import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

if (process.env.BROWSER) {
	require('./App.scss');
}

export default class App extends Component {
	render() {
		return (
			<div>
		      	<Helmet
				    title="Isomorphic Boilerplate"
				/>
		      	<nav>
			      	<ul>
			      		<li><Link to={`/`}>Home</Link></li>
			      		<li><Link to={`/blog`}>Blog</Link></li>
			      	</ul>
			    </nav>
			    <div>
			        {this.props.children}
			    </div>
	      	</div>
		);
	}
}