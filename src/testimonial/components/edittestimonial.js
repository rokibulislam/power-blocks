/**
 * Countup Wrapper
 */

// Internationalization
const { __ } = wp.i18n;
// Extend component
const { Component } = wp.element;
// Register editor components
const {
	RichText,
	AlignmentToolbar,
	BlockControls,
	MediaUpload,
} = wp.editor;
// Register components
const { Button } = wp.components;
const ALLOWED_MEDIA_TYPES = [ 'image' ];

import classnames from 'classnames';
import Testimonial from './testimonial';
import Inspector from './inspector';

export default class EditTestimonial extends Component {
	// render
	render() {
		// Setup the attributes
		const {
			attributes: {
				testimonialName,
				testimonialTitle,
				testimonialContent,
				testimonialAlignment,
				testimonialImgURL,
				testimonialImgID,
				testimonialBackgroundColor,
				testimonialTextColor,
				testimonialFontSize,
				testimonialCiteAlign
			},
			attributes,
			isSelected,
			editable,
			className,
			setAttributes
		} = this.props;

		const onSelectImage = img => {
			setAttributes( {
				testimonialImgID: img.id,
				testimonialImgURL: img.url,
			} );
		};

		return [
			// Show the alignment toolbar on focus
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ testimonialAlignment }
					onChange={ ( value ) => setAttributes( { testimonialAlignment: value } ) }
				/>
			</BlockControls>,
			// Show the block controls on focus
			<Inspector
				{ ...{ setAttributes, ...this.props } }
			/>,
			// Show the block markup in the editor
			<Testimonial { ...this.props }>
				<RichText
					tagName="div"
					multiline="p"
					placeholder={ __( 'Add testimonial text...', 'power-blocks' ) }
					keepPlaceholderOnFocus
					value={ testimonialContent }
					formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
					className={ classnames(
						'power-testimonial-text'
					) }
					style={ {
						textAlign: testimonialAlignment,
					} }
					onChange={ ( value ) => setAttributes( { testimonialContent: value } ) }
				/>

				<div class="ab-testimonial-info">
					<div class="ab-testimonial-avatar-wrap">
						<div class="ab-testimonial-image-wrap">
							<MediaUpload
								buttonProps={ {
									className: 'change-image'
								} }
								onSelect={ ( img ) => setAttributes(
									{
										testimonialImgID: img.id,
										testimonialImgURL: img.url,
									}
								) }
								allowed={ ALLOWED_MEDIA_TYPES }
								type="image"
								value={ testimonialImgID }
								render={ ( { open } ) => (
									<Button onClick={ open }>
										{ <img
											class="power-testimonial-avatar"
											src={ testimonialImgURL }
											alt="avatar"
										/>  }
									</Button>
								) }
							>
							</MediaUpload>
						</div>
					</div>

					<RichText
						tagName="h2"
						placeholder={ __( 'Add name', 'power-blocks' ) }
						keepPlaceholderOnFocus
						value={ testimonialName }
						className='power-testimonial-name'
						style={ {
							color: testimonialTextColor
						} }
						onChange={ ( value ) => this.props.setAttributes( { testimonialName: value } ) }
					/>

					<RichText
						tagName="small"
						placeholder={ __( 'Add title', 'power-blocks' ) }
						keepPlaceholderOnFocus
						value={ testimonialTitle }
						className='power-testimonial-title'
						style={ {
							color: testimonialTextColor
						} }
						onChange={ ( value ) => this.props.setAttributes( { testimonialTitle: value } ) }
					/>

				</div>
			</Testimonial>
		];
	}

}
