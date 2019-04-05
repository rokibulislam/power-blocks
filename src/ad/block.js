import EditAd from './components/editad';
import './styles/style.scss';
import './styles/editor.scss';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'power-blocks/ad', {
	title: __( 'Ad', 'power-blocks' ),
	description: __( ' ', 'power-blocks' ),
	icon: 'format-status',
	category: 'power-blocks',
	keywords: [
		__( 'Ad', 'power-blocks' ),
	],
	attributes: {
		adBackgroundColor: {
			type: 'string',
			default: '',
		},
		adBackgroundImage: {

		},
		adImgID: {
			type: 'string',
			default: '',
		},
		adImgURL: {

		},
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
