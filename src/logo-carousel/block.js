import LogoCarousel from './components/logocarousel';
import EditLogoCarousel from './components/editlogocarousel';
import icons from './components/icons';
import Inspector from './components/inspector';
import './styles/style.scss';
import './styles/editor.scss';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	RichText,
} = wp.editor;
registerBlockType( 'power-blocks/logo-carousel', {
	title: __( 'Logo Carousel', 'power-blocks' ),
	description: __( ' ', 'power-blocks' ),
	icon: 'format-status',
	category: 'power-blocks',
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
	
	save: function( props ) {
		const { logos } = props.attributes;
		const logosList = logos.map(function(logo) {
		  const carouselClass =
			logo.index == 0 ? "carousel-item active" : "carousel-item";
		  return (
			<div className="extra">
	
					<div className="single-logo">
						  <img src={logo.image} />
					</div>
	
			</div>
		  );
		});
		if (logos.length > 0) {
		  return (
			<section className="client-logo-area">
				<div className="container">
					<div className="logo-slider rc-carousel client-logo" data-loop="true" data-items="5" data-margin="30" data-autoplay="true" data-autoplay-timeout="10000" data-smart-speed="2000" data-dots="false" data-nav="true" data-nav-speed="false" data-r-x-small="1" data-r-x-small-nav="true" data-r-x-small-dots="false" data-r-x-medium="3" data-r-x-medium-nav="true" data-r-x-medium-dots="false" data-r-small="3" data-r-small-nav="true" data-r-small-dots="false" data-r-medium="5" data-r-medium-nav="true" data-r-medium-dots="false">
							  {logosList}
					</div>
			  </div>
			</section>
		  );
		} else return null;	
	},
} );
