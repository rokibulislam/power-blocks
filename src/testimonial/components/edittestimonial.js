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
				testimonialTextColor,
				testimonialFontSize,
				testimonialCiteAlign,
				testimonialImageStyle,
				testimonialPadding,
				testimonialMargin,
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
			<Inspector { ...{ setAttributes, ...this.props } } key={ '' } />,
			// Show the block markup in the editor
			<Testimonial { ...this.props } key={ ' ' } >
				<RichText
					tagName="div"
					multiline="p"
					placeholder={ __( 'Add testimonial Content...', 'power-blocks' ) }
					keepPlaceholderOnFocus
					value={ testimonialContent }
					formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
					className={ classnames(
						'pb-testimonial-text'
					) }
					style={ {
						textAlign: testimonialAlignment,
						color: testimonialContentColor,
						fontSize: ( testimonialContentFontSize ) ? `${testimonialContentFontSize}px` : undefined,
					} }
					onChange={ ( value ) => setAttributes( { testimonialContent: value } ) }
				/>
				<div className="pb-testimonial-info">
					<div className="pb-testimonial-avatar-wrap">
						<div className="pb-testimonial-image-wrap">
							<MediaUpload
								buttonProps={ {
									className: 'change-image',
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
											className="pb-testimonial-avatar"
											src={ testimonialImgURL }
											alt="avatar"
										/> }
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
						className="pb-testimonial-name"
						style={ {
							color: testimonialNameColor,
							textAlign: testimonialAlignment,
							fontSize: ( testimonialNameFontSize ) ? `${testimonialNameFontSize}px` : undefined,
						} }
						onChange={ ( value ) => this.props.setAttributes( { testimonialName: value } ) }
					/>
					<RichText
						tagName="small"
						placeholder={ __( 'Add title', 'power-blocks' ) }
						keepPlaceholderOnFocus
						value={ testimonialTitle }
						className="pb-testimonial-title"
						style={ {
							color: testimonialTitleColor,
							textAlign: testimonialAlignment,
							fontSize: ( testimonialTitleFontSize ) ? `${testimonialTitleFontSize}px` : undefined,
						} }
						onChange={ ( value ) => this.props.setAttributes( { testimonialTitle: value } ) }
					/>
				</div>
			</Testimonial>,
		];
	}

}
