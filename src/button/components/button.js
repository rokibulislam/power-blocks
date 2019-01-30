const  { Component } = wp.element;
export default class Button extends Component {
	render() {
		const {
			attributes: {
				buttonText,
				buttonUrl,
				borderRadius,
				buttonSize,
				buttonBackground,
				borderColor,
				hoverColor,
				buttonTextColor,
				buttonTarget,
				buttonAlignment,
			},
			setAttributes,
		} = this.props;
		return (
			<div>
				<a href={ buttonText }
					style={ {
						color: buttonTextColor,
						backgroundColor: buttonBackground,
						borderRadius: borderRadius,
					} }
				> { buttonText } </a>
			</div>
		);  
	}
}
