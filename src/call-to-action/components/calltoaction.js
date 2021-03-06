import classnames from 'classnames';
const { Component } = wp.element;
export default class CallToAction extends Component {
	render() {
		// Setup the attributes
		const {
			attributes: {
				buttonText,
				buttonUrl,
				buttonAlignment,
				buttonBackgroundColor,
				buttonTextColor,
				buttonSize,
				buttonShape,
				buttonTarget,
				ctaTitle,
				ctaText,
				ctaTitleFontSize,
				ctaTextFontSize,
				ctaWidth,
				ctaBackgroundColor,
				ctaTextColor,
				ctaPadding,
				ctaMargin,
			}
		} = this.props;

		const className = classnames( [
			this.props.className,
			'power-block-cta',
		], {
			[ 'power-font-size-' + ctaTextFontSize ]: ctaTextFontSize,
		} );

		const styles = {
			backgroundColor: ctaBackgroundColor ? ctaBackgroundColor : undefined,
			textAlign: buttonAlignment ? buttonAlignment : undefined,
			padding: ctaPadding,
			marign: ctaMargin,
		};

		return (
			<div style={ styles } className={ className ? className : undefined } > 
				{ this.props.children } 
			</div>
		);
	}
}

