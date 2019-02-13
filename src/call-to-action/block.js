/**
 * Accordion: blocks
 *
 * Registering a Accordion block with Gutenberg.
 * Accordion block, renders and saves the same content without any interactivity.
 */

// Import block dependencies and components
import classnames from 'classnames';
import EditCallToAction from './components/editcalltoaction';
import CallToAction from './components/calltoaction';
//  Import CSS.
import './styles/style.scss';
import './styles/editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

// Register editor components
const {	RichText } = wp.editor;

registerBlockType( 'power-blocks/call-to-action', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Call To Action', 'power-blocks' ), // Block title.
	description: __( ' ', 'power-blocks' ),
	icon: 'format-status', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'power-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Call To Action', 'power-blocks' ),
	],
	attributes: {
		buttonText: {
			type: 'string',
		},
		buttonUrl: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
		},
		buttonAlignment: {
			type: 'string',
			default: 'center',
		},
		buttonBackgroundColor: {
			type: 'string',
			default: '#3373dc',
		},
		buttonTextColor: {
			type: 'string',
			default: '#ffffff',
		},
		buttonSize: {
			type: 'string',
			default: 'ab-button-size-medium',
		},
		buttonShape: {
			type: 'string',
			default: 'ab-button-shape-rounded',
		},
		buttonTarget: {
			type: 'boolean',
			default: false,
		},
		ctaTitle: {
			type: 'array',
			selector: '.ab-cta-title',
			source: 'children',
		},
		ctaTitleColor: {
			type: 'string',
			default: '#32373c',
		},
		titleFontSize: {
			type: 'number',
			default: '32',
		},
		ctaTextFontSize: {
			type: 'number',
			default: '16',

		},
		ctaText: {
			type: 'array',
			selector: '.ab-cta-text',
			source: 'children',
		},
		ctaWidth: {
			type: 'string',
			default: 'center',
		},
		ctaBackgroundColor: {
			type: 'string',
		},
		ctaTextColor: {
			type: 'string',
			default: '#32373c',
		},
		imgURL: {
			type: 'string',
			source: 'attribute',
			attribute: 'src',
			selector: 'img',
		},
		imgID: {
			type: 'number',
		},
		imgAlt: {
			type: 'string',
			source: 'attribute',
			attribute: 'alt',
			selector: 'img',
		},
		dimRatio: {
			type: 'number',
			default: 50,
		},
		// Deprecated
		ctaTitleFontSize: {
			type: 'string',
			default: '32',
		},
		ctaPadding: { 
			type: 'number',
			default: 0,
		},
		ctaMargin: {
			type: 'number',
			default: 0,
		},
	},

	styles: [

	],

	getEditWrapperProps( { ctaWidth } ) {
		if ( 'left' === ctaWidth || 'right' === ctaWidth || 'full' === ctaWidth ) {
			return { 'data-align': ctaWidth };
		}
	},

	edit: EditCallToAction,
	save: function( props ) {
		// Setup the attributes
		const {
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
			titleFontSize,
			ctaTextFontSize,
			ctaWidth,
			ctaBackgroundColor,
			ctaTextColor,
			imgURL,
			imgID,
			imgAlt,
			dimRatio,
		} = props.attributes;

		return (
			// <section> Call To Action Frontend </section>
			<CallToAction { ...props }>
				{ props.attributes.imgURL && (
					<div className="power-cta-image-wrap">
						<img
							className={ classnames(
								'power-cta-image',
								dimRatioToClass( props.attributes.dimRatio ),
								{
									'has-background-dim': props.attributes.dimRatio !== 0,
								}
							) }
							src={ props.attributes.imgURL }
							alt={ props.attributes.imgAlt }
						/>
					</div>
				) }

				<div className="power-cta-content">
					{ props.attributes.ctaTitle && (
						<RichText.Content
							tagName="h2"
							className={ classnames(
								'power-cta-title',
							) }
							style={ {
								color: props.attributes.ctaTextColor,
								fontSize: props.attributes.titleFontSize + 'px !important;',
							} }
							value={ props.attributes.ctaTitle }
						/>
					) }
					{ props.attributes.ctaText && (
						<RichText.Content
							tagName="div"
							className={ classnames(
								'power-cta-text',
								// 'power-font-size-' + props.attributes.ctaTextFontSize,
							) }
							style={ {
								color: props.attributes.ctaTextColor,
								fontSize: props.attributes.ctaTextFontSize + 'px !important;',
							} }
							value={ props.attributes.ctaText }
						/>
					) }
				</div>
				{ props.attributes.buttonText && (
					<div className="power-cta-button">
						<a
							href={ props.attributes.buttonUrl }
							target={ props.attributes.buttonTarget ? '_blank' : '_self' }
							className={ classnames(
								'power-button',
								props.attributes.buttonShape,
								props.attributes.buttonSize,
							) }
							style={ {
								color: props.attributes.buttonTextColor,
								backgroundColor: props.attributes.buttonBackgroundColor,
							} }
						>
							<RichText.Content
								value={ props.attributes.buttonText }
							/>
						</a>
					</div>
				) }
			</CallToAction>
		);
	},
} );

function dimRatioToClass( ratio ) {
	return ( ratio === 0 || ratio === 50 ) ? null : 'has-background-dim-' + ( 10 * Math.round( ratio / 10 ) );
}