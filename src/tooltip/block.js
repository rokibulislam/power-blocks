/**
 * Accordion: blocks
 *
 * Registering a Accordion block with Gutenberg.
 * Accordion block, renders and saves the same content without any interactivity.
 */

import Tooltip from './components/tooltip';
import EditTooltip from './components/edittooltip';
import icons from './components/icons';
import Inspector from './components/inspector';

//  Import CSS.
import './styles/style.scss';
import './styles/editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	RichText,
} = wp.editor;


registerBlockType( 'power-blocks/tooltip', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Tooltip', 'power-blocks' ), // Block title.
	description: __( '.', 'power-blocks' ),
	icon: 'format-status', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'power-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Tooltip', 'power-blocks' ),
	],
	attributes: {

	},

	styles: [

	],

	edit: ( props ) => {
		return (
			<section>
				Tooltip Admin
			</section>
		);
	},

	save: function( props ) {

		return (
			<section>
				Tooltip Frontend
			</section>
		);
	}

});

