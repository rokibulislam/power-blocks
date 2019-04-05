const { Component, } = wp.element;
import VideoPopup from './videopopup';
import Inspector from './inspector';
export default class EditVideoPopup extends Component {
	// Render
	render() {
		const {
			setAttributes,
		} = this.props
		return (
			<div>
				<Inspector { ...{ setAttributes, ...this.props } }> </Inspector>
				<VideoPopup { ...this.props }>
					VideoPopup Admin
				</VideoPopup>
			</div>
		);
	}
}
