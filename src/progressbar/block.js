// import Progressbar from './components/progressbar';
import EditProgressbar from './components/editProgressbar';
import Progressbar from './components/progressbar';
import './styles/style.scss';
import './styles/editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

registerBlockType( 'power-blocks/progressbar', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Progressbar', 'power-blocks' ), // Block title.
	description: __( '.', 'power-blocks' ),
	icon: 'format-status', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'power-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Progressbar', 'power-blocks' ),
	],
	attributes: {
		progress: {
			type: 'string',
			default: '50%',
		},
		backgroundColor: {
			type: 'string',
			default: '#f5f5f5',
		},
		progressColor: {
			type: 'string',
			default: 'rgb(23,44,60)',
		},
		tooltipColor: {
			type: 'string',
			default: 'rgb(23,44,66)',
		},
		tooltipBackgroundColor: {
			type: 'string',
			default: '#eebf3f',
		},
	},

	styles: [

	],

	edit: EditProgressbar,

	save: function( props ) {
		return (
			<Progressbar { ...props } > </Progressbar>
		);
	},

} );
