import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
	render() {
		return (
			<div>
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