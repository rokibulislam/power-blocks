const { Component } = wp.element;
import InstagramFeed from './instagramfeed';
import Inspector from './inspector';
export default class EditInstagramFeed extends Component {
	render() {
		const {
			attributes: {

			},
			setAttributes,
		} = this.props;
		
		return (
			<div>
				<InstagramFeed { ...this.props }> </InstagramFeed>
				<Inspector { ...{ setAttributes, ...this.props } }> </Inspector>
			</div>
		);
	}
}
