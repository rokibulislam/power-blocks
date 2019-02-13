/**
 * Accordion: blocks
 *
 * Registering a Accordion block with Gutenberg.
 * Accordion block, renders and saves the same content without any interactivity.
 */
// Import block dependencies and components
import editCountup from './components/editcountup';
//  Import CSS.
import './styles/style.scss';
import './styles/editor.scss';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

registerBlockType( 'power-blocks/countup', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Countup', 'power-blocks' ), // Block title.
	description: __( ' ', 'power-blocks' ),
	icon: 'format-status', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'power-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Countup', 'power-blocks' ),
	],
	attributes: {
		backgroundColor: {
			type: 'string',
			default: 0,
		},
		title: {
			type: 'string',
			default: 0,
		},
		titleFontSize: {
			type: 'number',
			default: 0,
		},
		titleColor: {
			type: 'string',
			default: '#343434',
		},
		content: {
			type: 'string',
			default: 0,
		},
		contentFontSize: {
			type: 'number',
			default: 0,
		},
		contentColor: {
			type: 'string',
			default: '#343434',
		},
		description: {
			type: 'string',
			default: '',
		},
		descriptionFontSize: {
			type: 'number',
			default: 0,
		},
		descriptionColor: {
			type: 'string',
			default: '#343434',
		},
	},

	styles: [

	],
	edit: editCountup,
	save: function( props ) {
		return (
			<section>
				Countup Frontend
			</section>
		);
	},
} );
