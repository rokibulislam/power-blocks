const { Component } = wp.element;
import classnames from 'classnames';
const { RichText } = wp.editor;
const { Dashicon } = wp.components;
export default class Testimonial extends Component {
	render() {

		const {
	       	attributes: {
	       		testimonialName,
		    	testimonialNameColor,
		    	testimonialNameFontSize,
		    	testimonialTitle,
		    	testimonialTitleColor,
		    	testimonialTitleFontSize,
		    	testimonialContent,
		    	testimonialContentColor,
		    	testimonialContentFontSize,
		    	testimonialAlignment,
		    	testimonialImgURL,
		    	testimonialImgID,
		    	testimonialBackgroundColor,
		    	testimonialImageStyle,
		    	testimonialPadding,
		    	testimonialMargin,
		    	image,
		    },
	    	className,
        } = this.props;

		return (

			<div
				style={ {
					backgroundColor: testimonialBackgroundColor,
					margin: testimonialMargin,
					padding: testimonialPadding,
				} }
				className={ classnames(
	            	className,
	                'pb--testimonial'
	            ) }
			>

				<RichText.Content
					tagName="p"
					className={ classnames(
	                	className,
	                    'pb-testimonial-text'
	                ) }
					style={ {
	                    textAlign: testimonialAlignment,
	                    color: testimonialContentColor,
	                    fontSize: ( testimonialContentFontSize ) ? `${ testimonialContentFontSize }px` : undefined,
	                } }
					value={ testimonialContent }
				/>

				<div className="pb-testimonial-info">
					{ image && (
						<div className="pb-testimonial-avatar-wrap">
							<div className="pb-testimonial-image-wrap">
								<img
									className="pb-testimonial-avatar"
									src={ image }
									alt="avatar"
								/>
							</div>
						</div>
					) }

			 		{ testimonialName && (
						<RichText.Content
							tagName="h3"
							className="pb-testimonial-name"
							style={ {
		                        color: testimonialNameColor,
		                        textAlign:testimonialAlignment,
		                        fontSize: ( testimonialNameFontSize ) ? `${testimonialNameFontSize}px` : undefined,
		                    } }
							value={ testimonialName }
						/>
						)
			 		}

					{ testimonialTitle && (
						<RichText.Content
							tagName="h2"
							className="pb-testimonial-title"
							 style={ {
		                        color: testimonialTitleColor,
		                        textAlign: testimonialAlignment,
		                        fontSize: ( testimonialTitleFontSize ) ? `${testimonialTitleFontSize}px` : undefined,
		                    } }
							value={ testimonialTitle }
						/>
					) }
				</div>
			</div>
		);
	}
}
