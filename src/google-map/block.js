/**
 * Accordion: blocks
 *
 * Registering a Accordion block with Gutenberg.
 * Accordion block, renders and saves the same content without any interactivity.
 */
//  Import CSS.
import './styles/style.scss';
import './styles/editor.scss';
import EditGooglemap from './components/editgooglemap';
import Googlemap from './components/googlemap';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
registerBlockType( 'power-blocks/google-map', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Google Map', 'power-blocks' ), // Block title.
	description: __( '.', 'power-blocks' ),
	icon: 'format-status', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'power-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Google Map', 'power-blocks' ),
	],
	attributes: {
		location: {
			type: 'string',
		},
		type: {
			type: 'string',
			default: 'roadmap',
		},
		zoom: {
			type: 'number',
			default: 10,
		},
		height: {
			type: 'string',
			default: '400px',
		},
	},

	styles: [

	],

	edit: EditGooglemap,
	save: function( props ) {
		return (
			<section>
				<Googlemap { ...props } >
					Google Map Frontend
				</Googlemap>
			</section>
		);
	},
} );
