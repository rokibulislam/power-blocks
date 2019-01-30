import EditClickToTweet from './components/editclicktotweet';
import './styles/style.scss';
import './styles/editor.scss';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
registerBlockType( 'power-blocks/clicktotweet', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Click To Tweet', 'power-blocks' ), // Block title.
	description: __( ' ', 'power-blocks' ),
	icon: 'format-status',
	category: 'power-blocks',
	keywords: [
		__( 'Click To Tweet', 'power-blocks' ),
	],
	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: 'p',
			default: [],
		},
		url: {
			type: 'attribute',
		},
		textAlign: {
			type: 'string',
		},
		buttonText: {
			type: 'string',
			default: __( 'Tweet' ),
		},
		buttonColor: {
			type: 'string',
		},
		textColor: {
			type: 'string',
		},
		fontSize: {
			type: 'string',
		},
		via: {
			type: 'string',
		},
	},

	styles: [

	],

	edit: EditClickToTweet,
	save: function( props ) {
		return (
			<section>
				Click Tweet Frontend Frontend
			</section>
		);
	},
} );
