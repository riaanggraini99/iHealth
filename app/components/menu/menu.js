import React from 'react';
import ReactDOM from 'react-dom';
import { FormattedMessage } from 'react-intl';
import styles from './style.css';


var Navigation = React.createClass({
	render: function() {
		return (
			<div id="navigation" className="Navigation">
				<nav>
					<ul>
						<li>Browse</li>
						<li>My list</li>
						<li>Top picks</li>
						<li>Recent</li>
					</ul>
				</nav>
			</div>
		);
	}
});
