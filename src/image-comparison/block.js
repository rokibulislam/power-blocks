/**
 * Accordion: blocks
 *
 * Registering a Accordion block with Gutenberg.
 * Accordion block, renders and saves the same content without any interactivity.
 */
// import ImageComparison from './components/imagecomparison';
import EditImageComparison from './components/editimagecomparison';
//  Import CSS.
import './styles/style.scss';
import './styles/editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

registerBlockType( 'power-blocks/image-comparison', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Image Comparison', 'power-blocks' ), // Block title.
	description: __( '.', 'power-blocks' ),
	icon: 'format-status', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'power-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Image Comparison', 'power-blocks' ),
	],
	attributes: {

	},
	styles: [

	],

	edit: EditImageComparison,

	save: function( props ) {
		return (
			<section>
				ImageComparison Frontend
			</section>
		);
	},
} );