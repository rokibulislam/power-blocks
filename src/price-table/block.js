/**
 * Accordion: blocks
 *
 * Registering a Accordion block with Gutenberg.
 * Accordion block, renders and saves the same content without any interactivity.
 */

import EditPriceTable from './components/editpricetable';
import PricingTable from './components/pricetable';
//  Import CSS.
import './styles/style.scss';
import './styles/editor.scss';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

registerBlockType( 'power-blocks/price-table', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Price Table', 'power-blocks' ), // Block title.
	description: __( '.', 'power-blocks' ),
	icon: 'format-status', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'power-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'Price Table', 'power-blocks' ),
	],
	attributes: {
		ID: {
			type: 'string',
			default: '',
		},
		items: {
			type: 'array',
			default: [
				{
					imageUrl: '',
					imageID: 0,
					header: 'SMALL TEAM',
					features: `
							<li>Custom Domains</li> 
							<li>5 Users</li>
							<li>10 Projects</li>
					`,
					price: '$49',
					buttonName: 'Free Trial',
					buttonUrl: 'http://delabon.com/',
				},
			],
		},

		backgroundColor: {
			type: 'string',
			default: '',
		},
		titleColor: {
			type: 'string',
			default: '',
		},
		titleFontSize: {
			type: 'string',
			default: '',
		},
		featuresColor: {
			type: 'string',
			default: '',
		},
		featuresFontSize: {
			type: 'number',
			default: 18,
		},
		priceColor: {
			type: 'string',
			default: '',
		},
		priceBackgroundColor: {
			type: 'string',
			default: '',
		},
		priceFontSize: {
			type: 'number',
			default: 18,
		},
		buttonColor: {
			type: 'string',
			default: '',
		},
		buttonBackgroundColor: {
			type: 'string',
			default: '',
		},
		buttonColorHover: {
			type: 'string',
			default: '',
		},
		buttonBackgroundColorHover: {
			type: 'string',
			default: '',
		},
		buttonUrl: {
			type: 'string',
			default: '',
		},

		// title: {
		// 	source: 'children',
		// 	selector: '.pricing-table__item--1 .pricing-table__title',
		// },
		// features: {
		// 	source: 'children',
		// 	selector: '.pricing-table__item--1 .pricing-table__features',
		// 	default: [],
		// },
		// currency: {
		// 	type: 'array',
		// 	source: 'children',
		// 	selector: '.pricing-table__item--1 .pricing-table__currency',
		// },
		// amount: {
		// 	type: 'array',
		// 	source: 'children',
		// 	selector: '.pricing-table__item--1 .pricing-table__amount',
		// },
		// button: {
		// 	type: 'array',
		// 	source: 'children',
		// 	selector: '.pricing-table__item--1 .pricing-table__button',
		// },
		// url: {
		// 	type: 'string',
		// 	source: 'attribute',
		// 	selector: 'a',
		// 	attribute: 'href',
		// 	// selector: '.pricing-table__item--1 .pricing-table__button',
		// },
		// title_2: {
		// 	source: 'children',
		// 	selector: '.pricing-table__item--2 .pricing-table__title',
		// },
		// features_2: {
		// 	source: 'children',
		// 	selector: '.pricing-table__item--2 .pricing-table__features',
		// 	default: [],
		// },
		// currency_2: {
		// 	type: 'array',
		// 	source: 'children',
		// 	selector: '.pricing-table__item--2 .pricing-table__currency',
		// },
		// amount_2: {
		// 	type: 'array',
		// 	source: 'children',
		// 	selector: '.pricing-table__item--2 .pricing-table__amount',
		// },
		// button_2: {
		// 	type: 'array',
		// 	source: 'children',
		// 	selector: '.pricing-table__item--2 .pricing-table__button',
		// },
		// url_2: {
		// 	type: 'string',
		// 	source: 'attribute',
		// 	selector: 'a',
		// 	attribute: 'href',
		// 	// selector: '.pricing-table__item--2 .pricing-table__button',
		// },
		// layout: {
		// 	type: 'string',
		// },
		// align: {
		// 	type: 'string',
		// 	default: 'center',
		// },
		// columns: {
		// 	type: 'number',
		// 	default: 2,
		// },
		// tableBackground: {
		// 	type: 'string',
		// },
		// tableColor: {
		// 	type: 'string',
		// },
		// buttonBackground: {
		// 	type: 'string',
		// },
		// buttonColor: {
		// 	type: 'string',
		// },

	},

	styles: [

	],

	edit: EditPriceTable,
	save: function( props ) {
		return (
			<section>
				<PricingTable { ...props }> Price Table Frontend </PricingTable>
			</section>
		);
	},
} );
