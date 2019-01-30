/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { Component } = wp.element;

export default class PostGrid extends Component {
	render() {
		return (
			<div>
				{ this.props.children }
			</div>
		);
	}
}
