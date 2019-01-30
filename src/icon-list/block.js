/**
 * Accordion: blocks
 *
 * Registering a Accordion block with Gutenberg.
 * Accordion block, renders and saves the same content without any interactivity.
 */

import EditIconList from './components/editiconlist';
import IconList from './components/iconlist';

//  Import CSS.
import './styles/style.scss';
import './styles/editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

registerBlockType( 'power-blocks/icon-list', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Icon List', 'power-blocks' ), // Block title.
	description: __('.', 'power-blocks' ),
	icon: 'format-status', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'power-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('Icon List', 'power-blocks' ),
	],
	attributes: {
		items: {
			type: 'array',
			source: 'children',
			selector: 'ul',
			default: [],
		},
		columns: {
			type: 'number',
			default: 1,
		},
		iconBoxHeight: {
			type: 'number',
			default: 50,
		},
		iconBoxWidth: {
			type: 'number',
			default: 50,
		},
		iconBoxBgColor: {
			type: 'string',
			default: '#fff',
		},
		iconBoxBorderColor: {
			type: 'string',
			default: '#ccc',
		},
		icon: {
			type: 'string',
			default: '\u005Cf344',
		},
		iconColor: {
			type: 'string',
			default: '#47b475',
		},
		itemGap: {
			type: 'number',
			default: 15,
		},
		textIndent: {
			type: 'number',
			default: 70,
		},
		textColor: {
			type: 'string',
			default: '#000',
		},
		textSize: {
			type: 'number',
			default: 16,
		},
	},

	styles: [

	],

	edit: EditIconList,

	save: function (props) {
		return (
			<section>
				<IconList { ...props }> </IconList>
			</section>
		);
	},
} );
