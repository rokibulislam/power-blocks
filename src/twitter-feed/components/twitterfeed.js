/**
 * Testimonial Wrapper
 */

// Setup the block
const { Component } = wp.element;

/**
 * Create a Testimonial wrapper Component
 */

export default class TwitterFeed extends Component {
	// Render
	render() {
		return (
			<div>
				{ this.props.children }
			</div>
		);
	}
}
