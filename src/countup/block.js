import editCountup from './components/editcountup';
import './styles/style.scss';
import './styles/editor.scss';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'power-blocks/countup', {
	title: __( 'Countup', 'power-blocks' ),
	description: __( ' ', 'power-blocks' ),
	icon: 'format-status', 
	category: 'power-blocks', 
	keywords: [
		__( 'Countup', 'power-blocks' ),
	],
	attributes: {
		backgroundColor: {
			type: 'string',
			default: 0,
		},
		title: {
			type: 'string',
			default: 0,
		},

		titleFontSize: {
			type: 'number',
			default: 0,
		},
		titleColor: {
			type: 'string',
			default: '#343434',
		},
		content: {
			type: 'string',
			default: 0,
		},
		contentFontSize: {
			type: 'number',
			default: 0,
		},
		contentColor: {
			type: 'string',
			default: '#343434',
		},
		description: {
			type: 'string',
			default: '',
		},
		descriptionFontSize: {
			type: 'number',
			default: 0,
		},
		descriptionColor: {
			type: 'string',
			default: '#343434',
		},
	},

	styles: [

	],
	edit: editCountup,
	save: function( props ) {
		return (
			<section>
				Countup Frontend
			</section>
		);
	},
} );
