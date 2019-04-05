import TwitterFeed from './components/twitterfeed';
import EditTwitterFeed from './components/edittwitterfeed';
import icons from './components/icons';
import Inspector from './components/inspector';
import './styles/style.scss';
import './styles/editor.scss';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	RichText,
} = wp.editor;

registerBlockType( 'power-blocks/twitter-feed', {
	title: __( 'Twitter Feed', 'power-blocks' ), // Block title.
	description: __( '.', 'power-blocks' ),
	icon: 'format-status',
	category: 'power-blocks',
	keywords: [
		__( 'Twitter Feed', 'power-blocks' ),
	],
	attributes: {

	},

	styles: [

	],

	edit: EditTwitterFeed,

	save: function( props ) {

		return (
			<section>
				Twitter Feed Frontend
			</section>
		);
	}

});

