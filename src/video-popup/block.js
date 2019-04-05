import VideoPop  from './components/videopopup';
import EditVideoPopup from './components/editvideopopup';
import './styles/style.scss';
import './styles/editor.scss';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'power-blocks/videopopup', {
	title: __( 'Video Popup', 'power-blocks' ),
	description: __( '.', 'power-blocks' ),
	icon: 'format-status', 
	category: 'power-blocks',
	keywords: [
		__( 'Video Popup', 'power-blocks' ),
	],
	attributes: {
        videoUrl : {
            type: 'string'
        },
        videoID : {
            type: 'string'
        },
        videoWidth : {
            type : 'number',
        },
        videoHeight : {
            type : 'number',
            default : 500,
        },
        isOverlayOpacity: {
            type: 'boolean',
            default: true
        },
        overlayColor : {
            type: 'string',
            default: '#f6f6f6',
        },
        overlayColorOpacity : {
            type : 'number',
            default: 0.5
        },
        previewImage : {
            type: 'string'
        },
        previewImageID : {
            type: 'number'
        },
        playIcons : {
            type: 'string',
            default: 'controls-play',
        },
        playButtonSize : {
            type : 'number',
        },
        playButtonColor : {
            type: 'string',
            default: '#191a1b',
        },
        playButtonBgColor : {
            type: 'string',
            default: '#ffffff',
        },
        playButtonWidth : {
            type : 'number',
            default: 100,
        },
        playButtonHeight : {
            type : 'number',
            default : 100,
        },
        playButtonLineHeight : {
            type : 'number',
            default : 100,
        },
        playButtonBorderColor : {
            type: 'string',
            default: '#ffffff',
        },
	},

	styles: [

	],
	edit: EditVideoPopup,
	save: function( props ) {

		return (
			<section>
				Video Popup Frontend
			</section>
		);
	}

});

