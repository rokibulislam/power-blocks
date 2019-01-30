import EditButton from './components/editbutton';
import Button from './components/button';
import './styles/style.scss';
import './styles/editor.scss';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
registerBlockType( 'power-blocks/button', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Button', 'power-blocks' ), // Block title.
	description: __( ' ', 'power-blocks' ),
	icon: 'format-status',
	category: 'power-blocks',
	keywords: [
		__( 'Button', 'power-blocks' ),
	],
	attributes: {
		buttonText: {
			type: 'string',
			selector: '.pb_button',
		},
		buttonUrl: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
		},
		borderRadius: {
			type: 'number',
		},
		buttonSize: {
			type: 'string',
		},
		buttonBackground: {
			type: 'string',
		},
		borderColor: {
			type: 'string',
		},
		hoverColor: {
			type: 'string',
		},
		buttonTextColor: {
			type: 'string',
		},
		buttonTarget: {
			type: 'boolean',
			default: false,
		},
		buttonAlignment: {
			type: 'string',
			default: 'center',
		},
	},

	styles: [

	],

	edit: EditButton,
	save: Button,
} );
