import EditAd from './components/editad';
import './styles/style.scss';
import './styles/editor.scss';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
// Register editor components
registerBlockType( 'power-blocks/ad', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Ad', 'power-blocks' ), // Block title.
	description: __( ' ', 'power-blocks' ),
	icon: 'format-status',
	category: 'power-blocks',
	keywords: [
		__( 'Ad', 'power-blocks' ),
	],
	attributes: {

	},

	styles: [

	],

	edit: EditAd,
	save: function( props ) {
		return (
			<section>
				Ad Frontend
			</section>
		);
	},
} );
