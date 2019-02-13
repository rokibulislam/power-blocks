const { Component } = wp.element;
export default class Ad extends Component {
	render() {
		const {
			adBackgroundColor,
			adBackgroundImage
		} = this.props;
		return (
			<div>
				Ad Frontend
			</div>
		)
	}
}