/**
 * Accordion: blocks
 *
 * Registering a Accordion block with Gutenberg.
 * Accordion block, renders and saves the same content without any interactivity.
 */

// Import block dependencies and components
import Accordion from './components/accordion';
import EditAccordion from './components/editaccordion';
//  Import CSS.
import './styles/style.scss';
import './styles/editor.scss';

// Components
const { __ } = wp.i18n;
// Register block
const { registerBlockType } = wp.blocks;

// Register editor components
const {	RichText } = wp.editor;

registerBlockType( 'power-blocks/accordion', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Accordion', 'power-blocks' ), // Block title.
	description: __( '.', 'power-blocks' ),
	icon: 'format-status', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'power-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'accordion', 'power-blocks' ),
	],
	attributes: {
		accordionTitle: {
			type: 'array',
			selector: '.power-accordion-title',
			source: 'children',
		},
		accordionText: {
			type: 'array',
			selector: '.power-accordion-text',
			source: 'children',
		},
		accordionAlignment: {
			type: 'string',
		},
		accordionFontSize: {
			type: 'number',
			default: 18,
		},
		accordionOpen: {
			type: 'boolean',
			default: false,
		},
		accordionTitleFontSize: {
			type: 'number',
			default: 18,
		},
		accordionContentFontSize: {
			type: 'number',
			default: 18,
		},
		accordionTitleColor: {
			type: 'string',
			default: '#fff',
		},
		accordionContentColor: {
			type: 'string',
			default: '#fff',
		},
		accordionTitleBackgroundColor: {
			type: 'string',
			default: '#fff',
		},
		accordionContentBackgroundColor: {
			type: 'string',
			default: '#fff',
		},
	},

	styles: [

	],

	edit: EditAccordion,

	save: function( props ) {
		return (
			<Accordion { ...props }>
				<details open={ props.attributes.accordionOpen }>
					<summary className="power-accordion-title">
						<RichText.Content
							value={ props.attributes.accordionTitle }
						/>
					</summary>
					<RichText.Content
						className="power-accordion-text"
						tagName="p"
						value={ props.attributes.accordionText }
					/>
				</details>
			</Accordion>
		);
	},
} );
