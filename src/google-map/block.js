import './styles/style.scss';
import './styles/editor.scss';
import EditGooglemap from './components/editgooglemap';
import Googlemap from './components/googlemap';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
registerBlockType( 'power-blocks/google-map', {
	title: __( 'Google Map', 'power-blocks' ),
	description: __( '.', 'power-blocks' ),
	icon: 'format-status',
	category: 'power-blocks',
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
