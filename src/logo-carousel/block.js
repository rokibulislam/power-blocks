/**
 * Accordion: blocks
 *
 * Registering a Accordion block with Gutenberg.
 * Accordion block, renders and saves the same content without any interactivity.
 */
import LogoCarousel from './components/logocarousel';
import EditLogoCarousel from './components/editlogocarousel';
import icons from './components/icons';
import Inspector from './components/inspector';

//  Import CSS.
import './styles/style.scss';
import './styles/editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	RichText,
} = wp.editor;


registerBlockType( 'power-blocks/logo-carousel', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Logo Carousel', 'power-blocks' ), // Block title.
	description: __( ' ', 'power-blocks' ),
	icon: 'format-status', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'power-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Logo Carousel', 'power-blocks' ),
	],

	attributes: {
		id: {
			source: 'attribute',
			selector: '.carousel.slide',
			attribute: 'id',
		},
		logos: {
			source: 'query',
			default: [],
			selector: '.single-logo',
			query: {
				image: {
					source: 'attribute',
					selector: 'img',
					attribute: 'src',
				},
				index: {
					source: 'text',
					selector: 'span.testimonial-index',
				},
			},
		},
	},
	styles: [

	],

	edit: EditLogoCarousel,
	// ( props ) => {
	// 	return (
	// 		<section>
	// 			Logo Carousel Admin
	// 		</section>
	// 	);
	// },

	save: function( props ) {
		return (
			<section>
				Logo Carousel Frontend
			</section>
		);
	},
} );
