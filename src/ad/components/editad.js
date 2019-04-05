const { Component } = wp.element;
export default class EditAd extends Component {
	render() {
		const {
			adBackgroundColor,
			adBackgroundImage
		} = this.props;
		return (
			<section>
				Ad Backend
			</section>
		)
	}
}