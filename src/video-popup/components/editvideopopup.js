/**
 * Testimonial Wrapper
 */

// Setup the block
const { Component } = wp.element;
import VideoPopup from './videopopup';
/**
 * Create a Testimonial wrapper Component
 */

export default class EditVideoPop extends Component {
	// Render
	render() {
		return (
			<div>
				<VideoPopup { ...this.props }> 
					VideoPopup Admin
				</VideoPopup>
			</div>
		);
	}
}
