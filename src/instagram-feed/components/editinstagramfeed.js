/**
 * TwitterFeed Wrapper
 */

// Setup the block
const { Component } = wp.element;
import InstagramFeed from './instagramfeed';
export default class EditInstagramFeed extends Component {
	render() {
		return (
			<div>
				<InstagramFeed { ...this.props }> </InstagramFeed>
			</div>
		);
	}
}
