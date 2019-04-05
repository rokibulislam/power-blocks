import EditInstagramFeed from './components/editInstagramFeed';
import InstagramFeed from './components/instagramfeed';
import icons from './components/icons';
import Inspector from './components/inspector';
import attributes from './components/attribute';
import './styles/style.scss';
import './styles/editor.scss';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType( 'power-blocks/instagram-feed', {
	title: __( 'Instagram Feed', 'power-blocks' ), 
	description: __( '.', 'power-blocks' ),
	icon: 'format-status',
	category: 'power-blocks',
	keywords: [
		__( 'Instagram Feed', 'power-blocks' ),
	],
	attributes: attributes,
	edit: EditInstagramFeed,
	save: function( props ) {

		return (
			<section>
				Instagram Frontend
			</section>
		);
	}

});
