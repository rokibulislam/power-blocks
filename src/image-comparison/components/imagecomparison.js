/**
 * Testimonial Wrapper
 */

// Setup the block
const { Component } = wp.element;

/**
 * Create a Testimonial wrapper Component
 */

export default class ImageComparison extends Component {
	render() {
		return (
			<div>
				{ this.props.children }
			</div>
		);
	}

}
