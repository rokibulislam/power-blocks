import EditPbButton from './components/editbutton';
import PbButton from './components/button';
import './styles/style.scss';
import './styles/editor.scss';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
registerBlockType( 'power-blocks/pbbutton', {
	title: __( 'Power Button', 'power-blocks' ),
	description: __( ' ', 'power-blocks' ),
	icon: 'format-status',
	category: 'power-blocks',
	keywords: [
		__( 'Button', 'power-blocks' ),
	],
	attributes: {
		id: {
			source: 'attribute',
			attribute: 'id',
		},
		items: {
			type: 'array',
			default: []		
		}
	},

	styles: [

	],
	edit: EditPbButton,
	save: PbButton,
} );
