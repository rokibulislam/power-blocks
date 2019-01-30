/**
 * Accordion: blocks
 *
 * Registering a Accordion block with Gutenberg.
 * Accordion block, renders and saves the same content without any interactivity.
 */

import Testimonial from './components/testimonial';
import EditTestimonial from './components/edittestimonial';

//  Import CSS.
import './styles/style.scss';
import './styles/editor.scss';

// Internationalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;
// Register editor components
const {	RichText } = wp.editor;

registerBlockType( 'power-blocks/testimonial', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Testimonial', 'power-blocks' ), // Block title.
	description: __( '.', 'power-blocks' ),
	icon: 'format-status', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'power-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Testimonial', 'power-blocks' ),
	],

	attributes: {
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
	},

	styles: [

	],

	edit: EditTestimonial,

	save: function( props ) {
		// Setup the attributes
		const {
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
		} = props.attributes;
		return (
			<Testimonial { ...props }>
				<RichText.Content
					tagName="div"
					className="power-testimonial-text"
					style={ {
						textAlign: testimonialAlignment,
					} }
					value={ testimonialContent }
				/>

				<div className="power-testimonial-info">
					{ testimonialImgURL && (
						<div className="power-testimonial-avatar-wrap">
							<div className="power-testimonial-image-wrap">
								<img
									className="power-testimonial-avatar"
									src={ testimonialImgURL }
									alt="avatar"
								/>
							</div>
						</div>
					) }

					{ testimonialName && (
						<RichText.Content
							tagName="h2"
							className="power-testimonial-name"
							style={ {
								color: testimonialTextColor,
							} }
							value={ testimonialName }
						/>
					) }

					{ testimonialTitle && (
						<RichText.Content
							tagName="small"
							className="power-testimonial-title"
							style={ {
								color: testimonialTextColor,
							} }
							value={ testimonialTitle }
						/>
					) }
				</div>
			</Testimonial>
		);
	},
} );
