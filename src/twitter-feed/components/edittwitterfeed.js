const { Component } = wp.element;
import TwitterFeed from './twitterfeed';

export default class EditTwitterFeed extends Component {
	// Render
	render() {
		const {

		} = this.props;
		return (
			<div>
				<TwitterFeed { ...this.props } > </TwitterFeed>
			</div>
		);
	}
}
