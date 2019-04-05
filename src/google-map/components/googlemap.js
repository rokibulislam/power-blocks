const { Component } = wp.element;
export default class Googlemap extends Component {
	render() {
		return (
			<div>
				{ this.props.children }
			</div>
		);
	}
}
