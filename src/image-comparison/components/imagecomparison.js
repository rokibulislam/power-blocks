const { Component } = wp.element;
export default class ImageComparison extends Component {
	render() {
		return (
			<div>
				{ this.props.children }
			</div>
		);
	}

}
