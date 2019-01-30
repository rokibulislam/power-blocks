const { Component } = wp.element;
import classnames from 'classnames';
export default class Newsletter extends Component {
	render() {
		const {
			attributes : {
				emailFieldLabel,
				nameFieldLabel,
				submitFieldLabel,
				successMessage,
				errorMessage,
				submitMessage,
				duplicateMessage,
				apiKey,
				submitButtonTextColor,
				submitButtonBackgroundColor,
				newsletterbackgroundColor,
			},
			setAttributes,
			isSelected,
			className,
		} = this.props;
		return (
			<div
				className={ classnames(
					this.props.className
				) }
				style={ {
					backgroundColor: newsletterbackgroundColor,
				} } >
				<input type="text" className="pb-mc-name" name="pb-mc-name" value="" placeholder="" />
				<input type="text" className="pb-mc-email" name="pb-mc-email" value="" placeholder="" />
				<input type="submit" className="pb-mc-submit"
					style={ {
						color: submitButtonTextColor,
						backgroundColor: submitButtonBackgroundColor,
					} }
					name="pb-mc-submit" value="Subscribe" />
			</div>
		);
	}
}
