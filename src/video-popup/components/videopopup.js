/**
 * TwitterFeed Wrapper
 */

// Setup the block
const { Component } = wp.element;

export default class VideoPopUp extends Component {
	// Render
	render() {
		return (
			<div> { this.props.children } </div>
		);
	}
}
