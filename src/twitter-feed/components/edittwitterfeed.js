/**
 * TwitterFeed Wrapper
 */

// Setup the block
const { Component } = wp.element;
import TwitterFeed from './twitterfeed';

export default class EditTwitterFeed extends Component {
	// Render
	render() {
		return (
			<div>
				<TwitterFeed { ...this.props } > </TwitterFeed>
			</div>
		);
	}
}
