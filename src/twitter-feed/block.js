/**
 * Accordion: blocks
 *
 * Registering a Accordion block with Gutenberg.
 * Accordion block, renders and saves the same content without any interactivity.
 */

import TwitterFeed from './components/twitterfeed';
import EditTwitterFeed from './components/edittwitterfeed';
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


registerBlockType( 'power-blocks/twitter-feed', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Twitter Feed', 'power-blocks' ), // Block title.
	description: __( '.', 'power-blocks' ),
	icon: 'format-status', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'power-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Twitter Feed', 'power-blocks' ),
	],
	attributes: {

	},

	styles: [

	],

	edit: ( props ) => {
		return (
			<section>
				Twitter Feed Admin
			</section>
		);
	},

	save: function( props ) {

		return (
			<section>
				Twitter Feed Frontend
			</section>
		);
	}

});

