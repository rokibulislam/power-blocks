const { Component } = wp.element;
export default class TwitterFeed extends Component {
	render() {
		return (
			<div>
				{ this.props.children }
			</div>
		);
	}
}
