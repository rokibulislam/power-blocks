/**
 * Testimonial Block Wrapper
 */

// Setup the block
const { Component } = wp.element;
// Import block dependencies and components
import classnames from 'classnames';
/**
 * Create a Testimonial wrapper Component
 */
export default class Testimonial extends Component {
	render() {
		// Setup the attributes
		const {
			attributes: {
				testimonialAlignment, 
				testimonialImgURL, 
				testimonialBackgroundColor, 
				testimonialTextColor, 
				testimonialFontSize, 
				testimonialCiteAlign,
				testimonialImageStyle,
				testimonialPadding,
				testimonialMargin
			}  
		} = this.props;
		return (
			<div 
				style={ {
					backgroundColor: testimonialBackgroundColor,
					color: testimonialTextColor,
					margin: testimonialMargin,
					padding: testimonialPadding,
				} }
				className={ classnames(
					this.props.className,
					testimonialCiteAlign,
					{ 'power-has-avatar': testimonialImgURL },
					'power-font-size-' + testimonialFontSize,
					'power-block-testimonial'
				) }
			>
				{ this.props.children }
			</div>
		);
	}
}
