import Tooltip from './components/tooltip';
import EditTooltip from './components/edittooltip';
import icons from './components/icons';
import Inspector from './components/inspector';
import './styles/style.scss';
import './styles/editor.scss';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks; 
const {
	RichText,
} = wp.editor;

registerBlockType( 'power-blocks/tooltip', {
	title: __( 'Tooltip', 'power-blocks' ),
	description: __( '.', 'power-blocks' ),
	icon: 'format-status',
	category: 'power-blocks', 
	keywords: [
		__( 'Tooltip', 'power-blocks' ),
	],
	attributes: {

	},

	styles: [

	],

	edit: EditTooltip,

	save: function( props ) {
		
		const {

		} = props;

		return (
		
			<section>
				Tooltip Frontend
			</section>
		);
	}

});

