const { __ } = wp.i18n;
const { Component,Fragment } = wp.element;
const { RichText,AlignmentToolbar,BlockControls,MediaUpload} = wp.editor;
const { Button } = wp.components;
const ALLOWED_MEDIA_TYPES = [ 'image' ];
import classnames from 'classnames';
import Testimonial from './testimonial';
import Inspector from './inspector';
export default class EditTestimonial extends Component {
	state = {
		selected: -1,
    }
    clickHandler = ( index ) => {
		this.setState( ( state, props ) => ( {
			selected: index
		} ) )
	}
    addItems = async () => {
        this.props.setAttributes({
            testimonials: [
                ...this.props.attributes.testimonials,
                {
					index: this.props.attributes.testimonials.length,
					index: {
						type:'string',
						default:'',
					},
					testimonialName: {
						type: 'array',
						selector: '.power-testimonial-name',
						source: 'children',
					},
					testimonialNameColor: {
						type: 'string',
						default: '#32373c',
					},
					testimonialNameFontSize: {
						type: 'number',
						default: 18,
					},
					testimonialTitle: {
						type: 'array',
						selector: '.power-testimonial-title',
						source: 'children',
					},
					testimonialTitleColor: {
						type: 'string',
						default: '#32373c',
					},
					testimonialTitleFontSize: {
						type: 'number',
						default: 18,
					},
					testimonialContent: {
						type: 'array',
						selector: '.power-testimonial-text',
						source: 'children',
					},
					testimonialContentColor: {
						type: 'string',
						default: '#32373c',
					},
					testimonialContentFontSize: {
						type: 'number',
						default: 18,
					},
					testimonialAlignment: {
						type: 'string',
					},
					testimonialImgURL: {
						type: 'string',
						source: 'attribute',
						attribute: 'src',
						selector: 'img',
					},
					testimonialImgID: {
						type: 'number',
					},
					testimonialBackgroundColor: {
						type: 'string',
						default: '#f2f2f2',
					},
					testimonialTextColor: {
						type: 'string',
						default: '#32373c',
					},
					testimonialFontSize: {
						type: 'number',
						default: 18,
					},
					testimonialCiteAlign: {
						type: 'string',
						default: 'left-aligned',
					},
					testimonialImageStyle: {
						type: 'string',
					},
					testimonialPadding: {
						type: 'number',
						default: 0,
					},
					testimonialMargin: {
						type: 'number',
						default: 0,
					},
                }
            ]
        })
    }
    
    removeItem = async ( itemindex ) => {
        const newtestimonials = this.props.attributes.testimonials.filter(item => item.index != itemindex)
        .map(t => {
            if (t.index > itemindex) {
                t.index -= 1;
            }

            return t;
		});
		await this.setState( ( state, props ) => ( {
			selected: -1,
		} ) )

        this.props.setAttributes({
            testimonials: newtestimonials
        });
	}
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

		return (
		<Fragment>
			<BlockControls key="controls">
				<AlignmentToolbar
					value={ testimonialAlignment }
					onChange={ ( value ) => setAttributes( { testimonialAlignment: value } ) }
				/>
			</BlockControls>,
			{/* <Inspector { ...{ setAttributes, ...this.props } } key={ '' } />, 
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
			</Testimonial> */}
		</Fragment>
		)
	}

}
